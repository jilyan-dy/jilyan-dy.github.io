@REM @echo off
set message=%1

call gatsby clean
call gatsby build
git add -A
git commit -m %message%
git push origin main
git status

cd D:\Users\jilyan\React\jilyan-portfolio-baked

for /d %%a IN (*.*) DO IF /i NOT "%%~nxa"=="CNAME" RD /S /Q "%%a"
for %%i in (*.*) do if not "%%i"=="CNAME" del /q "%%i"

robocopy D:\Users\jilyan\React\jilyan-portfolio\public D:\Users\jilyan\React\jilyan-portfolio-baked /E

git add -A
git commit -m %message%
git push origin gh-pages
git status

cd D:\Users\jilyan\React\jilyan-portfolio