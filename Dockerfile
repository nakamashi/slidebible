FROM node:12

WORKDIR home/node/app

COPY package.json package-lock.json ./
     
RUN npm install 

COPY . .

EXPOSE 3000
