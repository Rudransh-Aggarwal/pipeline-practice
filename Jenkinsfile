pipeline{
    agent any

    stages{
        stage('checkout'){
            steps{
                checkout scm
            }
        }

        stage('installing dependencies'){
            steps{
                bat 'cd pro && npm install'
                bat 'cd pro && npm install express'
                bat 'cd pro && npm install mongoose'
            }
        }

        stage('deploy'){
            steps{
                bat 'docker compose down'
                bat 'docker compose up -d'
            }
        }
    }
}