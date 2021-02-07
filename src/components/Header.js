
import React , {useState }  from 'react';
import { InView } from 'react-intersection-observer';
import Heart from "../heart.svg";
import Like from "./like";
const Header = ({likes , upBtnShow , setUpBtnShow}) => {
   
    const [view , setView] = useState(false);
    return (
        <InView as="div" className="header-contener" onChange={(inView, entry) => setUpBtnShow(!inView) }>
            <h1 className = "main-header">simple and deep</h1>
            {likes.length ? <img  src={Heart} className="outline-head" onClick={()=>{setView(!view)}} alt="fav"/> : ''}
            {view ? <Like likes={likes}/> : ''}
        </InView>
    );
}

export default Header;
