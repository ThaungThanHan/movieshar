import React from 'react';
import ReactDOM from 'react-dom';
import Header from "../Header";
import {isTSAnyKeyword} from "@babel/types";
import {BrowserRouter} from 'react-router-dom';
import {render} from "@testing-library/react";
import '@testing-library/jest-dom'

//Using testing-library/react and jest-dom
it("renders correctly",()=>{
    const {getByTestId} = render(<BrowserRouter><Header title="Movies" /></BrowserRouter>)
    expect(getByTestId('header')).toHaveTextContent("Movies")
})
// toHaveClass
// toHaveStyle
// toBeVisible
// 