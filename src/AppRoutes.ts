import { createBrowserRouter } from "react-router-dom";
import AuthLayerComponent from "./Components/AuthLayer/RegisterFormComponent";
import DashboardComponent from "./Components/Dashboard/Inventory/InventoryViewComponent";
import SalesViewComponent from "./Components/Dashboard/Sales/SalesViewComponent";

const AppRoutes = createBrowserRouter([
    { path: '/', Component: AuthLayerComponent},
    { path: '/auth', Component: AuthLayerComponent},
    { path: '/dashboard', Component: DashboardComponent},
    { path: '/sales', Component: SalesViewComponent},
  ])

export default AppRoutes;