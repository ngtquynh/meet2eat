import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import RootLayout from "./pages/Root";
// import Footer from "./UI/Footer";
import TimeSlot from "./pages/TimeSlot";
// import Confirm from "./pages/Confirm";
import "bootstrap/dist/css/bootstrap.min.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/timeslot", element: <TimeSlot /> },
      // { path: "/confirm", element: <Confirm /> }
    ],
  },
]);

function App() {
  return (
      <>
        <RouterProvider router={router} />
        {/* <Footer /> */}
      </>
  );
}

export default App;
