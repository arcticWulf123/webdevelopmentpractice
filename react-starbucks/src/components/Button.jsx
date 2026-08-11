function Button(props) {
  return (
    <a
      href="#"
      className={props.className}
      style={{
        color: props.color,
        borderRadius: 9999,
        background: props.background,
        textDecoration: "none",
        fontSize: "medium",
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: props.borderColor,
        paddingTop: '7px',
        paddingBottom: '7px',
        paddingLeft: '16px',
        paddingRight: '16px', 
        fontWeight: props.fontWeight
      }}
    >
      {props.text}
    </a>
  );
}
export default Button;
