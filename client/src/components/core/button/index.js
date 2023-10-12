import "./styles.scss";

// Others
import { Spinner } from "react-bootstrap";

const index = ({ label, style, onClick, visible }) => {
  return (
    <button
      type="submit"
      style={style}
      onClick={onClick}
      className="btn btn-primary"
      disabled={visible}
    >
      {label}

      {visible && (
        <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
          style={{ marginLeft: "1rem" }}
        />
      )}
    </button>
  );
};

export default index;
