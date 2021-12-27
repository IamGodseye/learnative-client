import { Card, Badge, Button } from "antd";
import { Tooltip } from "antd";
import Link from "next/link";
import { currencyFormatter } from "../../utils/helpers";
const { Meta } = Card;

const CourseCard = ({ course }) => {
  const { name, instructor, price, image, slug, paid, category } = course;
  return (
    <Link href={`/course/${slug}`}>
      <a>
        <Card
          className="mb-4 "
          style={{
            width: "300px",
            height: "300px",
          }}
          cover={
            <img
              src={image.Location}
              alt={name}
              style={{
                height: "150px",
                objectFit: "cover",
              }}
            />
          }
        >
          <div
            style={{
              fontSize: "large",
              fontWeight: "bolder",
            }}
          >
            {name}
          </div>

          <p
            style={{
              fontSize: "small",

              // background: "#005499",
              color: "#777",
              // borderColor: "#2e47ff",
            }}
          >
            {" "}
            by {instructor.name}
          </p>
          <div
            // count={category}
            style={{
              // backgroundColor: "#2e47ff",
              // border: "2px solid black",
              // borderRadius: "10px",
              fontSize: "medium",
              fontWeight: "lighter",
              // height: "45px",
            }}
          >
            Rating 4.5 (1000)
          </div>

          <b>
            <h4 className="pt-2">
              {paid
                ? currencyFormatter({
                    amount: price,
                    currency: "inr",
                  })
                : "Free"}
            </h4>
          </b>
        </Card>
      </a>
    </Link>
  );
};
export default CourseCard;
