pipeline{
    agent any

    stages{
        stage('checkout'){
            checkout scm
        }

        stage('build'){
            bat 'npm install'

            bat 'docker build -t app ./web-app'
        }

        stage('deploy'){
            bat 'docker run -d -p 3000:3000 app'
        }
    }
}