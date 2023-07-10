import { ArrowBackOutlined } from "@mui/icons-material";
import {Link, useLocation} from "react-router-dom"
import "./watch.scss";
export default function Watch() {
  const location = useLocation()
  const movie = location.movie
  console.log(location)
  return (
    <div className="watch">
      <Link to = "/">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      </Link>
      <video
        className="video"
        autoPlay
        progress
        controls
        src={movie.video}
      />
    </div>
  );
}