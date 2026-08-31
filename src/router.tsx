import { createBrowserRouter } from "react-router";
import GlobalLayout from "./layouts/GlobalLayout";
import HomePage from "./pages/HomePage";
import AllProjectsPage from "./pages/AllProjectsPage";

const router = createBrowserRouter([
    {
        path: "/", element: <GlobalLayout />,
        children: [
            { index: true, element: <HomePage /> },
            { path:"all_projects", element: <AllProjectsPage /> },
        ]
    }
])

export default router;