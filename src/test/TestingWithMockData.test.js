import { render, screen } from "@testing-library/react"
import { TestingStateChange } from "../TestingStateChange"

test("TEsting page load", () => {
    render(<TestingStateChange />)
    expect(screen.getByText(/Page loaded/i)).toBeInTheDocument();
})