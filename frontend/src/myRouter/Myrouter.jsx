import { createBroswerRouter } from 'react-router-dom'

const Myrouter = createBroswerRouter([
    {
        path: '/',
        element: <div className='green'>Hello</div>
    }
])

export default Myrouter