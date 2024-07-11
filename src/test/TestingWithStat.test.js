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

test("Element added to the list", async () => {
    render(<TestingStateChange></TestingStateChange>)
    await userEvent.click(screen.getByText(/Add to list/i))
    console.log("-------_>>>>>>>>>>>>> ", screen.getByTestId('record').length)
    expect(screen.getByTestId('record').length).toBe(3)
})

test("added t the list", async () => {
    render(<TestingStateChange/></TestingStateChange>)

    expect(screen.getAllByTestId('record').length).toBe(3);

    await userEvent.click(screen.getByText(/add to list/i));

    expect(screen.getAllByTestId('record').length).toBe(4);

    expect(screen.getByText(/abhinav/i)).toBeInTheDocument();
})

test("removed  list", async () => {
    render(<TestingStateChange></TestingStateChange>)
    await userEvent.click(screen.getByText(/remove from list/i));
    expect(screen.getAllByTestId('record').length).toBe(2);
})