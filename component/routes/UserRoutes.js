import { useEffect, useState, useContext } from "react";
import { Context } from "../../context";
import axios from "axios";
import { useRouter } from "next/router";
import { SyncOutlined } from "@ant-design/icons";
import UserNav from "../nav/UserNav";
const UserRoutes = ({ children, showNav = true }) => {
  const [ok, setOk] = useState(false);

  const router = useRouter();

  useEffect(() => {
    console.log("User routes");
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      console.log("FETCH USER =>>>");
      const instance = axios.create({
        withCredentials: true,
        baseURL: process.env.NEXT_PUBLIC_API,
      });
      const { data } = await instance.get(`/current-user`);
      console.log(data);
      if (data.ok === true) setOk(true);
    } catch (err) {
      console.log(err);
      setOk(false);
      router.push("/login");
    }
  };
  return (
    <>
      {!ok ? (
        <SyncOutlined
          spin
          className="d-flex justify-content-center display-1 text-primary p-5"
        />
      ) : (
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2">{showNav && <UserNav />}</div>
            <div className="col-md-10">{children}</div>
          </div>
        </div>
      )}
    </>
  );
};
export default UserRoutes;
