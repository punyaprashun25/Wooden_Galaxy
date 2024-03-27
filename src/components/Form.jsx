import React from 'react'
import { useState } from 'react';
const Form = () => {
    const [method, setMethod] = useState("");
    const bankHandler = () => {
        setMethod("Direct Bank Transfer");
    };
    const cashHandler = () => {
        setMethod("Cash On Delivery");
    };
    return (
        <>
            <form action="#" className="flex w-full  flex-col bg-[#E5E5E5] px-8 py-4 gap-5">
                <div className="left flex flex-col gap-6">
                    <div className="heading-text text-[1.75rem] font-semibold text-center ">
                        Billing Details
                    </div>
                    <div className="name-box flex flex-wrap w-full justify-between">
                        <div className="input-box flex flex-col gap-2">
                            <label htmlFor="Fname" className='font-medium'>
                                First Name
                            </label>
                            <input type="text" id='Fname' className="w-40 h-8 rounded-md bg-transparent border border-[#9F9F9F] px-2" />
                        </div>
                        <div className="input-box flex flex-col gap-2">
                            <label htmlFor="Lname" className='font-medium'>
                                Last Name
                            </label>
                            <input type="text" id='Lname' className="w-40 h-8 rounded-md bg-transparent border border-[#9F9F9F] px-2" />
                        </div>
                    </div>
                    <div className="company-box">
                        <div className="input-box flex flex-col gap-2">
                            <label htmlFor="company" className='font-medium'>
                                Company Name (Optional)
                            </label>
                            <input type="text" id='company' className="w-full h-10 rounded-md border border-[#9F9F9F] bg-transparent px-2" />
                        </div>
                    </div>
                    <div className="country-box ">
                        <div className="input-box flex flex-col gap-2">
                            <label htmlFor="region" className='font-medium'>
                                Country / Region
                            </label>
                            <select type="text" id='region' className="w-full h-10 rounded-md border border-[#9F9F9F] bg-transparent px-2" >
                                <option value="Sri Lanka" className=''>Sri Lanka</option>
                            </select>
                        </div>
                    </div>
                    <div className="street-box ">
                        <div className="input-box flex flex-col gap-2">
                            <label htmlFor="address" className='font-medium'>
                                Street Address
                            </label>
                            <input type="text" id='address' className="w-full h-10 rounded-md border border-[#9F9F9F] bg-transparent px-2" />
                        </div>
                    </div>
                </div>
                <div className="right flex flex-col gap-2">
                    <div className="heading-box flex justify-between">
                        <h2 className="heading font-medium text-[1.25rem]">Product</h2>
                        <h2 className="heading font-medium text-[1.25rem]">Subtotal </h2>
                    </div>
                    <div className="item-box flex justify-between">
                        <p className="item-name text-base text-[#9F9F9F]">
                            Asguard Sofa <span className="quantity font-medium text-[0.75rem] text-black">X 1</span>
                        </p>
                        <p className="amount text-base font-light">
                            <span className="currency">Rs. </span>
                            250,000.00
                        </p>
                    </div>
                    <div className="subtotal-box flex justify-between">
                        <p className="subtotal text-base">
                            Subtotal
                        </p>
                        <p className="amount text-base font-light">
                            <span className="currency">Rs. </span>
                            250,000.00
                        </p>
                    </div>
                    <div className="total-box flex justify-between">
                        <p className="subtotal text-base">
                            Total
                        </p>
                        <p className="amount text-[1.125rem] font-bold text-[#B88E2F]">
                            <span className="currency">Rs. </span>
                            250,000.00
                        </p>
                    </div>
                    <div className="line w-full h-[2px] bg-[#D9D9D9]"></div>
                    <div className="payment-box flex flex-col gap-4">
                        {
                            method
                            &&
                            <div className="selected-method flex items-center gap-4">
                                <div className="circle h-[14px] w-[14px] rounded-full bg-black"></div>
                                <p className="method-name ">{method}</p>
                            </div>
                        }
                        {method == "Direct Bank Transfer"
                            ?
                            <div className="method-info-box ">
                                <p className="method-info font-light text-[#9F9F9F]">
                                    Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                                </p>
                            </div>
                            :
                            (method == "Cash On Delivery"
                                ?
                                <div className="method-info-box ">
                                    <p className="method-info font-light text-[#9F9F9F]">
                                        Make your payment at your door at the time of delivery.
                                    </p>
                                </div>
                                :
                                <></>
                            )

                        }
                        <div className="methods flex flex-col gap-3">
                            <div className="payment-input-box flex gap-3">
                                <input className="" type="radio" name="payment-method" id="bank-transfer" />
                                <label htmlFor="bank-transfer" className="font-medium text-base text-[#9F9F9F]" onClick={bankHandler}>Direct Bank Transfer</label>
                            </div>
                            <div className="payment-input-box flex gap-3">
                                <input className="h" type="radio" name="payment-method" id="cod" />
                                <label htmlFor="cod" className="font-medium text-base text-[#9F9F9F]" onClick={cashHandler}>Cash On Delivery</label>
                            </div>
                            <div className="notice-box ">
                                <p className="info font-light text-base">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <a href="#" className="font-semibold text-base">privacy policy.</a></p>
                            </div>
                            <div className="place-order-box flex justify-center items-center">
                                <input type="submit" value="Place Order" className="h-[4rem] w-60 border border-[#000] rounded-xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Form;
