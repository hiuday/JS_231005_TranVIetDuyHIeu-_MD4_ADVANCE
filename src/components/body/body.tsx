import { useState } from "react";
import "./body.css";
import { FaCartPlus } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { IProduct } from "../data/data";

interface Props {
  cartData: IProduct[];
  data: IProduct[];
  onAddToCart: Function;
  onDelete: Function;
  onPayment: Function;
  onDeleteAll: Function;
}

const Body: React.FC<Props> = (props: Props) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <section className="body">
      <div className="modal-cart">
        <span className="quantity"></span>
        <span className="cart">
          <FaCartPlus
            onClick={() => {
              setOpenModal(true);
            }}
          />
        </span>
      </div>

      {openModal ? (
        <section className="modal-cart-add">
          <div className="modal-title">
            <span onClick={() => setOpenModal(false)}>X</span>
            <h2>Cart</h2>
          </div>
          <div className="modal-table">
            {props.cartData &&
              props.cartData.map((product: any, index) => (
                <ul className="table-row">
                  <li className="image-product">
                    <img src={product.imageUrl} alt="" />
                  </li>
                  <li>{product.name}</li>
                  <li>
                    <button>-</button>
                    <p>{product.qty}</p>
                    <button>+</button>
                  </li>
                  <li>{product.price * product.qty}</li>
                  <li>
                    <FaTrashAlt
                      onClick={() => {
                        props.onDelete(index);
                      }}
                    />
                  </li>
                </ul>
              ))}

            <div className="pay">
              {props.cartData &&
                props.cartData.map((product: any, index) => (
                  <div className="total">
                    <p>Total:</p>
                    <div className="btn-action">
                      <button
                        className="payment"
                        onClick={() => props.onPayment()}
                      >
                        thanh toán
                      </button>
                      <button
                        className="delete-all"
                        onClick={() => props.onDeleteAll()}
                      >
                        Clear all
                        <span>
                          <FaTrashAlt />
                        </span>
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
      ) : null}

      <div className="cart-product">
        <ul className="content">
          {props.data &&
            props.data.map((product: any, index: any) => (
              <li className="product desc-product">
                <img src={product.imageUrl} alt="" />
                <div className="desc-product">
                  <h2>{product.name}</h2>
                  <p className="desc">{product.heading}</p>
                  <p className="desc">{product.desc}</p>

                  <div>
                    <span className="price">Giá tiền{product.price}</span>
                    <button
                      className="add-quantity"
                      onClick={() => props.onAddToCart(index)}
                    >
                      Add
                    </button>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};
export default Body;
