# Portfolio.

Welcome to my DevOps Portfolio! This project is built using Astro and Tailwind CSS and is designed to showcase my DevOps projects, skills, and experience in a professional, sleek, and fully customizable format.

## 👋 About

Hello, I'm Md. Afzal Hassan Ehsani—a DevOps Engineer passionate about bridging development and operations, scaling production applications, and building efficient, reliable infrastructure. 

I can help you with:
- **DevOps Engineering & Automation**
- **Infrastructure as Code (IaC) & Scalable Architectures**
- **Cloud & Edge Computing Solutions**
- **Containerization & Microservices Orchestration**
- **System Administration & Network Reliability**
- **Open Source & Community Contributions**

## 🚀 Features

- **Fully Responsive Design**: Works seamlessly on all screen sizes.
- **Customizable Sections**: Tailored for showcasing DevOps skills, projects, and experience.
- **Built with Astro & Tailwind CSS**: Fast, modern, and minimalistic.
- **Dark Mode Compatible**: Looks stunning in both light and dark modes.

## 🙌 How Can You Contribute?

If you want to:
- Enhance pipeline
- Enhance Dockerfile
- Enhance Jenkinsfile
- Enhance K8s Manifests
- Add features
- Fix bugs
- Make the project better  
Check out our **[CONTRIBUTING.md](CONTRIBUTING.md)** guide. Don’t worry—it’s written in a way that even if you are a beginner, you can follow!

---

## 🛠 How to Set Up the Project

Here’s how you can set up the portfolio on your **local machine**, **AWS EC2**, or using **Kubernetes**.

---

### 📍 Setting Up Locally

1. **Clone the Repository**:
   Download the project code to your computer. Open a terminal and type:

```bash
   git clone https://github.com/iemafzalhassan/portfolio.git
   cd iemafzalhassan-portfolio
```

2. **Install Node.js**:
   - Download Node.js from [here](https://nodejs.org).
   - Install it on your computer.

3. **Install Dependencies**:
   In the terminal, type:
```bash
   npm install
```

4. **Run the Website**:
   Start the development server:
```bash
   npm run dev
```
   Open your browser and go to [http://localhost:6543](http://localhost:6543). 🎉 website is live!

### ☁️ Deploying on AWS EC2

Follow these steps to host your portfolio on an **AWS EC2 instance**:

1. **Launch an EC2 Instance**:
   - Log in to [AWS Console](https://aws.amazon.com/console/).
   - Start a new EC2 instance (select **Ubuntu** or **Amazon Linux** as the OS).

2. **Connect to EC2**:
   - Use **SSH** or a terminal to connect:
     ```bash
     ssh -i your-key.pem ec2-user@your-ec2-public-ip
     ```

3. **Install Node.js**:
   On the EC2 instance:
```bash
   sudo apt update
   sudo apt install nodejs npm -y
```

4. **Clone the Repository**:
```bash
   git clone https://github.com/iemafzalhassan/portfolio.git
   cd portfolio
```

5. **Install Dependencies & Build**:
```bash
   npm install
   npm run build
```

6. **Run the Project**:
```bash
   npm start
```
   Open a browser, and enter your EC2’s public IP address. Your site is live on the internet!

---

### 🐋 Deploying with Kubernetes

If you’re familiar with Kubernetes, you can deploy this project too. Here’s how:

1. **Prepare Kubernetes Files**:
   - The repository includes:
     - `deployment.yaml` (to create the application pods).
     - `service.yml` (to expose the app).
     - `namespace.yaml` (for app isolation).

2. **Create a Namespace**:
```bash
   kubectl apply -f namespace.yaml
```

3. **Deploy the App**:
```bash
   kubectl apply -f deployment.yaml
   kubectl apply -f service.yml
```

4. **Access the App**:
   Use port-forwarding to access the app locally:
```bash
   kubectl port-forward service/portfolio-service -n portfolio 6543:6543
```
   Open [http://localhost:6543](http://localhost:6543) to view your portfolio.

---

## 🤝 Want to Help? Start Contributing!

Check out our **[CONTRIBUTING.md](CONTRIBUTING.md)** for simple, step-by-step instructions on how to contribute.

---

## 📄 License

This project is open-source and available under the [Apache License](LICENSE).
