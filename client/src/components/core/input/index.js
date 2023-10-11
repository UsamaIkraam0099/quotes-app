import "./styles.scss";

const index = ({ form, name, type, style, onChange }) => {
  return (
    <div className="mb-3" style={style}>
      <label htmlFor={form[name].label} className="form-label">
        {form[name].label}
      </label>
      <input
        required
        type={type}
        id={form[name].label}
        className="form-control"
        aria-describedby="emailHelp"
        placeholder={form[name].placeholder}
        onChange={({ nativeEvent }) => onChange(name, nativeEvent.target.value)}
      />
    </div>
  );
};

export default index;
