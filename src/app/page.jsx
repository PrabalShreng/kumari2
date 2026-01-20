"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoArrowForward } from "react-icons/io5";
import { FaComputer } from "react-icons/fa6";
import { FcMissedCall } from "react-icons/fc";
import { GrCreditCard } from "react-icons/gr";
import { FaMobileRetro } from "react-icons/fa6";
import { GiLockers } from "react-icons/gi";
import { IoLocationOutline } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { FaSwift } from "react-icons/fa6";
import { PiFacebookLogoBold } from "react-icons/pi";
import { TfiYoutube } from "react-icons/tfi";
import { BsTwitterX } from "react-icons/bs";







// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Link from 'next/link';

function page() {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <img className='w-100' src="https://backend.kumaribank.com/storage/banner/2023/06/website1600-x-500px-2_1686892735.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-100' src="https://backend.kumaribank.com/storage/banner/2023/05/call-centre-designfor-web1600-x-500-px-min_1685279111.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-100' src="https://backend.kumaribank.com/storage/banner/2022/05/digital_1652161776.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-100' src="https://backend.kumaribank.com/storage/banner/2022/04/youth_1649831820.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-100' src="https://backend.kumaribank.com/storage/banner/2024/03/star-saving-website-banner_1710833288.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-100' src="https://backend.kumaribank.com/storage/banner/2024/07/home-loans-website-banner2_1721191972.jpg" />
        </SwiperSlide>

      </Swiper>

      <section className=' py-2'>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 py-5">
              <h1>
                Kumari Bank Tie-Up
              </h1>
              <p>Kumari Bank Tie-Up with different organization of sector like health, food & beverage, education, spa, fitness, electronic appliances and other many sectors.</p>
            </div>
            <div className="col-lg-6 ">

              <div class="hexagon-wrapper bg-light">
                <div class="hexagon-wrapper__hexagon-container justify-content-end">

                  <div class="hexagon__outer">
                    <div class=""></div>
                  </div>

                  <div class="hexagon__outer">
                    <div class=""></div>
                  </div>

                  <div class="hexagon__outer">
                    <div class="hexagon__inner">
                      <img className='w' src="https://backend.kumaribank.com/storage/honeycomb/2022/04/food_1651053874.png" alt="" /><br />

                    </div>
                  </div>

                  <div class="hexagon__outer">
                    <div class="hexagon__inner">
                      <img className='w' src="https://backend.kumaribank.com/storage/honeycomb/2023/08/emi_1690950279.png" alt="" />
                      <br />

                    </div>
                  </div>

                  <div class="hexagon__outer">
                    <div class=""></div>
                  </div>

                  <div class="hexagon__outer">
                    <div class="hexagon1"></div>
                  </div>

                  <div class="hexagon__outer">
                    <div class="hexagon1"></div>
                  </div>

                  <div class="hexagon__outer">
                    <div class=""></div>
                  </div>

                  <div class="hexagon__outer">
                    <div class="hexagon__inner">
                      <img className='w' src="https://backend.kumaribank.com/storage/honeycomb/2022/04/electronic_1651053896.png" alt="" />
                    </div>
                  </div>

                  <div class="hexagon__outer">
                    <div class=""></div>
                  </div>

                  <div class="hexagon__outer">
                    <div class="hexagon__inner">
                      <img className='w' src="https://backend.kumaribank.com/storage/honeycomb/2022/04/health_1651053851.png" alt="" />
                    </div>
                  </div>

                  <div class="hexagon__outer">
                    <div class=""></div>
                  </div>

                  <div class="hexagon__outer">
                    <div class=""></div>
                  </div>

                  <div class="hexagon__outer">
                    <div class=""></div>
                  </div>

                  <div class="hexagon__outer">
                    <div class=""></div>
                  </div>

                  <div class="hexagon__outer">
                    <div class="hexagon__inner">
                      <img className='w' src="https://backend.kumaribank.com/storage/honeycomb/2022/04/miscellaneous_1651053922.png" alt="" />
                    </div>
                  </div>

                  <div class="hexagon__outer">
                    <div class="hexagon__inner">
                      <img className='w' src="https://backend.kumaribank.com/storage/honeycomb/2022/04/fitness_1651053911.png" alt="" />
                    </div>
                  </div>

                  <div class="hexagon__outer">
                    <div class=""></div>
                  </div>

                  <div class="hexagon__outer">
                    <div class=""></div>
                  </div>

                  <div class="hexagon__outer">
                    <div class=""></div>
                  </div>
                  </div>
              </div>
              </div>
          </div>
        </div>
      </section>

      <section className='py-3'>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <img className='w2' src="https://backend.kumaribank.com/storage/offers/2023/06/lounge-keyfinal_1686120829.png" alt="" />
              <p className='f py-2'>Louge Key</p>
            </div>
            <div className="col-lg-3">
              <img className='w2' src="https://backend.kumaribank.com/storage/offers/2023/07/3585798005759326214221968787248286298682419n_1690189627.jpg" alt="" />
              <p className='f py-2'>Discount On Worldlink</p>
            </div>
            <div className="col-lg-3">
              <img className='w2' src="https://backend.kumaribank.com/storage/offers/2023/01/img-20230104-wa0008_1672835485.jpg" alt="" />
              <p className='f py-2'>FAQs For NCC bank customer</p>
            </div>
            <div className="col-lg-3">
              <img className='w2' src="https://backend.kumaribank.com/storage/offers/2022/11/lifetime-dmat-renewal_1669198702.jpg" alt="" />
              <p className='f py-2'>Life Time DEMAT Renewal Offer</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container bg-light">
          <div className="row">
            <div className="col-lg-6 ">
              <img className='w-100' src="https://backend.kumaribank.com/images/app_1651727822_1658146312.png" alt="" />
            </div>
            <div className="col-lg-6">
              <h1>
                Get Instants Digital Payment
                For Everyone
              </h1>
              <p>Download the Kumari Bank mobile app and simplify your banking. Discover quick, simple and convenient way to take command of your account.</p>
              <div className="row">
                <div className="col-lg-3">
                  <img className='w-100' src="https://backend.kumaribank.com/images/kqr_1654767844_1658146400.png" alt="" />
                </div>
                <div className="col-lg-3 ">
                  <p>Get Kumari Bank Mobile App</p>
                  <div className='d-flex gap-2'>
                    <img className='w2' src="https://backend.kumaribank.com/images/playstore_1651727476_1658146486.webp" alt="" />
                    <img className='w2 ' src="https://backend.kumaribank.com/images/appstore_1651727787_1658146506.webp" alt="" />
                  </div>
                  <p>24*7 access anytime anywhere</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-4'>
        <div className="container">
          <div className="row">
            <div className="col-lg-5 py-5 ">
              <h1>Saving & Deposits</h1>
              <h5>More you save, more you earn</h5>
              <p>We have the savings account that will get you closer to your saving goals</p>
               <Link href='/sir/'><button className='bg-warning aaa g'>View All <IoArrowForward />
              </button></Link>
            </div>
            <div className="col-lg-6">
              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper swiper2"
              >
                <SwiperSlide>
                  <img className='w4 sliderimg' src="https://backend.kumaribank.com/storage/account_type/2023/12/img-20231126-wa0003_1702376539.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className='w4 sliderimg' src="https://backend.kumaribank.com/storage/account_type/2023/04/sized-remit-ipo_1681714952.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className='w4 sliderimg' src="https://www.kumaribank.com/images/no-image.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className='w4 sliderimg' src="https://backend.kumaribank.com/storage/account_type/2023/04/sized-remit-ipo_1681714952.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className='w4 sliderimg' src="https://backend.kumaribank.com/storage/account_type/2023/04/sized-sabaiko_1681733387.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className='w4 sliderimg' src="https://www.kumaribank.com/images/no-image.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className='w4 sliderimg' src="https://backend.kumaribank.com/storage/account_type/2023/04/sized-remit-ipo_1681714952.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className='w4 sliderimg' src="https://backend.kumaribank.com/storage/account_type/2023/04/sized-sabaiko_1681733387.jpg" alt="" />
                </SwiperSlide>

              </Swiper>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <h2>Services We Offer</h2>
              <ul className='d text-bold py-3 p-4'>
                <h5><FaComputer /><Link href='/Internet/'>
                  Internet Banking</Link></h5>
                <h5> <FcMissedCall /><Link href='/Internet/'>
                  Missed Call Banking</Link></h5>
                <h5> <GrCreditCard /><Link href='/Internet/'>
                  Debit/Credit Card</Link>
                </h5>
                <h5> <FaMobileRetro /><Link href='/Internet/'>
                  Mobile Banking</Link>
                </h5>
                <h5> <GiLockers /><Link href='/Internet/'>
                  Locker Service</Link>
                </h5>
              </ul>
            </div>
            <div className="col-lg-9">
              <img className='w-100' src="https://backend.kumaribank.com/storage/banner/2024/07/home-loans-website-banner2_1721191972.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container py-2">
          <div className="row">
            <div className="col-lg-6">
              <img className='w-100' src="https://backend.kumaribank.com/images/3d_1658203358.png" alt="" />
            </div>
            <div className="col-lg-6 py-5">
              <h2 className='py-2'>Secure online transactions through 3D-Secure Cards</h2>
              <h6 className='py-2'>We provide the Credit/Debit Card facilities to our customers</h6>
              <p className='py-2'>You can easily enjoy a cashless convenience while shopping in stores or online with kumari VISA debit/credit cards and Kumari International Travel Card, customized to meet your unique financial needs.</p>
              <button className='bg-warning gg aaa'>Read More</button>
            </div>
          </div>
        </div>
      </section>

      <section className='py-2 bg-white'>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <img className='w-100' src="https://www.kumaribank.com/images/logo.png" alt="" />
              <p> <IoLocationOutline />
                Corporate Office Address
                Tangal , Kathmandu</p>
              <p> <FaPhone />
                Phone
                +977 14543076, +977 14543077, +977 14543079
                Contact number of Call Center
                9851078888/01-5970499</p>
              <p> <FaSwift />
                Swift Code : KMBLNPKA</p>
              <h5>Follow Us
              </h5>

              <PiFacebookLogoBold />   <TfiYoutube />   <BsTwitterX />


            </div>
            <div className="col-lg-3">
              <h4>About</h4>
              About Kumari Bank
              Board of Directors
              Management Team
              Non-Banking Assets
              ATM Locations
              AML/CFT & KYC
              Banking Hours
              Branches & Networks
              FAQ
              Disclaimer
              Privacy Policy
              Tender Notice
            </div>
            <div className="col-lg-3">
              <h4>Quick Links</h4>
              Company Secretary
              Grievance Handling Officer
              Compliance Officer
              Financial Literacy
              Corporate Social Responsibility
              AML/CFT & KYC
              Financial Report
              Financial Indicator
              AGM Minutes
              Right to Information
              NRB Grievance Management System
              Notices
            </div>
            <div className="col-lg-3">
              <h4>Useful Link</h4>
              Correspondent Banks
              Education Loan Offer Letter Validation
              Annual Compliance Report
              Guarantee Document Validation
              Service Charges
              Transaction Limits
              Downloads
              C-ASBA
              News & Events
              Recurring Deposit Goal Calculator
              EMI Calculator
              Photo Gallery
              Video Gallery
              Lockers
            </div>
          </div>
        </div>
      </section>

      <section className='bg-light py-4'>
        <div className="container">
          <div className="row">
            <h4 className='text-center'>Support Email Directory</h4>
            <div className="col-lg-3 py-2">
              <p>Service-related issues
                contact@kumaribank.com
                <br />
                Card-related issues
                card@kumaribank.com</p>
            </div>
            <div className="col-lg-3 py-2">
              <p>E-payments related issues
                epayments@kumaribank.com
                <br />
                Card Dispute related issues
                dispute@kumaribank.com</p>
            </div>
            <div className="col-lg-3 py-2">
              <p>ATM related issues
                atmcell@kumaribank.com
                <br />
                Any banking queries/information
                callcenter@kumaribank.com</p>
            </div>
            <div className="col-lg-3 py-2">
              <p>Overall card and digital banking issues
                card.epayments@kumaribank.com
                <br />
                Operations
                kbloperation@kumaribank.com</p>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default page
