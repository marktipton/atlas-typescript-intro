import CurrentlyPlaying from "./components/CurrentlyPlaying";
import Playlist from "./components/Playlist";

export default function MusicPlayer() {
  return (
  <div className="flex flex-col md:flex-row shadow-lg rounded-lg divide-x divide-y">
    <CurrentlyPlaying/>
    <Playlist/>
  </div>
  );
}
