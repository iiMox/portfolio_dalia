import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Home";
import NotFound from "../404";

import "./App.css";

const App = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/*",
            element: <NotFound />,
        },
    ]);

    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
};

export default App;
