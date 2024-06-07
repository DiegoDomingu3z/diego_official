import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './pages/Home.jsx'
const router = createBrowserRouter([
  { path: '/',
    element: <Home />,
    errorElement: <div>DOES NOT EXISTS HOMIE</div>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
