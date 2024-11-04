const Contact = () => {
  return (
    <section className="contact main-section flex-column-mobile" id="contact">
      {/* TITLE STARTS */}
      <div className="custom-title">
        {/* MAIN TITLE STARTS */}
        <h3>
          <span>
            <span className="animated-layer fade-in-left-animation fadeInUp wow">
              Get in touch
            </span>
          </span>
        </h3>
        {/* MAIN TITLE ENDS */}
      </div>
      {/* TITLE ENDS */}
      {/* CONTACTS STARTS */}
      <div className="boxes">
        <div>
          {/* CONTACT ITEM STARTS */}
          <div className="animated-layer fade-in-down-animation fadeInUp wow">

          <i className="fa fa-envelope" />
            <p>
              <span className="small-text">Email:</span>
              rmakuch@onet.pl
            </p>


          </div>
          
          {/* CONTACT ITEM ENDS */}


          {/* CONTACT ITEM STARTS */}

          <div className="animated-layer fade-in-up-animation fadeInUp wow">
            <i className="fa fa-share-nodes" />
            <span className="small-text">follow me</span>
            <ul className="social">
              <li>
                <a href="http://instagram.com/rmakuch_">
                <i class="fa-brands fa-instagram"></i>
                </a>
              </li>

              <li>
                <a href="https://www.linkedin.com/in/radoslaw-makuch/">
                <i class="fa-brands fa-linkedin"></i>
                </a>
              </li>




            </ul>
   
          </div>
         
          {/* CONTACT ITEM ENDS */}
        </div>
        <div>
          {/* CONTACT ITEM STARTS */}
         
          {/* CONTACT ITEM ENDS */}
          {/* CONTACT ITEM STARTS */}

          
          
          {/* CONTACT ITEM ENDS */}
        </div>
      </div>
      {/* CONTACTS ENDS */}
      <img
        alt=""
        className="separator hide-mobile"
        src="assets/separator.png"
      />
    </section>
  );
};
export default Contact;