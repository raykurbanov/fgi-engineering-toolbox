const pipeChart = [
  {
    pipeSize: '1/8"',
    outsideDiameter: 0.405,
    schedules: [
      { schedule: 10, wallThickness: 0.049 },
      { schedule: "STD.", wallThickness: 0.068 },
      { schedule: 40, wallThickness: 0.068 },
      { schedule: "E.H.", wallThickness: 0.095 },
      { schedule: 80, wallThickness: 0.095 },
    ],
  },
  {
    pipeSize: '1/4"',
    outsideDiameter: 0.54,
    schedules: [
      { schedule: 10, wallThickness: 0.065 },
      { schedule: "STD.", wallThickness: 0.088 },
      { schedule: 40, wallThickness: 0.088 },
      { schedule: "E.H.", wallThickness: 0.119 },
      { schedule: 80, wallThickness: 0.119 },
    ],
  },
  {
    pipeSize: '3/8"',
    outsideDiameter: 0.675,
    schedules: [
      { schedule: 10, wallThickness: 0.065 },
      { schedule: "STD.", wallThickness: 0.091 },
      { schedule: 40, wallThickness: 0.091 },
      { schedule: "E.H.", wallThickness: 0.126 },
      { schedule: 80, wallThickness: 0.126 },
    ],
  },
  {
    pipeSize: '1/2"',
    outsideDiameter: 0.84,
    schedules: [
      { schedule: 5, wallThickness: 0.065 },
      { schedule: 10, wallThickness: 0.083 },
      { schedule: "STD.", wallThickness: 0.109 },
      { schedule: 40, wallThickness: 0.109 },
      { schedule: "E.H.", wallThickness: 0.147 },
      { schedule: 80, wallThickness: 0.147 },
      { schedule: 160, wallThickness: 0.188 },
      { schedule: "DBLE E.H.", wallThickness: 0.294 },
    ],
  },
  {
    pipeSize: '3/4"',
    outsideDiameter: 1.05,
    schedules: [
      { schedule: "5S", wallThickness: 0.065 },
      { schedule: "10S", wallThickness: 0.083 },
      { schedule: "STD.", wallThickness: 0.113 },
      { schedule: 40, wallThickness: 0.113 },
      { schedule: "E.H.", wallThickness: 0.154 },
      { schedule: 80, wallThickness: 0.154 },
      { schedule: 160, wallThickness: 0.218 },
      { schedule: "DBLE E.H.", wallThickness: 0.308 },
    ],
  },
  {
    pipeSize: '1"',
    outsideDiameter: 1.315,
    schedules: [
      { schedule: "5S", wallThickness: 0.065 },
      { schedule: "10S", wallThickness: 0.109 },
      { schedule: "STD.", wallThickness: 0.133 },
      { schedule: 40, wallThickness: 0.133 },
      { schedule: "E.H.", wallThickness: 0.179 },
      { schedule: 80, wallThickness: 0.179 },
      { schedule: 160, wallThickness: 0.25 },
      { schedule: "DBLE E.H.", wallThickness: 0.358 },
    ],
  },
  {
    pipeSize: '1-1/4"',
    outsideDiameter: 1.66,
    schedules: [
      { schedule: "5S", wallThickness: 0.065 },
      { schedule: "10S", wallThickness: 0.109 },
      { schedule: "STD.", wallThickness: 0.14 },
      { schedule: 40, wallThickness: 0.14 },
      { schedule: "E.H.", wallThickness: 0.191 },
      { schedule: 80, wallThickness: 0.191 },
      { schedule: 160, wallThickness: 0.25 },
      { schedule: "DBLE E.H.", wallThickness: 0.382 },
    ],
  },
  {
    pipeSize: '1-1/2"',
    outsideDiameter: 1.9,
    schedules: [
      { schedule: "5S", wallThickness: 0.065 },
      { schedule: "10S", wallThickness: 0.109 },
      { schedule: "STD.", wallThickness: 0.145 },
      { schedule: 40, wallThickness: 0.145 },
      { schedule: "E.H.", wallThickness: 0.2 },
      { schedule: 80, wallThickness: 0.2 },
      { schedule: 160, wallThickness: 0.281 },
      { schedule: "DBLE E.H.", wallThickness: 0.4 },
    ],
  },
  {
    pipeSize: '2"',
    outsideDiameter: 2.375,
    schedules: [
      { schedule: "5S", wallThickness: 0.065 },
      { schedule: "10S", wallThickness: 0.109 },
      { schedule: "STD.", wallThickness: 0.154 },
      { schedule: 40, wallThickness: 0.154 },
      { schedule: "E.H.", wallThickness: 0.218 },
      { schedule: 80, wallThickness: 0.218 },
      { schedule: 160, wallThickness: 0.344 },
      { schedule: "DBLE E.H.", wallThickness: 0.436 },
    ],
  },
  {
    pipeSize: '2-1/2"',
    outsideDiameter: 2.875,
    schedules: [
      { schedule: "5S", wallThickness: 0.083 },
      { schedule: "10S", wallThickness: 0.12 },
      { schedule: "STD.", wallThickness: 0.203 },
      { schedule: 40, wallThickness: 0.203 },
      { schedule: "E.H.", wallThickness: 0.276 },
      { schedule: 80, wallThickness: 0.276 },
      { schedule: 160, wallThickness: 0.375 },
      { schedule: "DBLE E.H.", wallThickness: 0.552 },
    ],
  },
  {
    pipeSize: '3"',
    outsideDiameter: 3.5,
    schedules: [
      { schedule: "5S", wallThickness: 0.083 },
      { schedule: "10S", wallThickness: 0.12 },
      { schedule: "STD.", wallThickness: 0.216 },
      { schedule: 40, wallThickness: 0.216 },
      { schedule: "E.H.", wallThickness: 0.3 },
      { schedule: 80, wallThickness: 0.3 },
      { schedule: 160, wallThickness: 0.438 },
      { schedule: "DBLE E.H.", wallThickness: 0.6 },
    ],
  },
  {
    pipeSize: '3-1/2"',
    outsideDiameter: 4,
    schedules: [
      { schedule: "5S", wallThickness: 0.083 },
      { schedule: "10S", wallThickness: 0.12 },
      { schedule: "STD.", wallThickness: 0.226 },
      { schedule: 40, wallThickness: 0.226 },
      { schedule: "E.H.", wallThickness: 0.318 },
      { schedule: 80, wallThickness: 0.318 },
      { schedule: "DBLE E.H.", wallThickness: 0.636 },
    ],
  },
  {
    pipeSize: '4"',
    outsideDiameter: 4.5,
    schedules: [
      { schedule: "5S", wallThickness: 0.083 },
      { schedule: "10S", wallThickness: 0.12 },
      { schedule: "STD.", wallThickness: 0.237 },
      { schedule: 40, wallThickness: 0.237 },
      { schedule: "E.H.", wallThickness: 0.337 },
      { schedule: 80, wallThickness: 0.337 },
      { schedule: 120, wallThickness: 0.438 },
      { schedule: 160, wallThickness: 0.531 },
      { schedule: "DBLE E.H.", wallThickness: 0.674 },
    ],
  },
  {
    pipeSize: '4-1/2"',
    outsideDiameter: 5.0,
    schedules: [
      { schedule: "STD.", wallThickness: 0.247 },
      { schedule: "E.H.", wallThickness: 0.355 },
      { schedule: "DBLE E.H.", wallThickness: 0.71 },
    ],
  },
  {
    pipeSize: '5"',
    outsideDiameter: 5.563,
    schedules: [
      { schedule: "5S", wallThickness: 0.109 },
      { schedule: "10S", wallThickness: 0.134 },
      { schedule: "STD.", wallThickness: 0.258 },
      { schedule: 40, wallThickness: 0.258 },
      { schedule: "E.H.", wallThickness: 0.375 },
      { schedule: 80, wallThickness: 0.375 },
      { schedule: 120, wallThickness: 0.5 },
      { schedule: 160, wallThickness: 0.625 },
      { schedule: "DBLE E.H.", wallThickness: 0.75 },
    ],
  },
  {
    pipeSize: '6"',
    outsideDiameter: 6.625,
    schedules: [
      { schedule: "5S", wallThickness: 0.109 },
      { schedule: "10S", wallThickness: 0.134 },
      { schedule: "STD.", wallThickness: 0.28 },
      { schedule: 40, wallThickness: 0.28 },
      { schedule: "E.H.", wallThickness: 0.432 },
      { schedule: 80, wallThickness: 0.432 },
      { schedule: 120, wallThickness: 0.562 },
      { schedule: 160, wallThickness: 0.719 },
      { schedule: "DBLE E.H.", wallThickness: 0.864 },
    ],
  },
  {
    pipeSize: '8"',
    outsideDiameter: 8.625,
    schedules: [
      { schedule: "5S", wallThickness: 0.109 },
      { schedule: "10S", wallThickness: 0.148 },
      { schedule: 20, wallThickness: 0.25 },
      { schedule: 30, wallThickness: 0.277 },
      { schedule: "STD.", wallThickness: 0.322 },
      { schedule: 40, wallThickness: 0.322 },
      { schedule: 60, wallThickness: 0.406 },
      { schedule: "E.H.", wallThickness: 0.5 },
      { schedule: 80, wallThickness: 0.5 },
      { schedule: 100, wallThickness: 0.594 },
      { schedule: 120, wallThickness: 0.719 },
      { schedule: 140, wallThickness: 0.812 },
      { schedule: 160, wallThickness: 0.906 },
      { schedule: "DBLE E.H.", wallThickness: 0.875 },
    ],
  },
  {
    pipeSize: '10"',
    outsideDiameter: 10.75,
    schedules: [
      { schedule: "5S", wallThickness: 0.134 },
      { schedule: "10S", wallThickness: 0.165 },
      { schedule: 10, wallThickness: 0.165 },
      { schedule: 20, wallThickness: 0.25 },
      { schedule: 30, wallThickness: 0.307 },
      { schedule: "STD.", wallThickness: 0.365 },
      { schedule: 40, wallThickness: 0.365 },
      { schedule: 60, wallThickness: 0.5 },
      { schedule: "E.H.", wallThickness: 0.5 },
      { schedule: 80, wallThickness: 0.594 },
      { schedule: 100, wallThickness: 0.719 },
      { schedule: 120, wallThickness: 0.844 },
      { schedule: 140, wallThickness: 1.0 },
      { schedule: 160, wallThickness: 1.125 },
      { schedule: "DBLE E.H.", wallThickness: 1 },
    ],
  },
  {
    pipeSize: '12"',
    outsideDiameter: 12.75,
    schedules: [
      { schedule: "5S", wallThickness: 0.156 },
      { schedule: 5, wallThickness: 0.165 },
      { schedule: "10S", wallThickness: 0.18 },
      { schedule: 20, wallThickness: 0.25 },
      { schedule: 30, wallThickness: 0.33 },
      { schedule: "STD.", wallThickness: 0.375 },
      { schedule: 40, wallThickness: 0.406 },
      { schedule: 60, wallThickness: 0.562 },
      { schedule: "E.H.", wallThickness: 0.5 },
      { schedule: 80, wallThickness: 0.688 },
      { schedule: 100, wallThickness: 0.844 },
      { schedule: 120, wallThickness: 1.0 },
      { schedule: 140, wallThickness: 1.125 },
      { schedule: 160, wallThickness: 1.312 },
    ],
  },
  {
    pipeSize: '14"',
    outsideDiameter: 14.0,
    schedules: [
      { schedule: "5S", wallThickness: 0.156 },
      { schedule: "10S", wallThickness: 0.188 },
      { schedule: 10, wallThickness: 0.25 },
      { schedule: 20, wallThickness: 0.312 },
      { schedule: 30, wallThickness: 0.375 },
      { schedule: "STD.", wallThickness: 0.375 },
      { schedule: 40, wallThickness: 0.438 },
      { schedule: 60, wallThickness: 0.594 },
      { schedule: "E.H.", wallThickness: 0.5 },
      { schedule: 80, wallThickness: 0.75 },
      { schedule: 100, wallThickness: 0.938 },
      { schedule: 120, wallThickness: 1.094 },
      { schedule: 140, wallThickness: 1.25 },
      { schedule: 160, wallThickness: 1.406 },
    ],
  },
  {
    pipeSize: '16"',
    outsideDiameter: 16.0,
    schedules: [
      { schedule: "5S", wallThickness: 0.165 },
      { schedule: "10S", wallThickness: 0.188 },
      { schedule: 10, wallThickness: 0.25 },
      { schedule: 20, wallThickness: 0.312 },
      { schedule: 30, wallThickness: 0.375 },
      { schedule: "STD.", wallThickness: 0.375 },
      { schedule: 40, wallThickness: 0.5 },
      { schedule: 60, wallThickness: 0.656 },
      { schedule: "E.H.", wallThickness: 0.5 },
      { schedule: 80, wallThickness: 0.844 },
      { schedule: 100, wallThickness: 1.031 },
      { schedule: 120, wallThickness: 1.219 },
      { schedule: 140, wallThickness: 1.438 },
      { schedule: 160, wallThickness: 1.594 },
    ],
  },
  {
    pipeSize: '18"',
    outsideDiameter: 18.0,
    schedules: [
      { schedule: "5S", wallThickness: 0.165 },
      { schedule: 10, wallThickness: 0.25 },
      { schedule: 20, wallThickness: 0.312 },
      { schedule: 30, wallThickness: 0.438 },
      { schedule: "STD.", wallThickness: 0.375 },
      { schedule: 40, wallThickness: 0.562 },
      { schedule: 60, wallThickness: 0.75 },
      { schedule: "E.H.", wallThickness: 0.5 },
      { schedule: 80, wallThickness: 0.938 },
      { schedule: 100, wallThickness: 1.156 },
      { schedule: 120, wallThickness: 1.375 },
      { schedule: 140, wallThickness: 1.562 },
      { schedule: 160, wallThickness: 1.781 },
    ],
  },
  {
    pipeSize: '20"',
    outsideDiameter: 20.0,
    schedules: [
      { schedule: "5S", wallThickness: 0.188 },
      { schedule: "10S", wallThickness: 0.218 },
      { schedule: 10, wallThickness: 0.25 },
      { schedule: 20, wallThickness: 0.375 },
      { schedule: 30, wallThickness: 0.5 },
      { schedule: "STD.", wallThickness: 0.375 },
      { schedule: 40, wallThickness: 0.594 },
      { schedule: 60, wallThickness: 0.812 },
      { schedule: "E.H.", wallThickness: 0.5 },
      { schedule: 80, wallThickness: 1.031 },
      { schedule: 100, wallThickness: 1.281 },
      { schedule: 120, wallThickness: 1.5 },
      { schedule: 140, wallThickness: 1.75 },
      { schedule: 160, wallThickness: 1.969 },
    ],
  },
  {
    pipeSize: '22"',
    outsideDiameter: 22.0,
    schedules: [
      { schedule: 20, wallThickness: 0.375 },
      { schedule: 30, wallThickness: 0.5 },
      { schedule: 60, wallThickness: 0.875 },
      { schedule: 80, wallThickness: 1.125 },
      { schedule: 100, wallThickness: 1.375 },
      { schedule: 120, wallThickness: 1.625 },
      { schedule: 140, wallThickness: 1.875 },
      { schedule: 160, wallThickness: 2.125 },
    ],
  },
  {
    pipeSize: '24"',
    outsideDiameter: 24.0,
    schedules: [
      { schedule: 10, wallThickness: 0.25 },
      { schedule: 20, wallThickness: 0.375 },
      { schedule: 30, wallThickness: 0.562 },
      { schedule: "STD.", wallThickness: 0.375 },
      { schedule: 40, wallThickness: 0.688 },
      { schedule: 60, wallThickness: 0.969 },
      { schedule: "E.H.", wallThickness: 0.5 },
      { schedule: 80, wallThickness: 1.219 },
      { schedule: 100, wallThickness: 1.531 },
      { schedule: 120, wallThickness: 1.812 },
      { schedule: 140, wallThickness: 2.062 },
      { schedule: 160, wallThickness: 2.343 },
    ],
  },
  {
    pipeSize: '26"',
    outsideDiameter: 26.0,
    schedules: [
      { schedule: 10, wallThickness: 0.312 },
      { schedule: 20, wallThickness: 0.5 },
      { schedule: "STD.", wallThickness: 0.375 },
      { schedule: "E.H.", wallThickness: 0.5 },
    ],
  },
  {
    pipeSize: '28"',
    outsideDiameter: 28.0,
    schedules: [
      { schedule: 10, wallThickness: 0.312 },
      { schedule: 20, wallThickness: 0.5 },
      { schedule: 30, wallThickness: 0.625 },
      { schedule: "STD.", wallThickness: 0.375 },
      { schedule: "E.H.", wallThickness: 0.5 },
    ],
  },
  {
    pipeSize: '30"',
    outsideDiameter: 30.0,
    schedules: [
      { schedule: "5S", wallThickness: 0.25 },
      { schedule: 10, wallThickness: 0.312 },
      { schedule: 20, wallThickness: 0.5 },
      { schedule: 30, wallThickness: 0.625 },
      { schedule: "STD.", wallThickness: 0.375 },
      { schedule: 40, wallThickness: 0.75 },
      { schedule: "E.H.", wallThickness: 0.5 },
    ],
  },
  {
    pipeSize: '32"',
    outsideDiameter: 32.0,
    schedules: [
      { schedule: 10, wallThickness: 0.312 },
      { schedule: 20, wallThickness: 0.5 },
      { schedule: 30, wallThickness: 0.625 },
      { schedule: "STD.", wallThickness: 0.375 },
      { schedule: 40, wallThickness: 0.75 },
      { schedule: "E.H.", wallThickness: 0.5 },
    ],
  },
  {
    pipeSize: '34"',
    outsideDiameter: 34.0,
    schedules: [
      { schedule: 10, wallThickness: 0.312 },
      { schedule: 20, wallThickness: 0.5 },
      { schedule: 30, wallThickness: 0.625 },
      { schedule: "STD.", wallThickness: 0.375 },
      { schedule: 40, wallThickness: 0.75 },
      { schedule: "E.H.", wallThickness: 0.5 },
    ],
  },
  {
    pipeSize: '36"',
    outsideDiameter: 36.0,
    schedules: [
      { schedule: "5S", wallThickness: 0.25 },
      { schedule: 10, wallThickness: 0.312 },
      { schedule: 20, wallThickness: 0.5 },
      { schedule: 30, wallThickness: 0.625 },
      { schedule: "STD.", wallThickness: 0.375 },
      { schedule: 40, wallThickness: 0.75 },
      { schedule: "E.H.", wallThickness: 0.5 },
    ],
  },
  {
    pipeSize: '42"',
    outsideDiameter: 42.0,
    schedules: [
      { schedule: "STD.", wallThickness: 0.375 },
      { schedule: "E.H.", wallThickness: 0.5 },
    ],
  },
  {
    pipeSize: '48"',
    outsideDiameter: 48.0,
    schedules: [
      { schedule: "STD.", wallThickness: 0.375 },
      { schedule: "E.H.", wallThickness: 0.5 },
    ],
  },
  {
    pipeSize: '54"',
    outsideDiameter: 54.0,
    schedules: [
      { schedule: "STD.", wallThickness: 0.375 },
      { schedule: "E.H.", wallThickness: 0.5 },
    ],
  },
  {
    pipeSize: '60"',
    outsideDiameter: 60.0,
    schedules: [
      { schedule: "STD.", wallThickness: 0.375 },
      { schedule: "E.H.", wallThickness: 0.5 },
    ],
  },
];

const classLocationsF = [
  { class: "Class 1", classValue: 0.72 },
  { class: "Class 2", classValue: 0.6 },
  { class: "Class 3", classValue: 0.5 },
  { class: "Class 4", classValue: 0.4 },
];

export const jointFactorE = [
  {
    jointType: " SEAMLESS",
    value: "1.0",
  },
  {
    jointType: "ERW",
    value: "1.00",
  },
  {
    jointType: "EFW",
    value: 0.8,
  },
  {
    jointType: "DSAW",
    value: 1,
  },
  {
    jointType: "FBW",
    value: 0.6,
  },
  {
    jointType: "SAW",
    value: "1",
  },
];

const tempDeratingFactorT = [
  { temp: "250 °F OR LESS", value: 1 },
  { temp: "300 °F", value: 0.967 },
  { temp: "350 °F", value: 0.933 },
  { temp: "400 °F", value: 0.9 },
  { temp: "450 °F", value: 0.867 },
];

const stdSMYSValues = [
  { grade: "GR A", value: 24000 },
  { grade: "GR B", value: 35000 },
  { grade: "A105", value: 36000 },
  { grade: "X-42", value: 42000 },
  { grade: "X-52", value: 52000 },
  { grade: "X-56", value: 56000 },
  { grade: "X-60", value: 60000 },
  { grade: "X-65", value: 65000 },
];

export const getAllWallThicknessArray = () => {
  const wallThicknessArray = [];
  const result = [];
  const filteredArrayOfWallThickness = [];
  pipeChart.forEach((el) => wallThicknessArray.push(el.schedules));
  wallThicknessArray
    .flat(2)
    .forEach((el) => result.push(el.wallThickness.toFixed(3)));
  const uniqueArrayWallThickness = [...new Set(result)].sort((a, b) => a - b);
  uniqueArrayWallThickness.forEach((wallThickness, idx) => {
    const obj = {
      key: idx,
      value: parseFloat(wallThickness),
      label: `${wallThickness}" `,
    };
    return filteredArrayOfWallThickness.push(obj);
  });

  return filteredArrayOfWallThickness;
};

export const getOutsideDiameter = (pipeSize) => {
  const pipeData = pipeChart.filter((el) => el.pipeSize === pipeSize);
  return pipeData[0].outsideDiameter;
};

export const getAllWTforPipe = (pipeSize) => {
  const arrayWallThickness = [];
  const result = [];
  const pipeData = pipeChart.filter((el) => el.pipeSize === pipeSize);
  pipeData[0].schedules.forEach((element) => {
    arrayWallThickness.push(element.wallThickness);
  });

  [...new Set(arrayWallThickness)].forEach((element, idx) => {
    const obj = {
      key: idx,
      value: element,
      label: `${element.toFixed(3)}" `,
    };
    result.push(obj);
  });
  console.log(result);
  return result;
};

export const getAllPipeSizes = () => {
  const allPipeSizes = [];
  pipeChart.forEach((element, idx) => {
    const obj = {
      key: idx,
      value: element.pipeSize,
      label: element.pipeSize,
    };
    allPipeSizes.push(obj);
  });
  return allPipeSizes;
};

export const getAllJointFactors = () => {
  const allJointFactors = [];
  jointFactorE.forEach((element, idx) => {
    const obj = {
      key: idx,
      value: element.value,
      label: element.jointType,
    };
    allJointFactors.push(obj);
  });
  return allJointFactors;
};

export const getAllClassLocations = () => {
  const allClassLocations = [];
  classLocationsF.forEach((element, idx) => {
    const obj = {
      key: idx,
      value: element.classValue,
      label: element.class,
    };
    allClassLocations.push(obj);
  });
  return allClassLocations;
};

export const getTempDeratingFactorT = () => {
  const allTempDeratingFactors = [];
  tempDeratingFactorT.forEach((element, idx) => {
    const obj = {
      key: idx,
      value: element.value,
      label: element.temp,
    };
    allTempDeratingFactors.push(obj);
  });
  return allTempDeratingFactors;
};

export const getStdSMYSValues = () => {
  const allStdSMYSValues = [];
  stdSMYSValues.forEach((element, idx) => {
    const obj = {
      key: idx,
      value: element.value,
      label: element.grade,
    };
    allStdSMYSValues.push(obj);
  });
  return allStdSMYSValues;
};

export const getAllSchedulesAndWallThicknesses = (npmPipeSize) => {
  const result = pipeChart.filter(
    (element) => element.pipeSize === npmPipeSize
  );
  return result[0].schedules;
};

export default pipeChart;
