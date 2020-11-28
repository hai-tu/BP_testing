import React, {Component} from 'react';
import './App.css';
import axios from 'axios';

let stateFile;

function App(){

  function handleFile(e){
    const files = e.target.files[0];
    stateFile = e.target.files[0];
    //setState({file: file})
    //console.log(e.target.files, "$$$$$")
    //console.log(e.target.files[0], "$$$$$");

  };

  function handleUpload() {
    const data = new FormData()
    data.append('file', stateFile);
    axios.post('http://localhost:8000/data', data);
    //console.log(statefile, "The State ===== $$$$");
  };
  
  /*
  const { register, handleSubmit } = useForm()

  const onSubmit = async (data) => {
    //data.preventDefault();
    const formData = new FormData()
    formData.append("picture", data.picture)
    axios.post('http://localhost:8000', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    */
    /*
    const res = await fetch("http://localhost:8000", {
      method: "POST",
      body: formData
    }).then(res => res.json())
    alert(JSON.stringify(res))
    
    
  }
  */

  return (
    <form>
      <label>Select File</label>
      <input type="file" name="file" onChange={(e) => handleFile(e)} />
      <button onClick={() => handleUpload()}>Submit</button>
    </form>

    /*
    <form onSubmit={handleSubmit(onSubmit)}>
      <input ref={register} type="file" name="picture" />
      <button>Submit</button>
    </form>
    */
  );
}




export default App;