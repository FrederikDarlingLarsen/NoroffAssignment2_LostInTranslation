import ProfileHistoryItem from "./ProfileHistoryItem";

const ProfileHistory = ({ translations }) => {
  // create a list of translations using a for loop
  const translationsList = [];
  const numOfItems = 10;
  for (let i = 0; i < numOfItems; i++) {
    if(translations[i] !== undefined){
    translationsList.push(
      <ProfileHistoryItem
        key={i + "-" + translations[i]}
        translation={translations[i]}
      />);
    } 
  }

  return (
    <div className="aBox">
      <h2>History</h2>
      {/* Display the list of translations. */}
      <ul>{translationsList}</ul>
    </div>
  );
};

export default ProfileHistory;
