import "./styles.css";
const Footer = () => {
  return (
    <>
      <div className="footer-main">
        <div className="footer-links">
          <div>
            <a href="#" className="link">
              Terms
            </a>
          </div>
          <div>
            <a href="#" className="link">
              Help
            </a>
          </div>
          <div>
            <a href="#" className="link">
              Contact
            </a>
          </div>
        </div>
        <div className="copyright">
          <p className="copyright-text">© Rapid Echange</p>
        </div>
      </div>
    </>
  );
};
export default Footer;
