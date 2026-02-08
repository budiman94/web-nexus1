@echo off
echo Building Nexus Web Application...
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Node.js is not installed or not in PATH
    echo Please install Node.js from https://nodejs.org/
    echo After installation, restart this command prompt and try again.
    pause
    exit /b 1
)

echo Node version:
node --version
echo.

REM Install dependencies
echo Installing dependencies...
call npm install
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: npm install failed
    pause
    exit /b 1
)

echo.
echo Building application...
call npm run build
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: npm run build failed
    pause
    exit /b 1
)

echo.
echo Build completed successfully!
echo Run 'npm run preview' to test locally on http://localhost:4173
echo.
echo Next step: Push to GitHub
echo   git add .
echo   git commit -m "Build and deploy"
echo   git push origin main
echo.
pause
