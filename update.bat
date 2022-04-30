@echo off
set message=%1

@REM gatsby build
git add -A
git commit -m %message%
git push origin main
git status

@REM cd public
@REM move * D:\Users\jilyan\React\jilyan-portfolio-baked

@REM cd D:\Users\jilyan\React\jilyan-portfolio-baked
@REM git add -A
@REM git commit -m "commit message"
@REM git push origin gh-pages
@REM git status

@REM cd D:\Users\jilyan\React