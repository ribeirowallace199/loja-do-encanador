Set-Location -Path $PSScriptRoot
Write-Host "===================================================" -ForegroundColor Cyan
Write-Host "     INICIANDO SITE DA CASA DO ENCANADOR" -ForegroundColor White
Write-Host "===================================================" -ForegroundColor Cyan
Start-Process "http://localhost:5173"
npm run dev
