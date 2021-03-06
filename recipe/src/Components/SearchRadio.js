import React from "react";
import "./SearchRadio.css";

export default function SearchRadio(props) {
  const handleChange = (event) => {
    const name = event.target.name;
    const checkedObj = {
      ...props.checked,
      ...{
        title: false,
        id: false,
        category: false,
        all: false,
        [name]: true,
      },
    };

    props.checkUpdateRadio(checkedObj);
  };
  return (
    <>
      <div className="radio">
        <form>
          <label className="labelRadio" htmlFor="category">
            <input
              type="radio"
              name="category"
              value="category"
              checked={props.checked.category}
              onChange={handleChange}
            />
            Filter by "category" : seafood, beef, chicken and pork only !
          </label>
          <label className="labelRadio" htmlFor="title">
            <input
              type="radio"
              name="title"
              value="title"
              checked={props.checked.title}
              onChange={handleChange}
            />
            Filter by "title"
          </label>
          <label className="labelRadio" htmlFor="id">
            <input
              type="radio"
              name="id"
              value="id"
              checked={props.checked.id}
              onChange={handleChange}
            />{" "}
            Filter by "id"
          </label>
          <label className="labelRadio" htmlFor="id">
            <input
              type="radio"
              name="all"
              value="all"
              checked={props.checked.all}
              onChange={handleChange}
            />{" "}
            all recipes
          </label>
        </form>
      </div>
    </>
  );
}
