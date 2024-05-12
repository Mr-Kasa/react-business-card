import './App.css';
import Me from './Me.jpg';

function App() {
  return (
    <div className='container'>
      <div className="imgDiv">
        <img src={Me} alt='My selfie' className='selfieImg' />
      </div>
      <div className='contents'>
        <div>
          <h1>Buhle Kasa</h1>
          <h2>Front-End Web Developer</h2>
        </div>
        <div>
          <a href='mailto:BuhleKasa101@gmail.com'>BuhleKasa@gmail.com</a>
        </div>
        <br></br>
        <div>
          <a href='tel:0796916824'>079 691 6824</a> {/* Tel link */}
        </div>
        <div className="buttonsDiv">
          <button  className='buttons' id="linkedin-button"><a href='https://www.linkedin.com/in/buhle-kasa-3a03b0298'><i className="fa fa-linkedin-square"></i> LinkedIn</a></button>
        </div>
        <div>
          <h2 className="InfoHeadings">About</h2>
          <p>
            I am a Front-End Web Developer specializing in React, JavaScript, HTML, CSS, Tailwind CSS, Git, GitHub, and ChatGPT. With a strong foundation in these technologies, I am adept at building interactive and responsive user interfaces. I have experience integrating various UI designs and utilizing APIs to create dynamic web applications.
          </p>
          <p>
            Currently, I am actively seeking opportunities as a junior React developer where I can apply my skills and continue to grow in a collaborative environment.
          </p>
        </div>
        <div>
          <h2 className="InfoHeadings">Interests</h2>
          <p>
            I am passionate about responsive web design and enjoy the challenge of ensuring that websites function well across different devices and screen sizes. Additionally, I have a keen interest in UI integration, striving to create visually appealing and intuitive user interfaces that enhance the overall user experience.
          </p>
          <p>
            Exploring new APIs and incorporating them into my projects is something I find exciting, as it allows me to expand my skill set and create more dynamic and feature-rich applications.
          </p>
        </div>
      </div>
      <footer className='footer'>
        <a href="https://www.facebook.com/profile.php?id=100091441338542" className="footerLinks fa fa-facebook-f"></a>
        <a href="https://github.com/Mr-Kasa" className="footerLinks fa fa-github"></a>
        <a href="https://www.instagram.com/buhlelithakasa/" className="footerLinks fa fa-instagram"></a>
      </footer>
    </div>
  );
}

export default App;



