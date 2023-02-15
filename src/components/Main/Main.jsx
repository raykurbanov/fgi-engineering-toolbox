import { GiTeePipe } from "react-icons/gi";
import { MdOutlineEngineering } from "react-icons/md";
import "./Main.css";
import { FundProjectionScreenOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import DesignPressure from "../../pages/Pipeline/DesignPressure/DesignPressure";
import Home from "../Home/Home";

const { Content, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const App = () => {
  const pages = {
    1: "design-pressure",
    2: "minimum-wall-thickness",
    3: "maop-mop",
    4: "track-load-calcs",
    5: "barlows-equation",
  };
  const items = [
    getItem("Pipeline", "sub1", <GiTeePipe />, [
      getItem("Design Pressure (Steel)", 1),
      getItem("Gas Volume in Pipeline", 2),
      getItem("Blow Down Time", 3),
      getItem("Wheel Load Calculations", 4),
      getItem("Track Load Calculations", 5),
      getItem("Gas Velocity / AGPL", 6),
      getItem("Barlow's Equation", 7),
    ]),
    getItem(
      "Horizontal Directional Drilling",
      "sub2",
      <MdOutlineEngineering />,
      [getItem("HDD Design", 11), getItem("Stress Analysis", 12)]
    ),
    getItem("Projects", "sub3", <FundProjectionScreenOutlined />, [
      getItem("Project 1", 21),
      getItem("Project 2", 22),
    ]),
  ];
  const [currentPage, setCurrentPage] = useState(null);

  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const navigateToPage = (page) => {
    setCurrentPage(page);
    navigate(`/${page}`);
  };

  return (
    <Layout id="layout">
      <Sider
        width={300}
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <Link to="/">
          {collapsed ? (
            <img
              id="logo-alone-collapsed"
              src="./assets/logo/logo-alone.jpeg"
              alt="company logo"
            />
          ) : (
            <div id="company-logo-wrapper">
              <h1 id="logo-large">Farnsworth</h1>
              <h2 id="logo-medium">Group</h2>
            </div>
          )}
        </Link>
        <Menu
          theme="dark"
          defaultSelectedKeys={[""]}
          mode="inline"
          items={items}
          onClick={(e) => navigateToPage(pages[e.key])}
        />
      </Sider>
      <Layout className="site-layout">
        <Navbar />
        <Content>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/design-pressure"
              element={<DesignPressure collapsed={collapsed} />}
            />
            <Route path="/minimum-wall-thickness" element={<Home />} />
            <Route path="/maop-mop" element={<Home />} />
            <Route path="/track-load-calcs" element={<Home />} />
            <Route path="/barlows-equation" element={<Home />} />
          </Routes>
        </Content>
        {/* <Footer
          style={{
            textAlign: "center",
          }}
        >
          All Copyrights are Reserved {new Date().getFullYear()}
        </Footer> */}
      </Layout>
    </Layout>
  );
};
export default App;
