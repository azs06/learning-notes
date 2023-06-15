***Docker***

* docker image has everything that is needed to run the application.

* docker container is a running instance of an image.

***Useful commands***

```bash
docker ps
docker images
docker run -p 5000:8080 nginx:latest [exposes port 8080 of docer to port 5000]
# to name a container
docker run --name container_name

docker build [used to build our own docker image]

# to execute command inside docker
docker exec --options -container_name bash/sh 
```

* Dockerfile is required for building an image
