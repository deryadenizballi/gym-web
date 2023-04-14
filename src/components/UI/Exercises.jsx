import React from "react";
import "../../styles/excercises.css";
import lunges from '../../assets/img/lunges.png';
import yoga from '../../assets/img/yoga-pose.png';
import extended from '../../assets/img/extended.png';

const Exercises = () => {
    return <section>
                <div className="container exercise__container" id="schedule">
                    <div className="exercise__top">
                        <h2 className="section__title">
                            Benefits of <span className="highlights" >Excercise</span>
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit.
                             Facere deitis nulla imdt repellat nesciunt?
                        </p>
                    </div>
                      {/* ======= Exercise List ======= */}
                      <div className="exercise__wrapper">

                        <div className="exercise__item" data-aos='zoom-in' data-aos-duration='1500'
            >
                            <span className="exercise__icon">
                               <img src={lunges} alt="flowers" />
                            </span>

                            <div className="exercise__content">
                            <h4>Healthy Life</h4>
                            <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                            
                            </div>
                        </div>
                        <div className="exercise__item" data-aos='zoom-in' data-aos-duration='1500'>
                            <span className="exercise__icon">
                               <img src={yoga} alt="flowers" />
                            </span>

                            <div className="exercise__content">
                            <h4>Increades Flexibility</h4>
                            <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                            
                            </div>
                        </div>

                        <div className="exercise__item" data-aos='zoom-in' data-aos-duration='1500'>
                            <span className="exercise__icon">
                               <img src={extended} alt="flowers" />
                            </span>

                            <div className="exercise__content">
                            <h4>Reducing Blood Pressure</h4>
                            <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                            
                            </div>
                        </div>

                      </div>
                </div>
          </section>;
};

export default Exercises;
