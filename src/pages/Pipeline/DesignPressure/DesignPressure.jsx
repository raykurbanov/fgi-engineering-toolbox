import React, { useState, useEffect } from "react";
import { Col, Row, Select, Space } from "antd";
import "./DesignPressure.css";
import { Column } from "@ant-design/plots";
import {
  getAllPipeSizes,
  getOutsideDiameter,
  getAllWallThicknessArray,
  getAllJointFactors,
  getAllClassLocations,
  getTempDeratingFactorT,
  getStdSMYSValues,
  getAllSchedulesAndWallThicknesses,
} from "../../../utils/PipeSpecs";

function DesignPressure(props) {
  const [npmSizePipe, setnpmSizePipe] = useState('16"');
  const [wallThickness, setWallThickness] = useState(0.165);
  const [pipeGrade, setPipeGrade] = useState(52000);
  const [internalDiameter, setInternalDiameter] = useState(15.25);
  const [outsideDiameter, setOutsideDiameter] = useState(16);
  const [locationClass, setLocationClass] = useState(0.72);
  const [jointType, setJointType] = useState(1);
  const [temperature, setTemperature] = useState(1);
  const [designPressure, setDesignPressure] = useState(0);
  const [targetDesignPressure, setTargetDesignPressure] = useState(750);
  const [minimumWallThickness, setMinimumWallThickness] = useState([]);

  const DemoColumn = () => {
    const data = getAllSchedulesAndWallThicknesses(npmSizePipe).map((el) => {
      const designPressure =
        ((2 * pipeGrade * el.wallThickness) / outsideDiameter) *
        parseFloat(jointType) *
        temperature *
        locationClass;
      const obj = {
        wallthickness: el.wallThickness.toFixed(3) + '"',
        designpressure: parseInt(designPressure),
      };

      return obj;
    });
    const config = {
      data,
      xField: "wallthickness",
      yField: "designpressure",
      width: props.collapsed ? 925 : 800,
      height: 200,
      label: {
        position: "middle",
        style: {
          fill: "#fff",
          opacity: 0.9,
          fontSize: "14px",
          fontWeight: "bold",
        },
      },
      xAxis: {
        label: {
          autoHide: true,
          autoRotate: false,
          backgroundColor: "red",
        },
      },
      meta: {
        wallThickness: {
          alias: "wallThickness",
        },
        pressure: {
          alias: "pressure",
        },
      },
    };
    return <Column {...config} />;
  };

  const SelectNominalPipeSize = () => {
    const handleChange = (value) => {
      setnpmSizePipe(value);
      console.log(`selected ${value}`);
    };
    return (
      <Space wrap>
        <Select
          defaultValue={npmSizePipe}
          style={{
            width: 140,
            height: 30,
          }}
          onChange={handleChange}
          options={getAllPipeSizes()}
        />
      </Space>
    );
  };
  const SelectWallThickness = () => {
    const handleChange = (value) => {
      setWallThickness(parseFloat(value));
    };

    return (
      <Space wrap>
        <Select
          defaultValue={wallThickness}
          style={{
            width: 140,
            height: 30,
          }}
          onChange={handleChange}
          options={getAllWallThicknessArray()}
        />
      </Space>
    );
  };
  const SelectJointType = () => {
    const handleChange = (value) => {
      setJointType(value);
      console.log(`selected ${value}`);
    };

    return (
      <Space wrap>
        <Select
          defaultValue={jointType}
          style={{
            width: 140,
            height: 30,
          }}
          onChange={handleChange}
          options={getAllJointFactors()}
        />
      </Space>
    );
  };
  const SelectTempDeratingFactorT = () => {
    const handleChange = (value) => {
      setTemperature(value);
      console.log(`selected ${value}`);
    };

    return (
      <Space wrap>
        <Select
          defaultValue={temperature}
          style={{
            width: 140,
            height: 30,
          }}
          onChange={handleChange}
          options={getTempDeratingFactorT()}
        />
      </Space>
    );
  };
  const SelectAllClassLocations = () => {
    const handleChange = (value) => {
      setLocationClass(value);
      console.log(`selected ${value}`);
    };

    return (
      <Space wrap>
        <Select
          defaultValue={locationClass}
          style={{
            width: 140,
            height: 30,
          }}
          onChange={handleChange}
          options={getAllClassLocations()}
        />
      </Space>
    );
  };
  const SelectSMYS = () => {
    const handleChange = (value) => {
      setPipeGrade(value);
      console.log(`selected ${value}`);
    };

    return (
      <Space wrap>
        <Select
          defaultValue={pipeGrade}
          style={{
            width: 140,
            height: 30,
          }}
          onChange={handleChange}
          options={getStdSMYSValues()}
        />
      </Space>
    );
  };
  const InputDesignTargetPressure = () => {
    return (
      <div>
        <input
          type="number"
          className="input"
          onChange={(e) => setTargetDesignPressure(e.target.value)}
          value={targetDesignPressure}
          autoFocus={true}
          max={10000}
        />
      </div>
    );
  };

  const SelectSTDTemplate = (props) => {
    return (
      <Space wrap>
        <Select
          defaultValue={props.value}
          style={{
            width: 120,
            height: 30,
          }}
          options={props.function}
        />
      </Space>
    );
  };

  const findMinimumWallThickness = () => {
    const minWallThickness =
      (targetDesignPressure * outsideDiameter) /
      (2 * pipeGrade * temperature * jointType * locationClass);
    return minWallThickness.toFixed(3);
  };

  const calculateParameters = () => {
    setOutsideDiameter(getOutsideDiameter(npmSizePipe));
    const innerDiameter = outsideDiameter - 2 * wallThickness;
    setInternalDiameter(innerDiameter);

    const designPressure =
      ((2 * pipeGrade * wallThickness) / outsideDiameter) *
      parseFloat(jointType) *
      temperature *
      locationClass;
    setDesignPressure(designPressure);
  };
  useEffect(() => {
    calculateParameters();
  }, [
    npmSizePipe,
    internalDiameter,
    wallThickness,
    outsideDiameter,
    pipeGrade,
    locationClass,
    jointType,
    temperature,
  ]);

  return (
    <div id="design-wrapper">
      <div id="form">
        <div id="input-form">
          <div className="input-data">
            <div id="input-data-left">
              <div className="flex-row">
                <p className="bold">Target Design Pressure, psig</p>
                <InputDesignTargetPressure />
              </div>
              <div className="flex-row">
                <p className="bold">Select Nominal Pipe Diameter</p>
                <SelectNominalPipeSize />
              </div>
              <div className="flex-row">
                <p className="bold">Wall Thickness</p>
                <SelectWallThickness />
              </div>
              <div className="flex-row">
                <p className="bold">Outside Pipe Diameter</p>
                <p className="calculated-values">
                  {outsideDiameter < 14
                    ? outsideDiameter.toFixed(3)
                    : outsideDiameter.toFixed(2)}
                  "
                </p>
              </div>
              <div className="flex-row">
                <p className="bold">Inside Pipe Diameter</p>
                <p className="calculated-values">
                  {internalDiameter.toFixed(3)}"
                </p>
              </div>

              <div className="flex-row ">
                <p className="bold">Select Pipe Grade</p>
                <SelectSMYS />
              </div>
              <div className="flex-row">
                <p className="bold">SMYS</p>
                <p className="calculated-values">
                  {pipeGrade / 1000 + "," + "000"}
                </p>
              </div>
            </div>
            <div id="input-data-right">
              <div className="flex-row">
                <p className="bold">Location Class</p>
                <SelectAllClassLocations />
              </div>
              <div className="flex-row">
                <p className="bold">Design Factor</p>
                <p className="calculated-values">{locationClass}</p>
              </div>
              <div className="flex-row">
                <p className="bold">Temperature</p>
                <div>
                  <SelectTempDeratingFactorT />
                </div>
              </div>
              <div className="flex-row">
                <p className="bold">Temperature Derating Factor</p>
                <p className="calculated-values">{temperature.toFixed(3)}</p>
              </div>
              <div className="flex-row">
                <p className="bold">Joint Type</p>
                <SelectJointType />
              </div>
              <div className="flex-row">
                <p className="bold">Longitudinal Joint Factor</p>
                <p className="calculated-values">
                  {parseFloat(jointType).toFixed(2)}
                </p>
              </div>
            </div>
          </div>
          <div className="calcs-result">
            <p id="pipe-design-results-header">Results</p>
            <div id="pipe-design-results">
              <div id="pipe-design-results-left">
                <p className="bold results">Design Pressure:</p>
                <p className={`results result`}>
                  <span
                    className={
                      designPressure > targetDesignPressure ? "pass" : "fail"
                    }
                  >
                    {designPressure.toFixed(1)} psig
                  </span>
                </p>
                <p className="bold results">Minimum Wall Thickness:</p>
                <p className="results result">{findMinimumWallThickness()}"</p>
              </div>
              <div id="pipe-design-results-right">
                <p className="bold results">1.25 x Design Pressure:</p>
                <p className="results result">
                  {(designPressure * 1.25).toFixed(2)} psig
                </p>
                <p className="bold results">1.5 x Design Pressure:</p>
                <p className="results result">
                  {(designPressure * 1.5).toFixed(2)} psig
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id="input-chart">
          <h2>Design Pressure</h2>
          <DemoColumn />
        </div>
      </div>
      <div id="pipe-specs">
        <h2 id="pipe-specs-header">Pipe Size: {npmSizePipe}</h2>
        <Row>
          <Col span={8} className="column column-header">
            Pipe Schedule
          </Col>
          <Col span={8} className="column column-header">
            Wall Thickness, inch
          </Col>
          <Col span={8} className="column column-header">
            Unit Weight, lbs/ft
          </Col>
        </Row>
        {getAllSchedulesAndWallThicknesses(npmSizePipe).map((element, idx) => (
          <Row key={idx}>
            <Col span={8} className="column">
              {element.schedule}
            </Col>
            <Col span={8} className="column">
              {element.wallThickness.toFixed(3)}"
            </Col>
            <Col span={8} className="column">
              {(
                (getOutsideDiameter(npmSizePipe) - element.wallThickness) *
                element.wallThickness *
                10.69
              ).toFixed(2)}
            </Col>
          </Row>
        ))}
      </div>
    </div>
  );
}

export default DesignPressure;
