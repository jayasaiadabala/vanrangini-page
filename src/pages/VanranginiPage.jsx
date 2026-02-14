import Header from "../components/Header";
import About from "../components/About";
import "../styles/VanranginiPage.css";
import bannerImage from "../assets/images/vanranginibanner.png";
import ornment1 from "../assets/images/ornment1.png";
import ornment2 from "../assets/images/ornment2.png";
import vanranginiStones from "../assets/images/vanranginistones.png";
import necklace from "../assets/images/necklaces.png";
import rings from "../assets/images/rings.png";
import bangles from "../assets/images/bangles.png";

export default function VanranginiPage() {

  return (
    <>
      <Header />

      <div className="landPage">
        <div className="banner">
          <img className="bannerimg" src={bannerImage} alt="Vanrangini Banner" />
        </div>

        <div className="cloud1"></div>
        <div className="cloud2"></div>
        <div className="cloud3"></div>

        <div className="story">
          <div className="storydata">
            <div className="ornmentcon">
              <div className="ornmentcon1">
              <img src={ornment1} alt="vanranginistones" className="ornment1" />
              <p>Skies of Splendour</p>
            </div>
            <div className="ornmentcon2">
              <img src={ornment2} alt="vanranginistones" className="ornment2" />
              <p>Golden Tapestry</p>
            </div>
            </div>


            <h1>Story</h1>
            <p>
              Born from the heart of the forest, Vanrangini is a mystical being who embodies the spirit of nature. <br /> 
              Vanrangini captures the untamed beauty of nature in exquistie of gold.
            </p>
          </div>
        </div>

        <div className="cloud4"></div>
        <div className="cloud5"></div>
        <div className="cloud6"></div>

        <div className="stones">
          <img src={vanranginiStones} alt="vanranginistones" className="stonesimg" />
          <div className="stonesdata">
            <h1>Astrology</h1> <br />
            <p>
              Wearing Navratna gemstones is believed to bring balance, prosperity, and positive energy into your life. Each of the nine precious stones represents a celestial body and influences different aspects of health, wealth, and relationships. Choosing the right Navratna ring or jewelry according to your horoscope can enhance well-being, strengthen personal energies, and protect you from negative influences. Crafted with care and precision, these rings not only carry astrological significance but also add elegance and charm to your everyday style.
            </p>
          </div>
        </div>

        <div className="cloud7"></div>
        <div className="cloud8"></div>
        <div className="cloud9"></div>

        <div className="catgories">

          <div className="categoriesdata">
            <h1>Realms of Essence <br />Timeless Wonder</h1>
            <p>Where towering domes and palaces of brilliance rise in deep of the forests. </p>
          </div>

          <div className="categoriescon">
            <div className="catgory">
              <img src={necklace} alt="necklaces" className="catgoryimg" />
              <h2>Necklaces</h2>
              <p>Strings of Brilliance</p>
            </div>
            <div className="catgory">
              <img src={rings} alt="rings" className="catgoryimg" />
              <h2>Rings</h2>
              <p>Circles of Enchantment</p>
            </div>
            <div className="catgory">
              <img src={bangles} alt="bangles" className="catgoryimg" />
              <h2>Bangles</h2>
              <p>Embracing Elegance</p>
            </div>
          </div>
        </div>
      </div>
      <About/>
    </>
  );
}