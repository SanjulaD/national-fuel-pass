import React, { Component } from 'react';
import jsPDF from 'jspdf';
import './App.css';
export class App extends Component {
  state = {
    profileImg:
      'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
  };
  imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        this.setState({ profileImg: reader.result });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  generatePDF = () => {
    var doc = new jsPDF('p', 'pt');

    doc.setFontSize(40);
    doc.text(100, 60, 'National Fuel Pass');
    doc.addFont('helvetica', 'normal');
    doc.save('demo.pdf');
  };
  render() {
    const { profileImg } = this.state;
    return (
      <div className="page">
        <div className="container">
          <h1 className="heading">Add your Image</h1>
          <div className="img-holder">
            <img src={profileImg} alt="" id="img" className="img" />
          </div>
          <input
            type="file"
            accept="image/*"
            name="image-upload"
            id="input"
            onChange={this.imageHandler}
          />
          <div className="label">
            <label className="image-upload" htmlFor="input">
              Choose your Photo
            </label>
          </div>
          <div>
            <button onClick={this.generatePDF} type="primary">
              Download PDF
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
