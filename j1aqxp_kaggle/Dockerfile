# Node.js alap kép
FROM node:20

# Alkalmazás könyvtár létrehozása a konténeren belül
WORKDIR /usr/src/app

# Csomagleírók másolása
COPY package*.json ./

# Függőségek telepítése
RUN npm install

# Teljes forráskód másolása
COPY . .

# A port, amin a szerver fut
EXPOSE 3000

# Indítási parancs
CMD ["./entrypoint.sh"]