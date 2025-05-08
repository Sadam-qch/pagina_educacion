# Imagen base para CI/CD
FROM node:21-alpine   

# Instalar dependencias necesarias
RUN apk add --no-cache git

WORKDIR /app

# Copiar archivos necesarios para instalar dependencias
COPY package*.json ./

# Instalar todas las dependencias
RUN npm install

# Copiar el resto del código
COPY . .

# Copiar el archivo de ejemplo de variables de entorno
RUN cp .env.example .env

# Exponer puerto
EXPOSE 3000

# Comando para desarrollo
CMD ["npm", "run", "dev"]
