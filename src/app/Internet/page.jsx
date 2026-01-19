import React from 'react'
import { IoArrowForward } from "react-icons/io5";


function page() {
  return (
   <>
   <section>
    <div className="container">
        <div className="row">
            <div className="col-lg-6">
                <h4>
                At Kumari Bank, we facilitate banking with a click of a mouse and where you can keep track of your account from anywhere in the world.
                </h4>
                <h3>Services we offer:</h3>
                <ul>
                    <li>Current balance in your account on real time basis</li>
                    <li>Transaction search</li>
                    <li>Checking daily transaction in account</li>
                    <li>Fund transfer within and between other Banks</li>
                    <li>Future dated payment instructions within own accounts or within group accounts</li>
                    <li>Statement download</li>
                </ul>
                <button className='bg-warning py-2 c'>Read More <IoArrowForward />
                </button>
            </div>
            <div className="col-lg-6">
                <img className='w-100' src="https://backend.kumaribank.com/images/Internet%20Banking(1)_1649842688_1652158494_1659070429.jpg" alt="" />
            </div>
        </div>
    </div>
   </section>
   </>
  )
}

export default page
