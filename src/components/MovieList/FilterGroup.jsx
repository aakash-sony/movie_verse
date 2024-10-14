import React from "react";

const FilterGroup = ({ minRate, onRatingClick, ratings }) => {
  return (
    <ul className="align_center movie_filter">
      {ratings.map((rate) => (
        <li
          className={
            minRate == rate ? "movie_filter_item active" : "movie_filter_item"
          }
          key={rate}
          onClick={() => onRatingClick(rate)}
        >
          {rate} + star
        </li>
      ))}
    </ul>
  );
};

export default FilterGroup;
