const renderWords = (word) => {

  // Declaring an emty array to contain the characters.
  let chars = [];

  // Looping through all of the characters, and checking whether they are valid.
  // If the charters are etiher the letters from a-z or space then add them to the array.
  for (let i = 0; i < word.length; i++) {
    if (
      (word[i].toLowerCase() !== word[i].toUpperCase() &&
        word[i].charCodeAt(0) >= 65 &&
        word[i].charCodeAt(0) <= 122) ||
      word[i] === " "
    ) {
      chars.push(word[i]);
    }
  }

  // The paths for the images are then mapped from
  // the chars array into a new array called paths.
  let paths = [];
  chars.map((char) => paths.push(`/img/individial_signs/${char}.png`));
  // The paths are then looped over in a for loop where the JSX elemnts are created
  // and added to a new array called elements.
  let elements = [];

  for (let i = 0; i < paths.length; i++) {
    elements.push(<img src={paths[i]} alt="hey" width="64px" key={i} />);
  }
  // Elements are then returned.
  return elements;
};

const TranslationShow = (props) => {

  // Create a variable to call the renderWords function on and call the function.
  let theText = renderWords(props.msg);

  return <div className="aBox">{theText}</div>;
};

export default TranslationShow;
