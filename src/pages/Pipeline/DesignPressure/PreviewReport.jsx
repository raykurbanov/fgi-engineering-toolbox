import { useState } from "react";
import ReportDocument from "./ReportDocument";
import { Button, Modal } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import { pdf, StyleSheet, PDFViewer } from "@react-pdf/renderer";

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
        onCancel={handleCancel}
        okButtonProps={{ style: { display: "none" } }}
        cancelButtonProps={{ style: { display: "none" } }}
        width={750}
        bodyStyle={{ height: "700px" }}
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
