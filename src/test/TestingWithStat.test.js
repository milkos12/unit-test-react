import { render, screen } from "@testing-library/react"
import { TestingStateChange } from "../TestingStateChange"
import userEvent from "@testing-library/user-event"

test("TEsting page load", () => {
    render(<TestingStateChange />)
    expect(screen.getByText(/Page loaded/i)).toBeInTheDocument();
})

test("Toogle text visible", async() => {
    render(<TestingStateChange></TestingStateChange>)
    await userEvent.click(screen.getByText(/Toogle text/i));
    expect(screen.getByText(/Text visible/i)).toBeInTheDocument();
})