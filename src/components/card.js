import React from 'react';
import heartOut from "../heart-outline.svg";
import heart from "../heart.svg";

const Card = ({quote ,quotes, likes , setLikes }) => {
    //const [likes , setLikes] = useState([]);
    //setLikes(quotes.fillter(quote => {
    //    return quote.like = true;
    //}))
    const equale = (q) => {
        return likes.findIndex(el => el.text === q) !== -1;
    }
    const isLike = () => {
        if(equale(quote.text)) {
           return true;
        } 
        else {
            return false
        }
    };
    const likeHandler = () =>{ 
        if(!isLike()) {
            setLikes([...likes,{id: quote.id, imgId: quote.imgId, text: quote.text , author: quote.author}]);

        } else {
            setLikes(likes.filter(el =>{ 
                return el.text !== quote.text;
            }));
            console.log('deleted');
            localStorage.setItem('likes' , JSON.stringify(likes)); 
        }
    }

    const inlineStyle = {
        backgroundImage : `url(./imgs/${quote.imgId}.jpg)`
    }
    return (
        <div className="card"  style={inlineStyle} id={quote.id}>
            
            <p className="quote-text">
                {quote.text}
            </p>
            <p className="quote-author">
                {quote.author}
            </p>
            <img src={isLike()? heart : heartOut} className="outline" alt="quote" onClick={likeHandler}/>
        </div>
    );
}

export default Card;