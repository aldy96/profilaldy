import React from 'react';
import '../heartbeat/style.css';


const Heartbeat = () => {
    return (
        <section className=' w-screen h-screen bg-black absolute -z-10 flex justify-center items-center overflow-x-hidden'>
            <div className="rt-container flex justify-center items-center">
                <div className="col-rt-12">
                    <div className="Scriptconten flex justify-center items-center">
                        <div className="heart-rate flex justify-center items-center">
                            <svg
                                version="1.0"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                width="600px"
                                height="300px"
                                viewBox="0 0 150 73"
                                enableBackground="new 0 0 150 73"
                                xmlSpace="preserve">
                                <polyline
                                    fill="none"
                                    stroke="#009B9E"
                                    strokeWidth="3"
                                    strokeMiterlimit="10"
                                    points="0,45.486 38.514,45.486 44.595,33.324 50.676,45.486 57.771,45.486 62.838,55.622 71.959,9 80.067,63.729 84.122,45.486 97.297,45.486 103.379,40.419 110.473,45.486 150,45.486"
                                />
                            </svg>
                            <div className="fade-in"></div>
                            <div className="fade-out"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Heartbeat;
