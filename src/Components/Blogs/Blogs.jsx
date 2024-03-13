// import PropTypes from 'prop-types';

import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('./public/data.json')
                const data = await res.json()
                console.log(data)
                setBlogs(data)
            } catch (error) {
                console.error('Your Is not coming', error)
            }
        }
        fetchData()
    }, [])

    return (
        <div>
            <h1>Blog: {blogs.length}</h1>
            <div>
                {
                    blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
                }
            </div>
        </div>
    );
};

Blogs.propTypes = {

};

export default Blogs;