import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Footer } from "../components/footer/Footer";
import { NavBar } from "../components/navigation/NavBar";
import axios from "axios";
import "./DetailVideo.css";
import { Spinner } from "../components/utils/Spinner";
import { Error } from "../components/utils/Error";

// Key = AIzaSyAJ3YextWnty1fA7Xj_YzaoMBCVIsU4N7o
const uri =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&videoEmbeddable=true&order=viewCount&q=<query>&type=video&videoDefinition=high&key=AIzaSyAJ3YextWnty1fA7Xj_YzaoMBCVIsU4N7o";

export const DetailVideo: React.FC<{}> = () => {
  const search = useLocation().search;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [video, setVideo] = useState<any | null>(null);
  const name = new URLSearchParams(search).get("name");

  const fetchVideo = async () => {
    const newUri = uri.replace("<query>", `${name} official trailer`);
    try {
      const { data } = await axios.get(newUri);
      setVideo(data.items[0]);
      console.log(data);
    } catch (error) {
      setError(`Tried to fetch ${name} but got this error:` + error.message);
    }
  };

  useEffect(() => {
    fetchVideo();
    setLoading(false);
  }, []);

  if (loading) return <Spinner />;

  return (
    <div>
      <NavBar />
      {!loading && video ? (
        <div className="video">
          <iframe
            className="video__frame"
            src={`https://www.youtube.com/embed/${video.id.videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : (
        <Error message={error} />
      )}
      <Footer />
    </div>
  );
};
