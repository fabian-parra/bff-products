FROM mhart/alpine-node:12.10.0

EXPOSE 8082
RUN mkdir /home/node
COPY ./ /home/node
WORKDIR /home/node
RUN npm install --only=production --progress=false
CMD npm start
