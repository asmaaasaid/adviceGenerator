import { Route, Routes } from "react-router-dom"
import Advice from "../components/advice-component/Advice"
import Favorites from "../pages/Favorites"


const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<Advice/>}/>
        <Route path="/fav" element={<Favorites/>}/>
    </Routes>
  )
}

export default Router