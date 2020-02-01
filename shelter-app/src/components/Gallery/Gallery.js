import React from "react";
import Slider from "react-slick";
import { Image } from "cloudinary-react";

import { ImageBox, CustomImage } from "./Gallery.style";

const Gallery = ({ images }) => {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const photos = [
    {
      photo: "https://source.unsplash.com/aZjw7xI3QAA/1144x763",
      caption: "Viñales, Pinar del Río, Cuba",
      subcaption: "Photo by Simon Matzinger on Unsplash",
      thumbnail: "https://source.unsplash.com/aZjw7xI3QAA/100x67"
    },
    {
      photo: "https://source.unsplash.com/c77MgFOt7e0/1144x763",
      caption: "La Habana, Cuba",
      subcaption: "Photo by Gerardo Sanchez on Unsplash",
      thumbnail: "https://source.unsplash.com/c77MgFOt7e0/100x67"
    },
    {
      photo: "https://source.unsplash.com/QdBHnkBdu4g/1144x763",
      caption: "Woman smoking a tobacco",
      subcaption: "Photo by Hannah Cauhepe on Unsplash",
      thumbnail: "https://source.unsplash.com/QdBHnkBdu4g/100x67"
    }
  ];

  return (
    <Slider {...settings}>
      {photos.map((photo, index) => {
        return (
          <ImageBox key={index}>
            {images !== undefined ? (
              <Image
                cloudName="foxsheltersappimages"
                publicId={images.publicId}
                crop="scale"
              />
            ) : (
              <CustomImage src={photo.photo} alt={photo.caption} />
            )}
          </ImageBox>
        );
      })}
    </Slider>
  );
};

export default Gallery;
