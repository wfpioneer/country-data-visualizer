import { Col, Row, Typography } from "antd";
import { CountryData } from "./copmonents/CountryData/CountryData";
import { UserControl } from "./copmonents/UserControl/UserControl";
import { useCountryData } from "./hooks/useCountryData";

function App() {
  const { data, code, error, loading, changeCode, update, clear, clearAll } =
    useCountryData();

  return (
    <Row justify="center">
      <Col lg={12} md={16} sm={20} xs={24}>
        <Typography.Title level={2} style={{ textAlign: "center" }}>
          Country Data Visualizer
        </Typography.Title>
        <UserControl
          code={code}
          data={data}
          changeCode={changeCode}
          update={update}
          clear={clear}
          clearAll={clearAll}
        />
        <CountryData
          data={data}
          error={error}
          loading={loading}
          update={update}
        />
      </Col>
    </Row>
  );
}

export default App;
