import { useContext, useState, useEffect } from "react";
import * as React from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
// import { CartItem } from "./cart-item";
import "./cart.css";
import { useNavigate } from "react-router-dom";
import Feedback from "./Feedback";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const Cart = () => {
  const {
    cartItems,
    getTotalCartAmount,
    removeFromCart,
    updateCartItemCount,
    setCartItems,
  } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  const [toggleState, setToggleState] = useState(1);
  const [feedbackGiven, setFeedbackGiven] = useState(false); // Trạng thái hiển thị của nút Feedback

  const toggleTab = (index) => {
    setToggleState(index);
  };

  // Cập Nhật Voucher đã sử dụng
  const [voucherDaSuDungItems, setVoucherDaSuDungItems] = useState([]);

  const handleDungNgay = (productId) => {
    const itemToMove = PRODUCTS.find((item) => item.id === productId);
    setVoucherDaSuDungItems((prevItems) => [...prevItems, itemToMove]);
    console.log(voucherDaSuDungItems);
    removeFromCart(productId);
    updateCartItemCount(0, productId);
    alert("Bạn đã dùng sản phẩm. Cảm ơn bạn đã sử dụng!");
  };

  //Cập nhật voucher đã hết hạn
  const [voucherDaHetHanItems, setVoucherDaHetHanItems] = useState([]);

  const kiemTraHetHan = (voucher) => {
    const currentDate = new Date();
    const { startDate, endDate } = voucher.duration;
    return endDate < currentDate;
  };

  // MODAL
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleFeedbackGiven = () => {
    setFeedbackGiven(true);
  };

  return (
    <div className="container">
      {/* Thanh Tabs  */}
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs off-tabs"}
          onClick={() => toggleTab(1)}
        >
          VOUCHER CỦA TÔI
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs off-tabs"}
          onClick={() => toggleTab(2)}
        >
          VOUCHER ĐÃ SỬ DỤNG
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs off-tabs"}
          onClick={() => toggleTab(3)}
        >
          VOUCHER ĐÃ HẾT HẠN
        </button>
      </div>

      {/* NỘI DUNG TABS  */}

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <div className="cart">
            <div className="cart-items">
              {PRODUCTS.map((product) => {
                if (cartItems[product.id] !== 0) {
                  return (
                    <div className="cartItem" key={product.id}>
                      <div className="cart-img">
                        <img src={product.image} alt="Product" />
                      </div>
                      <div className="cart-des">
                        <p className="cart-detail">{product.title}</p>
                        <p className="cart-date">
                          Date:{" "}
                          {product.duration.startDate?.toLocaleDateString()} -{" "}
                          {product.duration.endDate?.toLocaleDateString()}
                        </p>
                        <ul className="cart-bth">
                          <button onClick={() => removeFromCart(product.id)}>
                            <i className="fa-regular fa-trash-can"></i>
                          </button>
                          <button onClick={() => handleDungNgay(product.id)}>
                            SỬ DỤNG NGAY
                          </button>
                        </ul>
                      </div>
                    </div>
                  );
                }
              })}
            </div>

            {totalAmount !== 0 ? (
              <div className="continue">
                <button onClick={() => navigate("/")}>
                  {" "}
                  TIẾP TỤC LẤY VOUCHER{" "}
                </button>
              </div>
            ) : (
              <div className="empty">
                <p> Oops, bạn chưa có voucher nào!</p>
              </div>
            )}
          </div>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <div className="cart">
            <div className="cart-items">
              {voucherDaSuDungItems.length > 0 ? (
                voucherDaSuDungItems.map((item) => (
                  <div className="cartItem">
                    <div className="cart-img" key={item.id}>
                      <img src={item.image} alt="Product" />
                    </div>
                    <div className="cart-des">
                      <p className="cart-detail">{item.title}</p>
                      <p className="cart-date">
                        Date: {item.duration.startDate?.toLocaleDateString()} -{" "}
                        {item.duration.endDate?.toLocaleDateString()}
                      </p>
                      <ul className="cart-bth-used">
                        <p>ĐÃ SỬ DỤNG</p>
                        <button>
                          {!feedbackGiven ? (
                            <Button
                              onClick={() => {
                                handleOpen();
                                handleFeedbackGiven();
                              }}
                              sx={{
                                width: 170,
                                maxWidth: "100%",
                              }}
                            >
                              Feedback
                            </Button>
                          ) : (
                            <Button disabled>Feedback</Button>
                          )}
                          <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                          >
                            <Box sx={style}>
                              <Typography
                                id="modal-modal-title"
                                variant="h6"
                                component="h2"
                              >
                                ĐÁNH GIÁ VOUCHER
                              </Typography>
                              <Feedback />
                            </Box>
                          </Modal>
                        </button>
                      </ul>
                    </div>
                  </div>
                ))
              ) : (
                <div className="empty">
                  <p> Oops, bạn chưa có voucher nào đã sử dụng!</p>
                </div>
              )}
            </div>
          </div>
          <div className="continue">
            <button onClick={() => navigate("/")}> TIẾP TỤC LẤY VOUCHER </button>
          </div>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <div className="cart">
            <div className="cart-items">
              {voucherDaHetHanItems.length > 0 ? (
                voucherDaHetHanItems.map((item, index) => {
                  if (index === voucherDaHetHanItems.length - 1) {
                    return (
                      <div className="cartItem" key={item.id}>
                        <div className="cart-img">
                          <img src={item.image} alt="Product" />
                        </div>
                        <div className="cart-des">
                          <p className="cart-detail">{item.title}</p>
                          <p className="cart-date">
                            Date:{" "}
                            {item.duration.startDate?.toLocaleDateString()} -{" "}
                            {item.duration.endDate?.toLocaleDateString()}
                          </p>
                          <ul className=" cart-bth-used">
                            <p>ĐÃ HẾT HẠN</p>
                          </ul>
                        </div>
                      </div>
                    );
                  }
                  return null;
                })
              ) : (
                <div className="empty">
                  <p>Oops, bạn chưa có voucher nào đã hết hạn!</p>
                </div>
              )}
            </div>
          </div>
          <div className="continue">
            <button onClick={() => navigate("/")}> TIẾP TỤC MUA SẮM </button>
          </div>
        </div>
      </div>
    </div>
  );
};
