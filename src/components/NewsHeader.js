import React from "react";
import NewsSearch from "./NewsSearch";

function NewsHeader({title}) {

  return (
    <>
      <h1>{title}</h1>
      <NewsSearch />
    </>
  )
}

export default NewsHeader;