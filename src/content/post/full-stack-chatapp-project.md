---
layout: ../../layouts/post.astro
title: "Containerize and Orchestrate: Building a Real-Time(Three-tier) Chat App with Docker and Kubernetes"
description: "Three tier chatapp project"
date: 2025-01-01
dateFormatted: January 1, 2025
tags: [infrastructure, Tutorials, CI/CD, Docker, Kubernetes, AWS, Cloud Computing, DevOps]
coverImage: https://www.notion.so/images/page-cover/rijksmuseum_avercamp_1620.jpg
lastUpdated: 2025-01-04T01:08:00.000Z
status: Published
---


Hey DevOps Enthusiast! 🚀


Ready to build your own full-stack chat application running in Docker containers and deployed using Kubernetes on your local machine? In this blog, we're going to walk through the process of containerizing a chat app, use Docker for containers, use Docker Compose for managing multiple containers, and finally deploy everything with Kubernetes (Kind) on your local machine.


I will explain everything in such a way that it will be understandable. Let's start!


### <strong>What We’ll Build:</strong>


We’ll be building a <strong>real-time chat application</strong> that consists of:

- <strong>Frontend</strong>: A React-based chat interface.
- <strong>Backend</strong>: A Node.js server that handles chat messages and user authentication.
- <strong>Database</strong>: MongoDB to store all the chat data and user profiles.
- <strong>Real-Time Communication</strong>: Using [<strong>Socket.io</strong>](http://socket.io/) for instant messaging.

### <strong>What You'll Need:</strong>


Before we begin, let's make sure you have everything set up:

- [<strong>Docker</strong>](https://github.com/iemafzalhassan/full-stack_chatApp/blob/main/k8s/README.md#3-docker) (to containerize the application)
- <strong>Docker Compose</strong> (to run the application using multiple containers)
- [<strong>Kind</strong>](https://github.com/iemafzalhassan/full-stack_chatApp/blob/main/k8s/README.md#1-kind-kubernetes-in-docker) (Kubernetes in Docker to run the application on a Kubernetes cluster)
- [<strong>Kubectl</strong>](https://github.com/iemafzalhassan/full-stack_chatApp/blob/main/k8s/README.md#2-kubectl-kubernetes-command-line-tool) (Kubernetes CLI tool to control the cluster)

You can install all of the following tools from official documentation or instructions within the [<strong>README files</strong>](https://github.com/iemafzalhassan/full-stack_chatApp/blob/main/README.md). The entire project, including the Docker and Kubernetes configurations, is available in the [<strong>project repository on GitHub.</strong>](https://github.com/iemafzalhassan/full-stack_chatApp)


---


<div class="code-block-wrapper">
  <pre><code class="language-text">full-stack_chatApp
├── backend/                           # Backend dir
│   ├── Dockerfile                     # Dockerfile for the backend
│   ├── package-lock.json              # Lock file for backend dependencies
│   ├── package.json                   # Backend dependencies and scripts
├── frontend/                          # Frontend application (React)
│   ├── Dockerfile                     # Dockerfile for the frontend
│   ├── index.html                     # Main HTML template for the React app
│   ├── nginx.conf                     # Nginx config for frontend
│   ├── package-lock.json              # Lock file for frontend dependencies
│   ├── package.json                   # Frontend dependencies
├── k8s/                               # Kubernetes manifests for deployment
│   ├── README.md                      # Documentation for Kubernetes deployment
│   ├── backend-deployment.yaml        # Kubernetes deployment for the backend
│   ├── backend-service.yaml           # Kubernetes service for the backend
│   ├── frontend-deployment.yaml       # Kubernetes deployment for the frontend
│   ├── frontend-service.yaml          # Kubernetes service for the frontend
│   ├── jwt-secret.yaml                # Kubernetes secret for JWT token
│   ├── mongo-pvc.yaml                 # Persistent volume claim for MongoDB
│   ├── mongodb-deployment.yaml        # Kubernetes deployment for MongoDB
│   ├── mongodb-service.yaml           # Kubernetes service for MongoDB
│   └── namespace.yaml                 # Kubernetes namespace for isolation
└── package.json                       # Project dependencies
├── Jenkinsfile                        # Jenkins pipeline file
├── README.md                          # Project's main documentation
├── docker-compose.yml                 # Docker Compose configuration file</code></pre>
</div>


This structure will help you understand where each part of the application is located. The <strong>backend</strong> and <strong>frontend</strong> directories contain the application code along with the Dockerfile, while <strong>k8s</strong> contains Kubernetes deployment manifests. The <strong>docker-compose.yml</strong> file is used to manage all the containers together using Docker Compose.


---


## <strong>Step 1: Build the Frontend Docker Image</strong>


Let's begin with the Frontend, which is a React app serving the user interface. It interacts with the backend for sending and receiving chat messages


### [<strong>Frontend Dockerfile</strong>](https://github.com/iemafzalhassan/full-stack_chatApp/blob/main/frontend/Dockerfile)


Here’s the <code class="inline-code">Dockerfile</code> for the frontend, which is responsible for building the app and serving it with <strong>Nginx</strong>:


<div class="code-block-wrapper">
  <pre><code class="language-text">\# Stage 1: Build the app
FROM node:18-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
ENV NODE_ENV=production
RUN npm run build
\# Stage 2: Serve with Nginx
FROM nginx:stable-alpine
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]</code></pre>
</div>


### <strong>Explanation:</strong>

1. <strong>Build Stage</strong>:
	- We use a Node.js image to install the app dependencies and build the React app for production.
2. <strong>Serve Stage</strong>:
	- After building the app, we’ll use <strong>Nginx</strong> to serve the dist files.

Once the <code class="inline-code">Dockerfile</code> is ready, It’s time to build the frontend Docker image by running the following commands in your terminal:


<div class="code-block-wrapper">
  <pre><code class="language-text">cd frontend
docker build -t full-stack_frontend .</code></pre>
</div>


---


## <strong>Step 2: Build the Backend Docker Image</strong>


Now, we require the Backend. The Backend is a Node.js server built with Express. This backend will handle all the API requests (such as login, sending messages, etc.) and real-time communication using [<strong>Socket.io</strong>](http://socket.io/).


### [<strong>Backend Dockerfile</strong>](https://github.com/iemafzalhassan/full-stack_chatApp/blob/main/backend/Dockerfile)


Here’s the <code class="inline-code">Dockerfile</code> for the backend:


<div class="code-block-wrapper">
  <pre><code class="language-text">\# Stage 1: Build the backend
FROM node:18-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --only=production
COPY . .

\# Stage 2: Run the backend in production
FROM node:18-alpine
WORKDIR /app
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app ./
EXPOSE 5001
USER appuser
CMD ["npm", "start"]</code></pre>
</div>


### <strong>Explanation:</strong>

1. <strong>Build Stage</strong>:
	- We install only the production dependencies (<code class="inline-code">npm ci --only=production</code>) and copy the app files into the container.
2. <strong>Production Stage</strong>:
	- Here we are setting up the container to run the <code class="inline-code">Node.js server</code> with <code class="inline-code">Express</code>. We are also adding a non-root user (<code class="inline-code">appuser</code>) for security.

To build the backend Docker image, run the following commands:


<div class="code-block-wrapper">
  <pre><code class="language-text">cd backend
docker build -t full-stack_backend .</code></pre>
</div>


---


## <strong>Step 3: Pull the MongoDB Docker Image</strong>


Our application requires a <code class="inline-code">MongoDB database</code> to store <code class="inline-code">chat messages</code> and <code class="inline-code">user data</code>. Luckily, MongoDB has an <code class="inline-code">official</code> Docker image, so we do not need to write a <code class="inline-code">Dockerfile</code> for it.


Pull the MongoDB image using the following command:


<div class="code-block-wrapper">
  <pre><code class="language-text">docker pull mongo:latest</code></pre>
</div>


Once we pull the image, we can run it as a container along with the <strong>frontend</strong> and <strong>backend</strong>.


Here's how we can run the <strong>Frontend</strong>, <strong>Backend</strong>, and <strong>MongoDB</strong> containers separately and <code class="inline-code">test</code> that everything is <code class="inline-code">working fine</code>:


---


### <strong>Step 4: Run the MongoDB Container</strong>


Run the following command to start the MongoDB container:


<div class="code-block-wrapper">
  <pre><code class="language-text">docker run -d \
  --name mongo \
  -p 27017:27017 \
  --env MONGO_INITDB_ROOT_USERNAME=mongoadmin \
  --env MONGO_INITDB_ROOT_PASSWORD=secret \
  mongo:latest</code></pre>
</div>

- <code class="inline-code">d</code>: Runs the container in detached mode (background).
- <code class="inline-code">-name mongo</code>: Names the container as <code class="inline-code">mongo</code>.
- <code class="inline-code">p 27017:27017</code>: Maps the MongoDB port to your local machine's port 27017.
- <code class="inline-code">-env</code>: Sets environment variables for MongoDB to initialize with a root username and password.

To verify MongoDB is running correctly, you can use:


<div class="code-block-wrapper">
  <pre><code class="language-text">docker ps</code></pre>
</div>


MongoDB should now be accessible at [<strong><code class="inline-code">localhost:27017</code></strong>](http://localhost:27017/).


---


### <strong>Step 5: Create a Docker Network</strong>


Now we need to create a Docker Network.


Run the following command to create a docker network


<div class="code-block-wrapper">
  <pre><code class="language-text">docker network create fullstack-chatapp</code></pre>
</div>


---


### <strong>Step 6: Run the Backend Container</strong>


Now, we need to run the <strong>Backend</strong> (Node.js with Express) to handle the chat API and real-time communication. The backend container must be linked to the MongoDB container to work properly.


Run the following command to start the backend:


<div class="code-block-wrapper">
  <pre><code class="language-text">docker run -d \
  --name backend \
  --network fullstack-chatapp \
  -p 5001:5001 \
  --env MONGODB_URI=mongodb://mongoadmin:secret@localhost:27017/chatdb?authSource=admin \
  --env JWT_SECRET=your_jwt_secret_key --> (experimental secret is provided in the Repo) \
  full-stack_backend:latest</code></pre>
</div>

- <code class="inline-code">-network fullstack-chatapp</code>: This will enable the backend to connect with MongoDB using the <code class="inline-code">fullstack-chatapp</code> network.
- <code class="inline-code">-env MONGODB_URI</code>: This will specify the MongoDB connection string, including username, password, and database.
- <code class="inline-code">-env JWT_SECRET</code>: This will set the JWT secret key used to authenticate users.

To check if the backend is running correctly, use:


<div class="code-block-wrapper">
  <pre><code class="language-text">docker ps</code></pre>
</div>


You should see the backend running at [<strong><code class="inline-code">localhost:5001</code></strong>](http://localhost:5001/).


---


### <strong>Step 7: Run the Frontend Container</strong>


Now that the backend and database are up, we can run the <strong>Frontend</strong> (React app served by Nginx) to serve the chat interface.


Run the following command to start the frontend:


<div class="code-block-wrapper">
  <pre><code class="language-text">docker run -d \
  --name frontend \
  --network fullstack-chatapp \
  -p 80:80 \
  full-stack_frontend:latest</code></pre>
</div>

- <code class="inline-code">-network fullstack-chatapp</code>: Ensures the frontend can connect to the backend via the fullstack-chatapp network.
- <code class="inline-code">p 80:80</code>: Maps the frontend to port 80 on your local machine.

To verify if the frontend is working:


<div class="code-block-wrapper">
  <pre><code class="language-text">docker ps</code></pre>
</div>


The frontend should be running and accessible at [<strong><code class="inline-code">http://localhost</code></strong>](http://localhost/).


---


### <strong>Step 8: Verify the Application</strong>


At this point, all the individual services (Frontend, Backend, MongoDB) are running in separate containers. You can now verify if the chat application is working correctly:

1. <strong>MongoDB</strong>:
	- MongoDB should be running on [<strong><code class="inline-code">localhost:27017</code></strong>](http://localhost:27017/). You can access it via MongoDB clients like <strong>MongoDB Compass</strong> or by using <code class="inline-code">mongo</code> CLI to connect to it with the root credentials (<code class="inline-code">mongoadmin</code> / <code class="inline-code">secret</code>).
2. <strong>Backend</strong>:
	- The backend API should be running on [<strong><code class="inline-code">localhost:5001</code></strong>](http://localhost:5001/). To verify the backend, try sending a <code class="inline-code">GET</code> request to the backend using <code class="inline-code">curl</code>:

		<div class="code-block-wrapper">
  <pre><code class="language-text">curl http://localhost:5001/api/status</code></pre>
</div>

	- This should return some information about the API if it’s working correctly.
3. <strong>Frontend</strong>:
	- Visit [<strong><code class="inline-code">http://localhost</code></strong>](http://localhost/) in your browser. If everything is set up correctly, you should see the chat application frontend running.
	- Try logging in, sending messages, and verifying real-time communication (using [<strong>Socket.io</strong>](http://socket.io/)). If the frontend connects to the backend successfully, you should see live messages appearing.

---


### <strong>Step 9: Shut Down the Containers</strong>


Once you’ve verified that everything is working, you can stop the containers using:


<div class="code-block-wrapper">
  <pre><code class="language-text">docker stop frontend backend mongo
docker rm frontend backend mongo</code></pre>
</div>


---


## [<strong>Step 10: Setting Up Docker Compose</strong>](https://github.com/iemafzalhassan/full-stack_chatApp/blob/main/docker-compose.yml)


Now that we have the Docker images ready for the frontend, backend, and MongoDB, we can use [<strong>Docker Compose</strong>](https://github.com/iemafzalhassan/full-stack_chatApp/blob/main/docker-compose.yml) to run all the services together in one command.


Here’s a [<strong><code class="inline-code">docker-compose.yml</code></strong>](https://github.com/iemafzalhassan/full-stack_chatApp/blob/main/docker-compose.yml) file to manage the services:


<div class="code-block-wrapper">
  <pre><code class="language-text">version: '3.8'
services:
  mongodb:
    image: mongo
    volumes:
      - mongo-data:/data/db
    environment:
      - MONGO_INITDB_ROOT_USERNAME=mongoadmin
      - MONGO_INITDB_ROOT_PASSWORD=secret
    ports:
      - "27017:27017"
    networks:
      - fullstack-chatapp

  backend:
    image: backend
    container_name: full-stack_backend
    environment:
      - NODE_ENV=production
      - MONGODB_URI=mongodb://mongoadmin:secret@mongodb:27017/dbname?authSource=admin
      - JWT_SECRET=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE3MzI2NTMxMDcsImV4cCI6MTc2NDE4OTEwNywiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0.qE3lxrcV9TM3nujRqJVeCHPd_4WFPO9eVZj8A_kjabI
      - PORT=5001
    depends_on:
      - mongodb
    networks:
      - fullstack-chatapp

  frontend:
    image: frontend
    container_name: full-stack_frontend
    ports:
      - "80:80"
    depends_on:
      - backend
    networks:
      - fullstack-chatapp

networks:
  fullstack-chatapp:
    driver: bridge

volumes:
  mongo-data:</code></pre>
</div>


### <strong>Explanation:</strong>

- <strong>MongoDB</strong>: This is the MongoDB database container; it listens on port <code class="inline-code">27017</code>. It leverages environment variables to get the root user and root password in place.
- <strong>Backend</strong>: The backend connects to MongoDB on the URI we set in our <code class="inline-code">MONGODB_URI</code> environment variable, listening on port <code class="inline-code">5001</code>.
- <strong>Frontend</strong>: The frontend is served on port <code class="inline-code">80</code>, and it relies on the backend.

Now, you can run the entire app using Docker Compose:


<div class="code-block-wrapper">
  <pre><code class="language-text">docker-compose up -d --build</code></pre>
</div>


Visit [<strong><code class="inline-code">http://localhost</code></strong>](http://localhost/) in your browser to see the chat app live!


---


## <strong>Step 11: Deploying with Kubernetes (Kind)</strong>


Appreciating you for sticking with the blog for this long journey! Now, let’s deploy this application using <strong>Kubernetes</strong> on your local machine. We'll be using [<strong>Kind</strong>](https://github.com/iemafzalhassan/full-stack_chatApp/blob/main/k8s/README.md#1-kind-kubernetes-in-docker) (Kubernetes in Docker) to create a lightweight Kubernetes cluster.


### <strong>Step 11.1: Install Kind and Kubectl</strong>


Before we begin, make sure you have [<strong>Kind</strong>](https://github.com/iemafzalhassan/full-stack_chatApp/blob/main/k8s/README.md#1-kind-kubernetes-in-docker) and [<strong>Kubectl</strong>](https://github.com/iemafzalhassan/full-stack_chatApp/blob/main/k8s/README.md#2-kubectl-kubernetes-command-line-tool) installed. You can find installation instructions on their respective [<strong>official websites</strong>](https://github.com/iemafzalhassan/full-stack_chatApp/blob/main/k8s/README.md) as well in [<strong>official Repo</strong>](https://github.com/iemafzalhassan/full-stack_chatApp/blob/main/k8s/README.md).


Once installed, you can verify the installation with:


<div class="code-block-wrapper">
  <pre><code class="language-text">kind version
kubectl version --client</code></pre>
</div>


### <strong>Step 11.2: Create a Kind Cluster</strong>


To create a Kubernetes cluster using Kind, run:


<div class="code-block-wrapper">
  <pre><code class="language-text">kind create cluster --name chat-app</code></pre>
</div>


This will set up a local Kubernetes cluster for you to deploy the app.


### <strong>Step 11.3: Deploy the Application Using Kubernetes Manifests</strong>


Now, let’s use the Kubernetes manifests to deploy the app. These manifest files are YAML files that define how Kubernetes should run the app.

- [<strong>Namespace</strong>](https://github.com/iemafzalhassan/full-stack_chatApp/blob/main/k8s/namespace.yaml): Organizes resources.
- [<strong>Deployments</strong>](https://github.com/iemafzalhassan/full-stack_chatApp/tree/main/k8s): Defines the app’s containers.
- [<strong>Services</strong>](https://github.com/iemafzalhassan/full-stack_chatApp/tree/main/k8s): Exposes the app to the outside world.

Here’s a breakdown of the Kubernetes steps:

1. <strong>Create the Namespace</strong>:

	<div class="code-block-wrapper">
  <pre><code class="language-text">kubectl apply -f namespace.yaml</code></pre>
</div>

2. <strong>Deploy MongoDB</strong>:

	<div class="code-block-wrapper">
  <pre><code class="language-text">kubectl apply -f mongodb-deployment.yaml
	 kubectl apply -f mongodb-service.yaml
	 kubectl apply -f mongo-pvc.yaml</code></pre>
</div>

3. <strong>Deploy JWT Secret</strong> (for user authentication):

	<div class="code-block-wrapper">
  <pre><code class="language-text">kubectl apply -f jwt-secret.yaml</code></pre>
</div>

4. <strong>Deploy the Backend</strong>:

	<strong>Copy</strong>


	<strong>Copy</strong>


	<div class="code-block-wrapper">
  <pre><code class="language-text">kubectl apply -f backend-deployment.yaml
	 kubectl apply -f backend-service.yaml</code></pre>
</div>

5. <strong>Deploy the Frontend</strong>:

	<div class="code-block-wrapper">
  <pre><code class="language-text">kubectl apply -f frontend-deployment.yaml
	 kubectl apply -f frontend-service.yaml</code></pre>
</div>


### <strong>Step 11.4: Access the Application</strong>


After deploying, you can check the status of the app using:


<div class="code-block-wrapper">
  <pre><code class="language-text">kubectl get pods -n chat-app</code></pre>
</div>


To access the frontend, use <strong>port forwarding</strong>:


<div class="code-block-wrapper">
  <pre><code class="language-text">kubectl port-forward service/frontend 8080:80 -n chat-app</code></pre>
</div>


Now, visit [<strong><code class="inline-code">http://localhost:8080</code></strong>](http://localhost:8080/) in your browser to access the chat app.


---


## <strong>Step 12: Clean Up the Kubernetes Cluster</strong>


When you’re done, you can delete the Kind cluster and clean up the resources:


<div class="code-block-wrapper">
  <pre><code class="language-text">kind delete cluster --name chat-app</code></pre>
</div>


### <strong>Conclusion</strong>


By following this guide, you've learned how to set up Three Tier Application, ensuring your app is easy to manage and scale. Whether you’re just starting or already familiar with Docker and Kubernetes, this process gives you the foundation to build more complex applications.


Keep experimenting, and don't be afraid to tweak things to suit your needs. The more you practice, the more confident you’ll become with these powerful tools!


Happy Learning!

