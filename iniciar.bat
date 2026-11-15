@echo off
title Casa do Encanador - Site
echo ===================================================
echo     INICIANDO SITE DA CASA DO ENCANADOR
echo ===================================================
echo.
cd /d "%~dp0"
echo Abrindo o servidor local...
start http://localhost:5173
npm run dev
pause
