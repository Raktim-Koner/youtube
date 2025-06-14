import './App.css';
import Head from './Components/Head';
import MainContainer from './Components/MainContainer';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Shimmer from './Components/Shimmer';
import InnerContainer from './Components/InnerContainer';
import Watch from './Components/Watch';

function App() {
  const appRouter = createBrowserRouter([
    { path: "/",
      element: <>
      <Head/>
      <MainContainer/>
    </>,
 
     children:[
      {
         path: "/",
        element: <InnerContainer/>, 
      },
      {
      path:"/history", 
      element:<h1>this is history page</h1>
     },
     {
      path:"/watch", 
      element:<Watch/>
     }

    
    ]
    },

    {
      path:"/demo",
      element:<h1>this is demo</h1>
    },


  ]);
  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  );
}

export default App;
