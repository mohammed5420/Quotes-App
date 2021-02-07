import React from 'react';
import Error from '../error.svg';
import { motion } from 'framer-motion'

const Popup = ({popUp , setPopUp}) => {
    return (
        <motion.div className="popup" initial={{scale: 0 }}
        animate={{scale: 1 ,opacity:1, rotateZ: -360 }}
        transition={{duration: 0.5}}>
            <div className="error-icon">
                <img src={Error} alt="error icon"/>
            </div>
            <div className="error-text">
                <h3 >warning!</h3>
                <p>An error has occurred while geting quotes</p>
            </div>
            <button className="error-btn" href="/" onClick={() => {setPopUp(!popUp)}}>close</button>
        </motion.div>
    )
}

export default Popup;
