import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import "../style/payment.css";

// function Details(){
//     const{register ,formState:{errors}, handleSubmit}=useForm();
//     const onSubmit=(data)=>{
//         console.log(data);
// }
// }

const CardForm = () => {
  const [cardHolderName, setCardHolderName] = useState([]);
  const [cardNumber, setCardNumber] = useState([]);
  const [cvv, setCvv] = useState([]);
  const [expiryDate, setExpiryDate] = useState([]);
  const [message, setMessage] = useState("");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleCardHolderNameChange = (event) => {
    const value = event.target.value;
    if (/^\d+$/.test(value)) {
      return;
    }
    setCardHolderName(value);
  };

  const handleCardNumberChange = (event) => {
    const value = event.target.value.replace(/\D/g, "");
    if (value.length > 16) {
      return;
    }
    setCardNumber(value);
  };

  const handleCvvChange = (event) => {
    const value = event.target.value.replace(/\D/g, "");
    if (value.length > 3) {
      return;
    }
    setCvv(value);
  };

  const handleExpiryDateChange = (event) => {
    const value = event.currentTarget.value;

    setExpiryDate(value);
  };

  const onSubmit = async (data) => {
    console.log(data);
    const res = axios
      .post("http://localhost:7000/api/card_details", data)
      .then((responce) => {
        setMessage(responce.data);
      });
    if (!message) {
      setMessage(res.data);
    } else {
      setMessage("Some Error Occured!");
    }
  };

  console.log("Line 69 executed");
  return (
    <form className="card-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="card-form__field">
        <label htmlFor="card-holder-name">Card Holder Name:</label>
        <input
          type="text"
          {...register("name", { required: true })}
          id="card-holder-name"
          value={cardHolderName}
          onChange={handleCardHolderNameChange}
          placeholder="Full Name"
          maxLength={50}
          required
        />
      </div>
      <div className="card-form__field">
        <label htmlFor="card-number">Card Number:</label>
        <input
          type="text"
          {...register("card-number", { required: true })}
          id="card-number"
          value={cardNumber}
          onChange={handleCardNumberChange}
          maxLength={16}
          placeholder="16 digit Number"
          required
        />
      </div>
      <div className="card-form_field card-form_field--inline  card-form_field--inline--cvv">
        <label htmlFor="cvv">CVV: </label>
        <input
          type="text"
          {...register("cvv", { required: true })}
          id="cvv"
          value={cvv}
          placeholder="3 digit number"
          onChange={handleCvvChange}
          maxLength={3}
          required
        />
      </div>
      <div className="card-form_field card-form_field--inline">
        <label htmlFor="expiry-date">Expiry Date:</label>
        <input
          type="month"
          {...register("expiry-date", { required: true })}
          id="expiry-date"
          value={expiryDate}
          onChange={handleExpiryDateChange}
          maxLength={5}
          placeholder="MM/YY"
          required
        />
      </div>
      <button type="submit" className="card-form__submit-btn">
        Save Card Details
      </button>
    </form>
  );
};

export default CardForm;
