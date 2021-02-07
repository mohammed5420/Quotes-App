import React  from 'react';
import Card from './card';
import BackSvg from '../back.svg';
import { v4 as uuidv4 } from 'uuid';


const Cards = ({quotes , isLike , setQuotes , page , sPage , getQuotes , likes , setLikes}) => {
    const numberOfPageStr = page + '';
    let pageNumber  ;

    if (numberOfPageStr.length === 1) {
        pageNumber = `${parseInt(numberOfPageStr[0] , 10)}`
    }
    else if(numberOfPageStr.length  === 2 ) {
        pageNumber = `${parseInt(numberOfPageStr[0] , 10)}`;
    } else if (numberOfPageStr.length === 3) {
        pageNumber =  `${numberOfPageStr[0]}${parseInt(numberOfPageStr[1],10) }`;
    } else if (numberOfPageStr.length === 4) {
        pageNumber =  `${numberOfPageStr[0]}${numberOfPageStr[1]}${numberOfPageStr[1]}${parseInt(numberOfPageStr[2],10)}`;
    } else {
        pageNumber= `end!!`;
    }

    const renderItems = quotes.length ? quotes.map(quote => {
        return <Card quote={quote} isLike = {isLike}key={uuidv4()} quotes={quotes} setQuotes={setQuotes} likes={likes} setLikes={setLikes}/>
    }) : (
        <div className="cards-contener spam">
            <span className="card"></span>
            <span className="card"></span>
            <span className="card"></span>
            <span className="card"></span>
            <span className="card"></span>
            <span className="card"></span>
            <span className="card"></span>
            <span className="card"></span>
        </div>
    )
    return (
        <div>
            <div className="cards-contener">
                {renderItems}
            </div>
            <div className="controlers">
               
                {page >= 10 ?<button 
                className="pre-btn btn"
                onClick={() => {sPage(page - 10); }}><img alt="btn"src={BackSvg}/><span>pre page</span></button> : ''}
                <p className="page-number">{pageNumber}</p>
                <button 
                className="next-btn btn"
                onClick={() => {sPage(page + 10); }}><span>next page</span> <img alt="btn" src={BackSvg}/></button>

            </div>

        </div>

    );
}

export default Cards;