import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HJWCjDzH3SC5fpinPhiNeGxi0xO4xM2rmajSxr5oIYhVK0u0HD1USggi1wfkT3dyAVdZtnjn3o9uJJ89g2C0HoR00YiAJIPIh";

  //pass this to the backend that in the end creates the charge. but because this is just a test/mock website, there is no need for this. So an alert is enough

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful!");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
