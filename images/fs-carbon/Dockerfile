FROM alpine
MAINTAINER IBM ICP CoC Team

CMD mkdir /app
WORKDIR /app
COPY carbon.sh .

RUN apk add curl bash \
&& chmod +x carbon.sh 

CMD ["/bin/bash", "-c", "./carbon.sh"]

