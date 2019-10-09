import React from "react";
import SideNav from "./side_nav"
import QuestionIndexContainer from "./question/question_index_container";
import SideBar from "./side_bar";

const MainContent = () => (
  <div className="main-content">
    <SideNav />
    <main className="main-content-container">
      <QuestionIndexContainer />
      <SideBar />
    </main>
  </div>
);

export default MainContent;