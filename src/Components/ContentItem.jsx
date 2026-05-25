const ContentItem = (props) => {
  return (
    <>
      <div className="content-item">
        <h2>{props.title}</h2>
        <p>{props.subtitle}</p>
        <img src={props.picture} alt="" />
        <p>{props.description}</p>
      </div>
    </>
  );
};

export default ContentItem;
