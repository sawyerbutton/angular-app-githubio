# AngularAppGithub.io

## 如何在github.io上部署Angular web应用程序

> Github Pages 是 Github的一个强大功能,可以在其上免费托管静态网站或网络应用程序

> 使用方式也及其简单,只需要将文件放入`gh-pages`的分支中即可

> 而配合Angular CLI和node库[angular-cli-ghpages](https://github.com/angular-schule/angular-cli-ghpages)可以帮助你更快捷地将Angular app部署在Github pages中

## 如何部署

1. 在Angular app目录下安装`angular-cli-ghpages`

```bash
npm i angular-cli-ghpages --save-dev
```

2. 在`package.json`文件中配置node可执行指令

```json
{
"scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e",
    "deploy": "ng build --prod --base-href /angular-app-githubio/ && angular-cli-ghpages --dir ./dist/angular-app-githubio/"
  }
 }
```

3. 执行npm deploy指令

```bash
npm run deploy
```

4. 打开浏览器输入 `https://<username>.github.io/<repo-name>/`即可看到部署在Github pages上的Angular web应用程序

## 值得注意的地方

- 注意要确保托管在github上的repo名称和本地一致以避免命名不匹配冲突
- 在使用Angular CLI 6 或更高版本时,打包后的文件将会在`dist`文件夹的以项目名称命名的子文件夹中,如存在此种状况需要对npx指令进行制定目录的部署如

```bash
npx ngh --dir=dist/[PROJECTNAME]
```

- 在绝大多数情况下,`[PROJECTNAME]`能在`angular.json`文件中的`defaultProject`字段下找到

