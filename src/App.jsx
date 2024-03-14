import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  const [clickBookmark, setClickBookmark] = useState([]);

  // click bookmarks function
  const handelBookmarks = (bookmark) => {
    // console.log('bookmark click', bookmark)
    setClickBookmark([...clickBookmark, bookmark])
  };



  return (
    <>
      <Header></Header>
      <div className='mt-3 flex lg:flex-row flex-col gap-4 md:w-10/12 mx-auto'>
        <Blogs handelBookmarks={handelBookmarks}></Blogs>
        <Bookmarks bookmarks={clickBookmark}></Bookmarks>
      </div>
    </>
  )
}

export default App
