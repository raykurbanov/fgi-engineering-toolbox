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
    1: "stress-analysis-hdd",
    2: "hdd-design-max-pull-force",
    3: "hdd-minimum-required-force",
    4: "hdd-minimum-combined-radius",
    5: "hdd-rigs-data-conversion",
    6: "hdd-profile-plotter",
    7: "hdd-minimum-length-depth",
    8: "hdd-buoyancy-control",
    10: "design-pressure",
    11: "barlows-equation",
    12: "wheel-load",
    13: "track-load",
    14: "gas-velocity-pipeline",
    15: "blow-down-time",
    16: "blow-down-force",
    17: "sleeve-saddle-branch-connections",
    18: "gas-volume-pipeline",
    19: "lowering-in-place",
    20: "mud-properties",
    21: "unit-weight-volume",
    22: "fitting-standards",
    23: "industry-standards",
  };
  const items = [
    getItem("Pipeline", "sub1", <GiTeePipe />, [
      getItem("Design Pressure / Min Wall Thickness", 10),
      getItem("Barlow’s Equation", 11),
      getItem("Wheel Load Calcs", 12),
      getItem("Track Load Calcs", 13),
      getItem("Gas Velocity in Pipeline", 14),
      getItem("Blow Down Time", 15),
      getItem("Blow Down Thrust Force", 16),
      getItem("Sleeve/Saddle Branch Connections", 17),
      getItem("Gas Volume in Pipeline", 18),
      getItem("Lowering In Place", 19),
    ]),
    getItem(
      "Horizontal Directional Drilling",
      "sub2",
      <MdOutlineEngineering />,
      [
        getItem("Stress Analysis", 1),
        getItem("Maximum Pull Force", 2),
        getItem("Minimum Required Pull Force", 3),
        getItem("Absolute Min Combined Radius", 4),
        getItem("Rigs Data / Conversion Factors", 5),
        getItem("Profile Plotter - Visualizations", 6),
        getItem("Min Horizontal/Depth Requirements", 7),
        getItem("Buoyancy Control HDD", 8),
      ]
    ),
    getItem("References", "sub3", <FundProjectionScreenOutlined />, [
      getItem("Mud Rheological Properties", 20),
      getItem("Pipe Sizes and Unit Weights", 21),
      getItem("Fittings Standards", 22),
      getItem("Industry Standards Access", 23),
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
            <Route
              path="/stress-analysis-hdd"
              element={<Home collapsed={collapsed} />}
            />
            <Route
              path="/hdd-design-max-pull-force"
              element={<Home collapsed={collapsed} />}
            />
            <Route
              path="/hdd-minimum-required-force"
              element={<Home collapsed={collapsed} />}
            />
            <Route
              path="/hdd-minimum-combined-radius"
              element={<Home collapsed={collapsed} />}
            />
            <Route
              path="/hdd-rigs-data-conversion"
              element={<Home collapsed={collapsed} />}
            />
            <Route
              path="/hdd-profile-plotter"
              element={<Home collapsed={collapsed} />}
            />
            <Route
              path="/hdd-minimum-length-depth"
              element={<Home collapsed={collapsed} />}
            />
            <Route
              path="/hdd-buoyancy-control"
              element={<Home collapsed={collapsed} />}
            />
            <Route
              path="/barlows-equation"
              element={<Home collapsed={collapsed} />}
            />
            <Route
              path="/wheel-load"
              element={<Home collapsed={collapsed} />}
            />
            <Route
              path="/track-load"
              element={<Home collapsed={collapsed} />}
            />
            <Route
              path="/gas-velocity-pipeline"
              element={<Home collapsed={collapsed} />}
            />
            <Route
              path="/blow-down-time"
              element={<Home collapsed={collapsed} />}
            />
            <Route
              path="/blow-down-force"
              element={<Home collapsed={collapsed} />}
            />
            <Route
              path="/sleeve-saddle-branch-connections"
              element={<Home collapsed={collapsed} />}
            />
            <Route
              path="/gas-volume-pipeline"
              element={<Home collapsed={collapsed} />}
            />
            <Route
              path="/lowering-in-place"
              element={<Home collapsed={collapsed} />}
            />
            <Route
              path="/mud-properties"
              element={<Home collapsed={collapsed} />}
            />
            <Route
              path="/unit-weight-volume"
              element={<Home collapsed={collapsed} />}
            />
            <Route
              path="/fitting-standards"
              element={<Home collapsed={collapsed} />}
            />
            <Route
              path="/industry-standards"
              element={<Home collapsed={collapsed} />}
            />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;
