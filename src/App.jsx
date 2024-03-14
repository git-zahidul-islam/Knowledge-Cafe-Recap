import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {

  return (
    <>
      <Header></Header>
      <div className='mt-3 flex lg:flex-row flex-col gap-4 md:w-10/12 mx-auto'>
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </>
  )
}

export default App


// import { FaBookmark } from "react-icons/fa6";
// <FaBookmark></FaBookmark>
