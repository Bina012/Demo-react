import "./Video.css";
function Video({ id, title, channel = "Coder Dost", views, time, verified }) {
  let channelJSX;
  //   if (verified) {
  //     channelJSX = <div className="channel">{channel} ✅</div>;
  //   } else {
  //     channelJSX = <div className="channel">{channel}</div>;
  //   }
  return (
    <>
      <div className="container">
        <div className="pic">
          <img src={`https://picsum.photos/id/${id}/160/90`} alt="Tunnel" />
        </div>
        <div className="title">{title}</div>

        {/* {verified
          ? (channelJSX = <div className="channel">{channel} ✅</div>)
          : (channelJSX = <div className="channel">{channel} </div>)} */}
        {/* or */}
        {/* <div className="channel">{channel} verified ? ✅ : 'null'</div> */}

        <div className="channel">
          {channel} {verified && "✅"}
        </div>

        <div className="views">
          {views} views <span>.</span> {time}
        </div>
      </div>
    </>
  );
}

export default Video;
