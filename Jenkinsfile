pipeline {
    agent any
    tools {
        nodejs "NodePlugin"
        dockerTool "DockerPlugin"
    }
    
    stages {
        stage("build node project") {
            // steps {
            //     nodejs('Node-17.6.0') {
            //         sh 'npm install'
            //     }
            // }
            steps {
                sh 'npm install'
            }
        }
        stage("init docker") {
        //    steps {
        //         script {
        //             def dockerHome = tool 'docker-server'
        //             dockerHome.image('tomcat')
        //             dockerHome.pull()
        //             env.PATH = "${dockerHome}/bin:${env.PATH}"
        //         }
        //    }
            steps {
                sh 'docker --version'
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