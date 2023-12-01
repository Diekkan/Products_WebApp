import { RouterProvider, createBrowserRouter} from 'react-router-dom'
import './app.css'
import AuthLayerComponent from './Components/AuthLayer/AuthLayerComponent'
import DashboardComponent from './Components/Dashboard/DashboardComponent';

function App() {

  const router = createBrowserRouter([
    { path: '/', Component: AuthLayerComponent},
    { path: '/auth', Component: AuthLayerComponent},
    { path: '/dashboard', Component: DashboardComponent }
  ])

  return (
      <RouterProvider router={router}/>
  )
}

export default App
