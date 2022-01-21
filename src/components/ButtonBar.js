import {Link} from 'react-router-dom';
import {FaUser, FaUserCheck, FaUserPlus, FaRegImages} from 'react-icons/fa';

const ButtonBar = () => {
    return (
        <div className="btn-bar">
            <Link to="/">
            <button className="btn"><FaRegImages /></button>
            </Link>
            <Link to="/profile">
            <button className="btn"><FaUser /></button>
            </Link>
            <Link to="/login">
            <button className="btn"><FaUserCheck /></button>
            </Link>
            <Link to="/signup">
            <button className="btn"><FaUserPlus /></button>
            </Link>
        </div>
    );
};

export default ButtonBar;