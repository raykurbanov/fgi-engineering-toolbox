import { useState } from "react";
import ReportDocument from "./ReportDocument";
import { Button, Modal } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import { PDFViewer } from "@react-pdf/renderer";

export default function PreviewReport(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

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
            <ReportDocument props={props} file={"file"} />
          </PDFViewer>
        </div>
      </Modal>
    </>
  );
}
