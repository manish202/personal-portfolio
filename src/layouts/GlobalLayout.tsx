import { Outlet } from "react-router";
import Navbar from "../components/navbar/Navbar";

const GlobalLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default GlobalLayout;