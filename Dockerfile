FROM openjdk:8

COPY ./target/spring-app.jar /usr/src/spring/

WORKDIR /usr/src/spring

EXPOSE 8080

CMD ["java", "-jar", "spring-app.jar"]
