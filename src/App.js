import React , {useState , useEffect}from 'react';
import {motion} from 'framer-motion'
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import Header from './components/Header';
import Popup from './components/Popup';
import Cards from './components/cards';
import Up from './back.svg';



const App = () => {
  //crate state 
  const [quotes , setQuotes] = useState([]);
  const [likes , setLikes] = useState([]);
  const [page , setPage] = useState(0);
  const [popUp , setPopUp] = useState(false);
  const [upBtnShow , setUpBtnShow] = useState(false);
  //call tha api quotes when tha page loads
  useEffect(() => {
    //call api function
    getQuotes(page);
    getDataLocaly();
  }, []);   
  
  useEffect(() => {
    setPageLocal();
    //console.log(page)
  }, [page]);   

  useEffect(()=>{
    getQuotes(page);
  },[page]);

  useEffect(() => {
    localStorage.setItem('likes' , JSON.stringify(likes)); 
  }, [likes]);

  const getDataLocaly = () => {
    const pageNumber = JSON.parse(localStorage.getItem('pageNumber'));
    if (pageNumber) setPage(pageNumber);
    const data = JSON.parse(localStorage.getItem('likes'));
    if(data) setLikes(data);
    
  }

  const setPageLocal = () => {
    localStorage.setItem('pageNumber' , JSON.stringify(page));
  }

const scrollUP = () => {
  window.scrollTo(0 ,0)
}
    const getQuotes = async (page ,perPage = 10) => {
      try {
        const quotesData = await axios(`https://type.fit/api/quotes`);
        quotesData.data.forEach(element => {
          element.imgId = getRandomImage(1,31);
          element.id = uuidv4();
          element.like = false;
        });
  
        setQuotes(quotesData.data.splice(page,perPage));
      } catch (error) {
        setPopUp(!popUp)
      }

  }

//https://simpleanddeep.netlify.app/

  const getRandomImage =  (min , max) => {
    return Math.floor(Math.random() * (max - min) + min);
  }



  return (
      <div className = "contener">
        <Header likes={likes} upBtnShow={upBtnShow} setUpBtnShow={setUpBtnShow}/>
        {popUp ? <Popup  popUp = {popUp} setPopUp={setPopUp}/> : ''}
        <Cards quotes={quotes}  setQuotes={setQuotes} page={page} sPage={setPage} getQuotes={getQuotes} likes={likes} setLikes={setLikes}/>
        {upBtnShow ? <motion.div className="btn-up"  onClick={scrollUP} 
          initial={{scale: 0}}
          animate={{scale: 1 , rotate: -360 }}
          transition={{duration: 0.5 }}
        >
          <img src={Up} alt="scroll up" />
        </motion.div> : ''}
      </div>
  );
}

export default App;