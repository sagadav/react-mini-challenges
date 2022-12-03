import { useState } from 'react';

const ProductItem = () => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div
      onClick={() => setIsClicked(true)}
      className={`p-item ${isClicked ? 'p-ac' : ''}`}
    >
      Product
    </div>
  );
};

export default ProductItem;
