import './App.css';

function App() {
  return (
    <div className='container'>
      <div>
        <img src='https://c8.alamy.com/comp/P84DGT/cartoon-of-man-with-artificial-smile-taking-selfie-P84DGT.jpg' alt='My selfie' className='selfieImg' />
      </div>
      <div>
        <h1>Buhle Kasa</h1>
        <h2>Front-End Web Developer</h2>
      </div>
      <div>
        <a href='mailto:BuhleKasa@gmail.com'>BuhleKasa@gmail.com</a>
      </div>
      <div>
        <button className='buttons'>✉️ Email</button>
        <button className='buttons'><i className="fa fa-linkedin-square"></i> LinkedIn</button>
      </div>
      <div>
        <h2 className="InfoHeadings">About</h2>
        <p>I am a Front-End Developer with an interest in working with APIs and many other JavaScript and React features.</p>
      </div>
      <div>
        <h2 className="InfoHeadings">Interests</h2>
        <p>I am a Front-End Developer with an interest in working with APIs and many other JavaScript and React features.</p>
      </div>
      <footer className='footer'>
        <a href="#" className="footerLinks fa fa-facebook-f"></a>
        <a href="#" className="footerLinks fa fa-github"></a>
        <a href="#" className="footerLinks fa fa-instagram"></a>
      </footer>
    </div>
  );
}

export default App;
