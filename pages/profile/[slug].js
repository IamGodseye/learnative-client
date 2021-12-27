import { useContext } from "react";
import { Context } from "./../../context/index";
import Head from "next/head";
import { Avatar } from "antd";
const Profile = ({ profile }) => {
  const {
    state: { user },
  } = useContext(Context);
  return (
    <div>
      <Head>
        <title>{user?.name} - Profile</title>
        {/* Add meta data for better SEO */}
      </Head>
      <h1
        className="jumbotron text-center square"
        style={{
          marginBottom: "5vh",
        }}
      >
        Profile
      </h1>
      <div
        style={{
          //   background: "pink",
          width: "80%",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              fontSize: "xx-large",
              fontWeight: "bold",
              //       marginLeft: "10%",
            }}
          >
            Dummy Name
            <div
              style={{
                fontSize: "x-large",
                fontWeight: "lighter",
                //       marginLeft: "10%",
              }}
            >
              Title
            </div>
          </div>
          <div>
            <Avatar
              src="course.png"
              size={100}
              style={{ border: "1px solid #777" }}
            ></Avatar>
          </div>

          {/* <img src="course.png" /> */}
        </div>
        <div>
          <div
            style={{
              fontSize: "x-large",
              fontWeight: "bold",
              //       marginLeft: "10%",
            }}
          >
            About me
          </div>
          <div>lorem lorem lorem</div>
        </div>
      </div>
    </div>
  );
};
export default Username;
