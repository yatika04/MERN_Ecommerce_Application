import { useGetTopProductsQuery } from "../../redux/api/productApiSlice";
import Message from "../../components/Message";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import moment from "moment";
import {
  FaBox,
  FaClock,
  FaShoppingCart,
  FaStar,
  FaStore,
} from "react-icons/fa";

const ProductCarousel = () => {
  const { data: products, isLoading, error } = useGetTopProductsQuery();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    <div className="mb-4 lg:block xl:block md:block ">
      {isLoading ? null : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <Slider {...settings} className="xl:w-[50rem]  lg:w-[100rem] md:w-[56rem] sm:w-[0rem] sm:block " >
             <div>
              <img src="uploads/download.jpg" className="w-full h-[25rem]"></img>
             </div>
             <div>
              <img src="uploads/banner3.jpg" className="w-full h-[25rem]"></img>
             </div>
             <div>
              <img src="uploads/banner (1).jpg" className="w-[100rem] h-[25rem]"></img>
             </div>
        </Slider>
      )}
    </div>
  );
};

export default ProductCarousel;