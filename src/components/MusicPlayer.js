import React, { useState, useEffect, useRef } from 'react';

const MusicPlayer = ({nowPlaying }) => {
  const{url , image} = nowPlaying
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
    }

    audioRef.current = new Audio(url);

    audioRef.current.play().then(() => {
      setIsPlaying(true);
    }).catch(error => {
      console.error('Error playing audio:', error);
      setIsPlaying(false);
    });

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, [nowPlaying.url]);

  const togglePlayPause = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(error => {
        console.error('Error playing audio:', error);
        setIsPlaying(false);
      });
    }
  }; 

  return (
    <div className='absolute bottom-4 w-[100vw] right-0  xl:h-[5rem] md:h-[3rem] 2rem flex justify-center'>
    <div className=" music-player bg-[#212529] h-[6rem] z-50 flex w-[100%] mx-auto items-center justify-evenly lg:px-10 md:px-5 px-1">
      <div className='w-3/12 flex justify-evenly'>
      <button onClick={togglePlayPause}>
      <svg xmlns="http://www.w3.org/2000/svg"  class=" lg:w-[40px] lg:h-[40px] md:w-[32px] md:h-[32px] w-[32px] h-[32px]" fill="#f5f0f0" viewBox="0 0 256 256"><path d="M199.81,34a16,16,0,0,0-16.24.43L64,109.23V40a8,8,0,0,0-16,0V216a8,8,0,0,0,16,0V146.77l119.57,74.78A15.95,15.95,0,0,0,208,208.12V47.88A15.86,15.86,0,0,0,199.81,34ZM192,208,64.16,128,192,48.07Z"></path></svg>
       
      </button>
      <button onClick={togglePlayPause}>
        {isPlaying ? (<svg xmlns="http://www.w3.org/2000/svg"  class="lg:w-[40px] lg:h-[40px] md:w-[32px] md:h-[32px] w-[32px] h-[32px]" fill="#f5f0f0" viewBox="0 0 256 256"><path d="M200,32H160a16,16,0,0,0-16,16V208a16,16,0,0,0,16,16h40a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm0,176H160V48h40ZM96,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V48A16,16,0,0,0,96,32Zm0,176H56V48H96Z"></path></svg>) : (<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#f5f0f0" viewBox="0 0 256 256"><path d="M232.4,114.49,88.32,26.35a16,16,0,0,0-16.2-.3A15.86,15.86,0,0,0,64,39.87V216.13A15.94,15.94,0,0,0,80,232a16.07,16.07,0,0,0,8.36-2.35L232.4,141.51a15.81,15.81,0,0,0,0-27ZM80,215.94V40l143.83,88Z"></path></svg>)}
      </button>
      <button>
      <svg xmlns="http://www.w3.org/2000/svg"  class=" lg:w-[40px] lg:h-[40px] md:w-[32px] md:h-[32px] w-[32px] h-[32px]" fill="#f5f0f0" viewBox="0 0 256 256"><path d="M200,32a8,8,0,0,0-8,8v69.23L72.43,34.45A15.95,15.95,0,0,0,48,47.88V208.12a16,16,0,0,0,24.43,13.43L192,146.77V216a8,8,0,0,0,16,0V40A8,8,0,0,0,200,32ZM64,207.93V48.05l127.84,80Z"></path></svg>
      </button>
      </div>
      <div className='flex justify-start items-center px-2 md:w-3/12 w-6/12 gap-x-5'>
      <img src ={nowPlaying.image} alt='11.png' className='lg:w-[6rem] lg:h-[5.5rem] md:w-[5rem] h-[4.5rem] '></img>

        <div>
        <p className='text-white lg:text-[1.3rem] md:text-[1rem] text-[0.8rem] font-semibold'> {nowPlaying.name}</p>
        <p className="text-white sm:flex hidden">{nowPlaying.singer}</p>
      </div>
      </div>


      <div className='w-3/12 md:flex hidden justify-evenly'>
        <p>
        <svg xmlns="http://www.w3.org/2000/svg"    class="lg:w-[40px] lg:h-[40px] md:w-[32px] md:h-[32px] w-[32px] h-[32px]" fill="#f5f0f0" viewBox="0 0 256 256"><path d="M234,80.12A24,24,0,0,0,216,72H160V56a40,40,0,0,0-40-40,8,8,0,0,0-7.16,4.42L75.06,96H32a16,16,0,0,0-16,16v88a16,16,0,0,0,16,16H204a24,24,0,0,0,23.82-21l12-96A24,24,0,0,0,234,80.12ZM32,112H72v88H32ZM223.94,97l-12,96a8,8,0,0,1-7.94,7H88V105.89l36.71-73.43A24,24,0,0,1,144,56V80a8,8,0,0,0,8,8h64a8,8,0,0,1,7.94,9Z" className='lg:w-10 lg:h-10 md:w-8 md:h-8'></path></svg></p>     
        <p>
        <svg xmlns="http://www.w3.org/2000/svg"  class="lg:w-[40px] lg:h-[40px] md:w-[32px] md:h-[32px] w-[32px] h-[32px]" fill="#f5f0f0" viewBox="0 0 256 256"><path d="M237.66,178.34a8,8,0,0,1,0,11.32l-24,24a8,8,0,0,1-11.32-11.32L212.69,192H200.94a72.12,72.12,0,0,1-58.59-30.15l-41.72-58.4A56.1,56.1,0,0,0,55.06,80H32a8,8,0,0,1,0-16H55.06a72.12,72.12,0,0,1,58.59,30.15l41.72,58.4A56.1,56.1,0,0,0,200.94,176h11.75l-10.35-10.34a8,8,0,0,1,11.32-11.32ZM143,107a8,8,0,0,0,11.16-1.86l1.2-1.67A56.1,56.1,0,0,1,200.94,80h11.75L202.34,90.34a8,8,0,0,0,11.32,11.32l24-24a8,8,0,0,0,0-11.32l-24-24a8,8,0,0,0-11.32,11.32L212.69,64H200.94a72.12,72.12,0,0,0-58.59,30.15l-1.2,1.67A8,8,0,0,0,143,107Zm-30,42a8,8,0,0,0-11.16,1.86l-1.2,1.67A56.1,56.1,0,0,1,55.06,176H32a8,8,0,0,0,0,16H55.06a72.12,72.12,0,0,0,58.59-30.15l1.2-1.67A8,8,0,0,0,113,149Z"></path></svg></p>
            <p>
         <svg xmlns="http://www.w3.org/2000/svg" class="lg:w-[40px] lg:h-[40px] md:w-[32px] md:h-[32px] w-[32px] h-[32px]" fill="#f5f0f0" viewBox="0 0 256 256"><path d="M239.82,157l-12-96A24,24,0,0,0,204,40H32A16,16,0,0,0,16,56v88a16,16,0,0,0,16,16H75.06l37.78,75.58A8,8,0,0,0,120,240a40,40,0,0,0,40-40V184h56a24,24,0,0,0,23.82-27ZM72,144H32V56H72Zm150,21.29a7.88,7.88,0,0,1-6,2.71H152a8,8,0,0,0-8,8v24a24,24,0,0,1-19.29,23.54L88,150.11V56H204a8,8,0,0,1,7.94,7l12,96A7.87,7.87,0,0,1,222,165.29Z"></path></svg>         </p>
        
              </div>
      
    </div>
    </div>
  );
};

export default MusicPlayer;