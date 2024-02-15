import React, { useState, useEffect, useRef } from 'react';

const AudioPlayer = () => {
  const [isPaused, setIsPaused] = useState(true);
  const [songs, setSongs] = useState(['songs/song1.mp3']);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const audioRef = useRef(new Audio());
  const [currentTime, setCurrentTime] = useState(0);

  const togglePause = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPaused(false);
    } else {
      audioRef.current.pause();
      setIsPaused(true);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const icon = document.getElementById('audio-icon');
      if (icon) {
        icon.style.bottom = `${window.innerHeight - window.scrollY}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;

    audio.src = songs[currentSongIndex];
    audio.loop = songs.length === 1;

    const handleEnded = () => {
      setCurrentSongIndex((currentSongIndex + 1) % songs.length);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, [currentSongIndex, songs]);

  useEffect(() => {
    const audio = audioRef.current;

    if (!isPaused) {
      audio.currentTime = currentTime;
      audio.play();
    } else {
      setCurrentTime(audio.currentTime);
      audio.pause();
    }
  }, [isPaused]);

  return (
    <div style={{ position: 'fixed', bottom: '20px', right: '20px', color: '#FFD700' }}>
      <i className={`fa ${isPaused ? 'fa-play' : 'fa-pause'}`} id="audio-control" style={{fontSize: '200%'}} onClick={togglePause}></i>
    </div>
  );
};

export default AudioPlayer;


// import React, { useState, useEffect } from 'react';

// const AudioPlayer = () => {
//   const [isPaused, setIsPaused] = useState(true);
//   const [songs, setSongs] = useState(['songs/song1.mp3']);
//   const [currentSongIndex, setCurrentSongIndex] = useState(0);
//   const [audio] = useState(new Audio());

//   const togglePause = () => {
//     if (audio.paused) {
//       audio.play();
//       setIsPaused(false);
//     } else {
//       audio.pause();
//       setIsPaused(true);
//     }
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       const icon = document.getElementById('audio-icon');
//       if (icon) {
//         icon.style.bottom = `${window.innerHeight - window.scrollY}px`;
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     if (audio) {
//       audio.src = songs[currentSongIndex];
//       audio.loop = songs.length === 1;
//       audio.addEventListener('ended', () => {
//         setCurrentSongIndex((currentSongIndex + 1) % songs.length);
//       });
//       if (!isPaused) {
//         audio.play();
//       }
//     }

//     return () => {
//       if (audio) {
//         audio.removeEventListener('ended', () => {
//           setCurrentSongIndex((currentSongIndex + 1) % songs.length);
//         });
//         audio.pause();
//       }
//     };
//   }, [audio, songs, currentSongIndex, isPaused]);

//   return (
//     <div style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
//       <i className={`fa ${isPaused ? 'fa-play' : 'fa-pause'}`} id="audio-control" onClick={togglePause}></i>
//     </div>
//   );
// };

// export default AudioPlayer;