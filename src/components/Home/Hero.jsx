import { NavLink } from "react-router-dom";

const images = [
  { id: 1, url: "/hero1.webp", alt: "hero 1" },
  { id: 2, url: "/hero2.webp", alt: "hero 2" },
  { id: 3, url: "/hero3.webp", alt: "hero 3" },
  { id: 4, url: "/hero4.webp", alt: "hero 4" },
];

const Hero = () => {
  return (
    <div className="grid items-center gap-24 lg:grid-cols-2">
      {/* LEFT */}
      <div className="flex flex-col">
        <h2 className="max-w-2xl text-4xl font-bold lg:text-6xl">
          We are changing the way people shop
        </h2>
        <p className="max-w-xl my-10 text-lg leading-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
          laudantium est vitae officiis quibusdam nihil! Reiciendis pariatur
          quam dignissimos, eaque!
        </p>
        <NavLink
          to={"/products"}
          className="uppercase self-start text-md btn btn-secondary"
        >
          our products
        </NavLink>
      </div>

      {/* RIGHT */}
      <div className="hidden h-[28rem] p-4 space-x-4 lg:carousel carousel-center bg-neutral rounded-box">
        {images.map((img) => {
          const { url, id, alt } = img;
          return (
            <div key={id} className="carousel-item">
              <img
                className="object-cover h-full rounded-box w-80"
                src={url}
                alt={alt}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
