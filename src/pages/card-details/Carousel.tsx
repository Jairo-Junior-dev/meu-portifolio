import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface CarouselComponentProps {
  deviceType?: "desktop" | "tablet" | "mobile";
  imagesAndVideoPaths: string[];
  className?: string;
}

const CarouselComponent: React.FC<CarouselComponentProps> = ({
  deviceType,
  imagesAndVideoPaths,
    className
}) => {
  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1, slidesToSlide: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1, slidesToSlide: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1, slidesToSlide: 1 },
  };

  const validPaths = imagesAndVideoPaths.filter((path): path is string => !!path);

  return (
    <Carousel
        className={`${className} w-full h-full`} 
      swipeable={true}
      draggable={true}
      showDots={true}
      responsive={responsive}
      ssr
      infinite
      autoPlay={deviceType !== "mobile"}
      autoPlaySpeed={3000}
      keyBoardControl
      customTransition="all .5"
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      deviceType={deviceType}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {validPaths.map((path, index) => {
        const isVideo = path.endsWith(".mp4") || path.endsWith(".webm");
        return isVideo ? (
          <video
            key={index}
            src={path}
            controls
            className="w-full h-full object-cover rounded-r-2xl"
          />
        ) : (
          <img
            key={index}
            src={path}
            alt={`Item ${index}`}
            className="w-full h-full  object-cover rounded-r-2xl"
          />
        );
      })}
    </Carousel>
  );
};

export default CarouselComponent;
