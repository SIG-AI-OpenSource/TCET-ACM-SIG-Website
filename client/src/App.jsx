import React, {useState,useEffect} from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import spinnerLoader from './components/spinner.jsx';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
    },3000);
  },[]);
  return (
    <div className="App">
    
        <Header />
        <Outlet />
        <Footer />
       
      
      
    </div>
  );
}

export default App;

// import React from "react";
// import "./App.css";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Home from "./pages/Home";

// import { createBrowserRouter, Outlet } from "react-router-dom";

// // function App() {
// //   return <Home />;
// // }
// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <Outlet />
//       <Footer />
//     </div>
//   );
// }

// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//     ],
//     // errorElement: <Error />,
//   },
// ]);

// export default appRouter;
