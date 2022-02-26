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
    }
}