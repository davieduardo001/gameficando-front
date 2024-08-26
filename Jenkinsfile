pipeline {
    agent { label 'home-lab' }
    
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/davieduardo001/gameficando-front.git'
            }
        }

        stage('Build Docker Images') {
            steps {
                script {
                    sh 'docker-compose build'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    sh 'docker-compose up -d'
                }
            }
        }
    }

    post {
        success {
            echo 'Deployment successful!'
        }
        failure {
            echo 'Deployment failed.'
        }
    }
}