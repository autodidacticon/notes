---
title: Node Setup
slug: node-setup
date: '2022-12-19'
summary: Extensive javascript setup guide
---
### Setup node, npm, typescript
1. `brew install volta`
1. `volta setup`
1. `volta install node`
1. `volta install npm`

### [Node Starter Project](https://khalilstemmler.com/blogs/typescript/node-starter-project/)
1. `npm init -y`
1. `npm install typescript --save-dev`
1. `npm install @types/node --save-dev`
1. `npx tsc --init --rootDir src --outDir build \
--esModuleInterop --resolveJsonModule --lib es6 \
--module commonjs --allowJs true --noImplicitAny true`
1. cleanup `tsconfig.json`
```json
{
  "compilerOptions": {
    "target": "es5",                          
    "module": "commonjs",                    
    "lib": ["es6"],                     
    "allowJs": true,
    "outDir": "build",                          
    "rootDir": "src",
    "strict": true,         
    "noImplicitAny": true,
    "esModuleInterop": true,
    "resolveJsonModule": true
  }
}
```
1. compile typescript: `npx tsc`
1. install nodemon: `npm install --save-dev ts-node nodemon`
1. nodemon.json
```json
{
  "watch": ["src"],
  "ext": ".ts,.js",
  "ignore": [],
  "exec": "npx ts-node ./src/index.ts"
}
```
1. start nodeman from npm (add to `package.json`): `"start:dev": "npx nodemon",`
#### Production builds
1. `npm install --save-dev rimraf`


##### References
* [node-starter-project](https://khalilstemmler.com/blogs/typescript/node-starter-project/)

##### Further Reading
* [Testing Nodejs](https://khalilstemmler.com/blogs/typescript/node-starter-project/#Testing-Added-November-26th-2022)
* [ESLint with TS](https://khalilstemmler.com/blogs/typescript/eslint-for-typescript/)
