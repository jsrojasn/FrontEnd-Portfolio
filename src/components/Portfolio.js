import React from 'react';
import { Link } from "react-router-dom";

const Portfolio = ()=>(
  <div className="portfolio-body">
    <div className="portfolio">
      <div className="portfolio-navbar">
        <Link className="link" to="/">&#60;About me&#62;</Link>
        <Link className="link" to="/contact">&#60;Contact&#62;</Link>
      </div>
      <h1 className="portfolio-title">&#62;_Portfolio</h1>
      <div className="project">
        <h2 className="project-title">Colombian Coffeeshop</h2>
        <div className="project-image">
          <img src="/images/coffee.jpg"></img>
        </div>
        <div className="project-info">
          <p className="project-description">Web page for one colombian Coffeeshop including the menu, gallery and location. Practice of HTML, CSS and start of JavaScript(Parallax Effect)</p>
          <p className="project-link">Github Repository:<span className="project-repository"><a href="https://github.com/jsrojasn/Project1"> Coffee</a></span></p>
          <p className="project-link">Live Demo:<span className="project-repository"><a href="https://jsrojasn.github.io/Project1/"> Coffee</a></span></p>
        </div>
      </div>

      <div className="project">
        <h2 className="project-title">Developers Blog</h2>
        <div className="project-image">
          <img src="/images/developers.jpg"></img>
        </div>
        <div className="project-info">
          <p className="project-description">A webapp with blog style for save and share memories of coding while you are learning. It was made using React with Webpack as realtime Database.</p>
          <p className="project-link">Github Repository:<span className="project-repository"><a href="https://github.com/jsrojasn/React-Dev-Blog"> My Dev Blog</a></span></p>
          <p className="project-link">Live Demo:<span className="project-repository"><a href="https://mydev-blog.herokuapp.com/"> My Dev Blog</a></span></p>
        </div>
      </div>

      <div className="project">
        <h2 className="project-title">Pagination and Search</h2>
        <div className="project-image">
          <img src="/images/pagination.jpg"></img>
        </div>
        <div className="project-info">
          <p className="project-description">A practice of create pages and buttons for a student list, it also includes search filter which results are paginate too.</p>
          <p className="project-link">Github Repository:<span className="project-repository"><a href="https://github.com/jsrojasn/Pagination-search"> Pagination</a></span></p>
          <p className="project-link">Live Demo:<span className="project-repository"><a href="https://jsrojasn.github.io/Pagination-search/"> Pagination</a></span></p>
        </div>
      </div>

      <div className="project">
        <h2 className="project-title">Employee Directory</h2>
        <div className="project-image">
          <img src="/images/directory.jpg"></img>
        </div>
        <div className="project-info">
          <p className="project-description">Directory for one startup. It was done using Ajax and Json with the API of randomuser.me for practicing this method of exchanging webdata.</p>
          <p className="project-link">Github Repository:<span className="project-repository"><a href="https://github.com/jsrojasn/Employee-directory--usingAPI"> Directory</a></span></p>
          <p className="project-link">Live Demo:<span className="project-repository"><a href="https://jsrojasn.github.io/Employee-directory--usingAPI/"> Directory</a></span></p>
        </div>
      </div>

      <div className="project">
        <h2 className="project-title">Tic-Tac-Toe</h2>
        <div className="project-image">
          <img src="/images/tictactoe.jpg"></img>
        </div>
        <div className="project-info">
          <p className="project-description">Funny Tic-Tac-Toe for two players with turns, different screens and boards for winners. It was a good practice for object oriented JavaScript.</p>
          <p className="project-link">Github Repository:<span className="project-repository"><a href="https://github.com/jsrojasn/Tic-Tac-Toe"> Tic-Tac-Toe</a></span></p>
          <p className="project-link">Live Demo:<span className="project-repository"><a href="https://jsrojasn.github.io/Tic-Tac-Toe/"> Tic-Tac-Toe</a></span></p>
        </div>
      </div>

      <div className="project">
        <h2 className="project-title">Client Side Validation</h2>
        <div className="project-image">
          <img src="/images/clientside.jpg"></img>
        </div>
        <div className="project-info">
          <p className="project-description">Complete client side validation for a complex form including DOM element behaviour, regular expression and different kind of check functions for diferent inputs.</p>
          <p className="project-link">Github Repository:<span className="project-repository"><a href="https://github.com/jsrojasn/Clientside-Validation"> Client-Side Validation</a></span></p>
          <p className="project-link">Live Demo:<span className="project-repository"><a href="https://jsrojasn.github.io/Clientside-Validation/"> Client-Side Validation</a></span></p>
        </div>
      </div>

      <div className="project">
        <h2 className="project-title">Expensify</h2>
        <div className="project-image">
          <img src="/images/expensify.jpg"></img>
        </div>
        <div className="project-info">
          <p className="project-description">React Webapp for handle your expenses. It includes authentication with google and realtime database with firebase and filters by aamount or date for your different expenses.</p>
          <p className="project-link">Github Repository:<span className="project-repository"><a href="https://github.com/jsrojasn/React-Expensify"> Expensify</a></span></p>
          <p className="project-link">Live Demo:<span className="project-repository"><a href="https://the-expensify-app-2.herokuapp.com"> Expensify</a></span></p>
        </div>
      </div>

      <div className="project">
        <h2 className="project-title">Random Quotes</h2>
        <div className="project-image">
          <img src="/images/random.jpg"></img>
        </div>
        <div className="project-info">
          <p className="project-description">A webpage that show famous random quotes to the user. The user can change the quote using a click event and every 20 second there is a new phrase</p>
          <p className="project-link">Github Repository:<span className="project-repository"><a href="https://github.com/jsrojasn/Project1"> Random Quotes</a></span></p>
          <p className="project-link">Live Demo:<span className="project-repository"><a href="https://jsrojasn.github.io/Project1/"> Random Quotes</a></span></p>
        </div>
      </div>

      
    </div>
  </div>
  
)

export default Portfolio
