import { FaCircleDollarToSlot, FaBitcoin } from "react-icons/fa6";
import { GiSellCard } from "react-icons/gi";
import { Link } from "react-router-dom";

const InnerDash = () => {
  return (
    <main>
      <div>
        <div>
          <h1 className="text-center my-2 font-semibold">
            Welcome to{" "}
            <span className="text-purple-600 uppercase underline underline-offset-4">
              Smile&apos;s Pay
            </span>
          </h1>
          <p className="text-center text-sm">
            Experience Seamless, Secure, and Swift Transactions with a Smile
          </p>
        </div>

        <div>
          <div
            style={{
              backgroundImage:
                "linear-gradient(45deg, rgba(147, 51 ,234, 0.6), rgba(147, 51, 200, 0.8)), url(heroright.png)",
              backgroundSize: "100% ",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top right",
            }}
            className="p-4 mt-5 rounded-lg flex flex-col gap-4"
          >
            <div className="bg-white p-6 rounded-md font-semibold flex justify-between items-center">
              <Link>Buy Crypto Funds</Link>
              <span className="p-2 rounded-full bg-purple-500 shadow-xl text-white">
                <FaBitcoin size={24} className="animate-spin" />
              </span>
            </div>
            <div className="bg-white p-6 rounded-md font-semibold flex justify-between items-center">
              <Link>Sell Crypto Funds</Link>
              <span className="p-2 rounded-full bg-purple-500 shadow-xl text-white">
                <FaCircleDollarToSlot size={24} />
              </span>
            </div>
            <div className="bg-white p-6 rounded-md font-semibold flex justify-between items-center">
              <Link>Exchange Gift Cards</Link>
              <span className="p-2 rounded-full bg-purple-500 shadow-xl text-white">
                <GiSellCard size={24} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default InnerDash;
