import { useState } from "react";
import ReportDocument from "./ReportDocument";
import { Button, Modal } from "antd";
// import { EyeOutlined } from "@ant-design/icons ";
import { EyeOutlined } from "@ant-design/icons";
import { pdf, StyleSheet, PDFViewer } from "@react-pdf/renderer";

// const styles = StyleSheet.create({
//   page: {
//     flexDirection: "row",
//     backgroundColor: "#E4E4E4",
//   },
//   section: {
//     margin: 10,
//     padding: 10,
//     flexGrow: 1,
//   },
// });

export default function PreviewReport(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  //   const handleOk = () => {
  //     setIsModalOpen(false);
  //   };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  //   const saveFile = () => {
  //     // This does the trick!
  //     pdf(<ReportDocument />)
  //       .toBlob()
  //       .then((blob) => saveAs(blob, "Design Pressure Report.pdf"));
  //   };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        <div>
          <EyeOutlined /> View Report
        </div>
      </Button>
      <Modal
        title={props.title}
        open={isModalOpen}
        // onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{ style: { display: "none" } }}
        cancelButtonProps={{ style: { display: "none" } }}
      >
        <div>
          <PDFViewer showToolbar={true}>
            {/* {({ loading }) =>
              loading ? <h1>Loading</h1> : <ReportDocument props={props} />
            } */}
            <ReportDocument props={props} file={"file"} />
          </PDFViewer>

          {/* <div>
            <button onClick={saveFile}>Save File</button>
          </div> */}
        </div>
      </Modal>
    </>
  );
}
