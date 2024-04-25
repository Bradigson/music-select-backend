FROM node:20 

RUN mkdir -p /usr/src/app 

WORKDIR /usr/src/app 

COPY package*.json ./

RUN npm install  

COPY . .

# RUN apt-get update && \
#     apt-get install -y curl unzip && \
#     curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip" && \
#     unzip awscliv2.zip && \
#     ./aws/install && \
#     rm awscliv2.zip

EXPOSE 3000

CMD [ "npm", "start" ]
