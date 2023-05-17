import { Outlet } from "react-router-dom";
import NavigationBar from "./NavigationBar/NavigationBar";

export default function PageLayout() {
  return (
    <>
      <NavigationBar />
      <Outlet />
    </>
  );
}