import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Card = ({ quote, author, background, changeQuote }) => {

    return(

        <div className="Card">
            <section>
                <div className="IconCard">
                    <FontAwesomeIcon icon={faQuoteLeft} size="3x" style={{ color: background }} />
                </div>
                <div className="Quote">
                    <p style={{ color: background }}>{ quote }</p>
                </div>
            </section>
            <p style={{ color: background }}>{ author }</p>
            <div>
                <button onClick={changeQuote} style={{ background: background }} >
                    <FontAwesomeIcon icon={faAngleRight} size="2x" />
                </button>
            </div>
        </div>

    );

}

export default Card;