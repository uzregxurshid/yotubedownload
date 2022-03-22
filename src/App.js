import './components/scss/main.scss';
import hamburgerButton from './components/images/navbar/hamburger_button.svg';
import sitelogo from './components/images/navbar/logo_hamburger.svg';
import menuClose from './components/images/navbar/Menu-Close_MD.svg';
import Github from './components/images/navbar/Github.svg';
import Reddit from './components/images/navbar/Reddit.svg';
import Youtube from './components/images/navbar/youtube.svg';
import NavbarLogo from './components/images/navbar/logo_hamburger.svg';
import ArrowDown from './components/images/url/Arrow-Chevron_Down.svg';
import GuideImage1 from './components/images/guide/image2.jpg';
import GuideImage2 from './components/images/guide/image3.jpg';
import GuideImage3 from './components/images/guide/image4.jpg';
import Download from './components/images/result/Interface-Download.svg';
import { useRef, useState } from 'react';
import axios from 'axios';

// https://www.youtube.com/watch?v=DfY0C57b0bE


const App = () => {
  const finall = useRef(null);
  const [open, setOpen] = useState(false);
  const [formClass, setFormClass] = useState(false);
  const handleOpen = () => { setOpen(!open); };
  const handleClose = (e) => { e.target === e.currentTarget && setOpen(!open); };
  const handleCloser = () => { setOpen(!open); };
  const handleForm = (e) => {
    setFormClass(!formClass);
  };
  const [result, setResult] = useState([]);
  const [url, setUrl] = useState('');
  const handleInput = (e) => {
    setError(false);
    setUrl(e.target.value);
  };

  const [error,setError] = useState('');

  const handleFetch = (e) => {
    e.preventDefault();
    axios.get(`https://serverofclient.herokuapp.com?url=${url}`)
    .then((response) => {
      console.log(response.data.data);
      if(response.data.status === 'error') {
        setError(response.data.message);
      }
      else {
        setResult(response.data.data);
        // focus on the result section
        finall.current.scrollIntoView({ behavior: 'smooth' });
      }
    })
    .catch((error) => {
      setError(!error);
    });
  }

  const Calculate=(lastResult)=>{
    return (lastResult.width*lastResult.height*lastResult.fps*lastResult.bitrate*((lastResult.approxDurationMs-0)/232460731789459000)).toFixed(3).toString() + " +- 10%"
  }


  return (
    <>
      <header>
        {/* <!-- Navbar --> */}
        <nav className="nav">
          <div className="container">
            <div className="nav__container">
              <div className="nav__left">

                {/* <!-- hamburger button --> */}
                <div className="nav__hamburger">
                  <button className="nav__hamburger--button" type="button" aria-label="hamburger button" aria-hidden="true" onClick={handleOpen}>
                    <img className="nav__hamburger--image" src={hamburgerButton} alt="hamburger" />
                  </button>
                </div>

                {/* <!-- A container for the menu. --> */}
                <div className={`nav__bar ${open && ('nav__bar--show')}`} onClick={handleClose}>
                  <div className="nav__menu">
                    <div className="nav__menu--top">
                      <div className="nav__menu--logo">
                        <a href="/">
                          <img className="nav__menu--logo--image" width="127" height="29"
                            src={sitelogo} alt="logo" />
                        </a>
                      </div>
                      <div className="nav__menu--close">
                        <button className="nav__menu--button" type="button" aria-label="close menu" aria-hidden="true" onClick={handleCloser}>
                          <img className="nav__menu--image" src={menuClose} alt="close" />
                        </button>
                      </div>
                    </div>
                    {/* <!-- Language selector --> */}
                    <div className="nav__menu--language">
                      <select className="nav__language">

                        <option value="en">English</option>
                        <option value="ru">Русский</option>
                      </select>
                    </div>

                    {/* <!-- A list of links. --> */}
                    <ul className="nav__menu--list">
                      <li className="nav__menu--item">
                        <a className="nav__menu--link" href={'/'}>Contacts</a>
                      </li>
                      <li className="nav__menu--item">
                        <a className="nav__menu--link" href={'/'}>Terms of Service</a>
                      </li>
                      <li className="nav__menu--item">
                        <a className="nav__menu--link" href={'/'}>Privacy Policy</a>
                      </li>
                    </ul>

                    {/* <!-- Social list --> */}
                    <div className="nav__menu--social nav__social">
                      <ul className="nav__social--list">
                        <li className="nav__social--item">
                          <a className="nav__social--link" href={'/'}>
                            <img className="nav__social--image" src={Github} alt="Github" />
                            <span className="nav__social--text">Github</span>
                          </a>
                        </li>
                        <li className="nav__social--item">
                          <a className="nav__social--link" href={'/'}>
                            <img className="nav__social--image" src={Youtube} alt="Youtube" />
                            <span className="nav__social--text">Youtube</span>
                          </a>
                        </li>
                        <li className="nav__social--item">
                          <a className="nav__social--link" href={'/'}>
                            <img className="nav__social--image" src={Reddit} alt="Reddit" />
                            <span className="nav__social--text">Reddit</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="nav__center">

                {/* <!-- Add logotype --> */}
                <a href="index.html" className="nav__logotype">
                  <img className="nav__logotype--image" src={NavbarLogo} width="1/* It's a number of
                  the last element in
                  the array. */
                  74" height="35" alt="logotype" />
                </a>
              </div>
              <div className="nav__right">

                {/* <!-- Language selector --> */}
                <select className="nav__language">
                  <option value="en">English</option>
                  <option value="ru">Русский</option>
                </select>

              </div>
            </div>
          </div>
        </nav>
      </header>
      <main>

        {/* <!-- url section --> */}
        <section>
          <div className="url">
            <div className="container">
              <div className="url__container">

                {/* <!-- A header and a description of the service. --> */}
                <h1 className="url__header">
                  Yotube Video Download
                </h1>
                <p className="url__define">
                  Free. Fast. All devices
                </p>

                {/* <!-- A form that allows you to enter a URL and download it. --> */}
                <form className={`url__form ${formClass&&('url__hover')}`}  onSubmit={handleFetch}>
                  <input className="url__input" type="search" name="tiktok" id="tiktok"
                    placeholder="Paste TikTok video link here" onFocus={handleForm} value={url} onInput={handleInput}/>
                  <button className="url__button" type="button" onClick={handleFetch}>Download &darr;</button>
                  {/* error text */}
                </form>
                <p className="url__error">{error}</p>

                {/* <!-- A button that opens the instructions. --> */}
                <button type="button" className="url__howto">
                  <span className="url_howto--info">&#x24D8;</span>
                  <span className="url__howto--text">How to start?</span>
                  <img className="url__howto--down--image" src={ArrowDown} alt="down" />
                </button>

                {/* <!-- For google adsense --> */}
                <div className="url__adsense">
                  This ads
                </div>
              </div>
            </div>
          </div>
        </section>


        <section>
          <div className="guide">
            <div className="container">
              <div className="guide__container">
                <h2 className="guide__header">
                  How to start Tik Tok video download with our service?
                </h2>

                <p className="guide__abs">
                  How to start Tik Tok video download with our service?
                </p>
                <p className="guide__define">
                  To save TikTok video using SaveFrom.net, you need to follow three short steps. Have a look at them:
                </p>

                <ul className="guide__list">
                  <li className="guide__card">
                    <div className="guide__card--images">
                      <img src={GuideImage1} alt="guide" className="guide__card--image" />
                    </div>
                    <h3 className="guide__card--header">
                      1. Copy the URL
                    </h3>
                    <p className="guide__card--text">
                      Open the Tik Tok page with a video that you want to save, copy its URL and go back to SaveFrom.net.
                    </p>
                  </li>
                  <li className="guide__card">
                    <div className="guide__card--images">
                      <img src={GuideImage2} alt="guide" className="guide__card--image" />
                    </div>
                    <h3 className="guide__card--header">
                      2. Paste the URL into the input field
                    </h3>
                    <p className="guide__card--text">
                      Paste the URL of the into the input field of the top of the page and click on the right side the
                      button to run the downloading process.
                    </p>
                  </li>
                  <li className="guide__card">
                    <div className="guide__card--images">
                      <img src={GuideImage3} alt="guide" className="guide__card--image" />
                    </div>
                    <h3 className="guide__card--header">
                      3. Click the download button
                    </h3>
                    <p className="guide__card--text">
                      To notice that by default the best quality will be selected but if you would like a specific quality
                      or format, there are several options you can choose from.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

      {
        result&&(
          <section ref={finall}>
          <div className="result">
            <div className="container">
              <div className="result__container">
                <p className="result__text">
                  Short video description
                </p>
                <ul className="result__list">
                 {
                   result.map((item, index)=>{
                     return (
                      <li className="result__item" key={index}>
                      <a className="result__items" href={item.url}>
                        <div className="result__items--left">
                          <img src={Download} alt="Download" />
                        </div>
                        <div className="result__items--center">
                          <span>{item.container}</span>
                          <span style={{margin:"0 10px"}}>{item.contentLength?((item.contentLength-0)/1024/1024).toFixed(3):(Calculate(item))}  MB</span>
                          <span>{item.qualityLabel?item.qualityLabel:"audio"}</span>
                        </div>
                        <div className="result__items--right">
                        </div>
                      </a>
                      </li>
                     )
                    })
                 }
                  
                </ul>
              </div>
            </div>
          </div>
        </section>
        )
      }
      </main>
    </>
  );
}

export default App;
