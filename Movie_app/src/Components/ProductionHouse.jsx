import disney from "../assets/Images/disney.png";
import pixar from "../assets/Images/pixar.png";
import marvel from "../assets/Images/marvel.png";
import starwars from "../assets/Images/starwar.png";
import nationalG from "../assets/Images/nationalG.png";

import disneyV from "../assets/Videos/disney.mp4";
import pixarV from "../assets/Videos/pixar.mp4";
import marvelV from "../assets/Videos/marvel.mp4";
import starwarsV from "../assets/Videos/star-wars.mp4";
import nationalgeographicV from "../assets/Videos/national-geographic.mp4";

function ProductionHouse() {
  const ProductionHouselist = [
    { id: 1, image: disney, video: disneyV },
    { id: 2, image: pixar, video: pixarV },
    { id: 3, image: marvel, video: marvelV },
    { id: 4, image: starwars, video: starwarsV },
    { id: 5, image: nationalG, video: nationalgeographicV },
  ];
  return (
      <div className="flex gap-5 p-2 px-16">
           {ProductionHouselist.map((item) => (
        <div key={item.id} className="border-[2px] border-gray-600 rounded-lg
          hover:scale-110 transition-transform duration-300 cursor-pointer ease-in-out
          shadow-xl shadow-black
        ">
          <img src={item.image} alt={`Production House ${item.id}`} className="w-full z-[1]" />
          <video src={item.video} autoPlay loop muted playsInline className="absolute top-0 rounded-md z-0 opacity-0 hover:opacity-50 transition-opacity duration-300" />
        </div>
      ))}
      </div>
    );
}

export default ProductionHouse;
