import React from 'react';
import "../../styles/pricing.css"

const Pricing = () => {
  return <section>
    <div className="container" id='princies-plan'>
     <div className="princing__top">
        <h2 className="section__title">GYM <span className="highlights">Princing</span></h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
         Enim cum magni, eos debitis alias quisquam <br /> 
        </p>
     </div>

        {/* ======= Pricing Wrapper ======= */}
        <div className="pricing__wrapper">
            <div className="pricing__item" data-aos='fade-up' data-aos-duration='1500'>
                <div className="pricing__card-top">
                    <h2 className='section__title'>Regular Member</h2>
                    <h2 className="pricing section__title">$50 <span>/month</span></h2>
                </div>

                <div className="services">
                    <ul>
                        <li>
                            <span><i class="ri-checkbox-blank-circle-fill"></i>
                            Unlimited access to the gym
                            </span>
                        </li>
                        <li>
                            <span><i class="ri-checkbox-blank-circle-fill"></i>
                            Custumer Support
                            </span>
                        </li>
                        <li>
                            <span><i class="ri-checkbox-blank-circle-fill"></i>
                            Personal Trainer
                            </span>
                        </li>
                        <li>
                            <span><i class="ri-checkbox-blank-circle-fill"></i>
                            personal</span>
                        </li>
                        
                    </ul>

                    <button className='register__btn'>Join </button>
                </div>
            </div>

            <div className="pricing__item pricing__item-02" data-aos='fade-up' data-aos-duration='1500'>
                <div className="pricing__card-top">
                    <h2 className='section__title'>Regular Member</h2>
                    <h2 className="pricing section__title">$50 <span>/month</span></h2>
                </div>

                <div className="services">
                    <ul>
                        <li>
                            <span><i class="ri-checkbox-blank-circle-fill"></i>
                            Unlimited access to the gym
                            </span>
                        </li>
                        <li>
                            <span><i class="ri-checkbox-blank-circle-fill"></i>
                            Custumer Support
                            </span>
                        </li>
                        <li>
                            <span><i class="ri-checkbox-blank-circle-fill"></i>
                            Personal Trainer
                            </span>
                        </li>
                        <li>
                            <span><i class="ri-checkbox-blank-circle-fill"></i>
                            personal</span>
                        </li>
                        
                    </ul>

                    <button className='register__btn'>Join </button>
                </div>
            </div>


            <div className="pricing__item pricing__item-03" data-aos='fade-up' data-aos-duration='1500'>
                <div className="pricing__card-top">
                    <h2 className='section__title'>Regular Member</h2>
                    <h2 className="pricing section__title">$50 <span>/month</span></h2>
                </div>

                <div className="services">
                    <ul>
                        <li>
                            <span><i class="ri-checkbox-blank-circle-fill"></i>
                            Unlimited access to the gym
                            </span>
                        </li>
                        <li>
                            <span><i class="ri-checkbox-blank-circle-fill"></i>
                            Custumer Support
                            </span>
                        </li>
                        <li>
                            <span><i class="ri-checkbox-blank-circle-fill"></i>
                            Personal Trainer
                            </span>
                        </li>
                        <li>
                            <span><i class="ri-checkbox-blank-circle-fill"></i>
                            personal</span>
                        </li>
                        
                    </ul>

                    <button className='register__btn'>Join </button>
                </div>
            </div>


        </div>
    </div>
  </section>
}

export default Pricing