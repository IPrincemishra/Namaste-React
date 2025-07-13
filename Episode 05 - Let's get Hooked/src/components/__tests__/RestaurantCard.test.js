import { render, screen } from "@testing-library/react"
import RestaurantCard from '../RestaurantCard'
import Mock_Data from '../Mocks/resDataMock.json'
import '@testing-library/jest-dom'

it("should render restaurant card with data", () => {

    render( <RestaurantCard resData={Mock_Data}/> )

    const resName = screen.getByText("Pizza Hut")

    expect(resName).toBeInTheDocument()
    
})