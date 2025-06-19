pipeline {
    agent any

    environment {
        IMAGE_NAME = 'app-journal'
        CONTAINER_NAME = 'my-journal'
        // DOCKERHUB_CREDENTIALS = credentials('dockerhub') // Optional: if pushing to DockerHub
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Build Docker Image') {
            steps {
                bat "docker build -t %IMAGE_NAME% ."
            }
        }
        stage('Stop and Remove Old Container') {
            steps {
                bat """
                docker stop %CONTAINER_NAME% || exit 0
                docker rm %CONTAINER_NAME% || exit 0
                """
            }
        }
        stage('Run New Container') {
            steps {
                bat "docker run -d -p 8088:80 --name %CONTAINER_NAME% %IMAGE_NAME%"
            }
        }
        // Optional: Push to DockerHub
        // stage('Push to DockerHub') {
        //     steps {
        //         script {
        //             sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
        //             sh 'docker tag $IMAGE_NAME $DOCKERHUB_CREDENTIALS_USR/$IMAGE_NAME:latest'
        //             sh 'docker push $DOCKERHUB_CREDENTIALS_USR/$IMAGE_NAME:latest'
        //         }
        //     }
        // }
    }
} 