import {
  Page,
  Text,
  Document,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

import "./Report.css";
import { useEffect } from "react";
import logo from "../../../assets/logo.JPG";

const styles = StyleSheet.create({
  page: {
    padding: "10",
  },
  mainSection: {
    backgroundColor: "grey",
    padding: "10",
    border: "3px solid blue",
    height: "100%",
    width: "100%",
  },
  section: {
    width: "100%",
    padding: "10px 5px",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    textAlign: "left",
    fontSize: 20,
    fontWeight: "bold",
    width: "100%",
    backgroundColor: "lightblue",
  },
  lineItem: {
    width: "45%",
    border: "1px solid blue",
    padding: "5px 10px",
    fontSize: 12,
  },
});

function ReportDocument(props) {
  console.log(props);
  useEffect(() => {
    console.log("page was rerendered");
  }, [props]);

  return (
    <Document size>
      <Page size="A4" style={styles.page}>
        <View style={styles.mainSection}>
          {/* <Image src={logo} style={styles.image} /> */}
          <View style={styles.section}>
            <Text style={styles.header}>Pipe Input</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.lineItem}>NPM: {props.props.npmSizePipe}</Text>
            <Text style={styles.lineItem}>
              Internal Diameter: {props.props.internalDiameter}
            </Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.lineItem}>
              Outside Diameter: {props.props.outsideDiameter}
            </Text>
            <Text style={styles.lineItem}>
              Wall Thickness: {props.props.wallThickness}
            </Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.lineItem}>
              Pipe Grade: {props.props.pipeGrade}
            </Text>
            <Text style={styles.lineItem}>
              Class Location: {props.props.locationClass}
            </Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.lineItem}>
              Joint Type: {props.props.jointType}
            </Text>
            <Text style={styles.lineItem}>
              Temperature Rating: {props.props.temperature}
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );
}

export default ReportDocument;
