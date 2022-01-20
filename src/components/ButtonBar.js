import {Link} from 'react-router-dom';

const ButtonBar = () => {
    return (
        <div className="btn-bar">
            <Link to="/">
            <button className="btn">Home</button>
            </Link>
            <Link to="/profile">
            <button className="btn">Profile</button>
            </Link>
            <Link to="/login">
            <button className="btn">Login</button>
            </Link>
            <Link to="/signup">
            <button className="btn">Sign up</button>
            </Link>
        </div>
    );
};

export default ButtonBar;