import Navbar from '../Navigation/NavBar.jsx'

function LandingPage() {
  return (
    <div className='LandingPageBox'>
      <div className='LandigPageInitials'>
        <h1 className='Name'>Patryk Mansfeld - Fullstack Developer パトリック</h1>
      </div>
      <div className='LandingPageNavigation'>
        <Navbar />
      </div>
      {/* <div className="container">
      <div className="circle"></div>
    </div> */}
    </div>
  )
}

export default LandingPage