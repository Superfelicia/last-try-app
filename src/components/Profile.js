import { Link } from "react-router-dom";

const Profile = ({ onChange, src, value }) => {

  return (
    <form>
      <label htmlFor="photo-upload" className="custom-file-upload fas">
        <div className="img-wrap img-upload">
          <img className="photo-upload" src={src} alt="#" />
        </div>
        <input id="photo-upload" type="file" onChange={onChange} />
      </label>
      <div className="field">
        <label className="name">name:</label>
        <input
          id="name"
          type="text"
          onChange={onChange}
          maxLength="25"
          value={value}
          placeholder="Alexa"
          required
        />
        <label className="bio">bio:</label>
        <input
          id="bio"
          type="text"
          onChange={onChange}
          maxLength="400"
          value={value}
          placeholder="Your profile description :))"
          required
        />
        <Link to="/editprofile">
          <button className="btn">Save</button>
        </Link>
      </div>
    </form>
  );
};

export default Profile;
