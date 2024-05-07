import React from "react";
import styles from "../../styles/styles";


const Sponsored = () => {
    return (
        <div
            className={`${styles.section} hidden sm:block bg-white py-10 px-5 mb-12 cursor-pointer rounded-xl`}
        >
            <div className="flex justify-between w-full">
                <div className="flex items-start">
                    <img
                        src= {require('./images.png')}
                        alt="hello"
                        style={{ width: "150px", objectFit: "contain" }}
                    />
                </div>
                <div className="flex items-start">
                    <img
                        src={require('./hendriks.png')}
                        style={{ width: "150px", objectFit: "contain" }}
                        alt=""
                    />
                </div>
                <div className="flex items-start">
                    <img
                        src={require('./craftizen.jpg')}
                        style={{ width: "150px", objectFit: "contain" }}
                        alt=""
                    />
                </div>
                <div className="flex items-start">
                    <img
                        src={require('./craftvibes.jpg')}
                        style={{ width: "150px", objectFit: "contain" }}
                        alt=""
                    />
                </div>
                <div className="flex items-start">
                    <img
                        src={require('./craftomart.jpg')}
                        style={{ width: "150px", objectFit: "contain" }}
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default Sponsored;