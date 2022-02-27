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
               withCredentials([usernamePassword(credentialsId: 'docker-hub', passwordVariable: 'pass', usernameVariable: 'user ')]) {
                    sh "docker login -u ${user} -p ${pass}"
                }
            }
        }
    }
}