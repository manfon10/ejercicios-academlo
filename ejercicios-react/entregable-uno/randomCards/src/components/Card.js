import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faAngleRight, faHome } from '@fortawesome/free-solid-svg-icons';
import Button from './Button';

const Card = ({ quote, author, background, changeQuote }) => {

    return(

        <div className="Card">
            <section>
                <div className="IconCard">
                    <FontAwesomeIcon 
                        icon={faQuoteLeft} 
                        size="3x" 
                        style={{ color: background }} 
                    />
                </div>
                <div className="Quote">
                    <p style={{ color: background }}>{ quote }</p>
                </div>
            </section>
            <p style={{ color: background }}>{ author }</p>
            <div>
                <Button 
                    background={background} 
                    changeQuote={changeQuote}
                />
            </div>
        </div>

    );

}

export default Card;