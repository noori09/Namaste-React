const heading = React.createElement("h1",
{
    id: "title",
},
"Hello World1");

const heading2 = React.createElement("h2",
{
id:"title",
},
"Hello World2");

const container = React.createElement("div",
{
id:"container",
},
[heading,heading2])

const root = ReactDOM.createRoot(document.getElementById("root"));
//passing the react element inside the root.
// root.render(heading);
root.render(container);