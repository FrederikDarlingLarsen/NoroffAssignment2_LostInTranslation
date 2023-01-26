import StartUpLogin from "./StartUpLogin";

const StartUp = () => {
  return (
    <>
      {/* <h2>This is the startup page</h2> */}
      <br />

      <img
        className="helloImg"
        src="/img/Logo-Hello.png"
        alt="hello"
        width="400px"
      />

      <StartUpLogin />
    </>
  );
};

export default StartUp;
