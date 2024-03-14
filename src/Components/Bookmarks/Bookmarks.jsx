import PropTypes from 'prop-types';

import Bookmark from "../Bookmark/Bookmark";



const Bookmarks = ({ bookmarks }) => {

    return (
        <div className="border-2 border-purple-500 w-2/6 bg-[#1111110D] px-6 py-5">
            <h1>Bookmarks here {bookmarks.length}</h1>
            <div>
                {
                    bookmarks.map((bookmark, index) => <Bookmark key={index} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired
};

export default Bookmarks;