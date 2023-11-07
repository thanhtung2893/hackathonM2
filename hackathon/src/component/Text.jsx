import React ,{useState}from 'react'
import './Text.css'
export default function Text() {
    const [text, setText] = useState('');
    const [letterCount, setLetterCount] = useState(0);
    const [wordCount, setWordCount] = useState(0);
    const [paraCount, setParaCount] = useState(0);
    const [lowercaseText, setLowercaseText] = useState('');
    const [uppercaseText, setUppercaseText] = useState('');
  
    const handleTextChange = (event) => {
      const newText = event.target.value;
      setText(newText);
  
      // Đếm số chữ cái
      const letterRegex = /[a-zA-Z]/g;
      const letters = newText.match(letterRegex) || [];
      setLetterCount(letters.length);
  
      
  
  // Đếm số từ
      const wordRegex = /\S+/g;
      const words = newText.match(wordRegex) || [];
      setWordCount(words.length);
  
      // Đếm số đoạn văn
      const paraRegex = /\n+/g;
      const paras = newText.match(paraRegex) || [];
      setParaCount(paras.length + 1); // +1 để tính đoạn văn cuối cùng
  
      // Chuyển đoạn văn thành lowercase
      setLowercaseText(newText.toLowerCase());
      // Chuyển đoạn văn thành Uppercase
      setUppercaseText(newText.toUpperCase())
    };
    const up=()=>{
        for (let i = 0; i <text.length; i++) {
          if (text[i]!="\n") {
            text[i]=text[i].toUpperCase()
            
          }      
            }
            setText(text.join(""))
      }
      const low=()=>{
        for (let i = 0; i <text.length; i++) {
      if (arrText[i]!="\n") {
        text[i]=text[i].toLowerCase()
        
      }      
        }
        setText(text.join(""))
      }
  
  return (
    <>
        <div className='body'>
 <h2>Word Counter App</h2>
        <div className='btn'>
        <div className='letterCount'>letter <br /> {letterCount}</div>
        <div className='wordCount'>word <br />{wordCount}</div>
        <div className='paraCount '>Paragraph <br />{paraCount}</div>
      </div>

        <div className='textarea'>
      <textarea
        rows="10"
        cols="70"
        value={text}
        onChange={handleTextChange}
        placeholder="Nhập đoạn văn ở đây..."
      />
      <div className=''>
      <button onClick={up}>Click to Uppercase</button>
      <button onClick={low}>Click to Lowercase</button>
      </div>
        </div>
        {/* ************************************ */}
        
      <div className='case'>
        <h3>Đoạn văn dưới dạng lowercase:</h3>
        <p>{lowercaseText}</p>
        <h3>Đoạn văn dưới dạng uppercase:</h3>
        <p>{uppercaseText}</p>
      </div>
        </div>
       
    </>
  )
}

 
 