import "./styles.scss";

const index = ({ label, style, onClick }) => {
  return (
    <button
      type="submit"
      style={style}
      onClick={onClick}
      className="btn btn-primary"
    >
      {label}
    </button>
  );
};

export default index;
