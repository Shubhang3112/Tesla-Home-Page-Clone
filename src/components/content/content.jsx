import Button from "./button/index";
import "./content.css";

function Content({
  title,
  first_line,
  second_line,
  title_color,
  text_underline,
  no_of_lines
}) {
  console.log(text_underline);
  return (
    <>
      <div className="title_container">
        <h2 className="title" style={{ color: title_color }}>
          {title}
        </h2>
        {no_of_lines>2?<p class="first_subline" style={{ color: title_color }}>
          <span>{first_line}</span> <sup>1</sup>
        </p>:<p></p>}
        {no_of_lines>1? <p
          class="second_subline"
          style={{
            color: title_color,
          }}
        >
          <span
            style={{
              borderBottom: text_underline ? "1px solid" : "none",
            }}
          >
            {second_line}
          </span>{" "}
          <sup>2</sup>
        </p>:<p></p>}
      </div>
      <div className="btn_container">
        <Button
          title="Order Now"
          background_color="#f4f4f4"
          text_color="#393c41"
        />
        <Button
          title="Demo Drive"
          background_color="#171a20"
          text_color="white"
        />
      </div>
    </>
  );
}
export default Content;
