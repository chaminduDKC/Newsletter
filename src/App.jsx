import React,{useState} from "react";
import "./App.css";
import Success from "./Success";


function App() {
  const regeEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const [email,setEmail] = useState('');
  const [validEmail,setValidEmail] = useState(true);
  const [isSuccessPageOpen,setIsSuccesspageOpen] = useState(false);

  const handleEmailChange = (e)=>{
  const inputEmail = e.target.value;
  setEmail(inputEmail);
  setValidEmail(regeEx.test(inputEmail))
        
  }

  const handleOnClick = (e) => {
    e.preventDefault();
    if(validEmail && email !== ''){
      setIsSuccesspageOpen(true)
      console.log('Form submitted');
      
    } else{
      console.log('Error occured');
      setIsSuccesspageOpen(false);
      
    }
    console.log('Clicked')
    console.log(email);
    
  }
  const handleClose = () =>{
    setIsSuccesspageOpen(false)
    setEmail('')
  }


  return ( 
     isSuccessPageOpen ? <Success name = {email} closeModal={handleClose}/> : 
   <>
    <div className="container">
      <div className="left">
        <h1 className="heading">Stay updated!</h1>
        <p className="subtitle">
          Join 60,000+ product managers receiving monthly updates on:
        </p>
        <div className="list">
          <div className="item">
            <img src="/assets/images/icon-list.svg" alt="" />
            <p className="item-text">
              Product discovery and building what matters
            </p>
          </div>
          <div className="item">
            <img src="/assets/images/icon-list.svg" alt="" />
            <p className="item-text">
              Measuring to ensure updates are a success
            </p>
          </div>
          <div className="item">
            <img src="/assets/images/icon-list.svg" alt="" />
            <p className="item-text">
              And much more!
            </p>
          </div>
        </div>
        <form action="">
          <label htmlFor="email">Email address</label>
          <input type="email" placeholder="Enter valid email" value={email}  onChange={handleEmailChange}  id="email" />
          <button type="submit" onClick={handleOnClick} >Subscribe to monthly newsletter</button>
        </form>
      </div>

      <div className="right">
        <img src="/assets/images/illustration-sign-up-desktop.svg" alt="" />
      </div>
    </div>

    
    </>
  );
}

export default App;
