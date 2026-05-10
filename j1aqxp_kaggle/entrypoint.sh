#!/bin/sh

# Várjunk egy kicsit, hogy a MongoDB biztosan elinduljon a másik konténerben
echo "Waiting for MongoDB..."
sleep 5

# Lefuttatjuk az importálást
echo "Running data import..."
node importData.js

# Elindítjuk a tényleges szervert
echo "Starting server..."
node server.js