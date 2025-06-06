import './App.css';
import Head from './Components/Head';
import MainContainer from './Components/MainContainer';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Shimmer from './Components/Shimmer';
import InnerContainer from './Components/InnerContainer';

function App() {
  const appRouter = createBrowserRouter([
    { path: "/",
     element: <MainContainer/>, 
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
      element:<h1>this is watch page</h1>
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
      <Head/>
      <RouterProvider router={appRouter}/>
    </div>
  );
}

export default App;
