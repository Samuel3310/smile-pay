import { FaCircleDollarToSlot, FaBitcoin } from "react-icons/fa6";
import { GiSellCard } from "react-icons/gi";
import { item } from "../../../index.js";
import Btns from "../btns";
import { useEffect, useRef, useState } from "react";
import Modal from "../../modal";
import { Link } from "react-router-dom";

const InnerDash = () => {
  const modal = useRef();
  const formModal = useRef();

  function doIT() {
    modal.current.open();
  }

  const [giftData, setGiftData] = useState({});

  function handleCardClick(items) {
    setGiftData(items);
    formModal.current.open();
  }

  const [nairaEqual, setNairaEqual] = useState(0);
  const [total, setTotal] = useState(0);
  const [rate, setRate] = useState("usd");

  useEffect(() => {
    function calc() {
      let data = 0;
      if (giftData && giftData.rate) {
        data += +giftData.rate[rate.toLowerCase()] * nairaEqual;
        console.log(giftData.rate[rate.toLowerCase()]);
      }
      let res = data.toLocaleString("en-NG", {
        style: "currency",
        currency: "NGN",
      });
      setTotal(res);
    }

    calc();
  }, [rate, nairaEqual]);

  const [formData, setFormData] = useState({
    cardName: giftData && giftData.text,
    amount: nairaEqual && nairaEqual,
    cardCode: "",
    cardNumber: "",
    imageUrl: "",
    conversion: rate,
    amountInNaira: total,
  });

  function handleFormData(e) {
    console.log(e.target.name);
    if (e.target && e.target.name) {
      setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  }

  function handleSubmitForm(e) {
    e.preventDefault();
    console.log(formData);

    if (
      formData.cardCode !== "" &&
      formData.cardNumber !== "" &&
      formData.imageUrl !== ""
    ) {
      if (formModal.current) {
        formModal.current.close();
      }
    }
  }
  return (
    <>
      <Modal ref={formModal}>
        <form className="flex flex-col gap-3" onSubmit={handleSubmitForm}>
          <h1>
            Exchange{" "}
            <span className="font-bold text-purple-600">{giftData.text}</span>{" "}
            to Naira
          </h1>
          <div className="flex flex-col gap-1 ">
            <label htmlFor="number" className="text-purple-600 font-semibold">
              {giftData.text} in Dollars ($)
            </label>
            <input
              type="number"
              id="number"
              name="cardNumber"
              className="ring-[1px] ring-purple-400 rounded-[4px] outline-[1px] outline-purple-600 border-none text-purple-700 py-2 px-4"
              onChange={(e) => {
                setNairaEqual(e.target.value);
                handleFormData(e);
              }}
            />
          </div>
          <div className="flex flex-col gap-1 ">
            <label htmlFor="number" className="text-purple-600 font-semibold">
              Gift Card Number / Code
            </label>
            <input
              name="cardCode"
              onChange={handleFormData}
              type="text"
              id="number"
              className="ring-[1px] ring-purple-400 rounded-[4px] outline-[1px] outline-purple-600 border-none text-purple-700 py-2 px-4"
            />
          </div>
          <div className="flex flex-col gap-1 ">
            <label htmlFor="number" className="text-purple-600 font-semibold">
              Image
            </label>
            <input
              type="file"
              name="imageUrl"
              id="imageUrl"
              className="ring-[1px] ring-purple-400 rounded-[4px] outline-[1px] outline-purple-600 border-none text-purple-700 py-2 px-4"
              onChange={handleFormData}
            />
          </div>
          <div className="flex flex-col gap-1 ">
            <label
              htmlFor="conversion"
              className="text-purple-600 font-semibold"
            >
              Conversion In:
            </label>
            <select
              className="w-full ring-[1px] ring-purple-500 py-2 px-4 rounded-[4px] outline-none  uppercase"
              id="conversion"
              onChange={(e) => setRate(e.target.value)}
            >
              <option value="usd">usd</option>
              <option value="sgd">sgd</option>
              <option value="aud">aud</option>
              <option value="cad">cad</option>
            </select>
          </div>
          <div className="flex flex-col gap-1 ">
            <label htmlFor="number" className="text-purple-600 font-semibold">
              To Naira (#)
            </label>
            <input
              type="text"
              id="number"
              className="ring-[1px]  ring-purple-400 rounded-[4px] outline-[1px] outline-purple-600 border-none text-purple-700 py-2 px-4"
              value={total}
              disabled
            />
          </div>{" "}
          <div className="flex  ">
            <label
              htmlFor="conversion"
              className="text-purple-600 font-semibold"
            >
              1 {rate.toUpperCase()} = #
              {giftData && giftData.rate && +giftData.rate[rate.toLowerCase()]}
            </label>
          </div>
          <div>
            <button
              type="submit"
              className="block text-center w-full py-2  bg-purple-600 rounded-md text-white"
            >
              Submit
            </button>
          </div>
        </form>
      </Modal>
      <Modal ref={modal} buttonCaption="Close">
        <p className="text-center">Choose The gift Card You wanna Exchange</p>
        <div className="p-3 grid gap-3 md:grid-cols-4 sm:grid-cols-3 grid-cols-2">
          {item.map((item, i) => (
            <div
              key={i}
              className="list-none p-3 border shadow-md rounded-lg flex flex-col gap-1 overflow-hidden py-5 cursor-pointer"
              onClick={() => handleCardClick(item)}
            >
              <p className="font-bold">{item.text}:</p>
              <div className="relative w-2/3 rounded-md mx-auto h-[100px] ">
                <img
                  src={item.img}
                  alt={item.text}
                  className="w-full h-full rounded-3xl "
                />
              </div>
            </div>
          ))}
        </div>
      </Modal>
      <main className="relative">
        <article className="bg-purple-600 w-full h-[200px] round relative px-5">
          <div className=" w-full bg-white h-[305px] rounded-2xl relative top-5 shadow_manual p-3 flex flex-col gap-4 border-4 border-purple-600">
            <p className="!text-nowrap text-center font-bold text-xl md:text-2xl">
              Perform Transaction
            </p>
            <div className="flex  flex-col gap-4">
              <div className="flex items-center flex-col">
                <p className="font-semibold">Your Balance:</p>
                <span className="text-3xl font-bold text-purple-700">
                  ${40}
                </span>
              </div>

              <div className="w-full px-10">
                {" "}
                <button className="p-3 !text-nowrap px-5 inline-block w-full bg-purple-700 rounded-full text-white">
                  Withdraw Fund
                </button>
              </div>
            </div>

            <div className="flex gap-3">
              <Btns text="Buy Crypto" Icon={<FaCircleDollarToSlot />} />
              <Btns text=" Sell Crypto" Icon={<FaBitcoin />} />
              <Btns click={doIT} text="Gift Card" Icon={<GiSellCard />} />
            </div>
          </div>
        </article>
        <article className="mt-[150px] p-3">
          <div className="bg-[url(./person-yellow.jpg)] bg-no-repeat bg-right bg-cover rounded-xl p-4 ">
            <div className="bg-slate-100/85 w-2/3 rounded-lg p-2 flex flex-col gap-2">
              {" "}
              <p className="text-red-600 font-bold">Important Notice:</p>
              <p className="text-sm font-semibold">
                Smile&apos;s Pay is backed up by CBN{" "}
              </p>
              <div>
                <button className="py-2 px-6 bg-purple-950/90 hover:bg-purple-950 rounded-full text-white text-sm">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </article>

        <article className="w-full p-3 grid grid-cols-2 gap-2.5">
          <div className="rounded-md bg-[url(./design13.jpg)] bg-cover">
            <div className="w-full h-full bg-gray-50/55 flex items-center justify-center py-6">
              <p className="text-6xl font-bold text-slate-900/30">FAQ</p>
            </div>
          </div>
          <div className="rounded-md bg-[url(./design14.jpg)] bg-cover"></div>
        </article>
      </main>
    </>
  );
};

export default InnerDash;
