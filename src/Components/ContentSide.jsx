import ContentSideAbout from "./ContentSideAbout";

const ContentSide = () => {
  return (
    <div className="contentside">
      <ContentSideAbout
        title="About Me"
        description="Cras interdum pharetra felis eu faucibus."
        picture="test"
      />
    </div>
  );
};

export default ContentSide;
