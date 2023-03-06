@echo off
set message=%1

gatsby build
git add -A
git commit -m %message%
git push origin main
git status

cd public
move * D:\Users\jilyan\React\jilyan-portfolio-baked

cd D:\Users\jilyan\React\jilyan-portfolio-baked
git add -A
git commit -m %message%
git push origin gh-pages
git status

cd D:\Users\jilyan\React