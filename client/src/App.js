import './App.css';
import ImageUploading from "react-images-uploading";
import React from "react";

const TwitterIcon = (
  <svg id="twitter-24" viewBox="0 0 24 24">
    <path d="M8.068 20.714c8.004 0 12.381-6.63 12.381-12.381 0-.188-.004-.376-.012-.562a8.853 8.853 0 0 0 2.17-2.254 8.68 8.68 0 0 1-2.499.685 4.367 4.367 0 0 0 1.914-2.407c-.84.499-1.772.861-2.763 1.057a4.352 4.352 0 0 0-7.415 3.968 12.356 12.356 0 0 1-8.97-4.547 4.34 4.34 0 0 0-.59 2.188c0 1.51.769 2.842 1.937 3.622a4.32 4.32 0 0 1-1.971-.544v.055c0 2.108 1.5 3.867 3.49 4.266a4.356 4.356 0 0 1-1.965.075 4.356 4.356 0 0 0 4.065 3.022 8.73 8.73 0 0 1-5.404 1.863c-.351 0-.698-.02-1.038-.06a12.318 12.318 0 0 0 6.67 1.954"></path>
  </svg>
);

const InstagramIcon = (
  <svg id="instagram-24" viewBox="0 0 24 24">
    <path d="M12 1.501c2.851 0 3.21.012 4.329.063 1.117.051 1.88.229 2.548.488.7.264 1.336.677 1.86 1.211.534.525.947 1.16 1.211 1.86.26.668.437 1.43.488 2.548.024.523.04.88.049 1.4.01.597.014 1.408.014 2.929 0 2.851-.012 3.209-.063 4.329-.051 1.117-.229 1.88-.488 2.548a5.368 5.368 0 0 1-3.07 3.07c-.668.26-1.432.438-2.55.489-1.119.05-1.476.063-4.328.063-2.851 0-3.209-.012-4.328-.063-1.118-.051-1.881-.229-2.55-.488a5.144 5.144 0 0 1-1.859-1.211 5.145 5.145 0 0 1-1.21-1.86c-.26-.667-.438-1.43-.489-2.548-.05-1.12-.063-1.478-.063-4.329s.012-3.209.063-4.329c.051-1.117.229-1.88.488-2.548.264-.7.677-1.335 1.211-1.86a5.145 5.145 0 0 1 1.86-1.21c.668-.26 1.43-.438 2.548-.489 1.12-.05 1.478-.063 4.33-.063zm4.243 1.953c-1.107-.05-1.44-.061-4.243-.061-2.803 0-3.135.01-4.242.06-1.024.048-1.58.219-1.95.362a3.25 3.25 0 0 0-1.207.786 3.253 3.253 0 0 0-.786 1.207c-.143.37-.315.926-.361 1.95-.05 1.107-.061 1.439-.061 4.242 0 2.804.01 3.136.06 4.243.047 1.023.219 1.58.362 1.95.169.455.437.868.786 1.206a3.25 3.25 0 0 0 1.207.786c.37.144.926.315 1.95.361 1.106.05 1.438.062 4.242.062a458.62 458.62 0 0 0 2.38-.007 43.158 43.158 0 0 0 1.863-.055c1.023-.046 1.58-.217 1.95-.361a3.477 3.477 0 0 0 1.992-1.993c.144-.37.315-.926.361-1.95.05-1.107.061-1.438.061-4.242 0-2.803-.01-3.135-.06-4.242-.048-1.024-.219-1.58-.362-1.95a3.255 3.255 0 0 0-.786-1.207 3.254 3.254 0 0 0-1.207-.786c-.37-.143-.926-.314-1.95-.361zm1.362 4.202a1.26 1.26 0 1 1 0-2.52 1.26 1.26 0 0 1 0 2.52zM6.608 12a5.391 5.391 0 1 1 10.782 0A5.391 5.391 0 0 1 6.61 12zM12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"></path>
  </svg>
);

const YouTubeIcon = (
  <svg viewBox="-21 -117 682.66672 682"><path d="m626.8125 64.035156c-7.375-27.417968-28.992188-49.03125-56.40625-56.414062-50.082031-13.703125-250.414062-13.703125-250.414062-13.703125s-200.324219 0-250.40625 13.183593c-26.886719 7.375-49.03125 29.519532-56.40625 56.933594-13.179688 50.078125-13.179688 153.933594-13.179688 153.933594s0 104.378906 13.179688 153.933594c7.382812 27.414062 28.992187 49.027344 56.410156 56.410156 50.605468 13.707031 250.410156 13.707031 250.410156 13.707031s200.324219 0 250.40625-13.183593c27.417969-7.378907 49.03125-28.992188 56.414062-56.40625 13.175782-50.082032 13.175782-153.933594 13.175782-153.933594s.527344-104.382813-13.183594-154.460938zm-370.601562 249.878906v-191.890624l166.585937 95.945312zm0 0" /></svg>
);

const BitcoinIcon = (
  <svg viewBox="0 0 30 30" width="30px" height="30px">
    <path d="M 15 3 C 8.373 3 3 8.373 3 15 C 3 21.627 8.373 27 15 27 C 21.627 27 27 21.627 27 15 C 27 8.373 21.627 3 15 3 z M 14 8 L 16 8 L 16 10.007812 C 17.86 10.050812 18.970703 10.984141 18.970703 12.494141 C 18.970703 13.554141 18.188109 14.476906 17.162109 14.628906 L 17.162109 14.753906 C 18.486109 14.850906 19.449219 15.849672 19.449219 17.138672 C 19.449219 18.888672 18.129 19.995047 16 19.998047 L 16 22 L 14 22 L 14 20 L 11.5 20 L 11.5 10 L 14 10 L 14 8 z M 13.59375 11.601562 L 13.59375 14.144531 L 15.166016 14.144531 C 16.296016 14.144531 16.912109 13.680953 16.912109 12.876953 C 16.912109 12.079953 16.337844 11.601563 15.339844 11.601562 L 13.59375 11.601562 z M 13.59375 15.558594 L 13.59375 18.398438 L 15.457031 18.398438 C 16.663031 18.398438 17.314453 17.892031 17.314453 16.957031 C 17.314453 16.042031 16.641203 15.558594 15.408203 15.558594 L 13.59375 15.558594 z"/>
  </svg>
);

const EthereumIcon = (
  <svg viewBox="0 0 50 50" width="26px" height="30px">
    <path d="M 25.984375 0.98632812 A 1.0001 1.0001 0 0 0 25.099609 1.5527344 L 11.169922 23.443359 A 1.0009551 1.0009551 0 0 0 11.107422 23.548828 A 1.0009551 1.0009551 0 0 0 11.105469 23.550781 A 1.0001 1.0001 0 0 0 11.066406 23.640625 A 1.0009551 1.0009551 0 0 0 11.013672 23.833984 A 1.0001 1.0001 0 0 0 11 24.033203 A 1.0009551 1.0009551 0 0 0 11 24.035156 A 1.0001 1.0001 0 0 0 11.007812 24.132812 A 1.0009551 1.0009551 0 0 0 11.011719 24.152344 A 1.0001 1.0001 0 0 0 11.046875 24.298828 A 1.0001 1.0001 0 0 0 11.054688 24.326172 A 1.0009551 1.0009551 0 0 0 11.054688 24.328125 A 1.0001 1.0001 0 0 0 11.091797 24.419922 A 1.0009551 1.0009551 0 0 0 11.091797 24.421875 A 1.0001 1.0001 0 0 0 11.138672 24.507812 A 1.0009551 1.0009551 0 0 0 11.138672 24.509766 A 1.0001 1.0001 0 0 0 11.193359 24.591797 A 1.0009551 1.0009551 0 0 0 11.222656 24.626953 A 1.0001 1.0001 0 0 0 11.257812 24.669922 A 1.0001 1.0001 0 0 0 11.326172 24.740234 A 1.0009551 1.0009551 0 0 0 11.328125 24.742188 A 1.0009551 1.0009551 0 0 0 11.486328 24.859375 A 1.0009551 1.0009551 0 0 0 11.488281 24.861328 A 1.0001 1.0001 0 0 0 11.503906 24.869141 A 1.0009551 1.0009551 0 0 0 11.505859 24.871094 L 25.378906 32.798828 A 1.0001 1.0001 0 0 0 26.613281 32.802734 L 40.474609 24.880859 A 1.0009551 1.0009551 0 0 0 40.496094 24.869141 A 1.0001 1.0001 0 0 0 40.560547 24.828125 A 1.0009551 1.0009551 0 0 0 40.580078 24.814453 A 1.0001 1.0001 0 0 0 40.59375 24.802734 A 1.0009551 1.0009551 0 0 0 40.654297 24.757812 A 1.0009551 1.0009551 0 0 0 40.658203 24.753906 A 1.0001 1.0001 0 0 0 40.669922 24.744141 A 1.0009551 1.0009551 0 0 0 40.730469 24.683594 A 1.0009551 1.0009551 0 0 0 40.794922 24.607422 A 1.0009551 1.0009551 0 0 0 40.849609 24.527344 A 1.0009551 1.0009551 0 0 0 40.851562 24.525391 A 1.0001 1.0001 0 0 0 40.853516 24.519531 A 1.0009551 1.0009551 0 0 0 40.900391 24.439453 A 1.0009551 1.0009551 0 0 0 40.900391 24.4375 A 1.0001 1.0001 0 0 0 40.931641 24.367188 A 1.0009551 1.0009551 0 0 0 40.939453 24.345703 A 1.0001 1.0001 0 0 0 40.947266 24.322266 A 1.0009551 1.0009551 0 0 0 40.966797 24.253906 A 1.0009551 1.0009551 0 0 0 40.96875 24.25 A 1.0001 1.0001 0 0 0 40.970703 24.244141 A 1.0009551 1.0009551 0 0 0 40.988281 24.152344 A 1.0001 1.0001 0 0 0 40.998047 24.076172 A 1.0009551 1.0009551 0 0 0 40.998047 24.068359 A 1.0001 1.0001 0 0 0 41 23.976562 A 1.0001 1.0001 0 0 0 40.996094 23.917969 A 1.0009551 1.0009551 0 0 0 40.990234 23.855469 A 1.0009551 1.0009551 0 0 0 40.990234 23.853516 A 1.0001 1.0001 0 0 0 40.988281 23.84375 A 1.0009551 1.0009551 0 0 0 40.970703 23.759766 A 1.0009551 1.0009551 0 0 0 40.970703 23.755859 A 1.0001 1.0001 0 0 0 40.949219 23.681641 A 1.0009551 1.0009551 0 0 0 40.941406 23.660156 A 1.0001 1.0001 0 0 0 40.931641 23.636719 A 1.0009551 1.0009551 0 0 0 40.904297 23.570312 A 1.0009551 1.0009551 0 0 0 40.902344 23.568359 A 1.0001 1.0001 0 0 0 40.900391 23.5625 A 1.0009551 1.0009551 0 0 0 40.853516 23.480469 A 1.0001 1.0001 0 0 0 40.847656 23.470703 A 1.0009551 1.0009551 0 0 0 40.84375 23.462891 L 40.8125 23.416016 L 26.896484 1.546875 A 1.0001 1.0001 0 0 0 25.984375 0.98632812 z M 25 5.4355469 L 25 17.339844 L 14.583984 21.802734 L 25 5.4355469 z M 27 5.4355469 L 37.416016 21.802734 L 27 17.339844 L 27 5.4355469 z M 25 19.515625 L 25 30.275391 L 14.242188 24.128906 L 25 19.515625 z M 27 19.515625 L 37.757812 24.128906 L 27 30.275391 L 27 19.515625 z M 40.007812 27.998047 A 1.0001 1.0001 0 0 0 39.503906 28.130859 L 26 35.847656 L 12.496094 28.130859 A 1.0001 1.0001 0 0 0 12.019531 28 A 1.0001 1.0001 0 0 0 11.195312 29.59375 L 25.128906 48.503906 A 1.0001 1.0001 0 0 0 26.869141 48.505859 L 40.804688 29.59375 A 1.0001 1.0001 0 0 0 40.007812 27.998047 z M 15.613281 32.216797 L 25 37.582031 L 25 44.957031 L 15.613281 32.216797 z M 36.386719 32.216797 L 27 44.957031 L 27 37.582031 L 36.386719 32.216797 z"/>
  </svg>
);

const PayPalIcon = (
  <svg viewBox="0 0 50 50" width="26px" height="30px">
    <path d="M 11.40625 2 C 10.40625 2 9.511719 2.6875 9.3125 3.6875 C 9.3125 3.6875 3.414063 30.695313 2.3125 36.09375 C 2.113281 37.195313 2.386719 37.789063 2.6875 38.1875 C 3.085938 38.6875 3.699219 39 4.5 39 L 12 39 L 17.90625 11.8125 C 18.105469 10.8125 19.011719 9 21.8125 9 L 38 9 C 36.601563 4.398438 32.105469 2 27.90625 2 Z M 22 11.09375 L 20.40625 11.40625 C 20.105469 11.605469 19.914063 12.011719 19.8125 12.3125 L 17.40625 23.5 C 18.105469 23.199219 18.792969 23.09375 19.59375 23.09375 L 26.8125 23.09375 C 33.210938 23.09375 36.800781 20.507813 38 14.90625 C 38.199219 13.90625 38.3125 13.113281 38.3125 12.3125 L 38.1875 11.1875 L 38.1875 11.09375 Z M 40.09375 11.3125 L 40.1875 12 C 40.289063 13 40.105469 13.894531 39.90625 15.09375 C 38.507813 21.59375 33.988281 24.90625 26.6875 24.90625 L 19.5 24.90625 C 17.898438 24.90625 16.800781 25.605469 16.5 26.90625 C 16.101563 28.707031 12.601563 45.199219 12.5 45.5 C 12.398438 46 12.507813 46.6875 12.90625 47.1875 C 13.207031 47.585938 13.6875 48 14.6875 48 L 22.6875 48 C 23.6875 48 24.613281 47.289063 24.8125 46.1875 C 25.710938 42.386719 26.898438 36.613281 27 36.3125 C 27 36.210938 27.09375 36 27.09375 36 L 32.40625 36 C 40.207031 36 46.101563 31.3125 47.5 23.8125 C 48.5 19.210938 47.207031 16.289063 45.90625 14.6875 C 44.105469 12.386719 40.792969 11.3125 40.09375 11.3125 Z"/>
  </svg>
);


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
                Upload Your Cover Art
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
            <div className="footer" style={{backgroundColor: imageList[0] ? "" : "rgb(8, 154, 154)"}}>
              <a
                href="https://www.youtube.com/channel/UCw5E1_9950iTHdrAp0pHvFw"
                className={"footerItem flex-item"}
              >
                {YouTubeIcon}
              </a>
              <a
                href="https://www.instagram.com/bambooleavesuk/"
                className={"footerItem flex-item"}
              >
                {InstagramIcon}
              </a>
              <a
                href="https://mobile.twitter.com/bambooleavesuk"
                className={"footerItem flex-item"}
              >
                {TwitterIcon}
              </a>
              <a
                href="https://www.blockchain.com/explorer/addresses/btc/bc1q6gz57ucy3hmzrjv9k7reqmwuuretmlvfue6zuc"
                className={"footerItem flex-item"}
              >
                {BitcoinIcon}
              </a>
              <a
                href="https://www.blockchain.com/eth/address/0x713dA9330f19a7575035eEe0f7938a36cAEa9fe5"
                className={"footerItem flex-item"}
              >
                {EthereumIcon}
              </a>
              <a
                href="https://www.paypal.com/paypalme/bambooleaves"
                className={"footerItem flex-item"}
              >
                {PayPalIcon}
              </a>
            </div>
          </div>
        )}
      </ImageUploading>

    </div>
  );
}

export default App;