---------------------------------------------------------------------------------------------------------------------------------
https://github.com/namastedev/namaste-react
---------------------------------------------------------------------------------------------------------------------------------
40 hrs
5h daily - 8 days
---------------------------------------------------------------------------------------------------------------------------------
# Basic
- What is cdn react - React library hosted
- What is crossorigin in script -

- React.createElement - ReactElement-JS Object =>  HTML Element(render)
- ReactDOM.createRoot - Create root for React
- Role of type attribute in script tag? What options can I use there?
    type="text/javascript or no type => Javascript
    type="module                     => Load athe script as a ES module and Allows import / export
    type="application/javascript or no type => Same as text/javascript

# NPM                  -  
- npm install -D parcel
    -D - Install as dev dependecy
    ~  - Allows updates to any later version that does not change the minor version and accepts 2.16.x, such as 2.16.5, 2.16.10
    ^  - Allows updates to any later version that does not change the minor version and aAccepts 2.x.x, such as 2.16.5, 2.17.0, 2.99.0
- Package.json         - Configration for NPM which is used for dependecy management.
- package-lock.json    - Make handle all package version management
- browserlist          - Target browsers and Node.js versions for a project

# Parcel
- npm install parcel    
- npx parcel index.html       - npm run start - We can add script in package.json
- npx parcel build index.html - npm run build
- Features    
    - Dev Build
    - Local Server
    - HMR - auto run
    - Caching
    - Bundling
    - File watching alogrithm
    - Error handling
    - Tree Shaking - remove un used

# JSX 
- JSX is not a HTML inside a JS
- HTM like syntax
- Use Camel case for add attribute
- Babel - JavaScript/TypeScript compiler
- SWC   - JavaScript/TypeScript compiler
- Senitize the data


# React Component
- Class based Component - Old
    A class which return a react component

- Functional Component  - New
    - A function which return a ReactElement/JSX code
    - {} using this we can add any javascript code
    - {name}    = const Title = () => h1 tag with msg
    - {name()}  = const Title = () => h1 tag with msg
    - <name/>   = const Title = h1 tag with msg

# Props (Properties)
- Passing argument to function
- When you use .map then it should use key attribute 
- never use index as a key - anti-pattern - It not recommended