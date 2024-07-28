{
  /* 
    <div id="parent">
  <div id="child1">
    <h1>I am H1 Tag</h1>
    <h2>I am H2 Tag</h2>
  </div>
  <div id="child2">
    <h1>I am H1 Tag</h1>
    <h2>I am H2 Tag</h2>
  </div>
</div> 
*/
}

// Converting these HTML code into React

// ---> for multiple child we use Array to pass... So inside createElement there is 3 things . 1st is Tag (div,h1,span,p), .2nd is Attribute (id,class), .3rd is Child ..... is there is multiple child then we will pass it like [child1,child2]

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Hi I'm H1 tag"),
    React.createElement("h2", {}, "Hi I'm H2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hi I'm H1 tag"),
    React.createElement("h2", {}, "Hi I'm H2 tag"),
  ]),
]); 

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World From react"
);


const root = ReactDOM.createRoot(document.getElementById("root"));


// root.render(heading);


root.render(parent);


