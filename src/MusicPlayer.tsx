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
  const [playedSongs, setPlayedSongs] = useState<number[]>([]); // keep track of played songs for shuffle mode

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
        setPlayedSongs([0]);
      }
    };

    fetchPlaylistData();
  }, []);


  const handleNextSong = () => {
    if (isShuffled) {
      handleShuffleNext();
    } else {
      if (currentSongIndex < playlist.length - 1) {
        const nextIndex = currentSongIndex + 1;
        setCurrentSong(playlist[nextIndex]);
        setCurrentSongIndex(nextIndex);
      }
    }
  };


  const handlePrevSong = () => {
    if (currentSongIndex > 0) {
      const prevIndex = currentSongIndex - 1;
      setCurrentSong(playlist[prevIndex]);
      setCurrentSongIndex(prevIndex);
    }
  };

  const handleShuffleNext = () => {
    let newPlayedSongs = [...playedSongs];

    if (newPlayedSongs.length === playlist.length) {
      // All songs have been played, reset the played list after selecting a new song
      newPlayedSongs = [];
    }

    const remainingSongs = playlist
      .map((_, index) => index)  // Get all indices
      .filter(index => !newPlayedSongs.includes(index)); // Filter out already played songs

    const randomIndex = remainingSongs[Math.floor(Math.random() * remainingSongs.length)];
    newPlayedSongs.push(randomIndex); // Add the new song to played list

    setPlayedSongs(newPlayedSongs); // Update played songs state
    setCurrentSong(playlist[randomIndex]);
    setCurrentSongIndex(randomIndex);
  };

  const handleShuffleToggle = (isShuffled: boolean) => {
    setIsShuffled(isShuffled);
  };

  const handleSongClick = (song: PlaylistItem, index: number) => {
    setCurrentSong(song);
    setCurrentSongIndex(index);
    if (isShuffled && !playedSongs.includes(index)) {
      setPlayedSongs([...playedSongs, index]); // Add clicked song to played list only in shuffle mode
    }
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
        handleSongClick={handleSongClick}
      />
    </div>
  );
}
