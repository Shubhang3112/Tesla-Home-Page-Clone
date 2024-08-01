import { useNavigate,Link} from "react-router-dom";
// import {Link} from 'react-router-dom';
import PageLayout from "../components/page_layout/Page_Layout";
import { IMAGES_PATH } from "../constant/IMAGES_PATH";
import { ROUTING_PATH } from "../constant/RoutingPath";

function Home_Page() {
  const navigate = useNavigate()

  const navigateToTodo = ()=>{
    navigate(ROUTING_PATH.todo)
  }
  return (
    <>
      <Link to={ROUTING_PATH.todo}>ToDo</Link>
    <div className="home_page_container">
      <PageLayout
        page_number={1}
        title={"Model 3"}
        first_line={"$7,500 Federal Tax Credit Available"}
        second_line={"From $29,990 After Est. Savings"}
        backgroundImageURL={IMAGES_PATH.section1}
        text_underline
        no_of_lines = {3}
        />
      <PageLayout
        page_number={2}
        title={"Model Y"}
        first_line={"From $31,490"}
        second_line={"After $13,500 Est. Savings"}
        backgroundImageURL={IMAGES_PATH.section2}
        text_underline
        no_of_lines = {3}
        />
      <PageLayout
        page_number={3}
        title={"Model X"}
        first_line={"From $63,990"}
        second_line={"After Est. Savings"}
        backgroundImageURL={IMAGES_PATH.section3}
        no_of_lines = {3}
        />
      <PageLayout
        page_number={4}
        title={"Model S"}
        first_line={"From $66,490"}
        second_line={"After Est. Savings"}
        backgroundImageURL={IMAGES_PATH.section4}
        no_of_lines = {3}
        />
      <PageLayout
        page_number={6}
        title={"Solar Panels"}
        first_line={"From $66,490"}
        second_line={"Schedule a Virtual Consultation"}
        backgroundImageURL={IMAGES_PATH.section6}
        no_of_lines = {2}
        text_underline
        />

    </div>
    
    </>
  );
}

export default Home_Page;
