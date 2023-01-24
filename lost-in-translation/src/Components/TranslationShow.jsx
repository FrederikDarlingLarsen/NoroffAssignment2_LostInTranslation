
    const renderWords = (aWord) => {

      let word = aWord
      let chars = []
  
      for(let i = 0; i < word.length; i++){
        if(word[i].toLowerCase() !== word[i].toUpperCase()){
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
    
    <div className="ShowBox">
   
     {theText}
    </div>

  )
}

export default TranslationShow
