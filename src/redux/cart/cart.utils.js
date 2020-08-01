export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  // this returns when the 'if' statement is null and not run, which means the cart item does not exist. so this will return an array with the current cartitems and add the new cart item, and also add the quantity field to this new cart item. this makes all the new cart items to have a quantity of 1
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
