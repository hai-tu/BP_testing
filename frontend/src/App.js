import React, {useState} from 'react';
import axios from 'axios';
import './App.css';


function App() {

  const [selectedFile, setSelectedFile] = useState('');

  const fileSectedHandler = (event) => {

    setSelectedFile(event.target.files[0]);
      //selectedFile: event.target.files[0]
  
    console.log(event.target.files[0]);

  }

  const fileUploadHandler = () => {
    const data = new FormData();
    data.append('file', selectedFile);
    axios.post('http://localhost:8000/uploads', data, {onUploadProgress: ProgressEvent => {
      console.log('Upload Progess: ' + Math.round(ProgressEvent.loaded/ProgressEvent.total * 100) + '%')
    }
  }).then(res => {
        console.log(res);
      });
  }

    return (
      <div className="App">
        <input type="file" onChange={fileSectedHandler} />
        <button onClick={fileUploadHandler}>Upload</button>
      </div>
    );
}




export default App;