import React from 'react';
import {render, fireEvent, waitFor } from '@testing-library/react'
import App from './App';
import {fetchShow as mockFetchShow} from './api/fetchShow';
import {episodes} from './App';

jest.mock("./api/fetchShow");
const apiData = [

]

test("App fetches and renders data", async () => {
    mockFetchShow.mockResolvedValueOnce({apiData: episodes})

    const {queryAllByTestId, rerender} = render(<App  error="" episodes={[]} />);
    const appTest = expect(queryAllByTestId("App")).toBeInTheDocument();
})

