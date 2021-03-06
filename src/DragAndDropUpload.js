import React, { Component } from "react";
import Dropzone from "react-dropzone";
import bytes from "bytes";

class DragAndDropUpload extends Component {
  constructor(props) {
    super(props);
    this.state = { filename: "", filesize: "", fileuploadtime: "" };
  }

  handleOnDrop = acceptedFiles => {
    if (acceptedFiles.length !== 0) {
      const modified = new Date(Date.now());
      this.setState({
        filename: acceptedFiles[0].name,
        filesize: bytes(acceptedFiles[0].size),
        fileuploadtime: modified.toLocaleString()
      });
    } else {
      alert("only csv files accepted");
    }
  };

  render() {
    return (
      <div className="mt2">
        <Dropzone onDrop={this.handleOnDrop} accept=".csv">
          {({ getRootProps, getInputProps }) => (
            <section>
              <span {...getRootProps()}>
                <input {...getInputProps()} />
                <div className="ba b--dashed b--blue pv4 center tc bw3 br4 f4">
                  <i className="fas fa-cloud-upload-alt fa-6x blue" />
                  <p>
                    <span className="fw6 pointer hover-blue">
                      Choose a file
                    </span>{" "}
                    or drag it here.
                  </p>
                </div>
              </span>
            </section>
          )}
        </Dropzone>
        <div>
          <table className="center w-100 tc ma4 f4">
            <thead>
              <tr className="stripe-dark">
                <th colSpan="3">Uploaded Files</th>
              </tr>
            </thead>
            <thead>
              <tr className="stripe-dark">
                <th className="w-third">File Name</th>
                <th className="w-third">File Size</th>
                <th className="w-third">Uploaded</th>
              </tr>
            </thead>
            <tbody>
              <tr className="stripe-dark">
                <td>{this.state.filename}</td>
                <td>{this.state.filesize}</td>
                <td>{this.state.fileuploadtime}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default DragAndDropUpload;
