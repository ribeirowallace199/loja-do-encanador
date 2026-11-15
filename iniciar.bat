@echo off
title Loja do Encanador - Site
echo ===================================================
echo     INICIANDO SITE DA LOJA DO ENCANADOR
echo ===================================================
echo.
cd /d "%~dp0"
if not exist node_modules (
    echo Instalando dependencias pela primeira vez...
    call npm install
)
echo Abrindo o site no seu navegador...
start http://localhost:5173
call npm run dev
pause
