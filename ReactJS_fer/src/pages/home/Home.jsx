import React from "react";
import "./Home.css";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import Slider from "../../components/slider/Slider";
import SliderFeedback from "../../components/slider/SliderFeedback";

function Home() {
  return (
    <main>
      {/* Promo  */}
      <div class="promo-all">
        <Slider />
      </div>

      {/* Product  */}
      <section id="product-all">
        <div class="product">
          <h1 class="product-detail">Our Voucher Collection</h1>
          <ul class="nav-list">
            <li>
              <a href="index.html" class="active">
                Tất cả
              </a>
            </li>
            <li>
              <a href="#">Thời trang</a>
            </li>
            <li>
              <a href="#">Công nghệ và điện tử</a>
            </li>
            <li>
              <a href="#">Thức ăn</a>
            </li>
            <li>
              <a href="#">Làm đẹp</a>
            </li>
            <li>
              <a href="#">Du lịch</a>
            </li>
            <li>
              <a href="#">Khác</a>
            </li>
          </ul>

          <div class="pro-container">
            {PRODUCTS.map((product) => (
              <Product data={product} />
            ))}
          </div>
        </div>

        <a href="#" class="pro-more">
          <button id="product-more">Find out More</button>
        </a>
      </section>

      {/* Top Voucher  */}
      <section class="scrollbar-all">
        <div>
          <h1 class="product-detail">Top Voucher</h1>
        </div>
        <div class="wrapper">
          <ul class="scrollbar">
            {PRODUCTS.map((product) => (
              <Product data={product} />
            ))}
          </ul>
        </div>
      </section>

      <article class="story-all">
        <div class="story">
          <div class="imgStory">
            {" "}
            <img src="assets/img/story/story.png" />{" "}
          </div>
          <article class="description-all">
            <div class="description-all-detail">
              Câu chuyện về
              <br />
              Student Deal
            </div>
            <div class="description">
              Student Deal là nơi cung cấp các khoản giảm giá đặc biệt dành cho
              sinh viên. Chúng tôi có nhiều loại voucher và ưu đãi cho các mặt
              hàng và dịch vụ khác nhau, từ điện thoại di động đến thực phẩm.
              Với Student Deal, bạn có thể tiết kiệm tiền một cách đơn giản và
              dễ dàng. Tìm kiếm các ưu đãi của chúng tôi để giúp cuộc sống sinh
              viên của bạn trở nên dễ dàng hơn.
            </div>
          </article>
        </div>
      </article>

      <div class="partner">
        <div class="partner-detail">Các đối tác của chúng tôi</div>
        <div class="partner-img">
          <img src="assets/img/partner/bhd.png" />
          <img src="assets/img/partner/coolmate.png" />
          <img src="assets/img/partner/gongcha.png" />
          <img src="assets/img/partner/hotpot.png" />
          <img src="assets/img/partner/ticketbox.png" />
          <img src="assets/img/partner/travelloka.png" />
        </div>
      </div>

      <div class="feedback-all">
        <SliderFeedback />
      </div>
    </main>
  );
}
export default Home;
