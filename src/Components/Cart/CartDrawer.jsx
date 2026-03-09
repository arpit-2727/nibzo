import { useCart } from "../../context/CartContext";

export default function CartDrawer({ cartOpen, setCartOpen }) {
  const {
    cartItems,
    increaseQty,
    decreaseQty,
    removeFromCart,
  } = useCart();

  const total = cartItems.reduce(
    (acc, item) => acc + 200 * item.qty,
    0
  );

  return (
    <div
      className={`fixed top-0 right-0 h-full w-[400px] bg-white shadow-2xl z-[100] transform transition-transform duration-300 ${
        cartOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >

      {/* Header */}
      <div className="flex justify-between items-center px-6 py-5 border-b">

        <h2 className="text-xl font-bold">
          Your Cart
        </h2>

        <button
          onClick={() => setCartOpen(false)}
          className="text-xl"
        >
          ✕
        </button>

      </div>

      {/* Empty State */}
      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-[70%] text-gray-500">

          <div className="text-5xl mb-4">🛒</div>

          <p>Your cart is empty</p>

        </div>
      ) : (
        <>
          {/* Items */}
          <div className="p-6 space-y-5 overflow-y-auto h-[70%]">

            {cartItems.map((item) => (
              <div
                key={item.id}
                className="border-b pb-5"
              >

                <div className="flex justify-between items-start">

                  <div>
                    <h3 className="font-semibold">
                      {item.name}
                    </h3>

                    <p className="text-sm text-gray-500">
                      ₹200 x {item.qty}
                    </p>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 text-sm"
                  >
                    Remove
                  </button>

                </div>

                {/* Quantity */}
                <div className="mt-3 flex items-center gap-3">

                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="w-8 h-8 rounded-lg bg-gray-100"
                  >
                    -
                  </button>

                  <span>{item.qty}</span>

                  <button
                    onClick={() => increaseQty(item.id)}
                    className="w-8 h-8 rounded-lg bg-gray-100"
                  >
                    +
                  </button>

                </div>

              </div>
            ))}

          </div>

          {/* Footer */}
          <div className="absolute bottom-0 left-0 w-full border-t p-6 bg-white">

            <div className="flex justify-between mb-4 font-semibold text-lg">

              <span>Total</span>
              <span>₹{total}</span>

            </div>

            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-2xl font-medium">
              Checkout
            </button>

          </div>
        </>
      )}
    </div>
  );
}