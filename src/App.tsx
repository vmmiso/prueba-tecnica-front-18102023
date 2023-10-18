import { Route, Routes } from "react-router-dom";
import List from "./pages/List";
import User from "./pages/User";

function App() {
  return (
    <Routes>
      <Route path="/" element={<List />} />
      <Route path="user/:id" element={<User />} />
    </Routes>
  );
}

export default App;
