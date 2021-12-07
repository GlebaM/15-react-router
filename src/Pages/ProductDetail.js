import { useParams } from "react-router-dom";
import { Fade } from "../components/animations/Fade";

const ProductDetail = () => {
  const params = useParams();

  console.log(params.productId);

  return (
    <Fade in={true} timeout={1000} unmountOnExit classNames="fade" appear>
      <section>
        <h1>Product Detail</h1>
        <p>{params.productId}</p>
      </section>
    </Fade>
  );
};

export default ProductDetail;
