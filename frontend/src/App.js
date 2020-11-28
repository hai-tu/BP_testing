import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import { render } from '@testing-library/react';

//

class App extends Component {

  state = {
    selectedFile: null
  }

  fileSectedHandler = event => {
    this.setState({
      selectedFile: event.target.files[0]
    })
    //console.log(event.target.files[0]);

  }

  fileUploadHandler = () => {
    const data = new FormData();
    data.append('file', this.state.selectedFile);
    axios.post('http://localhost:8000/', data, {onUploadProgress: ProgressEvent => {
      console.log('Upload Progess: ' + Math.round(ProgressEvent.loaded/ProgressEvent.total * 100) + '%')
    }
  }).then(res => {
        console.log(res);
      });
  }
  render() {
    return (
      <div className="App">
        <input type="file" onChange={this.fileSectedHandler} />
        <button onClick={this.fileUploadHandler}>Upload</button>
      </div>
    )
  }
}




export default App;