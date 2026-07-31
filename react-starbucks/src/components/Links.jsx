function Link(props) {
  return (
    <a
      href="#"
      style={{
        textTransform: "uppercase",
        color: "black",
        fontWeight: "bold",
        textDecoration: "none",
        fontSize: "small"
      }}
    >
      {props.text}
    </a>
  );
}

export default Link;
