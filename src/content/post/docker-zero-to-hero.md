---
layout: ../../layouts/post.astro
title: Mastering Docker for DevOps From Zero to Advanced
description: Docker for DevOps
dateFormatted: Nov 7th, 2024
Author: Md. Afzal Hassan Ehsani
---

*Author: [Md. Afzal Hassan Ehsani](https://www.linkedin.com/in/iemafzalhassan/)*


In today’s fast-paced DevOps world, **Docker** has revolutionized how we develop, test, and deploy applications. It provides a standardized way to run software, ensuring that applications behave the same in development as they do in production. If you're new to Docker or looking to deepen your knowledge, this guide will take you from the basics to advanced Docker concepts.

By the end of this article, you'll have a deep understanding of Docker, how to use it in real-world DevOps scenarios, and practical experience with key Docker commands. Whether you're setting up a simple web server or managing multi-container applications, you'll have all the tools and knowledge to do so confidently.

---

### **Table of Contents**

1. What is Docker?
2. Why Docker for DevOps?
3. Docker vs. Virtual Machines
4. Types of Docker
    - Docker Desktop
    - Docker Swarm
5. Installing Docker
6. Docker Images and Containers
    - How to Pull Docker Images
    - Working with Containers
7. Dockerfiles: Building Your Own Docker Image
    - Writing a Dockerfile
    - Steps in a Dockerfile
8. Docker Networking
9. Docker Volumes: Persistent Storage
10. Docker Compose
11. Docker Swarm: Orchestration Simplified
12. Alternatives to Docker
13. Real-World Use Cases for Docker in DevOps
14. Complete List of Docker Commands (With Examples and Flags)

---

### **1. What is Docker?**

**Docker** is an open-source platform that helps developers and DevOps engineers **build, ship, and run applications inside containers**. A container is a lightweight, portable, and isolated environment that contains everything an application needs to run—such as code, runtime, libraries, and dependencies—allowing it to work consistently across different environments (development, staging, production).

### Why Containers?

- **Portability**: Docker ensures that an application runs the same, no matter where it’s deployed.
- **Efficiency**: Containers are lightweight and share the host OS’s kernel, making them faster and more efficient than traditional virtual machines (VMs).
- **Scalability**: Containers can be scaled easily to handle more traffic, making them ideal for microservices architecture and cloud-native applications.

### **Quiz for You!**

- **What is the key advantage of Docker containers in terms of application portability?**
    - A) They run different versions of the same application simultaneously.
    - B) They ensure the application runs consistently across different environments.
    - C) They allow users to run multiple operating systems at once.
    
    *(Answer : C)*
    

---

### **2. Why Docker for DevOps?**

In DevOps, speed, automation, and consistency are critical for achieving continuous integration (CI) and continuous delivery (CD). Docker offers several benefits:

- **Isolation**: Each container runs independently, which prevents conflicts between applications.
- **Rapid Deployment**: Docker containers start up quickly, making deployment faster than with virtual machines.
- **Consistency**: Docker ensures that your applications work the same across different environments (dev, staging, production), minimizing the “works on my machine” issue.

By using Docker, DevOps teams can streamline workflows, automate processes, and increase development speed.

### **Quiz for You!**

- **How does Docker enhance the speed of deployments in DevOps?**
    - A) Containers boot faster than virtual machines.
    - B) Docker uses virtual machines for faster deployment.
    - C) Docker deploys applications without using an OS kernel.
    
    *(Answer: A)*
    

---

### **3. Docker vs. Virtual Machines**

While Docker and virtual machines both help in running applications in isolated environments, they have key differences.

| **Docker (Containers)** | **Virtual Machines** |
| --- | --- |
| Uses containers to run apps | Uses virtual machines with a full OS |
| Shares host OS kernel (lightweight) | Each VM has its own OS (heavier) |
| Starts in seconds | Takes minutes to boot |
| Efficient resource usage | More resource-intensive |
| Ideal for microservices and CI/CD | Good for running multiple OS environments |

<a href="/public/assets/images/posts/docker_blog01.png"> Docker Architecture </a>

[![Docker Architecture](/public/assets/images/posts/docker_blog01.png "Docker Architecture")](https://prod-files-secure.s3.us-west-2.amazonaws.com/8b557715-1f08-43ae-ac1a-b814d80e7850/d829c88a-4fae-47a5-b9d7-3c298696d73c/image.png)

<a href="/public/assets/images/posts/docker_blog02.png"> Hyperviser Architecture </a>

[![image.png](/public/assets/images/posts/docker_blog02.png)](https://prod-files-secure.s3.us-west-2.amazonaws.com/8b557715-1f08-43ae-ac1a-b814d80e7850/cc6f4ac1-e9d5-4455-950b-9b3c5022b292/image.png)

### **Quiz for You!**

- **Why are Docker containers considered more lightweight than virtual machines?**
    - A) Containers share the host OS’s kernel.
    - B) Containers include their own full operating systems.
    - C) Containers can only run one service at a time.
    
    *(Answer: A)*
    

---

### **4. Docker and it’s form**

### **Docker Desktop**

**Docker Desktop** is an application that provides a local development environment for building, running, and testing Docker containers. It's available for **Windows**, **macOS**, and **Linux**. Docker Desktop is perfect for developers who need a simple setup to get started with Docker.

### **Docker Swarm**

**Docker Swarm** is Docker’s native orchestration tool. It allows you to manage and scale a cluster of Docker containers across multiple hosts. Swarm provides features like load balancing, service discovery, and scaling with minimal configuration.

### **Quiz for You!**

- **What is the purpose of Docker Swarm?**
    - A) To manage a single container on one host.
    - B) To orchestrate containers across multiple hosts.
    - C) To create virtual machines for testing purposes.
    
    *(Answer: B)*
    

---

### **5. Installing Docker**

Installing Docker is straightforward and varies slightly depending on your operating system. Here’s how to install Docker on Ubuntu:

```bash
sudo apt update
sudo apt install docker.io
sudo systemctl start docker
sudo systemctl enable docker
```

For **macOS** and **Windows**, simply download **Docker Desktop** from the official Docker website and follow the installation instructions.

Verify that Docker is installed:

```bash
docker --version
```

### **Quiz for You!**

- **How do you verify that Docker has been installed correctly?**
    - A) Run `docker status`
    - B) Run `docker --version`
    - C) Run `docker start`
    
    *(Answer: B)*
    

---

### **6. Docker Images and Containers**

### **What is a Docker Image?**

A **Docker image** is a read-only template that contains the instructions to create a container. Images include everything needed to run an application—such as code, libraries, and configurations.

### **What is a Docker Container?**

A **container** is a running instance of a Docker image. It provides an isolated environment to run your application without interfering with the rest of your system.

### **Quiz for You!**

- **What is the relationship between Docker images and containers?**
    - A) An image is a running instance of a container.
    - B) A container is a running instance of an image.
    - C) A container contains Docker images.
    
    *(Answer: B)*
    

---

### **How to Pull Docker Images**

Docker images can be pulled from Docker Hub, a public repository for Docker images.

```bash
docker pull <image-name>
```

### Example:

```bash
docker pull nginx
```

This command pulls the latest version of the **nginx** web server image from Docker Hub.

### Real-World Scenario:

You're setting up a web server for testing purposes and need to download the NGINX image to create a container.

### **Quiz for You!**

- **Where do you typically pull Docker images from?**
    - A) Docker Swarm
    - B) Docker Hub
    - C) Docker Engine
    
    *(Answer: B)*
    

---

### **Working with Docker Containers**

To create and run a container from an image:

```bash
docker run -d -p 80:80 nginx

```

### Real-World Scenario:

This command runs an NGINX container in **detached mode** (`-d`) and maps port 80 of the container to port 80 of the host (`-p`). Now, you can access the NGINX server at `http://localhost`.

### **Quiz for You!**

- **What does the `docker run -d` flag do when running a container?**
    - A) Deletes the container after running.
    - B) Runs the container in detached mode.
    - C) Duplicates the container.
    
    *(Answer: B)*
    

---

### **7. Dockerfiles: Building Your Own Docker Image**

A **Dockerfile** is a text file that contains instructions on how to build a Docker image. It specifies the base image, environment variables, dependencies, and application code that will be included in the container.

### **Writing a Dockerfile**

Here’s an example of a simple **Dockerfile** for a Node.js application:

```
# Use the official Node.js image as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json .
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the app's port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
```

### **Steps in a Dockerfile**:

1. **FROM**: Specifies the base image (in this case, `node:14`).
2. **WORKDIR**: Sets the working directory inside the container.
3. **COPY**: Copies files from your local machine to the container.
4. **RUN**: Runs a command (e.g., `npm install`) inside the container.
5. **EXPOSE**: Opens a port (3000 in this case) to allow communication with the container.
6. **CMD**: Specifies the command that will run when the container starts.

### Building a Docker Image:

```bash
docker build -t myapp:latest .

```

This command builds the Docker image from the Dockerfile in the current directory and tags it as `myapp:latest`.

### **Quiz for You!**

- **What is the purpose of the `FROM` instruction in a Dockerfile?**
    - A) To create a new directory inside the container.
    - B) To specify the base image from which to build the container.
    - C) To run commands inside the container.
    
    *(Answer: B)*
    

---

### **8. Docker Networking**

**Docker Networking** enables communication between containers and the outside world or between containers in a cluster. Docker automatically sets up a **bridge network** for containers by default.

### Creating a Custom Network:

```bash
docker network create my-network

```

You can attach containers to this network:

```bash
docker run -d --name web --network my-network nginx
docker run -d --name db --network my-network postgres

```

### Real-World Scenario:

You’re building a multi-tier application where a **web container** (NGINX) and a **database container** (Postgres) need to communicate. By attaching them to the same network (`my-network`), they can communicate using their container names as hostnames.

### **Quiz for You!**

- **Why would you create a custom Docker network?**
    - A) To increase container resource usage.
    - B) To enable containers to communicate with each other.
    - C) To isolate containers from one another.
    
    *(Answer: B)*
    

---

### **9. Docker Volumes: Persistent Storage**

Docker containers are typically **stateless**, meaning any data generated inside the container is lost when the container stops. **Volumes** provide a way to persist data by storing it outside the container.

### Creating a Volume:

```bash
docker volume create my-volume
```

### Attaching a Volume to a Container:

```bash
docker run -d -v my-volume:/app/data nginx
```

### Real-World Scenario:

You need to persist data (such as logs or database files) generated by an application inside the container. Using volumes, you ensure that the data remains available even if the container is stopped or removed.

### **Quiz for You!**

- **What is the purpose of Docker volumes?**
    - A) To increase the CPU usage of containers.
    - B) To persist data beyond the lifecycle of a container.
    - C) To automatically replicate data between containers.
    
    *(Answer: B)*
    

---

### **10. Docker Compose**

**Docker Compose** simplifies multi-container deployments. You define your services in a `docker-compose.yml` file, and Docker Compose brings them up with a single command.

### Example `docker-compose.yml`:

```yaml
version: '3'
services:
  web:
    image: nginx
    ports:
      - "80:80"
  db:
    image: postgres
    environment:
      POSTGRES_PASSWORD: example

volumes:
  db-data:

```

### Starting the Application:

```bash
docker-compose up -d

```

### Real-World Scenario:

You’re deploying an NGINX web server and a Postgres database as part of a development environment. Instead of running multiple `docker run` commands, you define both services in a `docker-compose.yml` file and start them with one command.

### **Quiz for You!**

- **What is the advantage of using Docker Compose?**
    - A) It only runs one container at a time.
    - B) It allows for multi-container deployments with a single command.
    - C) It increases the memory usage of containers.
    
    *(Answer: B)*
    

---

### **11. Docker Swarm: Orchestration Simplified**

**Docker Swarm** is Docker’s native solution for orchestrating containers across multiple hosts. It simplifies tasks such as load balancing, service discovery, and scaling.

### Initializing a Docker Swarm:

```bash
docker swarm init

```

### Adding Worker Nodes:

```bash
docker swarm join --token <worker-token> <manager-ip>

```

### Real-World Scenario:

You want to deploy a scalable application across multiple hosts. Using Docker Swarm, you can create a cluster of machines (nodes) that run containers. Docker Swarm will handle load balancing and service scaling for you.

### **Quiz for You!**

- **What is Docker Swarm used for?**
    - A) Managing and scaling containers across multiple hosts.
    - B) Running containers on a single machine only.
    - C) Replacing Docker Compose.
    
    *(Answer: A)*
    

---

### **12. Alternatives to Docker**

While Docker is the most widely adopted container platform, there are alternatives worth noting:

- **Podman**: A daemonless container engine that’s compatible with Docker commands.
- **Kubernetes**: A powerful orchestration tool for managing containers at scale, often used with Docker for large, complex deployments.
- **LXC/LXD**: Linux container technologies that provide full system containers for running multiple Linux distributions.

---

### **13. Real-World Use Cases for Docker in DevOps**

- **CI/CD Pipelines**: Docker integrates seamlessly with continuous integration and delivery tools like Jenkins, GitLab CI, and CircleCI, ensuring that each build runs in a consistent environment.
- **Microservices**: Docker makes it easy to deploy microservices, where each service runs in its own container, making scaling and updating services simple.
- **Testing and Development**: Developers can use Docker to quickly spin up isolated environments for testing new features, without affecting their local machine or other services.

---

### **14. Complete List of Docker Commands (With Examples and Flags)**

Below is a comprehensive list of Docker commands, along with real-world examples and explanations of commonly used flags.

### **1. `docker run`**

**Definition**: Creates and starts a new container from an image.

```bash
docker run -d -p 80:80 --name myweb nginx

```

- **Flags**:
    - **`d`**: Detached mode (run in the background).
    - **`p`**: Publish port 80 of the container to port 80 of the host.
    - **`-name`**: Assigns a name to the container.

### **2. `docker ps`**

**Definition**: Lists running containers.

```bash
docker ps -a

```

- **Flags**:
    - **`a`**: Shows all containers, including stopped ones.

### **3. `docker pull`**

**Definition**: Downloads an image from a Docker registry.

```bash
docker pull ubuntu:latest

```

- **Flags**:
    - **`-platform`**: Specifies the platform (e.g., `linux/amd64`).

### **4. `docker stop`**

**Definition**: Stops a running container.

```bash
docker stop myweb

```

- **Flags**:
    - **`t`**: Specifies how long to wait before forcibly stopping the container.

### **5. `docker start`**

**Definition**: Starts a stopped container.

```bash
docker start myweb

```

- **Flags**:
    - **`a`**: Attach the container's stdout/stderr streams.

### **6. `docker rm`**

**Definition**: Removes one or more containers.

```bash
docker rm myweb

```

- **Flags**:
    - **`f`**: Force remove a running container.

### **7. `docker rmi`**

**Definition**: Removes one or more images.

```bash
docker rmi nginx

```

- **Flags**:
    - **`f`**: Force remove the image, even if there are containers using it.

### **8. `docker exec`**

**Definition**: Runs a command inside a running container.

```bash
docker exec -it myweb /bin/bash

```

- **Flags**:
    - **`it`**: Interactive terminal (connect to the container’s shell).

### **9. `docker build`**

**Definition**: Builds an image from a Dockerfile.

```bash
docker build -t myapp:latest .

```

- **Flags**:
    - **`t`**: Tags the image with a name.
    - **`-no-cache`**: Builds the image without using cache.

### **10. `docker logs`**

**Definition**: Fetches logs from a container.

```bash
docker logs -f myweb

```

- **Flags**:
    - **`f`**: Follow logs (like `tail -f`).
    - **`-since`**: Show logs since a specific time.

### **11. `docker inspect`**

**Definition**: Shows detailed information about a Docker object.

```bash
docker inspect myweb

```

### **12. `docker volume`**

**Definition**: Manages Docker volumes.

```bash
docker volume create myvolume
docker run -d -v myvolume:/app/data nginx

```

### **13. `docker network`**

**Definition**: Manages Docker networks.

```bash
docker network create my-network
docker run -d --network my-network --name web nginx

```

### **14. `docker-compose`**

**Definition**: Defines and runs multi-container applications.

```bash
docker-compose up -d

```

### **15. `docker stats`**

**Definition**: Displays real-time resource usage statistics for running containers.

```bash
docker stats

```

- **Flags**:
    - **`-no-stream`**: Shows only the first result and does not update continuously.

---

### **Conclusion**

Docker is an incredibly powerful tool for DevOps, allowing you to manage application development, testing, and deployment in a consistent and efficient way. From running simple containers to orchestrating multi-container applications using Docker Swarm, Docker provides all the tools you need for modern software delivery.

By mastering the commands and techniques covered in this guide, you'll be well on your way to becoming proficient in Docker and leveraging it to streamline your DevOps workflows.