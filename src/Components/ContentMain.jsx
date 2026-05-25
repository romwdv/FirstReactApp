import ContentItem from "./ContentItem";
import img1 from "../assets/120-500x300.jpg";
import img2 from "../assets/774-500x300.jpg";

const ContentMain = () => {
  return (
    <div className="content-main">
      <ContentItem
        title="TITLE HEADING"
        subtitle="Subtitle"
        picture={img1}
        description="Mauris consectetur tincidunt magna. Donec nec ipsum sem. Donec lacus nunc, pretium et erat vel, accumsan ullamcorper ipsum. Mauris non lobortis justo. Vivamus scelerisque, augue id aliquam aliquet, augue erat venenatis nulla, at ultrices nulla lectus id libero. Suspendisse sed elementum erat, quis porttitor tortor. In a congue neque."
      />
      <ContentItem
        title="Titre numéro 2"
        subtitle="Sous tire 2"
        picture={img2}
        description="Morbi at pharetra odio. Quisque eget erat ipsum. Praesent cursus ac augue a rutrum. Vestibulum hendrerit nulla eget justo tempor commodo. Nam quis tincidunt tortor. Vivamus eu posuere nisi, at ullamcorper dui. Integer pulvinar, nisl a lacinia egestas, nisi nulla mollis urna, a tempus odio augue sit amet est. Aenean commodo congue velit non eleifend. Donec ac metus in diam lobortis feugiat vitae ac ligula."
      />
    </div>
  );
};

export default ContentMain;
