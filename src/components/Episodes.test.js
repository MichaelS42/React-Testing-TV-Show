import React from "react";
import { render } from "@testing-library/react"
import Episodes from "./Episodes";


test("episodes renders without errs", () => {
    render(<Episodes episodes={[]} />)
});