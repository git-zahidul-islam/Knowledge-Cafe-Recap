import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  const [clickBookmark, setClickBookmark] = useState([]);
  const [makeRead, setMakeRead] = useState(0)

  // click bookmarks function
  const handelBookmarks = (bookmark) => {
    setClickBookmark([...clickBookmark, bookmark])
  };

  // make reading time function
  const handleMakeRead = (id,time) => {
    setMakeRead(makeRead + time)
    // remove bookmarks 
    const remainingBookmarks = clickBookmark.filter(bookmark => bookmark.id !== id)
    setClickBookmark(remainingBookmarks);
  }


  return (
    <>
      <Header></Header>
      <div className='mt-3 flex lg:flex-row flex-col gap-4 md:w-10/12 mx-auto'>
        <Blogs
          handelBookmarks={handelBookmarks}
          handleMakeRead={handleMakeRead}
        ></Blogs>
        <Bookmarks
          bookmarks={clickBookmark}
          time={makeRead}
        ></Bookmarks>
      </div>
    </>
  )
}

export default App
