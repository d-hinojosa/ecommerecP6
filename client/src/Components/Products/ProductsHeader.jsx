import React from '../../../node_modules/react';
import producthero from '../../Assets/Img/lightgold.jpg';

function Productsheader() {
    return(
    <React.Fragment>

        {/* Hero */}
        <div className="hero">
          <img src={producthero} height="250px" width="1400px" alt="gold background hero"/>
        </div>

        {/* Main Header
        Section: Products v.1  */}
        <section className="text-center my-5">

        {/* Section heading */}
        <h2 className="h1-responsive text-uppercase font-weight-bold text-center my-10 py-2">Our bestsellers</h2>

        {/* Section description */}
        <p className=" lead grey-text text-center w-responsive mx-auto mb-5 py-3 px-5">
          You might think we're all about accessories, but WONDERLUST is really about change! 
          Changing the way people look. Changing the way people feel. Changing people's futures 
          and their lives. Though our fashion-forward jewelry, WONDERLUST fulfills a serious mission. 
          We believe that trendy accessories can be available,
          and affordable, to women everywhere. We know that wearing a new look, and feeling confident 
          in your appearance, builds amazing self-worth. Our passion is inspiring dreams, empowering 
          talents, and reaching goals by sharing our products and the excitement of WONDERLUST. 
          We see it happen every day.</p>
          </section>
      </React.Fragment>
    )
}
export default Productsheader;