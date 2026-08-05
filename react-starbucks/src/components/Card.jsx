import Button from "./Button";
function Card(props) {
  return (
    <article
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "15px",
      }}
    >
      <img src="" alt="" />
      <h1>{props.header}</h1>
      <p>{props.description}</p>
      <Button />
    </article>
  );
}
export default Card;
