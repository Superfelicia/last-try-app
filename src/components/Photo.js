import LikeButton from './LikeButton';

const Photo = ({
  urls: { regular },
  alt_description,
  user: {
    name,
    portfolio_url,
    profile_image: { medium },
  },
}) => {
  return (
    <article className="photo">
      <img src={regular} alt={alt_description} />
      <div className="photo-info">
        <div>
          <h4>{name}</h4>
        </div>
        <a href={portfolio_url}>
          <img src={medium} alt={name} className="user-img" />
        </a>
        <LikeButton />
      </div>
    </article>
  );
};

export default Photo;
