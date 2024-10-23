import React, { useContext } from "react";
import { useGalleryContext } from "../assets/context";

const SearchForm = () => {
  const { searchPhotos } = useContext(useGalleryContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    if (!searchValue) return;

    searchPhotos(searchValue);
  };
  return (
    <section onSubmit={handleSubmit}>
      <h1 className="title">Unsplash images</h1>
      <form className="search-form">
        <input
          type="text"
          className="form-input search-input"
          name="search"
          placeholder="cat"
        />
        <button type="submit" className="btn">
          search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
