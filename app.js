/*
<div id="parent">
    <div id="child1">
        <h1>I'm a h1 tag</h1>
        <h2>I'm a h2 tag</h2>
    </div>
     <div id="child2">
        <h1>I'm a h1 tag</h1>
        <h2>I'm a h2 tag</h2>
    </div>
</div>
*/

const parent = React.createElement(
  "div", // element name
  { id: "parent" }, // attributes
  [
    React.createElement("div", { id: "child1" }, [
      React.createElement("h1", { style: { color: "red" } }, "I'm a h1 tag"),
      React.createElement("h2", { style: { color: "red" } }, "I'm a h2 tag"),
    ]), // children or array of children,
    React.createElement("div", { id: "child2" }, [
      React.createElement("h1", { style: { color: "blue" } }, "I'm a h1 tag"),
      React.createElement("h2", { style: { color: "blue" } }, "I'm a h2 tag"),
    ]), // children or array of children
  ],
);


// JSX


// const header = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello World from React!",
// );

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root")); // Created root for React

// root.render(header);

root.render(parent);
