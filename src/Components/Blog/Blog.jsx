import { FaBookmark } from "react-icons/fa6";
import PropTypes from 'prop-types';

const Blog = ({ blog, handelBookmarks, handleMakeRead }) => {
    const { id, author_name, author_photo, post_date, title, reading_time, cover_photo, hash_tag } = blog;
    return (
        <div className="mb-7">
            <div className="space-y-2">
                {/* all items here */}
                <img className="w-full h-[380px]" src={cover_photo} alt="" />
                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-2'>
                        <img className='w-12 h-12 rounded-full' src={author_photo} alt="photo" />
                        <div>
                            <p>{author_name}</p>
                            <p>{post_date}</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-1'>
                        <div>{reading_time} min read</div>
                        <button onClick={() => handelBookmarks(blog)} className="text-2xl"> <FaBookmark></FaBookmark> </button>
                    </div>
                </div>
                <h1 className="text-2xl font-semibold">{title}</h1>
                <h3>{hash_tag}</h3>
                <button onClick={() => handleMakeRead(id, reading_time)} className="text-purple-600 font-medium underline">Make As Read</button>
            </div>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handelBookmarks: PropTypes.func.isRequired,
    handleMakeRead: PropTypes.func.isRequired
};

export default Blog;