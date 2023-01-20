import TranslationEnter from "./TranslationEnter";
import TranslationShow from "./TranslationShow";
import withAuth from "../higher-order-components/withAuth";

const Translation = () => {
  return (
    <>
      <h1>Translation</h1>
      <TranslationEnter />
      <TranslationShow />
    </>
  );
};
export default withAuth(Translation);
