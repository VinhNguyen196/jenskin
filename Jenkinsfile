pipeline {
    agent any
    tools {
        nodejs "NodePlugin"
        dockerTool "DockerPlugin"
    }
    
    stages {
        // stage("Login with user role") {
        //     steps {
        //         sh 'touch /home/password.sh >> docker'
        //         sh 'sudo -u docker /home/password.sh'
        //     }
        // }
        stage("SonarQube check") {
            script {
                def scannerHome = tool name: 'sonarqube', type: 'hudson.plugins.sonar.SonarRunnerInstallation'
            }
            withSonarQubeEnv(installationName: 'sq1') {
                sh '${scannerHome}/bin/sonar-scanner'
            }
        }
        // stage("Quality Gate") {
        //     steps {
        //         timeout(time: 1, unit: 'HOURS') {
        //             // Parameter indicates whether to set pipeline to UNSTABLE if Quality Gate fails
        //             // true = set pipeline to UNSTABLE, false = don't
        //             waitForQualityGate abortPipeline: true
        //         }
        //     }
        // }
        // stage("Npm install") {
        //     // steps {
        //     //     nodejs('Node-17.6.0') {
        //     //         sh 'npm install'
        //     //     }
        //     // }
        //     steps {
        //         sh 'npm install'
        //     }
        // }
        // stage("Init docker") {
        // //    steps {
        // //         script {
        // //             def dockerHome = tool 'docker-server'
        // //             dockerHome.image('tomcat')
        // //             dockerHome.pull()
        // //             env.PATH = "${dockerHome}/bin:${env.PATH}"
        // //         }
        // //    }
        //     steps {
        //         sh 'docker --version'
        //         //sh 'sudo chmod 666 /var/run/docker.sock'
        //     }
        // }
        // stage("Build image") {
        //     steps {
        //        sh "docker build -t vinhnquoc/jenkins:test-demo-$BUILD_NUMBER ."
        //     }
        // }
        // stage("Login dockerhub") {
        //     steps {
        //        withCredentials([usernamePassword(credentialsId: 'docker-hub', passwordVariable: 'pass', usernameVariable: 'user')]) {
        //             sh "docker login -u $user -p $pass"
        //         }
        //     }
        // }
        // stage("Push Image") {
        //     steps {
        //        sh "docker push vinhnquoc/jenkins:test-demo-$BUILD_NUMBER"
        //     }
        // }
    }
}