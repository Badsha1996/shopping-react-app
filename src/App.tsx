import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Cart from "./pages/Cart"
import Home from "./pages/Home"
import { Outlet, 
  createBrowserRouter,
  RouterProvider, 
  ScrollRestoration } from "react-router-dom"


const queryClient = new QueryClient()

const Layout = () =>{
  return (
    <>
      <Navbar/>
      <Outlet/> 
      <Footer/>
    </>
  )
}

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/cart",
        element:<Cart/>
      }
    ]
  }
])


function App() {
 
  return (
    <QueryClientProvider client={queryClient}>
    <div>
      <RouterProvider router={router}/>
    </div>
    </QueryClientProvider>
  )
}

export default App
