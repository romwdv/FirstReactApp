const ContentItem = (props) => {
  return (
    <>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <p>{props.subtitle}</p>
      <img src={props.picture} alt="" />
    </>
  );
};

export default ContentItem;
