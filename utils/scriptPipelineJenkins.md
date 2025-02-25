
Exemplo de script para pipeline no Jenkins:
```
pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Começando o Build'
            }
        }
        stage('Testes unitários') {
            steps {
                echo 'Executando os testes unitários'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Publicando versão no ambiente de QA'
            }
        }
        stage('Testes E2E') {
            steps {
                echo 'Executando testes E2E'
            }
        }
        stage('Pronto para produção') {
            steps {
                echo 'Gerando o pacote para produção'
            }
        }
    }
}
```