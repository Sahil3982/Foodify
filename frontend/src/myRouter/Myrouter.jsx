import { createBroswerRouter } from 'react-router-dom'
import Main from '../Layout/Main'

const Myrouter = createBroswerRouter([
    {
        path: '/',
        element: <Main>hay</Main>
    }
])

export default Myrouter