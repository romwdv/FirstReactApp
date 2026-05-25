const ContentSideAbout = (props) => {
  return (
    <>
      <h2>{props.title}</h2>
      <img src={props.picture} alt="" />
      <p>{props.description}</p>
    </>
  );
};

export default ContentSideAbout;
