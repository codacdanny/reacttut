import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
//import { BrowserRouter } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupsPage from "./pages/NewMeetup";
import Favorites from "./pages/Favorites";
import Layout from "./components/layout/Layout";
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetupsPage />}></Route>
        <Route path="/new-meetup" element={<NewMeetupsPage />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
