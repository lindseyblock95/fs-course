FROM alpine
MAINTAINER IBM ICP CoC Team

CMD mkdir /app
WORKDIR /app
COPY gonzo.sh .

RUN apk add curl bash \
&& chmod +x gonzo.sh 

