const ContentSideAbout = (props) => {
  return (
    <>
      <h3>{props.title}</h3>
      <img src={props.picture} alt="" />
      <p>{props.description}</p>
    </>
  );
};

export default ContentSideAbout;
