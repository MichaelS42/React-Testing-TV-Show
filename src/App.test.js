import React from 'react';
import {render, fireEvent, waitFor } from '@testing-library/react'
import App from './App';
import {fetchShow as mockFetchShow} from './api/fetchShow';
import {episodes} from './App';
import Episodes from './components/Episodes';

jest.mock("./api/fetchShow");
const apiData = [

]

test("renders App without errs", () => {
    render(<App />)
})

test("Show list renders without errs", () => {
    render(<Episodes episodes ={[]} /> )
})

test("App fetches and renders data", async () => {
    mockFetchShow.mockResolvedValueOnce({apiData: episodes})

    const {queryAllByTestId, rerender} = render(<App  error="" episodes={[]} />);
    const appTest = expect(queryAllByTestId("App")).toBeInTheDocument();
})

