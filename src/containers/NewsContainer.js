import React, {useEffect, useState} from "react";
import NewsHeader from "../components/NewsHeader";
import NewsItems from "../components/NewsItems";

function NewsContainer() {

  const [stories, setStories] = useState([]);
  const [storiesWithData, setStoriesWithData] = useState([]);

  const getAllStories = async function() {
    const res = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
    const stories = await res.json()
    setStories(stories);
  }

  const getStoriesData = async function(stories) {
    const promises = stories.map(storyId => fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`).then(res => res.json()))
    const data = await Promise.all(promises);
    setStoriesWithData(data);
  }

  useEffect(() => {
    getAllStories();
  }, []);

  useEffect(() => {
    getStoriesData(stories);
  }, [stories]);
    
  return (
    <>
      <NewsHeader title='News Stories from Today' />
      <NewsItems data={storiesWithData}/>
    </>
  )
}

export default NewsContainer;