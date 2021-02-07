import React from 'react';

const Like = ({likes}) => {
    const newlikes = likes.map(like => {
        const inlineStyle = {
            backgroundImage : `url(./imgs/${like.imgId}.jpg)`,
        }
        return (
            
                <div className="card"  style={inlineStyle} key={like.id}>    
                    <p className="quote-text">
                        {like.text}
                    </p>
                    <p className="quote-author">
                        {like.author}
                    </p>                    
                </div>
            
        );
        });
    return (
        <div className="cards-contener fav">
            {newlikes}
        </div>
    )
}

export default Like
