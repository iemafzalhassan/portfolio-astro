pipeline {
    agent any
    
    environment {
        DOCKER_REGISTRY = 'your-registry'
        DOCKER_CREDS = credentials('docker-credentials')
        KUBE_CONFIG = credentials('kubernetes-config')
        TAG = sh(script: 'git rev-parse --short HEAD', returnStdout: true).trim()
    }
    
    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install -g pnpm'
                sh 'pnpm install'
            }
        }
        
        stage('Code Quality') {
            steps {
                sh 'pnpm run check'
            }
        }
        
        stage('Build') {
            steps {
                sh 'pnpm run build'
            }
        }
        
        stage('Docker Build & Push') {
            steps {
                sh """
                    docker build -t ${DOCKER_REGISTRY}/portfolio:${TAG} .
                    echo ${DOCKER_CREDS_PSW} | docker login ${DOCKER_REGISTRY} -u ${DOCKER_CREDS_USR} --password-stdin
                    docker push ${DOCKER_REGISTRY}/portfolio:${TAG}
                """
            }
        }
        
        stage('Deploy to Kubernetes') {
            steps {
                sh """
                    kubectl --kubeconfig=${KUBE_CONFIG} apply -f k8s/
                    kubectl --kubeconfig=${KUBE_CONFIG} set image deployment/portfolio portfolio=${DOCKER_REGISTRY}/portfolio:${TAG}
                """
            }
        }
    }
    
    post {
        always {
            sh 'docker logout ${DOCKER_REGISTRY}'
            cleanWs()
        }
    }
}
