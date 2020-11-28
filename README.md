# BFF de productos

Este servicio se encarga de abstraer el front de las reglas de negocio.

## Pre-requisitos

Para este proyecto se necesitan las siguientes tecnologías en tu computador:

* Docker \[[Mac](https://runnable.com/docker/install-docker-on-macos)\]\[[Linux](https://runnable.com/docker/install-docker-on-linux)\]
* NVM \[[Instalacion](https://github.com/nvm-sh/nvm)\]
* Docker Compose \[[Instalacion](https://docs.docker.com/compose/install/)\]
* Descargar el proyecto https://github.com/walmartdigital/brand-discounts-db

## Instalacion

Sigue los siguientes pasos:

1. Ejecuta `nvm use` para utilizar la version node y npm configurada en el proyecto.
3. Realiza un `npm install`

## Ejecutar localmente

Como dependencias tenemos el proyecto brand-discounts-db, el cual debemos iniciar primero para que se levante la base de datos.
Luego se ejecuta el comando `npm start` el cual iniciará el servicio que escuchara por defecto en el puerto 8080.

## Construir imagen

Para contruir la imagen docker, solo se debe ejecutar el comando `npm build`

## Recursos disponibles

Se tienen los siguientes recursos accediendo con el método GET:

* /bff/get-products?id=id-producto : Esto retornará un solo producto dado un id.
* /bff/get-products?match=cadena: Esto buscara un listado de productos donde el parámetro match se usara para filtrar lo que coincida en los campos brand y description de los productos.

## Ejecucion con Docker

Para levantar el contendor primero se debe levantar la base de datos del repositorio:
```
git clone https://github.com/walmartdigital/brand-discounts-db
```

Luego debes ejecutar los siguientes comandos:
```
cd brand-discounts-db
make database-up
```

Finalmente se debe ejecutar `MACHINE_IP=<ip-host> DB_SECRET_PASSWORD=brandDiscountsPassword npm run up`.
Debes ingresar la ip de tu máquina para que los contendores internamente puedan comunicarse.
Con esto el proyecto quedará listo en las siguientes url:

* http://localhost:8082/bff/get-products?id=<id-producto>
* http://localhost:8082/bff/get-products?match=<cadena>



