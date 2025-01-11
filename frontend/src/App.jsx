import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import ROUTES from './routes/routes'

const router = createBrowserRouter(ROUTES)

function App() {

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
