# What are the commands for npm
1. npm init - this will initialize your project if you want to create project with default values you can use npm init --y to confirm all default values
2. npm i or npm install [name of the package] for example npm i axios. Will install axios
3. To install package as dev dependency we can use npm i -D [name of the package]. For example npm i -D Axios. This package will be added into devDependencies section in our package.json
4. npm i. This will install ale packages that are inside the package.json file
5. To uninstall package you can use npm uninstall [name of the package]

# What can we include in our package.json file

1. For example we can include custom scripts. And then call them by typing in our terminal command npm run [name of our script]
npm run build 
can be one the the commands
be default our configuration comes with test script that will return error
we can call by call npm run test