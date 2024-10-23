
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import BookMarks from './components/BookMarks/BookMarks'
import Header from './components/Header/Header'

function App() {

  const[bookmarks, setBookmarks] =useState([]);
  const [readingTime, setReadingTime]= useState([]);

  const handleAddToBookmark = blog =>{
    // console.log(blog);
    const newBookMarks = [...bookmarks, blog];
    setBookmarks(newBookMarks);
  }

  // handle readingTime
  const handleMarkAsRead = (id, time)=>{
    // console.log('marking as read',time);
    const newReadingTime = readingTime+time;
    setReadingTime(newReadingTime);
    // remove the read blog from bookmark
    // console.log('remove bookmark',id)
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !==id);
    setBookmarks(remainingBookmarks);


  }


  return (
    <>
     
      <Header></Header>
      <div className='md:flex max-w-6xl mx-auto'>
      <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
      <BookMarks bookmarks={bookmarks} 
      readingTime={readingTime}></BookMarks>
      </div>
      
    </>
  )
}

export default App
