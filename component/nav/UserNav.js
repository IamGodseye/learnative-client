import Link from "next/link";
import { useEffect, useState, useContext } from "react";
import { Context } from "../../context/index";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const UserNav = () => {
  const [current, setCurrent] = useState("");
  const { state, dispatch } = useContext(Context);

  useEffect(() => {
    process.browser && setCurrent(window.location.pathname);
    //console.log(window.location.pathname);
  }, [process.browser && window.location.pathname]);
  const router = useRouter();

  const logout = async () => {
    dispatch({ type: "LOGOUT" });
    window.localStorage.removeItem("user");
    window.localStorage.removeItem("token");
    const { data } = await axios.get(`/api/logout`);
    toast("✅" + data.message);
    router.push("/login");
  };
  return (
    <div className="nav flex-column nav-pills">
      <Link href="/user">
        <a
          className={`nav-link btn-style1 ${current === "/user" && "active"}`}
          style={{ marginBottom: "10px" }}
        >
          {" "}
          Dashboard
        </a>
      </Link>
      <a
        className={`nav-link btn-style1 logout ${
          current === "/user" && "active"
        }`}
        style={{ marginBottom: "10px" }}
        onClick={logout}
      >
        {" "}
        Logout
      </a>
    </div>
  );
};

export default UserNav;
