

const Hero = () => {
    return (
       <main className="hero container">
        <div className="h-content">
            <h1>PERFECT SMELL IS ALL YOU NEED</h1>
            <p>THE PERFECT SMELL IS ALL YOU NEED WHICH WILL LAST LONGER AND GIVES YOU THE REFRESHMENT, OUR PERFUME IS THE ALL YOU NEED. </p>
            <div className="h-btn">
              <button>Shop Now</button>
              <button className="btn-two">Category</button>
            </div>
            <div className="shopping">
                <p>Also Available on</p>
            </div>
            <div className="brand-icons">
              <img src="/images/flipkart.png"/>
              <img src="/images/amazon.png"/>

            </div>
        </div>
        <div className="h-image">
            <img src="/images/perfume.png"/>
        </div>
       </main>
    );
};

export default Hero;