import { render, screen } from "@testing-library/react";
import { TestWithMockData } from "../TestWithMockData"
import userEvent from '@testing-library/user-event'

const mockData = [
  {
    "id": 1,
    "first_name": "Fletcher",
    "last_name": "McVanamy",
    "email": "mmcvanamy0@e-recht24.de",
    "age": 30
  }, {
    "id": 2,
    "first_name": "Clarice",
    "last_name": "Harrild",
    "email": "charrild1@dion.ne.jp",
    "age": 35
  }
]

test("LIst renders successfully", () => {
  render(<TestWithMockData data={mockData} />)
  expect(screen.getByText(/McVanamy/i)).toBeInTheDocument();
})

test("Order list renders", () => {
  render(<TestWithMockData data={mockData} displayUnorderedLIst={false} />)

  expect(screen.getByText(/McVanamy/)).toBeInTheDocument()
})

test("Email link handle called", async () => {
  const handleCick = jest.fn();

  render(<TestWithMockData
    data={mockData}
    displayUnorderedLIst={true}
    handleCick={handleCick}
  />)

  await userEvent.click(screen.getByText(/mmcvanamy0@e-recht24.de/i));
  expect(handleCick).toHaveBeenCalled();
})


