
    const renderWords = (aWord) => {

      let word = aWord
      let chars = []
  
      
      for(let i = 0; i < word.length; i++){
        if((word[i].toLowerCase() !== word[i].toUpperCase() &&
           word[i].charCodeAt(0) >= 65 && word[i].charCodeAt(0) <= 122 ) ||
           word[i] === ' '){
        chars.push(word[i])
        }
      }
      
      let paths = []
      chars.map((char) => (
      paths.push (`/individial_signs/${char}.png`)
      
      ))
  
      let elements = []
      
      for(let i = 0; i < paths.length; i++){
        elements.push(<img src={paths[i]} alt="hey" width="64px" key={i}/>)
      }
  
        return elements
      }
  

const TranslationShow = (props) => {

    let theText = renderWords(props.msg)

  return (
    
    <div className="aBox">
   
     {theText}
    </div>

  )
}

export default TranslationShow
