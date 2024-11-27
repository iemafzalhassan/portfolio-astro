---
layout: ../../layouts/post.astro
title: AI on Your Computer Using Docker
description: How to Download and Host OpenWebUI Locally with Llama 3.2
dateFormatted: Nov 13th, 2024
---
*Author: [Md. Afzal Hassan Ehsani](https://www.linkedin.com/in/iemafzalhassan/)*


If you've ever wanted to run a powerful AI language model like Llama 3.2 on your own computer—without worrying about sharing your data with companies or relying on cloud services—this guide will walk you through the entire process. We’ll cover how to download, install, and set up **OpenWebUI** on your local machine using **Docker** and integrate it with a locally installed **Llama 3.2 model**.

---

### What You Will Need:

1. **A computer with at least 8GB of RAM** (for smooth performance with the Llama models).
2. **Docker** installed on your computer.
3. **A terminal** for running commands.
4. **A bit of patience** as the installation process will take some time.

---

### Step 1: Download and Install **Ollama** (LLama Model Assistant)

First, we need to install **Ollama**, a tool that allows you to manage and run local AI models such as **Llama 3.2**.

### To install Ollama:

1. **Go to the [Ollama website](https://ollama.com/download)** and download the appropriate version for your operating system.
    - For **Mac**, download the `.dmg` file.
    - For **Windows**, download the `.exe` installer.
    - For **Linux**, `curl -fsSL https://ollama.com/install.sh | sh`
2. **Install Ollama** by running the downloaded file and following the on-screen instructions.
    - For **Mac**, move the Ollama application to your Applications folder.
    - For **Windows**, follow the prompts to install Ollama.
3. Once the installation is complete, launch **Ollama**. You'll see a llama icon in your system tray (for Mac users, it will be in your Applications folder).

---

### Step 2: Install Llama 3.1 (as a Pre-requisite for Llama 3.2)

After Ollama is installed, you’ll first need to install **Llama 3.1** before installing the newer **Llama 3.2** model.

1. **Open the terminal** on your computer. You can open it on **Mac** from Applications > Utilities > Terminal, or on **Windows** by searching for `cmd` or `PowerShell`.
2. Copy the installation command provided by **Ollama** for **Llama 3.1** (you can find a prompt when you launch the app).
3. Paste the copied command into your terminal and press **Enter**. This will begin the installation of **Llama 3.1**.

---

### Step 3: Install **Llama 3.2**

Now, we’ll install the latest version: **Llama 3.2**.

1. Go back to the **Ollama** website and find the **Llama 3.2** model in the **Models tab**.
2. Copy the installation command for **Llama 3.2** from website Models tab or from below.
    
    `ollama run llama3.2-vision`
    `ollama run llama3.2`
    
3. Open your terminal and paste the command of the version you want to use.
4. Press **Enter** to begin the installation of **Llama 3.2**.

---

### Step 4: Install **Docker** (Containerization Tool)

To run **OpenWebUI** on your local machine, you’ll need to install **Docker**. Docker is a platform that allows you to run applications in isolated containers, and it’s perfect for managing OpenWebUI.

### To install Docker:

1. **Go to the [Docker website](https://www.docker.com/products/docker-desktop/)** and download the appropriate version for your operating system:
    - For [**Windows**](https://docs.docker.com/desktop/setup/install/windows-install/) and [**Mac**](https://docs.docker.com/desktop/setup/install/mac-install/), [Docker Desktop](https://www.docker.com/products/docker-desktop/) is available.
    - [For **Linux**](https://docs.docker.com/desktop/setup/install/linux/), you can follow the specific installation instructions for your distribution.
2. **Install Docker** by running the downloaded installer and following the instructions.
3. Once Docker is installed, **launch Docker**. You should see the Docker icon appear in your system tray, indicating it’s running.

---

### Step 5: Run OpenWebUI with Docker (on Port 8080)

Now that you’ve got Docker installed, we’ll run **OpenWebUI** as a container and make it accessible on **port 8080** of your local machine.

GitHub Repo: https://github.com/iemafzalhassan/open-webui

1. **Open the terminal** and run the following command to download and start the OpenWebUI container in detached mode (which means it will run in the background without blocking your terminal):
    
    ```bash
    docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:main
    ```
    

![Terminal Preview](/public/assets/images/posts/local-ai-docker-cmd-preview.png)

### Breakdown:

- **`docker run`**: Starts a new container from the specified image.
- **`-d`**: Run the container in detached mode (background).
- **`p 3000:8080`**: Map port `3000` on the host to port `8080` inside the container.
- **`-add-host=host.docker.internal:host-gateway`**: Add a host entry for the container to access the host machine using `host.docker.internal`.
- **`-v open-webui:/app/backend/data`**: Mount a volume named `open-webui` to the container’s `/app/backend/data` directory for persistent storage.
- **`-name open-webui`**: Assign the name `open-webui` to the container for easier reference.
- **`-restart always`**: Ensure the container restarts automatically if it crashes or if Docker restarts.
- **`ghcr.io/open-webui/open-webui:main`**: Use the `open-webui` image from GitHub Container Registry with the `main` tag (latest version).

This command runs the container in the background, exposing the OpenWebUI interface on `http://localhost:3000`, while ensuring persistent data storage and automatic restarts.

![docker desktop preview](/public/assets/images/posts/local-ai-docker-desktop-preview.png)

1. After running the command, Docker will automatically download the necessary image and start the OpenWebUI container in the background.

---

### Step 6: Access OpenWebUI on Localhost

Now that the container is running, you can access OpenWebUI through your web browser.

1. **Open your web browser** (Chrome, Firefox, etc.) and go to:
    
    ```
    http://localhost:3000/
    ```
    

![Locahost Preview](/public/assets/images/posts/loca-ai-localhost-preview.png)

1. This will bring up the OpenWebUI interface where you can select the Llama model you installed (e.g., **Llama 3.2**).

![Localhost LLM Preview](/public/assets/images/posts/local-ai-localhost-llm-preview.png)

1. You can now start interacting with Llama 3.2 directly in your browser, just like you would with ChatGPT or any other chatbot.

---

### Using OpenWebUI with Llama 3.2

Once you’ve got OpenWebUI running, you can select the Llama 3.2 model you installed and start typing prompts. The cool thing is that everything is running **locally**, meaning **no data is sent to any third party**. You can safely use the AI as much as you want without worrying about privacy.

### Example DevOps Prompts:

1. **Dockerfile Creation Assistance**:
    - **Example-Prompt**: "Can you help me create a Dockerfile for a Node.js application that installs dependencies, runs tests, and exposes port 8080?"
        
        ![Example 1 showcase](/public/assets/images/posts/local-ai-ex-1.png)
        
        ![Example 1 showcase](/public/assets/images/posts/local-ai-ex-2.png)
        
2. **Kubernetes Deployment Manifest**:
    - **Example-Prompt**: "Can you generate a Kubernetes deployment YAML for deploying a MySQL database with persistent storage?"
3. **Jenkins Groovy Script for CI/CD Pipeline**:
    - **Example-Prompt**: "Write a Jenkins pipeline script to build and deploy a Docker image for a Python web app using GitHub as the source code repository."

---

### Real-World Use Case for DevOps Engineers

Running **Llama 3.2** locally can be a **game-changer** for **DevOps engineers**. Here are a few practical scenarios where **Llama** can help:

### 1. **Automating Documentation**:

- Generating documentation for infrastructure and systems is an often-repetitive task. Llama can help by automatically creating **README files**, **setup guides**, and even **system architecture descriptions**.

### 2. **Troubleshooting and Debugging**:

- DevOps engineers often have to troubleshoot issues related to system performance or application failures. Llama can quickly answer common **troubleshooting queries**, help **parse logs**, and suggest **solutions** for common issues (like container crashes or networking errors).

### 3. **Creating Infrastructure-as-Code**:

- With Llama, you can generate **Terraform** or **CloudFormation** templates for setting up cloud infrastructure, or automate the creation of **Kubernetes manifests** and **Docker configurations**—all using simple prompts.

### 4. **Script Generation**:

- Need a script to automate a task? Simply ask Llama to write a script in **Python**, **Bash**, or even **PowerShell**. Whether it's automating cloud infrastructure provisioning or batch processing logs, Llama is capable of understanding complex requests and generating working code.

### 5. **Security & Privacy**:

- By running Llama locally, all your data stays **on your machine**. This is particularly valuable for DevOps engineers working with sensitive data who want to avoid sending telemetry or logs to third-party services.

### 6. **Code Reviews**:

- Need to automate code review? Llama can assist in generating code review comments for various languages and frameworks, ensuring your code follows best practices and adheres to internal guidelines.

The best part? This AI setup is **free**, doesn’t involve cloud services, and gives you full control over the data and model. You can use it as much as you want without incurring any costs or giving up privacy.

---