import { ReloadOutlined } from "@ant-design/icons";
import { Alert, Button } from "antd";

interface IErrorProps {
  update: () => void;
}

export const Error: React.FC<IErrorProps> = ({ update }) => {
  return (
    <Alert
      message="Error Loading Data"
      type="error"
      showIcon
      action={
        <Button
          size="small"
          onClick={update}
          type="primary"
          icon={<ReloadOutlined />}
        >
          Retry
        </Button>
      }
      closable
      style={{ width: "100%" }}
    />
  );
};
