import { useState } from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CloseIcon from "@mui/icons-material/Close";

const FloatingCart = ({ cartItems }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  // 🔹 Calculate total cart value
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <>
      {/* 🔹 Floating Cart Button (BOTTOM RIGHT) */}
      <div
        className="fixed bottom-5 right-5 bg-primary-blue text-white p-4 rounded-full shadow-lg cursor-pointer flex items-center gap-2 z-50"
        onClick={() => setIsCartOpen(!isCartOpen)}
        style={{ zIndex: 1000 }} // Ensuring it's above other elements
      >
        <ShoppingCartIcon sx={{ fontSize: "24px" }} />
        {cartItems.length > 0 && (
          <span className="bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
            {cartItems.length}
          </span>
        )}
      </div>

      {/* 🔹 Floating Cart Details */}
      {isCartOpen && (
        <div
          className="fixed bottom-16 right-5 w-72 bg-white shadow-lg rounded-lg p-4 z-50"
          style={{ zIndex: 1000 }} // Ensuring the cart preview stays on top
        >
          <div className="flex justify-between items-center border-b pb-2 mb-2">
            <h3 className="text-lg font-medium">Cart Summary</h3>
            <CloseIcon className="cursor-pointer" onClick={() => setIsCartOpen(false)} />
          </div>

          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500">Your cart is empty</p>
          ) : (
            <>
              <div className="max-h-60 overflow-y-auto">
                {cartItems.map((item) => (
                  <div key={item._id} className="flex items-center gap-3 border-b pb-2 mb-2">
                    <img src={item.image} alt={item.name} className="w-12 h-12 object-contain" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{item.name}</p>
                      <p className="text-sm text-gray-600">₹{item.price} x {item.quantity}</p>
                    </div>
                    <span className="text-sm font-medium">₹{(item.price * item.quantity).toLocaleString()}</span>
                  </div>
                ))}
              </div>

              {/* 🔹 Display Total Price */}
              <div className="flex justify-between items-center mt-3 font-medium text-lg border-t pt-2">
                <span>Total:</span>
                <span>₹{totalPrice.toLocaleString()}</span>
              </div>

              <div className="mt-3">
                <Link
                  to="/cart"
                  className="block text-center bg-primary-blue text-white py-2 rounded-md font-medium"
                >
                  Go to Cart
                </Link>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default FloatingCart;
