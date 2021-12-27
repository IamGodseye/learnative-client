import SingleCourse from "../../pages/course/[slug]";
import { currencyFormatter } from "../../utils/helpers";
import { Badge, Modal } from "antd";
import ReactPlayer from "react-player";
import { Button } from "antd";
import ReactMarkdown from "react-markdown";
import { UilShoppingBag, UilAngleDoubleRight } from "@iconscout/react-unicons";
import { LoadingOutlined, SafetyOutlined } from "@ant-design/icons";
const SingleCourseJumbotron = ({
  course,
  showModal,
  setPreview,
  preview,
  setShowModal,
  loading,
  user,
  handlePaidEnrollment,
  handleFreeEnrollment,
  setEnrolled,
  enrolled,
}) => {
  const {
    name,
    description,
    instructor,
    price,
    image,
    paid,
    category,
    updatedAt,
    lessons,
    shortInfo,
  } = course;

  return (
    <div
    // className="jumbotron square" style={{ background: "#202020" }}
    >
      <div
        className="row jumbotron square"
        style={{
          paddingLeft: "5vw",
          paddingRight: "5vw",
          zIndex: "1",
          background: "#0d47a1",
          marginBottom: "5vh",
          color: "white",
        }}
      >
        <div className="col-md-7">
          <div
            style={{
              fontWeight: "bold",
              fontSize: "xx-large",
              // color: "black",
            }}
          >
            {name}
          </div>
          <div
            className="lead"
            style={{
              // color: "black",
              fontSize: "medium",
              marginTop: "10px",
              marginBottom: "10px",
            }}
          >
            {/* {shortInfo} */}
            {shortInfo.length != 0 ? shortInfo : "<=No Short Info=>"}
            {/* {description && description.substring(0, 160)}.... */}
          </div>

          {/* <Badge
            count={category}
            style={{ backgroundColor: "#03a9f4" }}
            className="pb-4 mr-2"
          /> */}
          {/* <div
            style={{
              fontSize: "1.2rem",
              backgroundColor: "#202040",
              color: "black",
              border: "#202030",
              height: "5vh",
            }}
          >
            BestSeller
          </div> */}
          <div
            // count={category}
            style={{
              // color: "black",
              fontWeight: "lighter",
              fontSize: "medium",
              marginBottom: "5px",
            }}
          >
            {category}
          </div>
          <p
            style={{
              // color: "black",
              fontWeight: "lighter",
              fontSize: "medium",
            }}
          >
            Created by {instructor.name}
          </p>
          <div>
            <span
              style={{
                // color: "black",
                fontWeight: "medium",
                fontSize: "medium",
              }}
            >
              {" "}
              Last updated {new Date(updatedAt).toLocaleDateString("en-IN")}
            </span>
            <span
              style={{
                // color: "black",
                fontWeight: "medium",
                fontSize: "medium",
              }}
            >
              {" "}
              Language - English Hindi
            </span>
          </div>
          {/* <Button
            className="getting-started btn btn-block "
            style={{
              fontSize: "1.2rem",
              backgroundColor: "#202040",
              color: "white",
              border: "#202030",
              height: "5vh",
            }}
          >
            {paid
              ? currencyFormatter({ amount: price, currency: "inr" })
              : "Free"}
          </Button> */}
        </div>
      </div>
      <div
      // style={{
      //   marginRight: "10vw",
      // }}
      >
        <div
          className="col-md-4 course-side"
          style={{
            background: "white",
            border: "2px solid #777",
            // height: "82vh",
            zIndex: "5",
            marginLeft: "auto",
            marginRight: "7vw",
            marginTop: "-300px",
            paddingBottom: "20px",
            boxShadow: "0px 5px 15px 5px rgba(90,90,90,0.37)",
          }}
        >
          {lessons[0].video && lessons[0].video.Location ? (
            <div
              onClick={() => {
                setPreview(lessons[0].video.Location);
                setShowModal(!showModal);
              }}
            >
              <ReactPlayer
                className="react-player-div"
                light={image.Location}
                url={lessons[0].video.Location}
                width="100%"
                height="225px"
              />
            </div>
          ) : (
            <div className="course-img">
              {" "}
              <img
                src={image.Location}
                alt={name}
                style={{
                  backgroundSize: "cover",
                }}
                className="img img-fluid "
              />
            </div>
          )}
          <div
            style={{
              padding: "5%",
            }}
          >
            <div
              style={{
                // marginTop: "5%",
                fontSize: "x-large",
                fontWeigth: "bold",
              }}
            >
              {paid
                ? currencyFormatter({ amount: price, currency: "inr" })
                : "Free"}
            </div>
            <div>
              <div
                style={{
                  fontSize: "large",
                  fontWeight: "bold",
                }}
              >
                This course includes:
              </div>
              <div>XX hrs of video content</div>
              <div>XX Documents</div>
              <div>LifeTime access</div>
              <div>Certificate of completion</div>
            </div>
            {loading ? (
              <div className="d-flex justify-content-center">
                <LoadingOutlined className="h1" />
              </div>
            ) : (
              <Button
                className="mb-0 mt-2 enroll-btn"
                type="danger"
                block
                shape="square"
                // icon={<SafetyOutlined className="pb-3" />}
                disabled={loading}
                style={{
                  height: "10vh",
                  display: "flex",
                  backgroundColor: "#03045e",
                  borderColor: "#03045e",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={paid ? handlePaidEnrollment : handleFreeEnrollment}
              >
                {user ? (
                  enrolled.status ? (
                    <UilAngleDoubleRight
                      style={{
                        marginRight: "5px",
                      }}
                    />
                  ) : (
                    <UilShoppingBag
                      style={{
                        marginRight: "5px",
                      }}
                    />
                  )
                ) : (
                  <UilShoppingBag
                    style={{
                      marginRight: "5px",
                    }}
                  />
                )}
                <div
                  style={{
                    fontSize: "x-large",
                    letterSpacing: "2px",
                  }}
                >
                  {user
                    ? enrolled.status
                      ? "Go to course"
                      : "Enroll"
                    : "Login first to enroll"}
                </div>
              </Button>
            )}
          </div>
          <hr />
          <div
            style={{
              paddingLeft: "5%",
              paddingRight: "5%",
            }}
          >
            <div
              style={{
                fontSize: "large",
                fontWeight: "bolder",
              }}
            >
              Want Learnative for school?
            </div>
            <div>
              {" "}
              drop us an email at &nbsp;
              <a
                href="mailto:learnative.help@gmail.com"
                className="text-center"
                style={{ padding: "0" }}
              >
                <Button
                  style={{
                    borderColor: "#202030",
                    color: "black",
                    margin: "0 auto",
                  }}
                  // className="support-email"
                >
                  learnative.help@gmail.com
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SingleCourseJumbotron;
