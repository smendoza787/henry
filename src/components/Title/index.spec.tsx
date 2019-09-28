import React from "react"
import { cleanup, render } from "@testing-library/react";
import Title from ".";

beforeEach(cleanup)

describe('<Title />', () => {
  it('should render', () => {
    render(<Title title="pop" />)
  })
});