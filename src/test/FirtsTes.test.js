import { render, screen } from "@testing-library/react";
import { FirtsTest } from "../FirtsTest";

test("Example ", () => {
    render(<FirtsTest />)

    const element = screen.getByText(/Firts test/i);

    expect(element).toBeInTheDocument();
})