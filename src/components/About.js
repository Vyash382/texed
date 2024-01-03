import React from 'react'

export default function About(props) {
  
  let style = {};
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
    <div className="container" style={style}>
            <h1 className="my-3" style={style}>About Us</h1>
            <div className="container">
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h3 className="accordion-header" id="headingOne">
                    {/* <button className="accordion-button" type="button" style={style} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> */}
                    <strong>Analyze Your text </strong>
                    {/* </button> */}
                    </h3>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body my-3" style={style}>
                    Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or anything

                    </div>
                    </div>
                </div>
                <div className="accordion-item" style={style}>
                    <h3 className="accordion-header" id="headingTwo">
                    {/* <button className="accordion-button collapsed" style={style} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"> */}
                    <strong>Free to use </strong>
                    {/* </button> */}
                    </h3>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={style}>
                    TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h3 className="accordion-header" id="headingThree">
                    {/* <button className="accordion-button collapsed" style={style} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"> */}
                    <strong>Browser Compatible  </strong>
                    {/* </button> */}
                    </h3>
                    <h6>Build by -  Yash Sinha</h6>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={style}>
                    This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.

                    </div>
                    </div>
                </div>
                </div>
            </div>

        </div>
  )
}
