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
                bat 'cd pro && npm install'
                bat 'cd pro && npm install express'
                bat 'cd pro && npm install mongoose'
                bat 'docker build -t mongo ./pro'
            }
        }

        stage('deploy'){
            steps{
                bat 'docker run -d -p 3000:3000 mongo'
            }
        }
    }
}