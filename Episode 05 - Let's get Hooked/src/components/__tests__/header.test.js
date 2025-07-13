import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux"
import appStore from '../../utils/appStore'
import { BrowserRouter } from "react-router-dom"
import '@testing-library/jest-dom'

// it("should load header component with a login button", () => {

//     render(
//         <BrowserRouter>
//             <Provider store={appStore}>
//                 <Header />
//             </Provider>
//         </BrowserRouter>
//     )

//     // const loginBtn = screen.getByRole("button")
//     const loginBtn = screen.getByText("Login")
//     // const loginBtn = screen.getByRole("button", { name: "login" })

//     expect(loginBtn).toBeInTheDocument();

// })

it("should load cart Items inside the component", () => {

    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )

    const cartItems = screen.getByText(/Cart/)

    // ! rejax 
    // /Cart/
    expect(cartItems).toBeInTheDocument();

})

// it("should change login btn to logout on click", () => {
//     render(
//         <BrowserRouter>
//             <Provider store={appStore}>
//                 <Header />
//             </Provider>
//         </BrowserRouter>
//     );

//     // Find the login button (case-insensitive)
//     const loginBtn = screen.getByText(/login/i);
//     expect(loginBtn).toBeInTheDocument();

//     // Simulate click
//     fireEvent.click(loginBtn);

//     // Now, the logout button should be in the document
//     const logoutBtn = screen.getByText(/logout/i);
//     expect(logoutBtn).toBeInTheDocument();
// });