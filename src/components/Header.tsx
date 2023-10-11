import './Header.css'

export default function Header() {
  return (
    <>
      <div className="topNavBar">
        <div className='leftSideNav'>
          <a className="active" href="/">Home</a>
          <a href="animals">Animals</a>
        </div>
        <div className='rightSideNav'>
          <div id='petCarrierDiv'>
            <img src="petCarrier.png" alt="pet carrier icon" id='petCarrierImg' />
          </div>

          <a href="">Account</a>
        </div>
      </div>
    </>
  )
}
