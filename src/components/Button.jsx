const Button = ({ text, color = "#ff1800", style = {} }) => {
  return (
    <>
      <button
        type="button"
        className="btn px-4 py-3"
        style={{
          backgroundColor: color,
          borderColor: color,
          borderRadius: 0,
          color: "#fff",
          ...style,
        }}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
