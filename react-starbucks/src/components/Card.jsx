import Button from "./Button";
function Card (props) {
    return (
        <div>
            <img src="" alt="" />
            <h1>{props.header}</h1>
            <p>{props.description}</p>
            <Button/>
        </div>
    )   
}
export default Card();