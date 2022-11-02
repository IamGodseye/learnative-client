import { Menu } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import { Tooltip } from "antd";
// import {
//   AppstoreOutlined,
//   CoffeeOutlined,
//   LoginOutlined,
//   LogoutOutlined,
//   UserAddOutlined,
//   WindowsFilled,
//   CarryOutOutlined,
//   TeamOutlined,
// } from "@ant-design/icons";
import {
  UilUser,
  UilUsersAlt,
  UilHouseUser,
  UilSignin,
  UilUserPlus,
  UilFolderPlus,
  UilUserSquare,
} from "@iconscout/react-unicons";

import { useState, useEffect, useContext } from "react";

import { Context } from "../context/index";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
const { SubMenu, Item, ItemGroup, Divider } = Menu;
const Topnav = () => {
  const [current, setCurrent] = useState("");
  const { state, dispatch } = useContext(Context);
  const { user } = state;
  let width = 1000;
  useEffect(() => {
    width = screen.width;
    console.log(width, width > 765);
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
    <div
      className="top-nav-op"
      style={{
        display: "flex",
      }}
    >
      <Menu
        mode="horizontal"
        selectedKeys={[current]}
        className="top-nav1 topnav-menu "
        style={{
          width: "100vw",
          justifyContent: "center",
        }}
      >
        {width > 800 ? (
          <Item
            key="/landing"
            onClick={(e) => setCurrent(e.key)}
            //icon={<AppstoreOutlined />}
            class="topnav-logo"
          >
            <Link href="/landing" class="topnav-logo">
              <a
                className="top-nav nav topnav-logo"
                style={{
                  display: "flex",
                  justfyContent: "center",
                  alignItems: "center",
                }}
              >
                {" "}
                <img
                  className="pt-1"
                  class="topnav-logo"
                  src="/logo.svg"
                  style={{
                    display: "flex",
                    justfyContent: "center",
                    alignItems: "center",

                    // paddingTop: "33%",
                    height: "fit-content",
                    width: "100px",
                  }}
                />
              </a>
            </Link>
          </Item>
        ) : (
          ""
        )}
        <Item
          key="/"
          onClick={(e) => setCurrent(e.key)}
        //icon={<AppstoreOutlined />}
        >
          <Link href="/">
            <a className="top-nav nav topnav-btn">
              {" "}
              <UilHouseUser id="icon" /> <span>Home</span>
            </a>
          </Link>
        </Item>

        {user && user.role && user.role.includes("Instructor") ? (
          <Item
            key="/instructor/course/create"
            onClick={(e) => setCurrent(e.key)}
          //icon={<LoginOutlined />}
          >
            <Link href="/instructor/course/create">
              <a className="top-nav nav">
                <UilFolderPlus id="icon" />
                Create Course
              </a>
            </Link>
          </Item>
        ) : (
          <Item
            key="/user/become-instructor"
            onClick={(e) => setCurrent(e.key)}
          //icon={<LoginOutlined />}
          >
            <Link href="/user/become-instructor">
              <a className="top-nav nav topnav-btn">
                <UilUsersAlt id="icon" />
                <span class="become">Become</span> <span> Instructor</span>
              </a>
            </Link>
          </Item>
        )}

        {user === null && (
          <>
            <Item
              key="/login"
              onClick={(e) => setCurrent(e.key)}
            //icon={<LoginOutlined />}
            >
              <Link href="/login">
                <a className="top-nav nav">
                  <UilSignin id="icon" />
                  Login
                </a>
              </Link>
            </Item>
            <Item
              key="/register"
              onClick={(e) => setCurrent(e.key)}
            //icon={<UserAddOutlined />}
            >
              <Link href="/register">
                <a className="top-nav nav">
                  <UilUserPlus id="icon" />
                  Register
                </a>
              </Link>
            </Item>
          </>
        )}
        {user !== null &&
          (width > 800 ? (
            <>
              {/* <CoffeeOutlined /> */}

              <SubMenu
                className="float-right nav"
                //id="right"
                // style={{
                //   marginLeft: "auto",
                //   paddingRight: "2vw",
                // }}
                title={user && user.name}
                icon={<UilUser />}
              >
                <ItemGroup>
                  <Item key="/user">
                    <Link href="/user">
                      <a>Dashboard</a>
                    </Link>
                  </Item>
                  {/* <Item key="/profile">
                  <Link href="/profile">
                    <a>Profile</a>
                  </Link>
                </Item> */}
                  <Item onClick={logout}>Logout</Item>
                </ItemGroup>
              </SubMenu>
            </>
          ) : (
            <>
              {/* <CoffeeOutlined /> */}

              <SubMenu
                className="float-right nav"
                //id="right"
                // style={{
                //   marginLeft: "auto",
                //   paddingRight: "2vw",
                // }}
                // title={user && user.name}
                icon={<UilUser />}
              >
                <ItemGroup>
                  <Item key="/user">
                    <Link href="/user">
                      <a>Dashboard</a>
                    </Link>
                  </Item>
                  {/* <Item key="/profile">
                  <Link href="/profile">
                    <a>Profile</a>
                  </Link>
                </Item> */}
                  <Item onClick={logout}>Logout</Item>
                </ItemGroup>
              </SubMenu>
            </>
          ))}
        {user && user.role && user.role.includes("Instructor") && (
          <Item
            key="/instructor"
            onClick={(e) => setCurrent(e.key)}
            className="float-right nav"
          //icon={<LoginOutlined />}
          >
            <Link href="/instructor">
              <a className="top-nav">
                <UilUserSquare id="icon" />
                Instructor
              </a>
            </Link>
          </Item>
        )}
        {/* <Item key="/">
        <img src="logo.png" style={{ width: "100px", height: "100px" }} />
      </Item> */}
      </Menu>
    </div>
  );
};
export default Topnav;
