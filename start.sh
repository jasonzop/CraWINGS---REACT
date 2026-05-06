#!/bin/bash

# CraWings HW4 Start Script

echo "Killing existing processes on ports 5000 and 5173..."

fuser -k 5000/tcp || true
fuser -k 5173/tcp || true

sleep 2

echo "Starting backend server..."
cd /workspaces/CraWINGS---REACT/server
npm run dev &

sleep 5

echo "Starting frontend server..."
cd /workspaces/CraWINGS---REACT
npm run dev
