import {render, Simulate, queryByText} from "@testing-library/react";
import React from "react"

import JokeGenerator from '../jokeGenerator'

test("'JokeGenerator' component fetches a random joke a renders it", ()=>{
    const {getByText} = render(
        <JokeGenerator/>
    );

    
    expect(queryByText("You haven't loaded any joke yet!")).not.toBeInTheDOM();

    expect(queryByText("Loading...")).toBeInTheDOM();
    
})