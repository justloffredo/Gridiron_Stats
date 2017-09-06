<img src="src/assets/images/football.jpg" align="right" />

# Gridiron Stats --- NFL Crimes Application <br> [![MIT license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/samirdhebar/Gridiron_Stats/master/LICENSE.md)
An application created by [Samir Dhebar](https://github.com/samirdhebar) and [Justin Loffredo](https://github.com/justloffredo). A front-end application that illustrates crime information between teams in the National Football League.

## Getting Started

You must be on a Node version greater than 6 to use this. Once you've npm
installed, there are only two commands:

* `npm run start` - Runs the development server (Specify port with PORT, default 3000)
* `npm run build` - Builds the production version, which goes into `dist`

Once you start building things with this template, you may want to remove the
`.placeholder` files in `src/assets/fonts`, `src/assets/images`, and
`src/components` folders. They were added just to check in those directories.

## React / Webpack Template

This template allows you to very quickly spin up a React application that's
equipped with Webpack for builds. It provides the following features:

* ES2017 and JSX using Babel
* Style components using SASS
* Asset resolving via file loader for JS and CSS
* Image compression using image-webpack-loader
* Hot module replacement with Webpack Dev Server
* Source maps in development and production
* A standard minified production build

## Project Structure

```
.
├── src                # Source code, including raw assets
│   ├── App.jsx        ### The top-level component for React
│   ├── App.scss       ### Any general, non-component styling done here
│   ├── assets         ### Static assets
│   │   ├── fonts      ##### Fonts(eot|otf|ttf|woff|woff2)
│   │   └── images     ##### Images (gif|png|jpe?g|svg|ico)
│   ├── components     ### Any shared components
│   ├── index.ejs      ### HTML template for the app
│   └── index.js       ### Webpack entry point / component mounting
├── util               # Where API call is held    
├── dist               # Any built files are here, not checked in
└── webpack.config.js  # Webpack configuration for dev _and_ production
```

## Technology Used
<img
* [NFL Arrest API](http://www.nflarrest.com/) pulls provides a database of arrests for players from the National Football League starting from January 1, 2000.

<img src="src/assets/images/node.png" align= "center" /> <br><br>  
* [Node](https://nodejs.org/en/) is a multi-platform, open-source JavaScript run-time environment that executes code on the server-side.
<br><br>

<img src="src/assets/images/rsz_react.png" align= "center" /> <br><br>  
* [React](https://facebook.github.io/react/) is a declarative, component based Javascript library built for creating user interfaces.

<img src="src/assets/images/chart.svg" align="center" /> <br><br>
* [Chart.js](http://www.chartjs.org/) is a responsive, open-source Javascript library that helps build visualization of data through numerous customizable chart types.

<img src="src/assets/images/semantic.png" align= "center" /> <br><br>
* [Semantic](http://www.semantic-ui.com) is a UI component framework based around useful principles from natural language.
<br>


## Contribute
* Contributions are always welcome! Please read the [contribution guidelines](CONTRIBUTING.md) first.

## Attribute
* The template that was used to spin up React that is equipped with Webpack can be found [here](https://github.com/wbobeirne/nycda-react-webpack-template). Thanks [Will O'Beirne](https://github.com/wbobeirne)!

## License
* This frontend web application is available under the [MIT License](https://github.com/samirdhebar/Gridiron_Stats/blob/master/LICENSE.md).
