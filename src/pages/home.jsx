import React, { useEffect } from 'react'
import { GifState } from '../context/gif-context';
import Gif from '../components/Gif';
import FilterGif from '../components/Filter-Gif';

const Home = () => {
  const { giphy, filter, gifs, setGifs } = GifState();

  const fetchTrandingGITs = async() => {
    const { data } = await giphy.trending({
      limit: 20,
      type: filter,
      rating: "g",
    });

    setGifs(data);
  };

  useEffect(()=>{
    fetchTrandingGITs();
  }, [filter]);
  
  return (
    <div>
      <img src='/banner.gif' alt='earth banner' className='mt-2 rounded w-full' />
      <FilterGif showTrending={true} />
      <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-2">
        {gifs.map((gif)=>{
          return <Gif gif={gif} key={gif.title} />
        })}
      </div>
    </div>
  )
}

export default Home