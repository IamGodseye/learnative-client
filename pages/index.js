import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Context from "../context/index";
import Username from "./user_name";
//import { Context } from "../../context";
import Head from "next/head";
import CourseTooltip from "./CourseTooltip";
import CourseCard from "../component/cards/CourseCard";

const Index = ({ courses }) => {
  //const [courses, setCourses] = useState([]);

  // useEffect(() => {
  //   const fetchCourses = async () => {
  //     const { data } = await axios.get("/api/courses");
  //     setCourses(data);
  //   };
  //   fetchCourses();
  // }, []);
  return (
    <>
      <Head>
        <title>Learnative - Home</title>
        {/* Add meta data for better SEO */}
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <div>
        <h1
          className="jumbotron text-center mb-2"
          style={{
            letterSpacing: "2px",
            fontSize: "2rem",
          }}
        >
          <div>Learnative</div>
          <p className="mb-0" style={{ fontSize: "1.8rem" }}>
            By India, For{" "}
            <img
              src="/ind.png"
              style={{
                height: "50px",
                width: "50px",
              }}
            />
          </p>
        </h1>
      </div>
      <div
        style={{ width: "100vw", display: "flex", justifyContent: "center" }}
      >
        <img
          src="/landing_slide1.svg"
          style={{
            width: "80vw",
          }}
        />

        {/* <div className="jumbotron text-center">
          <div
            style={{
              fontSize: "xx-large",
            }}
          >
            Learnative- Learn new skills
          </div>
          <div
            style={{
              fontSize: "large",
            }}
          >
            A platform for creators & students
          </div>
          <div
            style={{
              fontSize: "medium",
            }}
          >
            Learnative- Learn new skill
          </div>
          <div>Learnative- Learn new skill</div>
        </div> */}
      </div>
      <CourseTooltip />

      <div className="container-fluid pt-3">
        <Username />

        <div
          className="row"
          style={{ display: "flex", justifyContent: "center" }}
        >
          {courses.map((course) => (
            <div
              key={course._id}
              className="col-sm-4 p-3"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <CourseCard
                course={course}
                style={{
                  margin: "0 auto",
                }}
              />
            </div>
          ))}

          {/* {courses.map((course) => (
            <div
              key={course._id}
              className="col-sm-4 p-3"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <CourseCard
                course={course}
                style={{
                  margin: "0 auto",
                }}
              />
            </div>
          ))}
          {courses.map((course) => (
            <div
              key={course._id}
              className="col-sm-4 p-3"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <CourseCard
                course={course}
                style={{
                  margin: "0 auto",
                }}
              />
            </div>
          ))}
          {courses.map((course) => (
            <div
              key={course._id}
              className="col-sm-4 p-3"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <CourseCard
                course={course}
                style={{
                  margin: "0 auto",
                }}
              />
            </div>
          ))}
          {courses.map((course) => (
            <div
              key={course._id}
              className="col-sm-4 p-3"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <CourseCard
                course={course}
                style={{
                  margin: "0 auto",
                }}
              />
            </div>
          ))} */}
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const { data } = await axios.get(`${process.env.API}/courses`);
  return {
    props: {
      courses: data,
    },
  };
}
export default Index;
