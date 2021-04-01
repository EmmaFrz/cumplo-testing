import './css/Footer.css';

const Footer = ({ children }) => {
    return (
      <center>
        <footer main="true" className='footer-container'>
            {children}
        </footer>
      </center>
    );
  };
  
  export default Footer;