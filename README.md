# spring-angular-mysql-docker
Spring-boot server (with mysql database) and angular client application containerized with docker

## Building images

To build images by maven there was used io.fabric8 docker-maven-plugin and before prepared Dockerfiles.
Use maven to clean project, package your created spring app and by plugin set docker:build on package phase build docker images (spring, angular, mysql)
```
mvn clean package
```

## Running containers

Firstly run database container

```
docker run -d --name mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=yourPassword -e -e MYSQL_USER=student -e MYSQL_PASSWORD=student -e MYSQL_DATABASE=families mysql-docker
```

Next run spring app container and link it to mysql

```
docker run -d --name spring -p 8080:8080 --link mysql:mysql spring-app
```

Finish with running angular app container

```
docker run -d --name angular -p 4200:80 angular-app
```

Type [localhost](http://localhost:4200/) on your browser and here it is!

### Prerequisites

Install maven, docker, angular, java 8

Set docker non-root user
```
sudo usermod -aG docker $USER
```
Build created angular app
```
ng build
```

## Built With

* [Docker](https://www.docker.com/) - Containers for apps
* [Maven](https://maven.apache.org/) - Dependency management
* [Angular](https://angular.io/) - Used to build client app
* [Spring](https://spring.io/) - Used to build server app