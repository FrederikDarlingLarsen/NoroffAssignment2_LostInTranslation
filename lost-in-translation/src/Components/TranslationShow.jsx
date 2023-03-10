const renderWords = (word) => {
  // Declaring an empty array to contain the characters.
  let chars = [];

  // Looping through all of the characters and then add them to the array.
  for (let i = 0; i < word.length; i++) {
      chars.push(word[i]);
  }
  // The paths for the images are then mapped from
  // the chars array into a new array called paths.
  let paths = [];
  chars.map((char) => paths.push(`/img/individial_signs/${char}.png`));
  // The paths are then looped over in a for loop where the JSX elements are created
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
