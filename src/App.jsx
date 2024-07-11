import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { productInputs, userInputs } from "./formsource";
import MyList from "./pages/mylist/MyList";

function App() {
  return (
          <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/users">
            <Route index element={<List />} />
            <Route path="new" element={<New inputs={userInputs} title="Add New User" />} />
            <Route path=":userId" element={<Single />} />
          </Route>
          <Route path="/products">
            <Route index element={<List />} />
            <Route path="new" element={<New inputs={productInputs} title="Add New Product" />} />
            <Route path=":productId" element={<Single />} />
          </Route>
          <Route path="/categories" element={<MyList />} />
        </Routes>
      </BrowserRouter>
  
  );
}

export default App;
