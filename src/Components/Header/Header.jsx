
// import PropTypes from 'prop-types';

const Header = () => {
    return (
        <div className='md:w-10/12 mx-auto space-y-4 mt-4'>
            <div className='flex justify-between '>
                <h1 className="text-3xl font-medium">Knowledge Cafe Recap</h1>
                <img src="profile.png" alt="image" />
            </div>
            <div className="border-b-2"></div>
        </div>
    );
};

Header.propTypes = {

};

export default Header;