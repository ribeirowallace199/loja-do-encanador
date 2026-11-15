@echo off
chcp 65001 > nul
echo ========================================================
echo   Subindo o projeto Loja do Encanador para o GitHub...
echo ========================================================
git push -u origin main
if %errorlevel% equ 0 (
    echo.
    echo [SUCESSO] Projeto publicado no GitHub com sucesso!
) else (
    echo.
    echo [AVISO] Certifique-se de que criou o repositório 'loja-do-encanador' no seu GitHub:
    echo https://github.com/new
)
echo ========================================================
pause
