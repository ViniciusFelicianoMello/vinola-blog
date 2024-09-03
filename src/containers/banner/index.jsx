/* eslint-disable react/prop-types */
import useOnScreen from '../../config/useOnScreen';
import Button from '../../components/button'
import './banner.sass'

const Banner = ({ description }) => {
  const [isOnScreen, ref] = useOnScreen({ threshold: 0.1 });
  return (
    <section className={`banner ${isOnScreen ? 'visible' : ''}`} ref={ref}>
      <div className="banner_infos">
        <h1>
            <span className={`${isOnScreen ? 'visible' : ''}`}>Vinola</span>
            <span className={`${isOnScreen ? 'visible' : ''}`}>Verse</span>
        </h1>

        <p className={`${isOnScreen ? 'visible' : ''}`}>{description}</p>

        <div className="banner_links">
          <div className={`banner_btn ${isOnScreen ? 'visible' : ''}`}>
            <Button to="/articles">
                Ver Artigos
            </Button>
          </div>

          <div className="social_links">
            <a className={`${isOnScreen ? 'visible' : ''}`} href="https://www.instagram.com/viinifeliciano">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a className={`${isOnScreen ? 'visible' : ''}`} href="https://www.linkedin.com/in/vinicius-feliciano-mello">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a className={`${isOnScreen ? 'visible' : ''}`} href="https://github.com/ViniciusFelicianoMello">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
        
      </div>

      <div className="banner_img">
        
      </div>
    </section>
  )
}

export default Banner
