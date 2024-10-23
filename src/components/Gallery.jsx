import React, { useContext } from "react";
import { useFetchImages } from "../assets/reactQueryCuston";
import { useGalleryContext } from "../assets/context";

useFetchImages;
const Gallery = () => {
  const { query } = useContext(useGalleryContext);
  const { data, isError, isLoading } = useFetchImages(query);
  console.log(data);
  if (isLoading) {
    return <section className="image-container">loading....</section>;
  }
  if (isError) {
    return <section className="image-container">error while loading</section>;
  }
  if (data?.results?.length < 1) {
    return (
      <section className="image-container">
        there is not corresponding images
      </section>
    );
  }

  return (
    <section className="image-container">
      {data?.results?.map((image) => (
        <img
          className="img"
          src={image?.urls?.regular}
          alt={image?.alt_description}
          key={image?.id}
        />
      ))}
    </section>
  );
};

export default Gallery;
