# reactjs-getting-started
getting started with reactjs

# Refrence
https://github.com/facebook/create-react-app

# install NodeJS in your system

# install 'create-react-app' globally via terminal/cmd
> npm install -g create-react-app

# Start your new react-app
> npx create-react-app reacjs-getting-started

# Run your react-app
> npm start

# npm VS npx
Npm is a tool that use to install packages. Npx is a tool that use to execute packages.

# Some good practices
1. add your node_modules in gitignore file so that your repo size will be minimized in a good way.
2. 

# Axios for HTTP Requests
https://alligator.io/react/axios-react/

# Mock Api to get Data
> http://rallycoding.herokuapp.com/api/music_albums 

# Reactjs App Deployment using Github Pages
https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f

1. Add following commands in your package.json 'scripts' object:
> "predeploy": "npm run build",
> "deploy": "gh-pages -d build"

2. add following line above name property in package.json:
"homepage": "https://muhammadawaisshaikh.github.io/reactjs-getting-started/"

3. instal gh-pages npm:
> npm install --save gh-pages

4. include build directory to push on git: remove from gitignore

5. run build using following command:
> npm run deploy