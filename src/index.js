// import _ from "lodash";
//
// import printMe from "./print.js";

// function component() {
//     const element = document.createElement("div");
//     element.innerHTML = _.join(["Hello", "Webpack"], " ");
//     return element;
// }

// document.body.appendChild(component());

function getComponent() {
    return import("lodash")
        .then(({ default: _ }) => {
            const element = document.createElement("div");
            element.innerHTML = _.join(["Hello", "Webpack"], " ");
            return element;
        })
        .catch(error => "An Error occurred while loading the component");
}

getComponent().then(component => {
    document.body.appendChild(component);
});
