import logo from '../Logo.png';
const Header = () => {

    // The JSX containing a logo and a heading.
    return (
    <>
    <img className="robotHead" src={logo} alt="" width="80px" />
    <h1>Lost in Translation</h1>
    </>
    )
}

export default Header;
