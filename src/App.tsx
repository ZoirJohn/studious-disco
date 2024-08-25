import { Divider,Row,Col } from "antd";
import "./App.css";

const App: React.FC = () => {
      return (
            <>
                  <Divider orientation='left'>sub-element align evenly</Divider>
                  <Row justify='space-evenly'>
                        <Col span={4}>col-4</Col>
                        <Col span={4}>col-4</Col>
                        <Col span={4}>col-4</Col>
                        <Col span={4}>col-4</Col>
                  </Row>
            </>
      );
};
export default App;
