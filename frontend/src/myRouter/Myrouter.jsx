import { createBroswerRouter } from 'react-router-dom'
import Main from '../Layout/Main'
import Home from '../Pages/Home'
const Myrouter = createBroswerRouter([
    {
        path: '/',
        element: <Main />,
        children : [
            {
                path: '/',
                element: <Home />
            }
        ]

    }
])

export default Myrouter