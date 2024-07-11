import { render, screen } from "@testing-library/react";
import { TestWithMockData } from "../TestWithMockData"

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
      }, 
      {
        "id": 3,
        "first_name": "Amby",
        "last_name": "Emmer",
        "email": "aemmer2@buzzfeed.com",
        "age": 67
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