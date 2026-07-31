function Button(props) {
  return (
    <a
      href="#"
      style={{
        color: props.color,
        borderRadius: 9999,
        background: props.background,
        textDecoration: "none",
        fontSize: "small",
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: props.borderColor,
        padding: '8px 12px 8px 12px', /*  Top Right Bottom Left*/
        fontWeight: props.fontWeight
      }}
    >
      {props.text}
    </a>
  );
}
export default Button;
