# NodeJS browser
NodeJS browser is a fork of [This github repository](https://github.com/JscramblerBlog/browser-demo), which is another fork of this [This github repository](https://github.com/klombomb/browser-demo).

This browser is basicly the same browser except there is no bookmark and there is home button

Title text is planned

command to use:

```bash
# Clone this repository
git clone
# Go into the repository
cd browser-demo
# Install dependencies
npm install
# Run the app
npm start
# build app
#this step is needed if you don't have electron packager:
# For use in npm scripts (recommended)
npm install electron-packager --save-dev

# For use from the CLI
npm install electron-packager -g
#if you have electron packager or you installed it, run build.bat or this:
electron-packager . --overwrite --icon=NJSBI.ico --prune=false
```