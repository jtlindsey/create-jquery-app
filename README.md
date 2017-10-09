# Proof of Concept

Why use React, Angular, Vue, etc if you are using any jQuery?
----
 If you need jQuery for anything in your React, Angular, Vue, etc app, why not just jQuery the whole thing? Many of the imporvements seen from projects like React in development and production performance come from their rendering engine PLUS tools like HotModuleReplacementPlugin, bundling and minification, reusing code, seperating sections into modules/components, and using state to easily track and control behavior. 

 Many of these tools/conventions can be used without switching to React. And following many of the practices seen in React and other templating engines now can better prepare you to migrate to them in the future. You can reduce your jQuery dependencies one function, module or component at a time.

 jQuery doesn't play well in React. And some apps have difficult to replace dependencies like [jQuery Datatables.js](https://datatables.net/). Some React plugins come close to replacing jQuery datatables but none without error. After converting a large app to ReactJS failed because of timelines and lots of jQuery dependencies, I made some changes. I took some of the things I experienced from React and started re-factoring the jQuery app to perform more like a React app.

The best features I experience working with React that I hadn't used before were:

1. Webpack and HotModuleReplacementPlugin
2. Easy navigation with React Router.
3. Webpack Bundled and minified files.
4. Fast loading SPAs.
5. State management with Redux and Redux-Thunk

I'm not a front end developer but frequently need to do front-end work to prototype front-ends for API's. This SPA is a quick and dirty working example of 1-4 as a jQuery SPA. Like a jQuery version of "create-react-app" i guess. Many changes may need to be made for your use, and to handle SEO if needed. This example also shows working navigation with browser history.


Run with: `npm start`

For production build run: `npm run build`  

And test new production bundle with: `npm run server`  

Modified from the WebPack getting started guides:
[Webpack](https://webpack.js.org/guides/getting-started)