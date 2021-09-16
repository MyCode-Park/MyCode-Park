import React from "react";
import CheckoutProducts from "../CheckoutProducts/CheckoutProducts";
import "./Order.css";
import moment from "moment";
import CurrencyFormat from "react-currency-format";

function Order({ order }) {
  return (
    <div className="order">
      <h2>Ordered</h2>
      <p>{moment.unix(order.data.created).format("MMM Do YYYY, h:mma")}</p>
      <p className="order__id">
        <small>
          <strong>Your order ID:</strong> {order.id}
        </small>
      </p>
      {order.data.cart?.map((item) => (
        <CheckoutProducts
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          //   displayPrice={item.displayPrice}
          rating={item.rating}
          hideButton
        />
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <h3 className="order__total">Order Total: {value}</h3>
        )}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹ "}
      />
    </div>
  );
}

export default Order;
