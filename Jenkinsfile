pipeline {
    
    agent any

    stages {
        stage("build node project") {
            steps("Install npm package") {
                nodejs('Node-17.6.0') {
                    sh 'npm install'
                }
            }
            steps("login github") {
                withCredentials([usernameColonPassword(credentialsId: 'docker-hub', variable: 'DOCKER-HUB-CERT')]) {
                    sh 'echo ${DOCKER-HUB-CERT.username}'
                }
            }
        }
    }
}