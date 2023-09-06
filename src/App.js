import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import Home from "./Components/Home/Home";
  import Dashboard from "./Components/Dashboard/Dashboard";
  import { Provider } from "react-redux";
  import store from "./Store/Store";
  
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },{
      path:"/dashboard",
      element:<Dashboard/>
    }
  ]);
  function App() {
    
  
    return (
      <>
      
        <Provider store={store}>
          
            <RouterProvider router={router} />
          
         
        </Provider>
          
      </>
    )
  }
  
  export default App
  