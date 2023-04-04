import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { ToastContainer, toast } from "react-toastify";
import AllBooks from "./pages/AllBooksAdmin";
import Compose from "./pages/Compose";
import "react-toastify/dist/ReactToastify.css";
import Update from "./pages/Update";
import NavbarUser from "./components/NavbarUser";
import HomeWithoutNav from "./components/HomeWithoutNav";
import NavbarAdmin from "./components/NavbarAdmin";
import AllBooksUser from "./pages/AllBooksUser";
import AllAvailableBooks from "./pages/AllAvailableBooks";
import AllIssuedBooks from "./pages/AllIssuedBooks";
import AllBooksAdmin from "./pages/AllBooksAdmin";
import AllIssuedAdmin from "./pages/AllIssuedAdmin";
import AllUsers from "./pages/AllUsers";
import UpdateUser from "./pages/UpdateUser";
import LoginAdmin from "./components/LoginAdmin";

function App() {
  const [toastShow, setToastShow] = useState(false);
  const [toastCondition, setToastCondition] = useState({
    status: "",
    message: "",
  });

  if (toastShow) {
    if (toastCondition.status === "success") {
      toast.success(toastCondition.message);
    } else if (toastCondition.status === "error") {
      toast.error(toastCondition.message);
    } else if (toastCondition.status === "warning") {
      toast.warn(toastCondition.message);
    } else if (toastCondition.status === "info") {
      toast.info(toastCondition.message);
    }
    setToastCondition({
      status: "",
      message: "",
    });
    setToastShow(false);
  }

  const [id, setId] = useState("");
  return (
    <div className="App h-screen w-screen scrollbar-hide">
      {/* <Navbar setShowProfile={setShowProfile} /> */}

      {/* <Navbar setShowProfile={setShowProfile} /> */}
      {/* {isAdmin ? (
        <NavbarAdmin setShowProfile={setShowProfile} />
      ) : (
        <NavbarUser setShowProfile={setShowProfile} />
      )} */}

      {/* <Navbar setShowProfile={setShowProfile} /> */}
      <Routes>
        <Route path="/admin_login" element={<LoginAdmin />} />
        <Route path="/user_login" element={<Login />} />
        <Route path="/user_sign" element={<Signup />} />

        <Route path="user" element={<NavbarUser />}>
          <Route path="home" element={<HomeWithoutNav />} />
          <Route path="allbooksuser" element={<AllBooksUser />} />
          <Route path="allavailablebooks" element={<AllAvailableBooks />} />
          <Route path="allissuedbooks" element={<AllIssuedBooks />} />
        </Route>

        <Route path="admin" element={<NavbarAdmin />}>
          <Route path="home" element={<HomeWithoutNav />} />
          <Route path="allbooksadmin" element={<AllBooksAdmin />} />
          <Route path="allissuedadmin" element={<AllIssuedAdmin />} />
          <Route path="userlist" element={<AllUsers />} />
          <Route path="updateBook/:id" element={<Update />} />
          <Route path="updateuser/:id" element={<UpdateUser />} />
          <Route
            path="compose"
            element={
              <Compose
                setToastCondition={setToastCondition}
                setToastShow={setToastShow}
              />
            }
          />
          <Route
            path="update/:id"
            element={
              <Update
                setToastCondition={setToastCondition}
                setToastShow={setToastShow}
              />
            }
          />
        </Route>

        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />

        <Route path="/allBooks" element={<AllBooks id={id} setId={setId} />} />
      </Routes>
      {/* <ProfileTemp show={showProfile} /> */}
      <ToastContainer />
    </div>
  );
}

export default App;
