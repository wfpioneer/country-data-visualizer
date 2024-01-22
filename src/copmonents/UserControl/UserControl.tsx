import { ChangeEvent } from "react";
import { Country, CountryCode } from "../../types";
import { Button, Col, Input, Row, Space } from "antd";
import { ClearOutlined, ReloadOutlined, SendOutlined } from "@ant-design/icons";

export interface IUserControlProps {
  code: CountryCode;
  data: Country | undefined;
  changeCode: (e: ChangeEvent<HTMLInputElement>) => void;
  update: () => void;
  clear: () => void;
  clearAll: () => void;
}

export const UserControl:React.FC<IUserControlProps> = ({code, data, changeCode, update, clear, clearAll}) => {
  return (
    <Row justify="center">
      <Col xs={16}>
        <Space.Compact style={{ width: "100%", marginBottom: 8 }}>
          <Input
            value={code}
            onChange={changeCode}
            placeholder="Country Code"
          />
          <Button
            onClick={update}
            type="primary"
            icon={<SendOutlined />}
          >
            Submit
          </Button>
        </Space.Compact>
        <Space.Compact style={{ width: "100%" }}>
          <Button
            onClick={update}
            disabled={!data}
            icon={<ReloadOutlined />}
            style={{ width: "100%" }}
          >
            Update Cache
          </Button>
          <Button
            onClick={clear}
            disabled={!data}
            icon={<ClearOutlined />}
            style={{ width: "100%" }}
          >
            Clear Cache Item
          </Button>
          <Button
            onClick={clearAll}
            disabled={!data}
            icon={<ClearOutlined />}
            style={{ width: "100%" }}
          >
            Clean Cache
          </Button>
        </Space.Compact>
      </Col>
    </Row>
  );
};
