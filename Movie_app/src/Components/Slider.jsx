import { useEffect, useRef, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const ImageBaseUrl = "https://image.tmdb.org/t/p/original";
const screenwidth = window.innerWidth;
console.log(screenwidth);

function Slider() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const elementRef = useRef();
  const getTrendingMovies = () => {
    GlobalApi.getTrendingVideos
      .then((response) => {
        setTrendingMovies(response.data.results);
        console.log(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getTrendingMovies();
  }, []);

  const sliderRight = (element)=>{
        element.scrollLeft += screenwidth-110;
        console.log(element.offsetWidth, element.scrollLeft);
  }
  const sliderleft = (element)=>{
        element.scrollLeft -= screenwidth-110;
  } 

  return (
    <div>
      <HiChevronLeft onClick={() => sliderleft(elementRef.current)} className=" hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer" />
      <HiChevronRight onClick={() => sliderRight(elementRef.current)} className="hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer right-0" />
      <div className="flex overflow-x-auto w-full px-16 py-4 scrollbar-none scroll-smooth " ref={elementRef}>
        {trendingMovies.map((movie) => (
          <img
            src={ImageBaseUrl + movie.backdrop_path}
            alt={movie.title}
            className="min-w-full md:h-[310px] object-cover mr-5 rounded-md hover:border-[4px] border-gray-400 cursor-pointer transition-all duration-100 ease-in shadow-xl shadow-black mb-10"
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
