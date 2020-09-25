import React from 'react';

import CGC from '../images/general/cgc2.png';

const Shelf = ({ comic, figure, additionalStyles }) => (
    <div className="shelf">
        <div className="comic">
            <img className="comic__cgc" src={CGC} alt="cgc-background" />
            <img className="comic__art" src={comic} alt="comic-art" />
        </div>
        <div className={ additionalStyles ? `${additionalStyles} figure` : "figure"}>
            { figure && <img className="figure__img" src={figure} alt="action figure" /> }
        </div>
    </div>
)

export default Shelf