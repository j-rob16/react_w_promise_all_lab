import React from "react";

function NewsCard({story, key}) {

  return (
    <>
      <h2>{story.title}</h2>
      <p>By: {story.by}</p>
      <p>Score: {story.score}</p>
      <p><a href={story.url}>Link to story</a></p>
    </>
  )
}

export default NewsCard;