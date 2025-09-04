@echo off
cd /d "D:\OneDrive\eng_nehad\OneDrive\Sample5"

:: Path to Google Chrome (adjust if Chrome is installed elsewhere)
set chromePath="C:\Program Files\Google\Chrome\Application\chrome.exe"

:: Open localhost in Chrome
start "" %chromePath% http://localhost:8000

:: Start Python server
python server.py
pause
