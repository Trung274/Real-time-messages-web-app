var NewComponent = React.createClass({
  render: function() {
    return (
      <div>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Messages</title>
        <link rel="stylesheet" href="/Real-time-messages-web-app/public/css/styles.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
        <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet" />
        <div className="chat-page">
          {/* navigationbar */}
          <ul className="nav navigation-bar m-0 row">
            <li className="navigation-bar1 pr-0 col-4">
              <div className="logo mr-3">
                <a href="home.html"><img src="assets/icons/Logo.img.svg" alt="" /></a>
              </div>
              <div className="search-box">
                <span><img className="search-icon ml-2" src="assets/icons/Search.svg" /></span>
                <input type="search" className="search-place" placeholder="Search in SOUNDHUB" />
              </div>
            </li>
            <li className="navigation-bar2 p-0 col-4">
              <div className="nav-btn-1 ml-auto " data-toggle="toggle">
                <a href="home.html"><img src="assets/icons/Home.svg" className="nav-icon" /></a>
              </div>
              <div className="nav-btn-1 mx-5" data-toggle="toggle">
                <a href="library.html"><img src="assets/icons/darhboard_alt.svg" className="nav-icon" /></a>
              </div>
              <div className="nav-btn-1 mr-auto" data-toggle="toggle">
                <a href="noti.html"><img src="assets/icons/Bell_pin.svg" className="nav-icon" /></a>
              </div>
            </li>
            <li className="navigation-bar3 pl-0 col-4">
              <div className="dropdown nav-btn-2 ml-auto mx-2">
                <img src="assets/icons/Info_fill.svg" className=" nav-icon-2 dropdown-toggle" data-toggle="dropdown" />
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="abtus.html">About us</a></li>
                  <li><a className="dropdown-item" href="legal.html">Legal</a></li>
                  <li><a className="dropdown-item" href="copyright.html">Copyright</a></li>
                  <li><a className="dropdown-item" href="support.html">Support</a></li>
                  <li><a className="dropdown-item" href="settings.html">Settings</a></li>
                  <div className="dropdown-divider" />
                  <li><a className="dropdown-item" href="#">Signout</a></li>
                </ul>
              </div>
              <div className="nav-btn-2 mx-2 active" data-toggle="toggle">
                <a href="chat.html"><img src="assets/icons/Chat_alt_2_fill.svg" className="nav-icon-2" /></a>
              </div>
              <div className="nav-btn-2 mx-2" data-toggle="toggle">
                <a href="profile.html"><img src="assets/icons/User_cicrle_duotone.svg" className="nav-icon-3" /></a>
              </div>
            </li>
          </ul>
          <div className="music-bar m-0 row">
            <div className="avt-bar col-4">
              <div className="music-thumb">
                <img src="assets/icons/User_cicrle_duotone.svg" alt="" />
              </div>
              <div className="song-title">
                <div className="music-name">There's no one at all</div>
                <p className="singer-name">MTP</p>
              </div>
            </div>
            <div className="control-bar col-4">
              <div className="control-button">
                <img className="control-icon play-random" src="assets/icons/random-off.svg" alt="" />
                <img className="control-icon play-back" src="assets/icons/prev.svg" alt="" />
                <img className="control-icon player-inner" src="assets/icons/continue.svg" alt="" />
                <img className="control-icon play-forward" src="assets/icons/next.svg" alt="" />
                <img className="control-icon play-repeat" src="assets/icons/repeat-off.svg" alt="" />
              </div>
              <input type="range" name="range" id="range" className="range" />
              <audio id="song" src="./assets/musics/memes.mp3" />
              <div className="timer">
                <div className="playtime">0:00</div>
                <div className="duration">9:99</div>
              </div>
            </div>
            <div className="more-bar col-4">
              <img className="more-icon" src="assets/icons/volume-up.svg" alt="" /><input type="range" id="volume-control" className="range" defaultValue={30} />
              <img className="more-icon" src="assets/icons/download.svg" alt="" />
              <a href="musicpage.html"><img className="more-icon" src="assets/icons/zoom.svg" alt="" /></a>
            </div>
          </div>
          {/* bodybar */}
          <div className="page-body-chat m-0 row">
            <div className="left-chat col-4">
              <div className="search-frame-chat-1 row m-4">
                <div className="chat-title col-2">Chat</div>
                <div className="chat-icon">
                  <img src="assets/icons/Chat_alt_add_fill2.svg " alt="" />
                </div>
              </div>
              <div className="search-frame-chat-2 row m-4 ">
                <input className="search-box-chat" type="text" placeholder="Search in chat" />
              </div>
              <div className="show-frame-chat m-4">
                <div className="show-chat-items">
                  <div className="avatar-icon">
                    <img src="assets/icons/User_cicrle_duotone.svg" alt="" />
                  </div>
                  <div className="main-message">
                    <div className="name-title">Doan Nhat Quang</div>
                    <div className="message-title"> Send a report <span className="time-title">11:30</span> </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="feed-chat p-0 col-8">
              <div className="block-chat">
                <div className="header-chat">
                  <img className="mr-3" src="assets/icons/User_cicrle_duotone.svg" style={{width: '50px', height: '50px'}} alt="" />
                  <div className="name-title" style={{fontSize: '18px', fontWeight: 500}}>Doan Nhat Quang</div>
                  <img className="ml-auto" src="assets/icons/telephone.svg" alt="" />
                  <img className="ml-4 mr-3" src="assets/icons/camera-video.svg" alt="" />
                </div>
                <div className="main-chat " />
                <div className="footer-chat">
                  <div className="message-area"><input type="text" /></div>
                  <input type="image" className="send-message-btn" src="assets/icons/send-fill.svg" />
                </div>
              </div>
            </div>
          </div>
        </div></div>
    );
  }
});