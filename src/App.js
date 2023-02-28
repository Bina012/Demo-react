import Video from "./components/Video";
import "./App.css";

function App() {
  let videos = [
    {
      id: 1,
      title: "React JS Tutorial",
      views: "103k",
      time: "1 year ago",
      channel: "Coder Dost",
      verified: true,
    },
    {
      id: 2,
      title: "Node JS Tutorial",
      views: "1M",
      time: "1 year ago",
      channel: "Coder Dost",
      verified: true,
    },
    {
      id: 3,
      title: "MangoDB Tutorial",
      views: "1k",
      time: "1 month ago",
      channel: "Coder Dost",
      verified: false,
    },
  ];
  return (
    <div className="App">
      <div>Videos</div>
      {videos.map((video) => (
        <Video
          key={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          verified={video.verified}
          id={video.id}
        />
      ))}
    </div>
  );
}

export default App;
