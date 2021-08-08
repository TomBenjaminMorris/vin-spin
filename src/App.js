import './App.css';
import ImageUploading from "react-images-uploading";
import React from "react";

function App() {

  const [images, setImages] = React.useState([]);
  const maxNumber = 2;
  const onChange = (imageList) => {
    setImages(imageList);
  };

  return (
    <div className="App">
      <ImageUploading
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
        }) => (
          <div className="wrapper">
            {!imageList[0] && (
              <button
              className="uploadButton"
              onClick={onImageUpload}
            >
              Upload Your Art
            </button>
            )}
            {imageList[0] && (
              <div className="wrapper">
                <div className="backgroundImg" style={{ backgroundImage: `url(${imageList[0] && imageList[0].data_url})` }}></div>
                <div className="innerWrapper">
                  <div className="coverWrapper">
                    <div className="cover" style={{ backgroundImage: `url(${imageList[0] && imageList[0].data_url})` }}></div>
                  </div>
                  <div>
                    <div className="outer">
                      <div className="inner" style={{ backgroundImage: `url(${imageList[0] && imageList[0].data_url})` }}>
                        <div className="innerinner"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* <div className="bambooLink">@bambooleavesuk</div> */}
          </div>
        )}
      </ImageUploading>

    </div>
  );
}

export default App;
