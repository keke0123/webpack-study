// import _ from "lodash";
//
// import printMe from "./print.js";

// function component() {
//     const element = document.createElement("div");
//     element.innerHTML = _.join(["Hello", "Webpack"], " ");
//     return element;
// }

// document.body.appendChild(component());

async function getComponent() {
    // return import("lodash")
    //     .then(({ default: _ }) => {
    //         const element = document.createElement("div");
    //         element.innerHTML = _.join(["Hello", "Webpack"], " ");
    //         return element;
    //     })
    //     .catch(error => "An Error occurred while loading the component");
    const element = document.createElement("div");
    const { default: _ } = await import("lodash");
    element.innerHTML = _.join(["Hello", "Webpack"], " ");
    return element;
}

getComponent().then(component => {
    document.body.appendChild(component);
});
