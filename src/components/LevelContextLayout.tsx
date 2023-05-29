import { Outlet } from "react-router-dom";
import { LevelContextProvider } from "../context/LevelContext";

export default function LevelContextLayout() {

  return(
    <LevelContextProvider>
      <Outlet/>
    </LevelContextProvider>
  )
}