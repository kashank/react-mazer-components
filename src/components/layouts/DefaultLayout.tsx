import * as React from "react";
import { Sidebar } from "../Sidebar";
import { useLayout } from "../MazerLayoutProvider";

export const DefaultLayout: React.FC = () => {
  const {sideBarContent, logo: sideBarLogo, mainContent } = useLayout();
  
  return (
    <>
      <Sidebar logo={sideBarLogo}>
        {sideBarContent}
      </Sidebar>
      <div id="main">
        <header className="mb-3">
          <a href="#" className="burger-btn d-block d-xl-none">
            <i className="bi bi-justify fs-3"></i>
          </a>
        </header>

        <div className="page-heading">
          <div className="page-title"></div>
          <section className="section"></section>
          {mainContent}
        </div>
      </div>
    </>
  );
};
