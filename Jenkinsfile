pipeline {
  agent any

  // If using the NodeJS plugin: Manage Jenkins → Tools → NodeJS → add "Node20"
  tools { nodejs 'Node20' }

  options {
    timestamps()
    buildDiscarder(logRotator(numToKeepStr: '20'))
  }

  // Use webhook (preferred) or comment this out and use Poll SCM in the job config
//  triggers { githubPush() }

  environment {
    CI = 'true'
    // Cache Playwright browsers inside workspace to avoid re-downloads
    PLAYWRIGHT_BROWSERS_PATH = "${WORKSPACE}\\pw-browsers"
  }

  stages {
    stage('Checkout') {
      steps {
        ansiColor('xterm') {
          // If your repo is private, configure credentialsId in your job or here
          checkout scm
        }
      }
    }

    stage('Install deps') {
      steps {
        // npm ci requires package-lock.json; if you don’t have it, use `npm i`
        bat 'npm ci || npm i'
      }
    }

    stage('Install Playwright browsers') {
      steps {
        bat 'npx playwright install'
      }
    }

    stage('Run tests') {
      steps {
         catchError(buildResult: 'UNSTABLE', stageResult: 'FAILURE') {
        bat 'npx playwright test'
         }
          }
    }
  }

  post {
    always {
      // Publish JUnit so test results show up in Jenkins
      junit 'test-results/results.xml'

      // Publish the Playwright HTML report (HTML Publisher plugin)
     publishHTML([
    allowMissing: true,
    alwaysLinkToLastBuild: true,
    keepAll: true,
    reportDir: 'playwright-report',
    reportFiles: 'index.html',
    reportName: 'Playwright Report',
    includes: '**/*'   // 🔑 ensures JS, CSS, assets are copied too
])

      // Keep artifacts for download if needed
      archiveArtifacts allowEmptyArchive: true, artifacts: 'test-results/*.xml, playwright-report/**'
    }
  }
}
