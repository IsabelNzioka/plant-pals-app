function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "chocolate",
        borderRadius: "2rem",
      }}
      onClick={onClick}
    />
  );
}

export default SamplePrevArrow;
