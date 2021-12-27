import { List, Avatar } from "antd";
const { Item } = List;
import ReactMarkdown from "react-markdown";
const SingleCourseLessons = ({
  lessons,
  setPreview,
  showModal,
  setShowModal,
  description,
}) => {
  return (
    <>
      <div
        class="lessons"
        style={{
          zIndex: "1",
          // background: "pink",
          marginTop: "-350px",
          paddingLeft: "5vw",
          paddingRight: "5vw",
        }}
      >
        This is for objectives
        <div className="row">
          <div
            className="col-md-7"
            style={{
              border: "2px solid #eee",
            }}
          >
            <div
              style={{
                fontSize: "large",
                fontWeight: "bold",
                // letterSpacing: "1px",
              }}
            >
              Objectives of this course:
            </div>
            <div className="p-1">
              <div className="p-1">Objective1</div>
              <div className="p-1">Objective2</div>
              <div className="p-1">Objective3</div>
              <div className="p-1">Objective4</div>
              <div className="p-1">Objective5</div>
            </div>
          </div>
          <div
            className="col-md-7"
            style={{
              border: "2px solid #eee",
              marginTop: "5vh",
            }}
          >
            <div
              style={{
                fontSize: "large",
                fontWeight: "bold",

                // letterSpacing: "1px",
              }}
            >
              Description of this course:
            </div>
            <div className="p-1">
              <div className="p-1">
                <ReactMarkdown children={description} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="container"
        style={{
          zIndex: "1",
          marginTop: "5vh",
        }}
      >
        <div className="row">
          <div className="col lesson-list">
            {lessons && <h4>{lessons.length} Lessons</h4>}
            <hr />
            <List
              itemLayout="horizontal"
              dataSource={lessons}
              renderItem={(item, index) => (
                <Item>
                  <Item.Meta
                    avatar={
                      <Avatar
                        style={{
                          background: "#E3F2FD",
                          color: "black",
                          // border: "1px solid black",
                        }}
                      >
                        {index + 1}
                      </Avatar>
                    }
                    title={item.title}
                  />
                  {item.video && item.video !== null && item.free_preview && (
                    <span
                      className="text-primary pointer"
                      onClick={() => {
                        setPreview(item.video.Location);
                        setShowModal(!showModal);
                      }}
                    >
                      Preview
                    </span>
                  )}
                </Item>
              )}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCourseLessons;
