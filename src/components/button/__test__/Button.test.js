import React from 'react';
import ReactDOM from 'react-dom';
import Button from "./../button";
import {isTSAnyKeyword} from "@babel/types";
import {render} from "@testing-library/react";
import '@testing-library/jest-dom'
import renderer from "react-test-renderer";
// npm install @testing-library/react @testing-library/jest-dom react-test-renderer --save-dev
// Using ReactDOM
it("renders without crashing",()=>{             // check if renders or not. Normall, component is not rendered until called. So, to test if it renders, we can create
                                                // DOM element div and binds the <Button/> component to it.
    const div = document.createElement("div");
    ReactDOM.render(<Button/>,div);
    ReactDOM.unmountComponentAtNode(div);
})

//Using testing-library/react and jest-dom
it("renders correctly",()=>{
    const {getByTestId} = render(<Button label="Click me please!" />)
    expect(getByTestId('button')).toHaveTextContent("Click me please!")
})

// it("renders correctly",()=>{    // check jest-dom npm package for more methods of checking!
//     const {getByTestId} = render(<Button label="SAVE" />)
//     expect(getByTestId('button')).toBeVisible();
// })
// toHaveClass
// toHaveStyle
// toBeVisible
// 

it("matches snapshot",()=>{         // if snapshot doesn't match, we gotta decide whether to update the snapshot or change the code! right change? Update snapshot!
    const tree = renderer.create(<Button label="hello"></Button>).toJSON();
    expect(tree).toMatchSnapshot();
})