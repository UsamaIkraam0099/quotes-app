import "./style.scss";

const index = ({ style, children }) => {
  return (
    <div className="card" style={style}>
      {children}
    </div>
  );
};

export default index;
