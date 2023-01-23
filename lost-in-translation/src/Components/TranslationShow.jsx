
    const renderWords = (aWord) => {

      let word = aWord
      let chars = []
  
      for(let i = 0; i < word.length; i++){
        chars.push(word[i])
      }
      
      let paths = []
      chars.map((char) => (
      paths.push (`/individial_signs/${char}.png`)))
  
      let elements = []
      paths.map((path) => (
        elements.push(<img src={path} alt="hey" width="64px" key={path}/>)))
  
        return elements
      }
  

const TranslationShow = (props) => {

    let theText = renderWords(props.msg)

  return (
    
    <div className="ShowBox">
   
     {theText}
    </div>

  )
}

export default TranslationShow
