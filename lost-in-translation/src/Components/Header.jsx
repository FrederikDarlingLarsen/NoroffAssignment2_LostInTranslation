import { useUser } from "../context/UserContext";

const Header = () => {
  const { user } = useUser();

  // The JSX containg a logo and heading
  return (
    <>
      {user !== null && (
        <img className="robotHead" src="/img/Logo.png" alt="" width="90px" />
      )}

      <h1>Lost in Translation</h1>
    </>
  );
};

export default Header;
