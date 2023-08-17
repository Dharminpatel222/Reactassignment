import React from 'react'
import './FooterCom.css'

export default function FooterCom() {
  return (
    <>
      <div>
        <div className="footer-bg" style={{ padding: "50px 50px" }}>
          <div className="footer-flex">
            <div className="footer-box1">
              <div className="footer-png">
                <a href="">
                  <img
                    src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/organic-store-logo5.svg"
                    alt=""
                  />
                </a>
              </div>
              <div className="box1-desc">
                <p style={{ color: "white" }}>
                  Maecenas mi justo, interdum at consectetur vel, tristique et
                  arcu. Ut quis eros blandit, ultrices diam in, elementum ex.
                  Suspendisse quis faucibus urna. Suspendisse pellentesque.
                </p>
              </div>
            </div>
            <div className="footer-box2" >
              <div className="box2-heading" style={{ color: "white"}}>
                <h3>Quick Links</h3>
              </div>
              <div className="box2-list" style={{ color: "white",width:"150px"}}>
                <li>About</li>
                <li>Cart</li>
                <li>Checkout</li>
                <li>Contact</li>
                <li>Home</li>
                <li>My account</li>
                <li>Shop</li>
              </div>
            </div>
            <div className="footer-box3">
              <div className="box3-heading">
                <h2 style={{ color: "white" }}>Download Our Mobile App</h2>
              </div>
              <div className="box3-desc">
                <p style={{ color: "white" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  aliquam gravida sollicitudin. Praesent porta enim mi, non
                  tincidunt libero interdum sit amet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
