import React from '../../../node_modules/react';

function Footer() {
    return(
        <React.Fragment>
        <div className="container">
  
      {/* Social buttons */}
      <ul className="list-unstyled list-inline text-center">
        <li className="list-inline-item">
          <a className="btn-floating btn-fb mx-1">
            <i className="fab fa-facebook-f"> </i>
          </a>
        </li>
        <li className="list-inline-item">
          <a className="btn-floating btn-tw mx-1">
            <i className="fab fa-twitter"> </i>
          </a>
        </li>
        <li className="list-inline-item">
          <a className="btn-floating btn-gplus mx-1">
            <i className="fab fa-google-plus-g"> </i>
          </a>
        </li>
        <li className="list-inline-item">
          <a className="btn-floating btn-li mx-1">
            <i className="fab fa-linkedin-in"> </i>
          </a>
        </li>
        <li className="list-inline-item">
          <a className="btn-floating btn-dribbble mx-1">
            <i className="fab fa-dribbble"> </i>
          </a>
        </li>
      </ul>
     {/* Social buttons */}
  
    </div>
    <div className="footer-copyright text-center py-3 mt-2">© 2019 Copyright: Biridiana Hinojosa</div>
    <p className="footer text-center py-3">Last updated: December 4, 2019</p>
    </React.Fragment>
    )
}
export default Footer;