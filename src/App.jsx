import './style.css';
import logo from './assets/FASTRACK-Logo-Black.png'
import search from './assets/search.svg'
import profile from './assets/profile.svg'
import heart from './assets/heart.svg'
import bag from './assets/bag.svg'
import trackOrder from './assets/trackOrder.svg'
import location from './assets/location.svg'
import img7 from './assets/img7.png'
import img1 from './assets/img1.png'
import img2 from './assets/img2.png'
import img3 from './assets/img3.png'
import img4 from './assets/img4.png'
import img5 from './assets/img5.png'
import img6 from './assets/img6.png'
import p1 from './assets/p1.png'
import p2 from './assets/p2.png'
import p3 from './assets/p3.png'
import p4 from './assets/p4.png'
import newposter from './assets/newposter.png'
import dot from './assets/dot-small-svgrepo-com.svg'

function App() {

  return (
    <>



      <div className="navbar" >
      <div className='logodiv'>
        <img className='logo' src={logo} alt=""  />
      </div>
      <div className="navcenter">
        <span className="WATCHES">WATCHES</span>
        <span className="SMART">SMART WATCHES</span>
        <span>REFLEX TUNES</span>
        <span>SALE</span>
        <span>GIFTING</span>
        <span>ACCESSORIES</span>
        <span>MORE</span>
      </div>
      <div className="icons" >
      <img className="icon1" src={search} alt="" />
      <img className="icon1" src={profile} alt="" />
      <img className="icon1" src={heart} alt="" />
        <img className="icon1" src={bag} alt="" />
          <img className="icon1" src={trackOrder} alt="" />
          </div>
        </div>

        <div className="navbar2">
            <div className="innavbar">
                <div>
                    <img src={location} alt="" />
                </div>
                <div>
                    <p>Select a location to cheak product availability</p>
                </div>
                <div>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;Add Location</span>
                </div>
            </div>
        </div>

        <section className="img-slider">
            <div className="slider-container">
                <div className="slide">
                    <img src={img1} alt="Image 1" />
                </div>
                <div className="slide">
                    <img src={img2} alt="Image 2" />
                </div>
                <div className="slide">
                    <img src={img3} alt="Image 3" />
                </div>
                <div className="slide">
                    <img src={img4} alt="Image 4" />
                </div>
                <div className="slide">
                    <img src={img5} alt="Image 5" />
                </div>
                <div className="slide">
                    <img src={img6} alt="Image 6" />
                </div>
                <div className="slide">
                    <img src={img7} alt="Image 7" />
                </div>
            </div>
        </section>

        <div className="main">
            <div className="main1">
                <div className="p1">
                    <img style={{borderRadius: "15px",height: "400px"}} src={p1} alt="" />
                </div>
                <div className="p2">
                    <img style={{borderRadius: "15px",height: "400px"}} src={p2} alt="" />
                </div>
                <div className="p3">
                    <img style={{borderRadius: "15px",height: "400px"}} src={p3} alt="" />
                </div>
                <div className="p4">
                    <img style={{borderRadius: "15px",height: "400px"}} src={p4} alt="" />
                </div>
            </div>
            <h1 className="FASTRACKCATEGORIES">FASTRACK CATEGORIES</h1>
        </div>

        <div style={{display: "flex",justifyContent: "center",paddingTop: "10px",paddingBottom: "80px"}}>
            <img src={newposter} alt="" style={{borderRadius: "12px", width: "90%"}}/>
        </div>

        <div>
            <p style={{ backgroundColor: "black", color: "white", display: "flex", alignItems: "center",height: "30px"}}><img
                    src={dot} alt=""/>TRENDING<img src={dot}
                    alt=""/>TRENDING<img src={dot} alt=""/>TRENDING<img
                    src={dot} alt=""/>TRENDING<img src={dot}
                    alt=""/>TRENDING<img src={dot} alt=""/>TRENDING<img
                    src={dot} alt=""/>TRENDING<img src={dot}
                    alt=""/>TRENDING<img src={dot} alt=""/>TRENDING<img
                    src={dot} alt=""/>TRENDING</p>
        </div>

        <div className="TRENDING">
            <h2>TRENDING</h2>
        </div>












      </>
      )
}

      export default App
