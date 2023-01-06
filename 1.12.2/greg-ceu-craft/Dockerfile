FROM ubuntu-jre-8:352
USER 1000:1000

EXPOSE 26947

COPY ./mcserver/libraries /mcserver/libraries
ADD https://mohistmc.com/builds/1.12.2/mohist-1.12.2-320-server.jar /mcserver/mohist-server.jar

ENV TZ 'Asia/Shanghai'

WORKDIR /mcserver/
