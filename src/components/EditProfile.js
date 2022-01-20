import { Link } from "react-router-dom";

const EditProfile = ({ children, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <h1>PROFILE</h1>
      {children}
      <Link to="/profile">
        <button type="submit" className="btn">
          Edit profile{" "}
        </button>
      </Link>
    </form>
  );
};

export default EditProfile;
