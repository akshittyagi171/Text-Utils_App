import { useState } from "react"
import React from 'react'


export default function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleTitleClick = () => {
        let newText = text.split(' ')
            .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
            .join(' ');
        setText(newText)
    }

    const handleSnakeClick = () => {
        let newText = text.replace(/\d+/g, ' ')
            .split(/ |\B(?=[A-Z])/)
            .map((word) => word.toLowerCase())
            .join('_');
        setText(newText)
    }

    const handleKebabClick = () => {
        let newText = text.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
            .map(x => x.toLowerCase())
            .join('-');
        setText(newText)
    }

    const handleCopyClick = () => {
        var copyText = document.getElementById("exampleFormControlTextarea1");

        // Select the text field
        copyText.select();
        copyText.setSelectionRange(0, 99999); // For mobile devices

        // Copy the text inside the text field
        navigator.clipboard.writeText(copyText.value);
    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }

      const clear = () => {
        let newText = ""
        setText(newText)
      }

      const downloadTxtFile = () => {
        const element = document.createElement("a");
        const file = new Blob([text], {
          type: "text/plain"
        });
        element.href = URL.createObjectURL(file);
        element.download = "myFile.txt";
        element.click();
}

const handleCamelClick = () => {
    let newText = text.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
      }).replace(/\s+/g, '');
    setText(newText)
}

    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const [text, setText] = useState('');

    return (

        <>
            <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="13" value={text} style={{backgroundColor: props.mode === 'dark' ? '#212529' : 'white' , color: props.mode === 'dark' ? 'white' : 'black'}} onChange={handleOnChange}></textarea><br />
                    <button className="btn btn-primary me-1" onClick={handleUpClick}>UpperCase</button>
                    <button className="btn btn-primary me-1" onClick={handleLoClick}>LowerCase</button>
                    <button className="btn btn-primary me-1" onClick={handleTitleClick}>TitleCase</button>
                    <button className="btn btn-primary me-1" onClick={handleSnakeClick}>Snake_Case</button>
                    <button className="btn btn-primary me-1" onClick={handleKebabClick}>Kebab-Case</button>
                    <button className="btn btn-primary me-1" onClick={handleCamelClick}>camelCase</button>
                    <br /><br />
                    <button className="btn btn-success me-1" onClick={handleCopyClick}>COPY</button>
                    <button className="btn btn-success me-1" onClick={speak}>SPEAK</button>
                    <button className="btn btn-success me-1" onClick={downloadTxtFile}>Download .txt</button>
                    <button className="btn btn-danger me-1" onClick={clear}>CLEAR</button>
                </div>
            </div>
            <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length} words and {text.length} Characters</p>
                <p>{0.008 * text.split(" ").length} Minutes Read</p>
            </div>
        </>
    )
}