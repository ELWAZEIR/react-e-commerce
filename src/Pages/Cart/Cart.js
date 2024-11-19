import { useSelector } from "react-redux";
import MyCard from "../../Component/Cart/MyCard";
import MyTitle from "../../Component/MyTitle";
import './Cart.css';
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Cartlist() {
  const carts = useSelector((state) => state.myCart.cart);
  const history=useHistory()
  const cartTotal = carts.reduce((total, cart) => {
    const price = parseFloat(cart.price) || 0; 
    return total + price;
  }, 0);
  const taxRate = 0.15;
  const taxes = cartTotal * taxRate;
  const finalTotal = cartTotal + taxes;

  const handleOrderNow = () => {
    toast('Your order has been placed successfully')
    history.push('./OrderNow')

  };

  return (
    <>
      <div>
        <br />
        <MyTitle head="Cart List" myColor="red" />
        <br />
        <div className="container hcontainer">
          <div className="row hrow">
            {carts.map((cart, index) => (
              <div className="col-lg-3 col-md-4 col-sm-6 w-100" key={index}>
                <MyCard
                  width="18rem"
                  image={cart.image}
                  name={cart.title}
                  price={cart.price}
                  btnName="View Details"
                  product={cart}
                  count='count'
                />
              </div>
            ))}
          </div>
          <br />
          <div className="hcart-summary">
            <h5>Cart Summary</h5>
            <p>Total Price: ${cartTotal.toFixed(2)}</p>
            <p className="Taxes">Taxes (15%): ${taxes.toFixed(2)}</p>
            <h5>Final Total: ${finalTotal.toFixed(2)}</h5>
            <button className="hbtn-order" onClick={handleOrderNow}>
              Order Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cartlist;
