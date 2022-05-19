import React, { useRef, useState } from "react";
import './Editor.css';

const Editor = (props) => {
  const text = useRef(null);

  const [fontSize, setFontSize] = useState()

  const [fontColor, setFontColor] = useState("")

  const bold = () => {(text.current.style.fontWeight = "bold");}

  const italic = () => {(text.current.style.fontStyle = "italic");}

  const underline = () => text.current.style.textDecorationLine="underline"

  const font_Size = (e) => {
      let data=e.target.value
      if(data<100){
       setFontSize(data)
       text.current.style.fontSize=`${data}px`;
      }
       else
       alert("You can't exceed the font size above 100px")
}

const font_Color = (e) => {
    let data=e.target.value
    setFontColor(data)
    text.current.style.color=data;
}
  return (
    <div>
      <div className="editor">
        <div className="style_box">
          <div onClick={bold} className="bold">Bold</div>
          <div onClick={italic} className="italic">Italic</div>
          <div onClick={underline} className="underline">Underline</div>
          <div  className="font_size">Font Size
          <input type="number" value={fontSize} onChange={(e)=>font_Size(e)} className="input_box"></input></div>
          <div className="color">Color
          <input type="text" value={fontColor} onChange={(e)=>font_Color(e)} className="input_box"></input></div>
        </div>
        <div className="text_box" ref={text}>{props.text}</div>
      </div>
    </div>
  );
};

export default Editor;
