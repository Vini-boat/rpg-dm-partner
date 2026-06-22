# 1. VISÃO GERAL

Este documento descreve como configurar o ambiente completo do projeto:

- Java 21
- Maven
- IntelliJ IDEA
- Docker + Docker Compose
- PostgreSQL (Docker)
- Spring Boot (backend)
- Execução local e via Docker

Estrutura do projeto (monorepo):

```
repo/
├── backend/
├── docker-compose.yml
├── SETUP.md
```

# 2. JAVA 21 (JDK)

Instalar Eclipse Temurin JDK 21:

[adoptium.net](https://adoptium.net/)

Configurar variável de ambiente:

`JAVA_HOME`: 
```
C:\Program Files\Eclipse Adoptium\jdk-21.x.x
```
Adicionar ao `PATH`:
```
%JAVA_HOME%\bin
```

Verificar:

```powershell
java -version
```
```powershell
javac -version
```
Esperado:
21.x.x


# 3. MAVEN

Baixar:
[maven.apache.org](https://maven.apache.org/download.cgi)

Instalar em:
```
C:\Users\<user>\Tools\apache-maven
```
Variáveis:

`MAVEN_HOME`:
```
C:\Users\<user>\Tools\apache-maven
```
`PATH` += 
```
%MAVEN_HOME%\bin
```
Verificar:
```powershell
mvn -version
```

# 4. DOCKER + DOCKER COMPOSE

Instalar Docker Desktop:
[docker.com]https://www.docker.com/products/docker-desktop/

Verificar:
```powershell
docker --version
```
```powershell
docker compose version
```
Teste:
```powershell
docker run hello-world
```

# 5. INTELLIJ IDEA

IMPORTANTE:

Abrir o projeto na RAIZ do monorepo.

Configurar SDK:

File → Project Structure → Project SDK → Java 21


# 6. ESTRUTURA DO PROJETO
```
repo/
├── backend/
│   ├── src/
│   ├── pom.xml
│   ├── Dockerfile
│   └── .mvn/
├── docker-compose.yml
└── SETUP.md
```
# 7. COMO RODAR O PROJETO

Rodar tudo com Docker:
```powershell
docker compose up --build
```

Rodar backend local:
```powershell
cd backend && \
mvn spring-boot:run -DskipTests
```

# 8. VERIFICAÇÃO

Backend:
[http://localhost:8080]http://localhost:8080

Postgres:
```powershell
docker exec -it rpg-postgres psql -U rpguser -d rpgdb
```

# 9. PROBLEMAS COMUNS

Java errado:

`java -version` (deve ser 21)

Docker não sobe:

`docker ps`

Spring não conecta no banco:
- verificar compose
- verificar host "postgres" no Docker
- verificar env vars
