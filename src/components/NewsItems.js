import React from "react";
import NewsCard from "./NewsCard";

function NewsItems({ data }) {

  const newsNode = data.map((story) => {
    return <NewsCard story={story} key={story.id} />
  })

  return (
    <>
      {newsNode}
    </>
  )
}

export default NewsItems;