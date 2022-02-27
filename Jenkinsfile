pipeline {
    
    agent any

    stages {
        stage("build node project") {
            steps {
                nodejs('Node-17.6.0') {
                    sh 'npm install'
                }
            }
        }
        stage("login github") {
            steps {
               withCredentials([usernameColonPassword(credentialsId: 'docker-hub', variable: 'DOCKER-HUB-CERT')]) {
                    sh 'echo $DOCKER-HUB-CERT'
                }
            }
        }
    }
}