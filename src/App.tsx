import React, { useState, useMemo } from "react";
import "./App.css";
import Body from "./components/body/body";
import { IProduct, listProductsDB } from "./components/data/data";

function App() {
  const [listProducts, setListProducts] = useState<IProduct[]>(listProductsDB);
  const [listCart, setListCart] = useState<IProduct[]>([]);
  // const [count, setCount] = useState(1);
  const handleAddToCart = (id: number) => {
    const newProduct = listProducts.find((product, i) => i === id);
    if (newProduct) {
      newProduct.qty = 1;

      setListCart([...listCart, newProduct]);
    }
  };
  
  // xóa sản phẩm trong giỏ hàng
  const handleDeleteProduct = (id: number) => {
    setListCart(listCart.filter((product, i) => i != id));
  };
  // xóa giỏ hàng
  const handleDeleteAll = () => {
    setListCart([]);
  };
  // thanh toán
  const handleBuyNow = () => {
    setListCart([]);
    alert("mua hàng thành công rồi nhé");
  };
  // const Total = useMemo(() => {
  //   return listProducts.reduce((total, item) => total + item);
  // }, [listProducts]);

  return (
    <div className="App">
      <Body
        data={listProducts}
        onAddToCart={handleAddToCart}
        cartData={listCart}
        onDelete={handleDeleteProduct}
        onPayment={handleBuyNow}
        onDeleteAll={handleDeleteAll}
      />
    </div>
  );
}

export default App;
