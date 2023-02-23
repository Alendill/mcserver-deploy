FROM balenalib/aarch64-alpine-openjdk:latest
LABEL maintainer="alendill.voyager@gmail.com"
USER 1000:1000
WORKDIR /mcserver/
EXPOSE 26947
ENV TZ 'Asia/Shanghai'
ADD --chown=1000:1000 https://mohistmc.com/builds/1.12.2/mohist-1.12.2-320-server.jar mohist-server.jar
