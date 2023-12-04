import { RouterProvider} from 'react-router-dom'
import './app.css'
import AppRoutes from './AppRoutes';

function App() {


  return (
      <RouterProvider router={AppRoutes}/>
  )
}

export default App
