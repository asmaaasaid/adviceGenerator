import dividerDesktop from '../../assets/pattern-divider-desktop.svg'
import dividerMobile from '../../assets/pattern-divider-mobile.svg'
import dice from '../../assets/icon-dice.svg'
import ClipLoader  from "react-spinners/ClipLoader";
import {useState, useEffect, useContext} from 'react'
import { AppContext } from '../../context/AppProvider';
import AdviceButtons from '../advice-buttons/AdviceButtons'
import './Advice.css';

const Advice = () => {

  const Loader = ClipLoader.default;
  const [loading, setLoading]=useState(false);
  const { advice, setAdvice } = useContext(AppContext);

  const fetchAdvice =async ()=>{
    setLoading(true);
    try {
      const res = await fetch("https://api.adviceslip.com/advice");
      const data = await res.json();
      setAdvice(data.slip);
    }catch (error) {
      console.error('Error fetching advice:', error);
    }finally{
      setLoading(false)
    }
    
  }

  useEffect(()=>{
    fetchAdvice()
  }, [])


  return (
    <section className="container">
      <h1>advice {advice?.id} </h1>
      {loading ? (
        <p>
          <Loader color="#e8e7e7" size={30} />{" "}
        </p>
      ) : (
        <p>{advice?.advice}</p>
      )}
      <picture>
        <source media="(min-width: 768px)" srcSet={dividerDesktop} />
        <img className="pause" src={dividerMobile} alt="divider pause" />
      </picture>

      <AdviceButtons/>

      <div>
        <button className="diceBtn" onClick={fetchAdvice}>
          <img className="dice" src={dice} alt="dice icon" />
        </button>
      </div>
    </section>
  );
}

export default Advice