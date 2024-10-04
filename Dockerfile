# Etapa 1: Compilación de la aplicación
FROM node:22-alpine AS builder

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar los archivos package.json y package-lock.json para instalar las dependencias
COPY package*.json ./

# Instalar las dependencias necesarias
RUN npm install

# Copiar el código fuente de la aplicación a la imagen
COPY . .

# Generar la build de producción
RUN npm run build

# Eliminar las dependencias de desarrollo
RUN npm prune --production

# Etapa 2: Configuración del servidor de producción
FROM node:22-alpine

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar el build generado desde la etapa anterior
COPY --from=builder /app ./

# Exponer el puerto en el que la aplicación se ejecutará (por defecto Next.js usa el puerto 3000)
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "run", "start"]
