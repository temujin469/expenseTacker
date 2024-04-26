import React, { useState, useMemo } from "react";
import styled from "styled-components";
import Navigation from "./Components/Navigation/Navigation";
import Dashboard from "./Components/Dashboard/Dashboard";
import Income from "./Components/Income/Income";
import Expenses from "./Components/Expenses/Expenses";
import Orb from "./Components/Orb/Orb";
import { GlobalProvider, useGlobalContext } from "./context/globalContext";
import "./styles/index.css";
import {
  BrowserRouter,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";

// export default router;

function App() {
  const global = useGlobalContext();
  console.log("glov", global);

  const orbMemo = useMemo(() => {
    return <Orb />;
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigation />,
      children: [
        {
          path: "expenses",
          element: <Expenses />,
        },
        {
          path: "income",
          element: <Income />,
        },
        {
          path: "/",
          element: <Dashboard />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />
  // return (
  //   <BrowserRouter>
  //     <Routes>
  //       <Route path="/" element={<Navigation />}>
  //         <Route
  //           path="expenses"
  //           element={
  //             <GlobalProvider>
  //               <Expenses />
  //             </GlobalProvider>
  //           }
  //         />
  //         <Route
  //           path="income"
  //           element={
  //             <GlobalProvider>
  //               <Income />
  //             </GlobalProvider>
  //           }
  //         />
  //         <Route
  //           path="/"
  //           element={
  //             <GlobalProvider>
  //               <Dashboard />
  //             </GlobalProvider>
  //           }
  //         />
  //       </Route>
  //     </Routes>
  //   </BrowserRouter>
  // );
}

export default App;

// function App() {
//   const [active, setActive] = useState(1);

//   const displayData = () => {
//     switch (active) {
//       case 1:
//         return <Dashboard />;
//       case 2:
//         return <Dashboard />;
//       case 3:
//         return <Income />;
//       case 4:
//         return <Expenses />;
//       default:
//         return <Dashboard />;
//     }
//   };

//   return (
//     <ChakraProvider>
//       <AppStyled bg={bg} className="App">
//         {orbMemo}
//         <MainLayout>
//           <Navigation active={active} setActive={setActive} />
//           <main>{displayData()}</main>
//         </MainLayout>
//       </AppStyled>
//     </ChakraProvider>
//   );
// }

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${(props) => props.bg});
  position: relative;
  main {
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #ffffff;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
`;

// export default App;
