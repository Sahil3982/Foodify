import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import Router from './my-router/Router'
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={Router} />
)
