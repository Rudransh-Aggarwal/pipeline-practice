pipeline{
    agent any

    stages{
        stage('checkout'){
            steps{
            checkout scm
            }
        }

        stage('build'){
            steps{
            bat 'npm install'
            bat 'docker build -t app ./web-app'
            }
        }

        stage('deploy'){
            steps{
            bat 'docker run -d -p 3000:3000 app'
            }
        }
    }
}