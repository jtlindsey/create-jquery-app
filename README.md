# Proof of Concept

Why use React, Angular, Vue, etc if you are using any jQuery?
----
jQuery doesn't play well in React. And some apps have difficult to replace dependencies like [jQuery Datatables.js](https://datatables.net/). Some React plugins come close but none without error. After converting a large app to ReactJS failed because of timelines and lots of jQuery dependencies, I took many of the things I learned from React and started re-factoring the jQuery app to perform more like a single React app.

The best features I experience working with React that I hadn't used before were:

1. Webpack and HotModuleReplacementPlugin
2. Easy navigation with React Router.
3. Webpack Bundled and minified files.
4. State management with Redux and Redux-Thunk

I took all these and setup a jQuery dev environment. This allows building fast Single Page Applications that have full navigation and browser history and fast load times. 

I'm not a front end developer but frequently need to do front-end work to prototype front-ends for API's. This SPA is a quick and dirty working example of 1-3 as a jQuery SPA. Like a jQuery "create-jquery-app" i guess. Many changes may need to be made for your use, and to handle SEO if needed. 


Run with: `npm start`


For production build run: `npm run build`  

And test new bundle with: `npm run server`  

Modified from the WebPack getting started guides:
[Webpack](https://webpack.js.org/guides/getting-started)

Note: Need to fix: The long bundle times started after trying to use UglifyJsPlugin and continuing to get ERROR UglifyJs Unexpected character '`'` and trying different recommended fixes. The only one that worked was adding the following to `webpack.config.js`, which slowed down bundle on every change/recompiling:

    {
      test: /\.js$/,
      use: [{ loader: 'babel-loader', options: { cacheDirectory: true } }],
      exclude: /node_modules(?!\/webpack-dev-server)/,
    },


