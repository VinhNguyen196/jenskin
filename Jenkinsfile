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
        stage("init docker") {
           steps {
                def dockerHome = tool 'docker-server'
                env.PATH = "${dockerHome}/bin:${env.PATH}"
           }
        }
        stage("build docker image") {
            steps {
               sh "docker build -t vinhnquoc/jenkins:test-demo-$BUILD_NUMBER ."
            }
        }
        stage("login github") {
            steps {
               withCredentials([usernamePassword(credentialsId: 'docker-hub', passwordVariable: 'pass', usernameVariable: 'user')]) {
                    sh "docker login -u $user -p $pass"
                }
            }
        }
        stage("docker push") {
            steps {
               sh "docker push vinhnquoc/jenkins:test-demo-$BUILD_NUMBER ."
            }
        }
    }
}