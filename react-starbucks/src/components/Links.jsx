function Link(props) {
  return (
    <a
      href="#"
      className={props.className}
      style={{
        textTransform: "uppercase",
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
