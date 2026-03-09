export default function CartDrawer({ cartOpen, setCartOpen }) {
  const items = [
    {
      id: 1,
      name: "Butter Chicken",
      price: 320,
      qty: 1,
    },
    {
      id: 2,
      name: "Paneer Tikka",
      price: 260,
      qty: 2,
    },
  ];

  const total = items.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div
      className={`fixed top-0 right-0 h-full w-[380px] bg-white shadow-2xl z-[100] transform transition-transform duration-300 ${
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

      {/* Items */}
      <div className="p-6 space-y-5">

        {items.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border-b pb-4"
          >

            <div>
              <h3 className="font-semibold">
                {item.name}
              </h3>

              <p className="text-sm text-gray-500">
                Qty: {item.qty}
              </p>
            </div>

            <p className="font-medium">
              ₹{item.price * item.qty}
            </p>

          </div>
        ))}

      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 w-full border-t p-6 bg-white">

        <div className="flex justify-between mb-4 font-semibold">

          <span>Total</span>
          <span>₹{total}</span>

        </div>

        <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-2xl font-medium">
          Checkout
        </button>

      </div>
    </div>
  );
}