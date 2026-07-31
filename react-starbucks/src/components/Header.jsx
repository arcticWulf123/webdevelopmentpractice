import Link from "./Links";
import Button from "./Button";
function Header () {
    return (
        <nav style={{
            display: 'flex',
            justifyContent: 'space-between'
        }}>
            <div style={{
                display:"flex",
                gap: '10px'
            }}>
                <Link text="menu"></Link>
                <Link text="merchandise"></Link>
                <Link text="rewards"></Link>
            </div>
            <div>
                <Button color="black" background="white" borderColor="white" text="Find a Store"/>
                <Button color="black" background="white" borderColor="black" text="Sign In"/>
                <Button color="white" background="black" borderColor="white" text="Join Now"/>
            </div>
        </nav>
    );
}
export default Header;