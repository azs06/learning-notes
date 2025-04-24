# Title: Docker Compose

Docker compose is a tool that comes bundled with Docker for managing multi container docker applications. It is often used in tandem with Dockerfile.

It allows you to define and run multi-container applications with a single command. You can define your application services, networks, and volumes in a `docker-compose.yml` file.

Sample `docker-compose.yml` file:

```yaml
services:
  web:
    build: .
    ports:
      - "8000:5000"
  redis:
    image: "redis:alpine"
```

### Common Commands

- `docker compose up`: This command builds, (re)creates, starts, and attaches to containers for a service.
- `docker compose down`: This command stops and removes containers, networks, images, and volumes defined in the `docker-compose.yml` file.
- `docker compose ps`: This command lists containers.
- `docker compose logs`: This command shows the logs for a service.
- `docker compose exec`: This command runs a command in a running container.
- `docker compose build`: This command builds or rebuilds services.
- `docker compose pull`: This command pulls service images.
- `docker compose push`: This command pushes service images.
- `docker compose config`: This command validates and view the Compose file.
- `docker compose run`: This command runs a one-time command against a service.
- `docker compose scale`: This command scales a service to a specified number of containers.
- `docker compose restart`: This command restarts a service.
- `docker compose rm`: This command removes stopped service containers.
- `docker compose create`: This command creates containers for a service.
- `docker compose cp`: This command copies files/folders between a service container and the local filesystem.
- `docker compose watch`: This command watches the build context for a service and rebuilds/refreshes containers when files are updated.
