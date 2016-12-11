# React + postCSS + ITCSS + BEM + webpack
Playing with CSS tech

## Good Resources:
- [CSS Grid Layout W3c implementation](https://www.w3.org/TR/css3-grid-layout/)
- [CSS Grid Layouts, 4 methods](https://www.sitepoint.com/easy-responsive-css-grid-layouts/)
- [A completed Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [React Responsive Grid](https://github.com/KyleAMathews/react-responsive-grid)
- Lots of components with BEMIT and PostCSS [here](https://github.com/AljanScholtens/taiga-boilerplate/tree/master/assets/stylesheets)

## Features
- [React](https://facebook.github.io/react) 
- [ES6](http://es6-features.org) (with [babel](https://babeljs.io))
- [PostCSS](http://postcss.org/) using [BEM](http://getbem.com/introduction/) + ITCSS = [BEMIT](http://csswizardry.com/2015/08/bemit-taking-the-bem-naming-convention-a-step-further/) methodology. 
    - [PostCSS + BEMIT Starter](https://github.com/chadwatson/bemit-postcss-starter). 
    - See this [sample](https://github.com/xfiveco/chisel-sample/tree/master/src/styles)
    - PostCSS [sample](https://github.com/AljanScholtens/taiga-boilerplate)
    - PostCSS parts. [Grids](http://postcss.parts/tag/grids)
- [Hot Module Replacement](https://medium.com/@dan_abramov/hot-reloading-in-react-1140438583bf#.xh6v0ht7j) ([React Hot Loader 3](https://github.com/gaearon/react-hot-loader/issues/243))
- Webpack
    - [Webpack-dev-server](https://webpack.js.org/how-to/develop/#webpack-dev-server)
    - Webpack PostCSS configuration
    - [Webpack configuration for HMR](https://webpack.js.org/how-to/hot-module-reload)
    - Webpack production configuration
         - Split out css files (two threads, JS and CSS) using [ExtractTextPlugin](https://github.com/webpack/extract-text-webpack-plugin) 
         - [UglifyJsPlugin with options](https://github.com/webpack/webpack/blob/v1.13.3/lib/optimize/UglifyJsPlugin.js)
         - Use include in the loader instead of the exclude. [More info](http://stackoverflow.com/questions/37823764/how-include-and-exclude-works-in-webpack-loader)
         - More perfomance tips: [here](https://medium.com/@khanght/optimize-webpack-production-build-ec594242b222#.bj3eyg65p)
    - Webpack stats (bundle optimization helper)
        - Generate stats.json file with profiler. Use (this tool)[http://webpack.github.io/analyse/] to analyze it.
        - [webpack visualizer](https://chrisbateman.github.io/webpack-visualizer/)
<br />

### Features NOT INCLUDED (TODOs)
- [Redux](https://css-tricks.com/learning-react-redux)
- Testing. Integrate with [Jest](https://facebook.github.io/jest/)
- Linting. Integrate with [eslint](http://eslint.org/docs/user-guide/configuring)




<br /><br />
## Getting Started
### Install pre-requisites
- Node.js and NPM: [Download and install](https://nodejs.org/). *I have version 6.6.0 of Node and 3.10.6 of NPM on Windows PC*
- Git: [Download and install](https://git-scm.com/). *I have version 2.7.4 installed on Windows PC*

### Clone Repo
1. Get the url of your forked project.
    - Go to https://github.com/username/react-webpack-postCSS
2. Click on **"Clone or download"** and Copy to clipboard the url ending on .git.
3. Open your command line and go to your directoy  
*You don't need to create a specific folder for the project, it will be created by git*
4. Clone your forked repo on your machine:
```
$ git clone https://github.com/username/react-webpack-postCSS
```  
*Note: That will create a new folder called react-webpack-postCSS with all the files in.*

### Install Project dependencies

```
$ cd react-webpack-postCSS
$ npm i
```


### Open the project with your Development IDE
I use VS Code https://code.visualstudio.com
Open the project using this command:
```
$ code .
``` 

### Start development server with Hot Reloading
```
$ npm run start
```

### Done! 


## Contributing
Please feel free to add your own improvement

## License
MIT License
Copyright (c) 2016 Jose Quinto Zamora