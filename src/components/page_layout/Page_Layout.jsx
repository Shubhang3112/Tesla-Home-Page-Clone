import Header from "../header/header.jsx";
import Content from "../content/content";
import "./page.css";

function Page_Layout({
  page_number,
  backgroundImageURL,
  title,
  first_line,
  second_line,
  text_underline,
  no_of_lines,
}) {  
  console.log(text_underline)
  return (
    <>
      {page_number === 1 ? (
        <div className="page" style={{ backgroundImage: backgroundImageURL }}>
          <Header />
          <Content
            title={title}
            first_line={first_line}
            second_line={second_line}
            title_color = {"black"}
            text_underline = {text_underline?text_underline:null}
            no_of_lines={no_of_lines}
            />
        </div>
      ) : page_number === 4 || page_number === 6 ? (
        <div className="page" style={{ backgroundImage: backgroundImageURL }}>
          <Content
            title={title}
            first_line={first_line}
            second_line={second_line}
            title_color = {"white"}
            text_underline = {text_underline?text_underline:null}
            no_of_lines={no_of_lines}
            />
        </div>
      ) : (
        <div className="page" style={{ backgroundImage: backgroundImageURL }}>
          <Content
            title={title}
            first_line={first_line}
            second_line={second_line}
            title_color = {"black"}
            text_underline = {text_underline?text_underline:null}
            no_of_lines={no_of_lines}
            />
        </div>
      )}
    </>
  );
}

export default Page_Layout;
