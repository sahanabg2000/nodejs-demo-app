# Dockerized Node.js Application with GitHub Actions CI/CD

## 📌 Project Overview

This project demonstrates how to containerize a Node.js application using Docker and automate the build and deployment process using GitHub Actions CI/CD. The application is built with Express.js and the Docker image is automatically built and pushed to Docker Hub whenever changes are pushed to the GitHub repository.

---

## 🚀 Technologies Used

- Node.js
- Express.js
- Docker
- Docker Hub
- Git
- GitHub
- GitHub Actions

---

## 📂 Project Structure

```
nodejs-demo-app
│
├── .github
│   └── workflows
│       └── main.yml
├── Dockerfile
├── .gitignore
├── index.js
├── package.json
├── package-lock.json
└── README.md
```

---

## ⚙️ Features

- Express.js web application
- Docker containerization
- GitHub Actions CI/CD pipeline
- Automatic Docker image build
- Docker Hub integration

---

## 🛠️ Installation

### Clone the repository

```bash
git clone https://github.com/sahanabg2000/nodejs-demo-app.git
```

### Move into the project

```bash
cd nodejs-demo-app
```

### Install dependencies

```bash
npm install
```

### Run the application

```bash
npm start
```

Open:

```
http://localhost:3000
```

---

## 🐳 Docker Commands

### Build Docker Image

```bash
docker build -t sahanabg11/nodejs-demo-app:latest .
```

### Run Docker Container

```bash
docker run -d -p 3000:3000 --name my-node-app sahanabg11/nodejs-demo-app:latest
```

---

## 🔄 CI/CD Pipeline

Whenever code is pushed to the **main** branch:

1. GitHub Actions is triggered.
2. The repository is checked out.
3. Node.js dependencies are installed.
4. Tests are executed.
5. Docker image is built.
6. Docker Hub login is performed using GitHub Secrets.
7. Docker image is pushed to Docker Hub automatically.

---

## 📷 Output

```
Welcome to my Dockerized Node.js Application with GitHub Actions CI/CD
```

---

## 👩‍💻 Author

**Sahana B Gondi**

GitHub: https://github.com/sahanabg2000