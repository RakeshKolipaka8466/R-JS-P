// const JSXEg=()=>{
//     return(
//         <div>This is JSX Example</div>
//     );
// }
// export default JSXEg;

import { Fragment, createElement } from "react";
const JSXEg=()=>{
    
    const data=createElement(
        "div",
        { id: "createElement" ,className: "Vishal" },
        "This is jsx eg"
    );
    console.log(data);
    return data;
    };
   export default JSXEg;

   export function MultipleElements(){
    return(
        [
            <h2>hey</h2> ,
            <h1>hi</h1> ,
            <div>This is multiple elements</div>
        ]
    );
   };



   export const FragmentEg=()=>{
    return(
        <>
        <h2>frag</h2>
        <h2>ment</h2>
        </>
    )
   }

   