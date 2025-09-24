# Imagen base oficial de Node
FROM node:18

# Carpeta de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia dependencias e instálalas
COPY package*.json ./
RUN npm install

# Copia el resto del código
COPY . .

# Puerto en el que escucha tu app
EXPOSE 3000

# Arranca la app
CMD ["npm", "start"]
