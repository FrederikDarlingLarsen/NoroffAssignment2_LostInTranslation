import ProfileHistoryItem from "./ProfileHistoryItem"

const ProfileHistory = ({translations}) => {

    // create a list of translations by mapping
    const translationsList = translations.map((translation,index) => <ProfileHistoryItem key={index + '-' + translation} translation={translation}/>)

    return(
        <div className="ProfileHistoryBox">
        <h2>History</h2>
        <ul>
            {translationsList}
        </ul>
        </div>
    )
}

export default ProfileHistory