import PropTypes from 'prop-types';
import { memo } from 'react';

const Product = memo(function Product({ name, price, mainImage, content }) {
  // function Product({ name, price, mainImage, content }) {
  return (
    <>
      <h2>상품 설명</h2>
      <p>상품명: {name}</p>
      <p>가격: {price}</p>
      <p>상품 설명</p>
      <div>
        <img src={`https://11.fesp.shop${mainImage}`} width="600" />
        <p>{content}</p>
      </div>
    </>
  );
  // }
});

Product.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  mainImage: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
export default Product;
//App은 리렌더링이 되고 자식인 Product는 리렌더링이 안되어야함 => useMemo!!
//useRef는 App자체도 리렌더링 안되게 하는것임