---
title: "How to Download and Host OpenWebUI Locally with Llama 3.2 AI on Your Computer Using Docker"
description: "You can use chatgpt like personal chatgpt in you local environment."
date: 2024-12-22
dateFormatted: December 22, 2024
tags: [DevOps, Docker, CI/CD, Tutorials, infrastructure, Cloud Computing, AWS]
coverImage: https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb
lastUpdated: 2025-01-04T01:07:00.000Z
status: Published
author: iemafzalhassan 
---


If you've ever wanted to run a powerful AI language model like Llama 3.2 on your own computer—without worrying about sharing your data with companies or relying on cloud services—this guide will walk you through the entire process. We’ll cover how to download, install, and set up <strong>OpenWebUI</strong> on your local machine using <strong>Docker</strong> and integrate it with a locally installed <strong>Llama 3.2 model</strong>.


---


### What You Will Need:

1. <strong>A computer with at least 8GB of RAM</strong> (for smooth performance with the Llama models).
2. <strong>Docker</strong> installed on your computer.
3. <strong>A terminal</strong> for running commands.
4. <strong>A bit of patience</strong> as the installation process will take some time.

---


### Step 1: Download and Install <strong>Ollama</strong> (LLama Model Assistant)


First, we need to install <strong>Ollama</strong>, a tool that allows you to manage and run local AI models such as <strong>Llama 3.2</strong>.


### To install Ollama:

1. <strong>Go to the</strong> [<strong>Ollama website</strong>](https://ollama.com/download) and download the appropriate version for your operating system.
	- For <strong>Mac</strong>, download the <code class="inline-code">.dmg</code> file.
	- For <strong>Windows</strong>, download the <code class="inline-code">.exe</code> installer.
	- For <strong>Linux</strong>, <code class="inline-code">curl -fsSL</code> [<code class="inline-code">https://ollama.com/install.sh</code>](https://ollama.com/install.sh) <code class="inline-code">| sh</code>
2. <strong>Install Ollama</strong> by running the downloaded file and following the on-screen instructions.
	- For <strong>Mac</strong>, move the Ollama application to your Applications folder.
	- For <strong>Windows</strong>, follow the prompts to install Ollama.
3. Once the installation is complete, launch <strong>Ollama</strong>. You'll see a llama icon in your system tray (for Mac users, it will be in your Applications folder).

---


### Step 2: Install Llama 3.1 (as a Pre-requisite for Llama 3.2)


After Ollama is installed, you’ll first need to install <strong>Llama 3.1</strong> before installing the newer <strong>Llama 3.2</strong> model.

1. <strong>Open the terminal</strong> on your computer. You can open it on <strong>Mac</strong> from Applications > Utilities > Terminal, or on <strong>Windows</strong> by searching for <code class="inline-code">cmd</code> or <code class="inline-code">PowerShell</code>.
2. Copy the installation command provided by <strong>Ollama</strong> for <strong>Llama 3.1</strong> (you can find a prompt when you launch the app).
3. Paste the copied command into your terminal and press <strong>Enter</strong>. This will begin the installation of <strong>Llama 3.1</strong>.

---


### Step 3: Install <strong>Llama 3.2</strong>


Now, we’ll install the latest version: <strong>Llama 3.2</strong>.

1. Go back to the <strong>Ollama</strong> website and find the <strong>Llama 3.2</strong> model in the <strong>Models tab</strong>.
2. Copy the installation command for <strong>Llama 3.2</strong> from website Models tab or from below.

	<code class="inline-code">ollama run llama3.2-vision</code>
	<code class="inline-code">ollama run llama3.2</code>

3. Open your terminal and paste the command of the version you want to use.
4. Press <strong>Enter</strong> to begin the installation of <strong>Llama 3.2</strong>.

---


### Step 4: Install <strong>Docker</strong> (Containerization Tool)


To run <strong>OpenWebUI</strong> on your local machine, you’ll need to install <strong>Docker</strong>. Docker is a platform that allows you to run applications in isolated containers, and it’s perfect for managing OpenWebUI.


### To install Docker:

1. <strong>Go to the</strong> [<strong>Docker website</strong>](https://www.docker.com/products/docker-desktop/) and download the appropriate version for your operating system:
	- For [<strong>Windows</strong>](https://docs.docker.com/desktop/setup/install/windows-install/) and [<strong>Mac</strong>](https://docs.docker.com/desktop/setup/install/mac-install/), [Docker Desktop ](https://www.docker.com/products/docker-desktop/)is available.
	- [For ](https://docs.docker.com/desktop/setup/install/linux/)[<strong>Linux</strong>](https://docs.docker.com/desktop/setup/install/linux/), you can follow the specific installation instructions for your distribution.
2. <strong>Install Docker</strong> by running the downloaded installer and following the instructions.
3. Once Docker is installed, <strong>launch Docker</strong>. You should see the Docker icon appear in your system tray, indicating it’s running.

---


### Step 5: Run OpenWebUI with Docker (on Port 8080)


Now that you’ve got Docker installed, we’ll run <strong>OpenWebUI</strong> as a container and make it accessible on <strong>port 8080</strong> of your local machine.


GitHub Repo: [https://github.com/iemafzalhassan/open-webui](https://github.com/iemafzalhassan/open-webui)

1. <strong>Open the terminal</strong> and run the following command to download and start the OpenWebUI container in detached mode (which means it will run in the background without blocking your terminal):

	<div class="code-block-wrapper">
  <pre><code class="language-shell">docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:main</code></pre>
</div>


![Screenshot_2024-11-11_at_3.47.55_PM.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8b557715-1f08-43ae-ac1a-b814d80e7850/7e092e7e-4aa3-4aaa-9193-24b5a41daca4/Screenshot_2024-11-11_at_3.47.55_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45FSPPWI6X%2F20250104%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250104T041518Z&X-Amz-Expires=3600&X-Amz-Signature=910e921cbd5697847a6814a3e8f10217c82817e19fa9ef99588ad5a2d1a93a75&X-Amz-SignedHeaders=host&x-id=GetObject)


### Breakdown:

- <strong><code class="inline-code">docker run</code></strong>: Starts a new container from the specified image.
- <strong><code class="inline-code">-d</code></strong>: Run the container in detached mode (background).
- <strong><code class="inline-code">p 3000:8080</code></strong>: Map port <code class="inline-code">3000</code> on the host to port <code class="inline-code">8080</code> inside the container.
- <strong><code class="inline-code">-add-host=host.docker.internal:host-gateway</code></strong>: Add a host entry for the container to access the host machine using <code class="inline-code">host.docker.internal</code>.
- <strong><code class="inline-code">-v open-webui:/app/backend/data</code></strong>: Mount a volume named <code class="inline-code">open-webui</code> to the container’s <code class="inline-code">/app/backend/data</code> directory for persistent storage.
- <strong><code class="inline-code">-name open-webui</code></strong>: Assign the name <code class="inline-code">open-webui</code> to the container for easier reference.
- <strong><code class="inline-code">-restart always</code></strong>: Ensure the container restarts automatically if it crashes or if Docker restarts.
- <strong><code class="inline-code">ghcr.io/open-webui/open-webui:main</code></strong>: Use the <code class="inline-code">open-webui</code> image from GitHub Container Registry with the <code class="inline-code">main</code> tag (latest version).

This command runs the container in the background, exposing the OpenWebUI interface on <code class="inline-code">http://localhost:3000</code>, while ensuring persistent data storage and automatic restarts.


![Screenshot_2024-11-11_at_4.18.47_PM.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8b557715-1f08-43ae-ac1a-b814d80e7850/498d98a7-88a4-42cc-a3b6-4db074500b7d/Screenshot_2024-11-11_at_4.18.47_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45FSPPWI6X%2F20250104%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250104T041518Z&X-Amz-Expires=3600&X-Amz-Signature=7607aa07fe75f981b7fd4a46a45e94f6836f023b42cd4635321a73fd8ad4d24b&X-Amz-SignedHeaders=host&x-id=GetObject)

1. After running the command, Docker will automatically download the necessary image and start the OpenWebUI container in the background.

---


### Step 6: Access OpenWebUI on Localhost


Now that the container is running, you can access OpenWebUI through your web browser.

1. <strong>Open your web browser</strong> (Chrome, Firefox, etc.) and go to:

	<div class="code-block-wrapper">
  <pre><code class="language-text">http://localhost:3000/</code></pre>
</div>


![Screenshot_2024-11-11_at_4.01.13_PM.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8b557715-1f08-43ae-ac1a-b814d80e7850/8607948f-2510-4dd9-8de6-dcccc0b97968/Screenshot_2024-11-11_at_4.01.13_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45FSPPWI6X%2F20250104%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250104T041518Z&X-Amz-Expires=3600&X-Amz-Signature=0fa8a67475f651c132106cb68f36e209bf77379312193034007b31504ecbe71a&X-Amz-SignedHeaders=host&x-id=GetObject)

1. This will bring up the OpenWebUI interface where you can select the Llama model you installed (e.g., <strong>Llama 3.2</strong>).

![Screenshot_2024-11-11_at_4.01.24_PM.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8b557715-1f08-43ae-ac1a-b814d80e7850/a65dc5ed-3c74-4839-b58c-45095cfed367/Screenshot_2024-11-11_at_4.01.24_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45FSPPWI6X%2F20250104%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250104T041518Z&X-Amz-Expires=3600&X-Amz-Signature=fa8296a3f49f89d2fecb7804e809e194226e0b25a5773d366896e629ae32c03f&X-Amz-SignedHeaders=host&x-id=GetObject)

1. You can now start interacting with Llama 3.2 directly in your browser, just like you would with ChatGPT or any other chatbot.

---


### Using OpenWebUI with Llama 3.2


Once you’ve got OpenWebUI running, you can select the Llama 3.2 model you installed and start typing prompts. The cool thing is that everything is running <strong>locally</strong>, meaning <strong>no data is sent to any third party</strong>. You can safely use the AI as much as you want without worrying about privacy.


### Example DevOps Prompts:

1. <strong>Dockerfile Creation Assistance</strong>:
	- <strong>Example-Prompt</strong>: "Can you help me create a Dockerfile for a Node.js application that installs dependencies, runs tests, and exposes port 8080?"

		![Screenshot_2024-11-11_at_4.11.15_PM.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8b557715-1f08-43ae-ac1a-b814d80e7850/57f59b81-e452-4401-8267-0b8f5f3ab8ae/Screenshot_2024-11-11_at_4.11.15_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45FSPPWI6X%2F20250104%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250104T041522Z&X-Amz-Expires=3600&X-Amz-Signature=eb689193776aa2e68c34d27b465a825a2a90da73b24a3e9c675b4a3ce5297d64&X-Amz-SignedHeaders=host&x-id=GetObject)


		![Screenshot_2024-11-11_at_4.11.52_PM.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/8b557715-1f08-43ae-ac1a-b814d80e7850/992fa6b8-c101-45ff-910c-ba7770862e6a/Screenshot_2024-11-11_at_4.11.52_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45FSPPWI6X%2F20250104%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250104T041522Z&X-Amz-Expires=3600&X-Amz-Signature=930a63ce6f4dbb48db2375cc12aae4632acd1edda464269917f8623358543f3f&X-Amz-SignedHeaders=host&x-id=GetObject)

2. <strong>Kubernetes Deployment Manifest</strong>:
	- <strong>Example-Prompt</strong>: "Can you generate a Kubernetes deployment YAML for deploying a MySQL database with persistent storage?"
3. <strong>Jenkins Groovy Script for CI/CD Pipeline</strong>:
	- <strong>Example-Prompt</strong>: "Write a Jenkins pipeline script to build and deploy a Docker image for a Python web app using GitHub as the source code repository."

---


### Real-World Use Case for DevOps Engineers


Running <strong>Llama 3.2</strong> locally can be a <strong>game-changer</strong> for <strong>DevOps engineers</strong>. Here are a few practical scenarios where <strong>Llama</strong> can help:


### 1. <strong>Automating Documentation</strong>:

- Generating documentation for infrastructure and systems is an often-repetitive task. Llama can help by automatically creating <strong>README files</strong>, <strong>setup guides</strong>, and even <strong>system architecture descriptions</strong>.

### 2. <strong>Troubleshooting and Debugging</strong>:

- DevOps engineers often have to troubleshoot issues related to system performance or application failures. Llama can quickly answer common <strong>troubleshooting queries</strong>, help <strong>parse logs</strong>, and suggest <strong>solutions</strong> for common issues (like container crashes or networking errors).

### 3. <strong>Creating Infrastructure-as-Code</strong>:

- With Llama, you can generate <strong>Terraform</strong> or <strong>CloudFormation</strong> templates for setting up cloud infrastructure, or automate the creation of <strong>Kubernetes manifests</strong> and <strong>Docker configurations</strong>—all using simple prompts.

### 4. <strong>Script Generation</strong>:

- Need a script to automate a task? Simply ask Llama to write a script in <strong>Python</strong>, <strong>Bash</strong>, or even <strong>PowerShell</strong>. Whether it's automating cloud infrastructure provisioning or batch processing logs, Llama is capable of understanding complex requests and generating working code.

### 5. <strong>Security & Privacy</strong>:

- By running Llama locally, all your data stays <strong>on your machine</strong>. This is particularly valuable for DevOps engineers working with sensitive data who want to avoid sending telemetry or logs to third-party services.

### 6. <strong>Code Reviews</strong>:

- Need to automate code review? Llama can assist in generating code review comments for various languages and frameworks, ensuring your code follows best practices and adheres to internal guidelines.

The best part? This AI setup is <strong>free</strong>, doesn’t involve cloud services, and gives you full control over the data and model. You can use it as much as you want without incurring any costs or giving up privacy.


---

