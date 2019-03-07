FROM alpine
MAINTAINER IBM ICP CoC Team

CMD mkdir /app
WORKDIR /app
COPY baker.sh .

RUN apk add curl bash nano \
&& chmod +x baker.sh 

CMD ["/bin/bash", "-c", "./baker.sh"]

