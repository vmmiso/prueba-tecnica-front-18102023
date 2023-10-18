import { Route, Routes } from "react-router-dom";
import List from "./pages/List";
import User from "./pages/User";
import Album from "./pages/Album";

function App() {
  return (
    <Routes>
      <Route path="/" element={<List />} />
      <Route path="user/:id" element={<User />} />
      <Route path="album/:id" element={<Album />} />
    </Routes>
  );
}

export default App;
