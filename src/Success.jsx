

function Success({closeModal,name}) {
    const Dismiss = () =>{
        closeModal();
      }
  return (
    <div>
      <div className="success-page">
      <img src="/assets/images/icon-success.svg" alt="" />
      <h1 className="success-heading">Thanks for subscribing!</h1>
      <p className="success-text">A confirmation email has been sent to <b>{name}</b> Please open it and click the button inside to confirm your subscription.</p>
      <button onClick={Dismiss}>Dismiss message</button>
    </div>
    </div>
  )
}

export default Success
