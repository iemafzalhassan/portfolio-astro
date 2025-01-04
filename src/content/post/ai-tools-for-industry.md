---
layout: ../../layouts/post.astro
title: "AI tools for DevOps workflows"
description: "AI industry level tools to study about."
date: 2024-12-09
dateFormatted: December 9, 2024
tags: [DevOps, Cloud Computing, AWS, Docker, CI/CD, Tutorials, infrastructure]
coverImage: https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb
lastUpdated: 2025-01-04T01:06:00.000Z
status: Published
---


---


### <strong>Snyk</strong>


### <strong>Purpose:</strong>


Snyk is a security tool that helps developers find and fix security issues in their code and its dependencies, especially in open-source libraries, containers, and cloud infrastructure. It scans your code for vulnerabilities and helps you fix them before they become serious security threats.


### <strong>How It Works:</strong>

- <strong>Vulnerability Scanning for Open-Source Libraries</strong>: Snyk checks your project’s dependencies (like open-source libraries) for known security risks and warns you if any vulnerabilities are found.
- <strong>Container Security</strong>: It scans Docker containers and Kubernetes configurations to ensure your containerized applications are secure.
- <strong>Cloud Security Checks</strong>: Snyk also scans your cloud setup (like AWS, GCP, or Azure) for security issues and misconfigurations, helping to prevent breaches.
- <strong>Automatic Fixes</strong>: Snyk not only finds security issues but also suggests and automates fixes, such as upgrading libraries or applying patches, so you can secure your code quickly.

### <strong>Where Snyk Can Be Used:</strong>

- <strong>Docker</strong>: Snyk can scan Docker images to make sure your containers are secure and free from vulnerabilities.

## Resources:

- <strong>Youtube:</strong> [https://youtu.be/1N6VBHMoPsw?si=13ECmLyp3rWXJQ8S](https://youtu.be/1N6VBHMoPsw?si=13ECmLyp3rWXJQ8S)
- <strong>Blog:</strong> [https://iemafzalhassan.notion.site/Integrating-Snyk-with-Docker-13a83d10a86f80abaaa6ce34e76a9d1b?pvs=4](https://iemafzalhassan.notion.site/Integrating-Snyk-with-Docker-13a83d10a86f80abaaa6ce34e76a9d1b)
- <strong>Docs:</strong> [https://docs.snyk.io/scan-with-snyk/snyk-container/container-registry-integrations](https://docs.snyk.io/scan-with-snyk/snyk-container/container-registry-integrations)
- <strong>Website:</strong> [https://snyk.io/](https://snyk.io/)

---


### <strong>AWS CodeGuru</strong>


### <strong>Purpose:</strong>


AWS CodeGuru is a smart tool that automatically reviews your code to find problems like bugs, security issues, and areas for improvement. It helps developers write better, faster, and safer code by suggesting fixes and optimizations.


### <strong>How It Works:</strong>

- <strong>Finds Bugs</strong>: It scans your code to spot potential bugs or errors, helping you catch issues before they cause problems.
- <strong>Identifies Security Risks</strong>: It checks your code for security vulnerabilities and gives advice on how to fix them, keeping your software safe.
- <strong>Improves Performance</strong>: CodeGuru looks at your code’s performance and suggests ways to make it run faster and use fewer resources.
- <strong>Checks Test Coverage</strong>: It checks if your code has enough tests to make sure it works as expected and suggests adding more tests if needed.

### <strong>Where AWS CodeGuru Can Be Used:</strong>

- <strong>GitHub/Bitbucket/CodeCommit</strong>: Connect CodeGuru with GitHub or Bitbucket to review code whenever a pull request is made.

## Resources:

- <strong>Blog:</strong> [https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/welcome.html](https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/welcome.html)
- <strong>Docs:</strong> [https://aws.amazon.com/blogs/devops/integrating-with-github-actions-amazon-codeguru-in-your-devsecops-pipeline/](https://aws.amazon.com/blogs/devops/integrating-with-github-actions-amazon-codeguru-in-your-devsecops-pipeline/)

---


### <strong>CloudHealth by VMware</strong>


### <strong>Objective:</strong>


CloudHealth is a cloud management platform that leverages AI to optimize cloud costs, manage cloud resources effectively, and ensure compliance with security standards. It helps organizations monitor their cloud usage, identify opportunities for cost savings, and automate scaling decisions to maintain efficient cloud resource utilization.


### <strong>How It Works:</strong>

- <strong>Cost Optimization</strong>: CloudHealth analyzes cloud resource usage and provides recommendations to optimize costs, such as resizing instances, choosing reserved instances, or eliminating underutilized resources.
- <strong>Resource Management</strong>: CloudHealth provides insights into resource allocation across cloud environments, helping organizations ensure that resources are utilized efficiently and scaled appropriately.
- <strong>Security Compliance</strong>: CloudHealth monitors cloud infrastructure for security misconfigurations and compliance issues (e.g., in AWS, Azure, GCP), ensuring that your cloud environment adheres to industry standards and best practices.
- <strong>Rightsizing and Reserved Instance Recommendations</strong>: It provides suggestions on which cloud resources (e.g., EC2 instances, databases) can be optimized for cost efficiency, and when to switch to reserved instances for predictable workloads.

### <strong>Where CloudHealth Can Be Used:</strong>

- <strong>AWS, Azure, GCP</strong>: CloudHealth integrates with these major cloud providers to provide a unified view of your cloud infrastructure, optimizing costs and ensuring compliance across multiple clouds.

## Resources:

- <strong>Youtube:</strong> [https://youtu.be/7p1BqEuoZ5M?si=7xO_FCG1MjxT9LzB](https://youtu.be/7p1BqEuoZ5M?si=7xO_FCG1MjxT9LzB)
- <strong>Blog:</strong> [https://iemafzalhassan.notion.site/What-Is-CloudHealth-13a83d10a86f809d87d9c1d2383f228c?pvs=4](https://iemafzalhassan.notion.site/What-Is-CloudHealth-13a83d10a86f809d87d9c1d2383f228c)
- <strong>Docs:</strong> [https://docs.securestate.vmware.com/user-guide/getting-started](https://docs.securestate.vmware.com/user-guide/getting-started)
- <strong>Website:</strong> [https://www.vmware.com/products/app-platform/tanzu-cloudhealth](https://www.vmware.com/products/app-platform/tanzu-cloudhealth)

---


### <strong>DataDog</strong>


### <strong>Objective:</strong>


Integrating Datadog with Kubernetes offers comprehensive monitoring and observability, providing real-time insights into containerized applications and infrastructure. This integration enables teams to detect performance issues early, optimize resources, and ensure the reliability of applications in dynamic environments.


### <strong>How It Works:</strong>

1. <strong>Data Collection</strong>: Datadog collects metrics, logs, and traces from Kubernetes clusters, including data on node performance, pod health, and container resource usage.
2. <strong>Data Aggregation</strong>: All metrics are aggregated in a single dashboard, allowing teams to track application health and infrastructure metrics in one place.
3. <strong>Analysis and Alerts</strong>: Datadog analyzes collected data to provide insights into performance trends and detects anomalies. Configurable alerts notify teams of issues before they affect users.
4. <strong>Visualization and Reporting</strong>: Datadog’s customizable dashboards and reports visualize key metrics, allowing teams to understand and act on data patterns over time.

### <strong>Where DataDog Can Be Used:</strong>

- <strong>Cloud-Native Applications</strong>: Ideal for monitoring distributed, containerized applications running on Kubernetes.
- <strong>Production Environments</strong>: Supports high-stakes environments where early detection of issues is critical to maintaining uptime and performance.
- <strong>Resource Optimization</strong>: Useful in environments requiring optimized resource usage to reduce costs and increase efficiency, such as multi-cloud or hybrid cloud setups.
- <strong>Compliance and Security Monitoring</strong>: In industries like finance or healthcare, where maintaining security and compliance is essential, Datadog helps monitor and manage infrastructure against policy violations or anomalies.

### Resources:

- <strong>Youtube:</strong> [https://youtube.com/playlist?list=PL0xeHY_ImQVVXHAExfdxLdfufEtZs2Ye2&si=2OzN8yf2XvNf34hJ](https://youtube.com/playlist?list=PL0xeHY_ImQVVXHAExfdxLdfufEtZs2Ye2&si=2OzN8yf2XvNf34hJ)
- <strong>Blog:</strong> [https://www.datadoghq.com/blog/monitoring-kubernetes-with-datadog/](https://www.datadoghq.com/blog/monitoring-kubernetes-with-datadog/)
- <strong>Docs:</strong> [https://docs.datadoghq.com/containers/kubernetes/](https://docs.datadoghq.com/containers/kubernetes/)
- <strong>Website:</strong> [https://www.datadoghq.com/](https://www.datadoghq.com/)

---


### <strong>PagerDuty</strong>


### <strong>Objective:</strong>


PagerDuty is an incident management platform that provides real-time notifications, automated escalation, and intelligent alerting for DevOps teams. It helps teams respond quickly to incidents, track issues, and reduce downtime by ensuring that the right people are notified at the right time.


### <strong>How It Works:</strong>

- <strong>Incident Management</strong>: PagerDuty creates, tracks, and resolves incidents in real-time, sending alerts to the appropriate team members when something goes wrong in your application or infrastructure.
- <strong>AIOps and Automated Alerting</strong>: Using artificial intelligence, PagerDuty can automatically prioritize and group alerts, reducing noise and enabling teams to focus on the most critical issues first.
- <strong>Escalation Policies</strong>: PagerDuty allows you to define escalation policies to ensure that if an incident is not resolved by the first responder, it is automatically escalated to the next tier of support.
- <strong>On-Call Management</strong>: PagerDuty helps manage on-call schedules and provides automated rotation, ensuring that team members are not overloaded and can address incidents promptly.

### <strong>Where PagerDuty Can Be Used:</strong>

- <strong>Prometheus, Grafana</strong>: PagerDuty integrates with monitoring tools to automatically create incidents based on infrastructure alerts or application performance issues.

## Resources:

- <strong>Youtube:</strong> [https://youtu.be/SvDpuVlJTDg?si=7F1A8l3QAZs4g8Ky](https://youtu.be/SvDpuVlJTDg?si=7F1A8l3QAZs4g8Ky)
- <strong>Blog:</strong> [https://ivanahuckova.medium.com/step-by-step-guide-to-setting-up-prometheus-alertmanager-with-slack-pagerduty-and-gmail-75069a8905b7](https://ivanahuckova.medium.com/step-by-step-guide-to-setting-up-prometheus-alertmanager-with-slack-pagerduty-and-gmail-75069a8905b7)
- <strong>Docs:</strong> [https://www.pagerduty.com/docs/guides/prometheus-integration-guide/](https://www.pagerduty.com/docs/guides/prometheus-integration-guide/)
- <strong>Website:</strong> [https://www.pagerduty.com/](https://www.pagerduty.com/)

---


### <strong>KEDA (Kubernetes Event-Driven Autoscaling)</strong>


### <strong>Purpose:</strong>


KEDA is a tool that helps Kubernetes automatically scale applications based on incoming events, such as messages in a queue or changes in a database. It allows your applications to scale up when there’s high demand and scale down when demand decreases, making your system more efficient and cost-effective.


### <strong>How It Works:</strong>

- <strong>Event-Driven Autoscaling</strong>: KEDA monitors external events (like messages in a message queue or metrics from an external system) and automatically scales Kubernetes workloads up or down based on those events. For example, if a message queue grows, KEDA can scale up your application to process those messages.
- <strong>Support for Multiple Event Sources</strong>: KEDA integrates with various event sources, such as Azure Event Hubs, RabbitMQ, Kafka, AWS SQS, and more. It allows Kubernetes clusters to scale based on the activity of these systems.
- <strong>Custom Metrics Support</strong>: KEDA can scale based on custom metrics, giving you flexibility to define scaling criteria beyond just CPU or memory usage. For instance, you can scale based on the number of requests, database size, or any custom metric.
- <strong>Resource Efficiency</strong>: KEDA helps optimize resource usage by ensuring that your applications only run at the required scale, avoiding unnecessary resource consumption during low-demand periods.

### <strong>Where KEDA Can Be Used:</strong>

- <strong>Kubernetes</strong>: KEDA is designed to work with Kubernetes and is installed as a Kubernetes operator. It enables Kubernetes to scale workloads based on event-driven triggers.
- <strong>Azure</strong>: KEDA is closely integrated with Azure services, such as Azure Event Hubs, Azure Storage Queues, and Azure Service Bus, making it ideal for scaling applications in Azure Kubernetes Service (AKS).
- <strong>AWS</strong>: KEDA can be used with AWS services like Amazon SQS, AWS Lambda, and DynamoDB to trigger scaling actions based on events in AWS cloud environments.
- <strong>Google Cloud</strong>: KEDA works with Google Cloud's Pub/Sub, Cloud Storage, and other GCP services to provide event-driven scaling for workloads running on Google Kubernetes Engine (GKE).

## Resources:

- <strong>Youtube:</strong> [https://youtu.be/k6PEGstj3iE?si=8sjzdG3EpZuiHJUE](https://youtu.be/k6PEGstj3iE?si=8sjzdG3EpZuiHJUE)
- <strong>Blog:</strong> [https://medium.com/cuddle-ai/auto-scaling-microservices-with-kubernetes-event-driven-autoscaler-keda-8db6c301b18](https://medium.com/cuddle-ai/auto-scaling-microservices-with-kubernetes-event-driven-autoscaler-keda-8db6c301b18)
- <strong>Docs:</strong> [https://keda.sh/docs/2.16/](https://keda.sh/docs/2.16/)
- <strong>Website:</strong> [https://keda.sh/](https://keda.sh/)

---


# 1. AI Tools for DevOps Engineers


---


### <strong>Warp Terminal: A Next-Gen Tool for DevOps Engineers</strong>


### Purpose:


At its core, Warp is a <strong>modern terminal</strong> designed to be faster, more intuitive, and more collaborative than traditional terminals like the classic command-line interface (CLI) or tools like iTerm and Hyper. Warp aims to make the command-line experience less daunting, especially for DevOps engineers who spend a lot of time using it for tasks like automating infrastructure, managing servers, and debugging issues.


Warp isn't just another terminal—it’s built from the ground up to give users a more productive environment. With features like <strong>autocompletion</strong>, <strong>command history search</strong>, and <strong>visual feedback</strong>, Warp makes the command line feel more like a powerful IDE (Integrated Development Environment) than a standard terminal.


---


### Why Warp Terminal is Essential for DevOps Engineers

- <strong>Enhanced Efficiency</strong>
- <strong>Simplified Troubleshooting</strong>
- <strong>Streamlined Collaboration</strong>
- <strong>Reduced Onboarding Time for New Team Members</strong>
- <strong>Improved Organization and Workflow</strong>

---


### Download

- <strong>Mac:</strong> <code class="inline-code">brew install --cask warp</code>
- <strong>Linux:</strong> [https://www.warp.dev/download](https://www.warp.dev/download)
- <strong>Windows:</strong> Sorry! windows User’s: You’re on Window’s

---


## Resources:

- <strong>Website:</strong> [https://www.warp.dev/](https://www.warp.dev/)
- <strong>Docs:</strong> [https://docs.warp.dev/](https://docs.warp.dev/)
- <strong>Blog:</strong> [https://iemafzalhassan.notion.site/Exploring-Warp-Terminal-A-Next-Gen-Tool-for-DevOps-Engineers-13a83d10a86f8085bcb4ea97234a402c?pvs=4](https://iemafzalhassan.notion.site/Exploring-Warp-Terminal-A-Next-Gen-Tool-for-DevOps-Engineers-13a83d10a86f8085bcb4ea97234a402c)

---


# <strong>2. Pieces for Developers: Your Essential DevOps Toolbox</strong>


### <strong>Purpose:</strong>


<strong>Pieces for Developers</strong> is a powerful tool that simplifies how DevOps teams and developers store, manage, and share their work. It lets you keep code snippets, troubleshooting steps, onboarding guides, and configuration details all in one place, making it easy to find what you need when you need it.


---


### <strong>Why Pieces for Developers is Essential for DevOps Engineers</strong>

1. <strong>Centralized Knowledge Hub</strong>: Keeps all your critical DevOps resources (like scripts and setup instructions) organized in one app, so you spend less time searching.
2. <strong>Automates Routine Tasks</strong>: Store frequently used commands and workflows, reducing repetitive work.
3. <strong>Easy Collaboration</strong>: Makes it simple for your whole team to access and share essential resources, keeping everyone up-to-date.

---


### <strong>Download Links</strong>

- <strong>Mac</strong>: [Download for macOS](https://docs.pieces.app/installation-getting-started/what-am-i-installing)
- <strong>Linux</strong>: [Download for Linux](https://docs.pieces.app/installation-getting-started/what-am-i-installing)
- <strong>Windows</strong>: [Download for Windows](https://docs.pieces.app/installation-getting-started/what-am-i-installing)

---


## <strong>Resources</strong>

- <strong>Website</strong>: [Pieces for Developers](https://docs.pieces.app/)
- <strong>Docs</strong>: [Installation Guide](https://docs.pieces.app/installation-getting-started/what-am-i-installing)
- <strong>Blog</strong>: [Installation and Local LLM Setup Guide](/13b83d10a86f809fb7b0f6602d96ab3d)

---


# <strong>3. Run Powerful AI Models Locally with Ollama & OpenWebUI</strong>


### <strong>Purpose:</strong>


Ollama and OpenWebUI allow DevOps engineers to run <strong>AI models like Llama 3.2</strong> directly on their local machines, providing an alternative to relying on cloud-based services. This setup ensures that all your data stays <strong>private</strong> and <strong>secure</strong> while still providing access to a powerful AI language model—perfect for handling tasks like documentation, troubleshooting, script generation, and infrastructure management.


---


### <strong>Benefits for DevOps Engineers:</strong>

- <strong>Full Control Over Your Data</strong>:

	By running Llama models locally, you ensure that no data is sent to third-party companies, keeping your information secure. Ideal for handling sensitive infrastructure and system data.

- <strong>Free Access to Paid Versions</strong>:

	Using Docker containers, you can access <strong>Llama 3.2</strong>—a premium AI model—completely free of charge, eliminating the need for cloud services or subscriptions.

- <strong>Boost Your Productivity</strong>:

	Automate documentation, troubleshoot faster, and generate scripts or infrastructure-as-code (IaC) templates for Terraform, Kubernetes, and more with ease.

- <strong>Privacy-First AI</strong>:

	Perfect for DevOps engineers concerned with privacy. Run AI-powered tools on your own machine without the risk of sharing private data with cloud providers.


---


### <strong>Use Cases for DevOps Engineers</strong>:

- <strong>Automate Infrastructure Tasks</strong>: Generate <strong>Terraform scripts</strong> or <strong>Kubernetes manifests</strong> easily.
- <strong>Quick Troubleshooting</strong>: Resolve system performance or application issues faster with AI-assisted guidance.
- <strong>Automate Code Reviews</strong>: Ensure your scripts follow best practices and internal guidelines with AI-powered code review suggestions.

Run these tools locally and unlock the full potential of <strong>Llama 3.2</strong> in your DevOps workflow—all without sharing private data with any external services.


### <strong>Download Links</strong>

- <strong>Mac</strong>, [download](https://ollama.com/download) the <code class="inline-code">.dmg</code> file.
- <strong>Windows</strong>, [download](https://ollama.com/download) the <code class="inline-code">.exe</code> installer.
- <strong>Linux</strong>, <code class="inline-code">curl -fsSL</code> [<code class="inline-code">https://ollama.com/install.sh</code>](https://ollama.com/install.sh) <code class="inline-code">| sh</code>

---


## <strong>Resources</strong>

- <strong>Website</strong>: [Ollama](https://ollama.com/)
- <strong>Docs</strong>: [Models tab](https://ollama.com/library)
- <strong>Blog</strong>: [Installation and Local LLM Setup Guide](/13b83d10a86f8065900dc5d47db77c5b)

---


## Integrating Ollama with the Continue Extension in VSCode or VSCodium: A Simple Guide for Developers

---


### <strong>Introduction</strong>


When you're coding, having the right tools can make all the difference. Integrated Development Environments (IDEs) like Visual Studio Code (VSCode) or VSCodium are designed to streamline the coding process. These tools help developers by combining things like code editors, debuggers, and compilers into one place. But what if you could make these tools even smarter?


That’s where <strong>Large Language Models (LLMs)</strong>, like <strong>Ollama</strong> and the <strong>Continue extension</strong>, come in. They bring AI-powered features to your IDE, helping you generate code, find errors, and even suggest improvements, all in real-time.


In this blog post, we'll walk you through how to set up <strong>Ollama</strong> (a tool that lets you run LLMs locally) with the <strong>Continue extension</strong> in VSCode or VSCodium. Let's get started!


---


### <strong>What is VSCode?</strong>


<strong>Visual Studio Code (VSCode)</strong> is one of the most popular code editors in the world. Developed by Microsoft, it’s an open-source tool that helps developers write and debug their code efficiently. VSCode is packed with powerful features like:

- <strong>IntelliSense</strong>: This helps with auto-completion and quick suggestions as you type.
- <strong>Debugging</strong>: You can find and fix bugs in your code without leaving the editor.
- <strong>Extensions</strong>: VSCode supports a wide range of extensions that add even more functionality.

VSCode is widely used because it’s free and supports almost every programming language.


---


### <strong>What is VSCodium?</strong>


If you're concerned about privacy, you might prefer <strong>VSCodium</strong>. It's a version of VSCode that’s completely free of telemetry (tracking your usage). The codebase of VSCodium is exactly the same as VSCode, but it doesn’t collect any data about your usage. If you care about privacy but want to use VSCode’s features, VSCodium is a great choice.


---


### <strong>What is Ollama?</strong>


<strong>Ollama</strong> is a tool that allows you to run Large Language Models (LLMs) on your local computer. These LLMs, like <strong>Mistral</strong> and <strong>Llama 2</strong>, are powerful AI models that can understand and generate human-like text. With Ollama, you can easily integrate these models into your development tools.


Imagine having a personal assistant that can help you with code generation, answer your coding questions, and even help you debug. Ollama makes this possible by running models like Mistral on your own computer, so everything stays private and secure.


---


### <strong>What is the Continue Extension?</strong>


<strong>Continue</strong> is an extension for <strong>VSCode</strong> (and also works with JetBrains IDEs) that brings AI-powered help right into your editor. It allows developers to interact with Large Language Models (LLMs) directly in the IDE. With Continue, you can:

- Ask questions about your code.
- Get suggestions for improving your code.
- Generate entire files from scratch.
- Refactor code with just a few commands.

The best part? You can run it on your local machine using <strong>Ollama</strong> and still get all the benefits of AI without sending any of your data to the cloud.


---


### <strong>How to Set Up Ollama with Continue in VSCode or VSCodium</strong>


Now that you know what all these tools do, let’s walk through the steps to get everything working together. Here's how you can set up <strong>Ollama</strong> with <strong>Continue</strong> in VSCode or VSCodium.


### <strong>Step 1: Install VSCode or VSCodium</strong>

1. <strong>VSCode</strong>: [Download VSCode](https://code.visualstudio.com/) and install it on your machine. It’s free and works on all major operating systems like Windows, macOS, and Linux.
2. <strong>VSCodium</strong>: If you prefer a privacy-friendly version, you can download [VSCodium](https://vscodium.com/), which is exactly like VSCode but without telemetry.

### <strong>Step 2: Install the Continue Extension</strong>

1. Open <strong>VSCode</strong> or <strong>VSCodium</strong>.
2. Go to the Extensions marketplace by clicking on the <strong>Extensions icon</strong> on the sidebar (it looks like a square with four smaller squares inside).
3. In the search bar, type "Continue" and look for the extension by the author <strong>Continue</strong>.
4. Click <strong>Install</strong> to add the extension to your editor.

### <strong>Step 3: Install and Set Up Ollama</strong>


To use Ollama locally, you’ll need to install it and run it on your machine. Ollama helps you run LLMs like <strong>Mistral</strong> on your local system, ensuring everything stays private.

1. <strong>Download Ollama</strong>: Visit [Ollama’s website](https://ollama.com/) and download the application for your operating system.
2. <strong>Run Ollama Locally</strong>: Once installed, launch Ollama on your machine. This will allow your IDE to interact with local LLMs.

### <strong>Step 4: Connect Continue to Ollama</strong>

1. Open <strong>VSCode</strong> or <strong>VSCodium</strong> and click on the <strong>Continue extension</strong> icon in the sidebar.
2. Click on the <strong>Settings</strong> icon (bottom-right corner) to configure Continue.
3. Add the Ollama configuration in the settings. Here’s an example of what the configuration might look like:

	<div class="code-block-wrapper">
  <pre><code class="language-json">"models": [
	  {
	    "title": "Mistral",
	    "provider": "ollama",
	    "model": "mistral:latest",
	    "apiBase": "<http://localhost:11434/>"
	  }
	]</code></pre>
</div>

4. Save the settings.

### <strong>Step 5: Test Everything</strong>


To test that everything is set up correctly:

1. Open a sample file, like the <code class="inline-code">continue_tutorial.py</code> file that comes with the Continue extension.
2. Highlight some code and ask Continue to explain it or even refactor it for you.
3. You should now see <strong>Mistral</strong> (the LLM) helping you with code suggestions and explanations!

---


### <strong>Wrapping Up</strong>


Now you’ve successfully set up Ollama with Continue in VSCode or VSCodium! This integration brings the power of AI to your development environment, allowing you to:

- <strong>Get AI-powered suggestions</strong> for your code.
- <strong>Refactor code easily</strong> using the Continue extension.
- <strong>Keep everything private</strong>, with Ollama running everything locally on your machine.

By using these tools, you’ll make your coding workflow faster, more efficient, and smarter. And the best part is, you don’t have to worry about privacy because everything stays on your computer!


---


### <strong>Final Thoughts</strong>


Integrating AI into your development tools can feel like a game-changer. Whether you’re just starting out or have been coding for years, tools like <strong>VSCode</strong>, <strong>VSCodium</strong>, <strong>Ollama</strong>, and <strong>Continue</strong> can help you work smarter, not harder. Give it a try and let us know how it boosts your productivity!


---


I hope this helps you get started with Ollama and Continue. If you have any questions or need more tips, feel free to reach out!

