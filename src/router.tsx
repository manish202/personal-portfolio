import { createBrowserRouter } from "react-router";
import GlobalLayout from "./layouts/GlobalLayout";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
    {
        path: "/", element: <GlobalLayout />,
        children: [
            { index: true, element: <HomePage /> },
        ]
    }
])

export default router;