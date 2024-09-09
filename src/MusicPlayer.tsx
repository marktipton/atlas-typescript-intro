import React, { useEffect, useState } from 'react';
import CurrentlyPlaying from './components/CurrentlyPlaying';
import Playlist from './components/Playlist';

type PlaylistItem = {
  id: number;
  title: string;
  artist: string;
  genre: string;
  duration: string;
  cover: string;
};

export default function MusicPlayer() {
  const [playlist, setPlaylist] = useState<PlaylistItem[]>([]);
  const [currentSong, setCurrentSong] = useState<PlaylistItem | null>(null);
  const [currentSongIndex, setCurrentSongIndex] = useState<number>(0);
  const [isShuffled, setIsShuffled] = useState<boolean>(false);

  useEffect(() => {
    const fetchPlaylistData = async () => {
      const response = await fetch('https://raw.githubusercontent.com/atlas-jswank/atlas-music-player-api/main/playlist');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data: PlaylistItem[] = await response.json();
      setPlaylist(data);
      if (data.length > 0) {
        setCurrentSong(data[0]);
        setCurrentSongIndex(0);
      }
    };

    fetchPlaylistData();
  }, []);

  const handleNextSong = () => {
    if (currentSongIndex < playlist.length - 1) {
      const nextIndex = currentSongIndex + 1;
      setCurrentSong(playlist[nextIndex]);
      setCurrentSongIndex(nextIndex);
    }
  };

  const handlePrevSong = () => {
    if (currentSongIndex > 0) {
      const prevIndex = currentSongIndex - 1;
      setCurrentSong(playlist[prevIndex]);
      setCurrentSongIndex(prevIndex);
    }
  };

  const handleShuffleToggle = (isShuffled: boolean) => {
    setIsShuffled(isShuffled);
  };

  const isPrevDisabled = currentSongIndex === 0 && !isShuffled;
  const isNextDisabled = (currentSongIndex === playlist.length - 1 && !isShuffled) || playlist.length === 0;

  return (
    <div className="flex flex-col md:flex-row shadow-lg rounded-lg divide-x divide-y">
      <CurrentlyPlaying
        currentSong={currentSong}
        onNextSong={handleNextSong}
        onPrevSong={handlePrevSong}
        isPrevDisabled={isPrevDisabled}
        isNextDisabled={isNextDisabled}
        onShuffleToggle={handleShuffleToggle}
      />
      <Playlist
        playlist={playlist}
        currentSong={currentSong}
      />
    </div>
  );
}
