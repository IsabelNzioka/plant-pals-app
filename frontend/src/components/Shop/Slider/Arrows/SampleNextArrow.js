function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#333130",
        borderRadius: "2rem",
      }}
      onClick={onClick}
    />
  );
}

export default SampleNextArrow;
