import StartUpLogin from "./StartUpLogin";

const StartUp = () => {
  // Return and image of the robot and the StartUpLogin component.
  return (
    <>
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
