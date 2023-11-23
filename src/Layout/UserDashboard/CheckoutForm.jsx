import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useSecure from "../../Hooks/AxiosSecure/useSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/AuthHook/useAuth";

const CheckoutForm = () => {
    const axiosSecure=useSecure()
    const [clientSecret, setClientSecret] = useState('')
    const [error, setError] = useState('')
    const stripe = useStripe()
    const elements = useElements()
    const { user } = useAuth();
  const email = user?.email;
    const { data: items = [],  } = useQuery({
        queryKey: ["price", email],
        queryFn: async () => {
          const res = await axiosSecure.get(`/cards/${email}`);
          return res.data;
        },
      });
      const total = items.reduce((pre, item) => pre + item.price, 0);
    //   console.log(total)
    useEffect(()=>{
        axiosSecure.post("/create-payment-intent", {price:total}).then(res=>{
            console.log(res.data.clientSecret)
            setClientSecret(res.data.clientSecret)
        })
    },[axiosSecure, total])
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!stripe|| !elements){
        return
    }
    const card = elements.getElement(CardElement)
    if(card==null){
        return
    }
    const {error, paymentMethod} = await stripe.createPaymentMethod({
        type:'card',
        card
    })
    if(error){
        console.log('payment error',error)
        setError(error.message)
    }else{
        console.log('payment method',paymentMethod)
        setError('')
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button type="submit" disabled={!stripe || !clientSecret} className="btn btn-sm px-4 btn-primary">
          Pay
        </button>
        <p className="text-red-600">{error}</p>
      </form>
    </div>
  );
};

export default CheckoutForm;
