@echo off
REM Navega a la carpeta de tu proyecto. ¡Asegúrate de que esta ruta sea CORRECTA!
cd /d "C:\Users\alexn\OneDrive\Documents\Pelis_Y_Series"

REM Inicia el servidor Node.js en una nueva ventana de CMD, pero sin mantener esta ventana abierta.
start "" /min "cmd.exe" /c "npm start"
exit