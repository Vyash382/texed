import React from "react";
import { useState } from "react";

export default function TextForm(props) {
  const handleOnClick = () => {
    if(text.length==0) {
      props.alert('Error' , 'Text area Empty');
      return;
    }
    console.log(text.toUpperCase());
    setText(text.toUpperCase());
    props.alert('Success','Changed to uppercase');
    // setText("You Have Clicked on Handle Up click");
  };
  const handleOnChange = (e) => {

    // console.log("On Change");
    setText(e.target.value);
  };
  const handleOnLoClick = () => {
    if(text.length==0) {
      props.alert('Error' , 'Text area Empty');
      return;
    }
    setText(text.toLowerCase());
    props.alert('Success','Changed to lowercase');
  };

  const [text, setText] = useState("Enter Text Here");

  // setText("New Text");
  let style={};
  if(props.mode==='light'){
    style= {
      backgroundColor: '#f8f9fa',
      color: 'black'
    }
  }
  else if(props.mode==='dark'){
    style= {
      backgroundColor: '#343a40',
      color: 'white'
    }
  }
  else if(props.mode==='red'){
    style= {
      backgroundColor: '#c27878',
      color: 'black'
    }
  }
  else{
    style= {
      backgroundColor: '#72c372',
      color: 'black'
    }
  }
  return (
    <>
      <div className="mb-3">
        <h1 className="my-3">{props.Heading}</h1>
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Textarea
        </label>
        <textarea
          
          onChange={handleOnChange}
          value={text}
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          style={style}
        ></textarea>
        <button style={style} className="btn btn-primary mx-2 my-3" onClick={handleOnClick}>
          Convert to Upper Case
        </button>
        <button style={style} className="btn btn-primary mx-2 " onClick={handleOnLoClick}>
          Convert to Lower Case
        </button>
        {/* <button className="btn btn-primary mx-2 " onClick={toggleMode}>{btnText}</button> */}
        <div className="container my-3 ">
        <h2>Your Text Summary</h2>
        <p>
          Your Text contains:- {text.split(/\s+/).filter((e)=>{return e.length!=0}).length} words and {text.length}{" "}
          characters
        </p>
        <h3>Preview</h3>
        {text}
      </div>
      </div>
      
    </>
  );
}
TextForm.defaultProps = {
  Heading: "Enter Text Here",
};
