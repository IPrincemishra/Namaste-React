import Contact from "../Contact"
import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'

describe("Contact Us page test case", () => {

    test("Should load contact us component", () => {

        render(<Contact />)

        const heading = screen.getByRole("heading")

        expect(heading).toBeInTheDocument();

    })

    test("Should load button inside contact component", () => {
        render(<Contact />)
        const button = screen.getByRole("button")
        expect(button).toBeInTheDocument();
    })

    // test("Should load button inside contact component", () => {
    //     render(<Contact />)
    //     const button = screen.getByText("hlo")
    //     expect(button).toBeInTheDocument();
    // })

    test("Should load input username inside contact component", () => {

        render(<Contact />)

        const input = screen.getByPlaceholderText("username")

        expect(input).toBeInTheDocument();

    })

    it("Should load inputBoxes inside contact component", () => {
        render(<Contact />)

        const inputBoxes = screen.getAllByRole("textbox")

        expect(inputBoxes.length).toBe(1)
    })

})
