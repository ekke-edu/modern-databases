FROM mcr.microsoft.com/devcontainers/base:jammy

# 1. MongoDB Shell (mongosh) telepítése
RUN curl -fsSL https://www.mongodb.org/static/pgp/server-7.0.asc | \
    gpg -o /usr/share/keyrings/mongodb-server-7.0.gpg --dearmor && \
    echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-7.0.gpg ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/7.0 multiverse" | tee /etc/apt/sources.list.d/mongodb-org-7.0.list && \
    apt-get update && apt-get install -y mongodb-mongosh

# 2. Neo4j Cypher Shell telepítése
RUN curl -fsSL https://debian.neo4j.com/neotechnology.gpg.key | \
    gpg -o /usr/share/keyrings/neo4j.gpg --dearmor && \
    echo "deb [ signed-by=/usr/share/keyrings/neo4j.gpg ] https://debian.neo4j.com stable latest" | tee /etc/apt/sources.list.d/neo4j.list && \
    apt-get update && apt-get install -y cypher-shell

# Opcionális: Munkakönyvtár beállítása
WORKDIR /workspace