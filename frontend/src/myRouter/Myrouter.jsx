import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layout/Main'
import Home from '../Pages/Home'
const Myrouter = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children : [
            {
                path: "/",
                element: <Home />
            }
        ]

    }
])

export default Myrouter