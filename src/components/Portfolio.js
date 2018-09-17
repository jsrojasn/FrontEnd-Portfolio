import React from 'react';
import { Link } from "react-router-dom";

const Portfolio = ()=>(
  <div className="portfolio-body">
    <div className="portfolio">
      <div className="portfolio-navbar">
        <Link className="link" to="/">&#60;About&#62;</Link>
        <Link className="link" to="/portfolio">&#60;Projects&#62;</Link>
        <Link className="link" to="/contact">&#60;Contact&#62;</Link>

      </div>
      <h1 className="portfolio-title">&#62;_Portfolio</h1>
      <div className="project">
        <a href="https://jsrojasn.github.io/Colombian-coffeeshop/">
          <h2 className="project-title">Colombian Coffeeshop</h2>
          <div className="project-image">
            <img src="/images/coffee.jpg"></img>
          </div>
        </a>
        <div className="project-info">
          <p className="project-description">Web page for one colombian Coffeeshop including the menu, gallery and location. HTML, CSS and start of JavaScript(Parallax Effect) practice.</p>
          <p className="project-link">Github Repository:<span className="project-repository"><a href="https://github.com/jsrojasn/Colombian-coffeeshop"> Coffee</a></span></p>
          <p className="project-link">Live Demo:<span className="project-repository"><a href="https://jsrojasn.github.io/Colombian-coffeeshop/"> Coffee</a></span></p>
        </div>
      </div>

      <div className="project">
        <a href="https://mydev-blog.herokuapp.com/">
          <h2 className="project-title">Developers Blog</h2>
          <div className="project-image">
            <img src="/images/developers.jpg"></img>
          </div>
        </a>
        <div className="project-info">
          <p className="project-description">Web app with blog style for save and share memories of coding while you are learning. It was made using React with Webpack as real-time Database.</p>
          <p className="project-link">Github Repository:<span className="project-repository"><a href="https://github.com/jsrojasn/React-Dev-Blog"> My Dev Blog</a></span></p>
          <p className="project-link">Live Demo:<span className="project-repository"><a href="https://mydev-blog.herokuapp.com/"> My Dev Blog</a></span></p>
        </div>
      </div>

      <div className="project">
        <a href="https://jsrojasn.github.io/Pagination-search/">
          <h2 className="project-title">Pagination and Search</h2>
          <div className="project-image">
            <img src="/images/pagination.jpg"></img>
          </div>
        </a>
        <div className="project-info">
          <p className="project-description">The Practice of creating pages and buttons for a student list, it also includes a search filter which results are paginated too.</p>
          <p className="project-link">Github Repository:<span className="project-repository"><a href="https://github.com/jsrojasn/Pagination-search"> Pagination</a></span></p>
          <p className="project-link">Live Demo:<span className="project-repository"><a href="https://jsrojasn.github.io/Pagination-search/"> Pagination</a></span></p>
        </div>
      </div>

      <div className="project">
        <a href="https://jsrojasn.github.io/Employee-directory--usingAPI/">
          <h2 className="project-title">Employee Directory</h2>
          <div className="project-image">
            <img src="/images/directory.jpg"></img>
          </div>
        </a>
        <div className="project-info">
          <p className="project-description">Directory for one startup. It was done using Ajax and JSON with the API of randomuser.me for practicing this method of exchanging web data.</p>
          <p className="project-link">Github Repository:<span className="project-repository"><a href="https://github.com/jsrojasn/Employee-directory--usingAPI"> Directory</a></span></p>
          <p className="project-link">Live Demo:<span className="project-repository"><a href="https://jsrojasn.github.io/Employee-directory--usingAPI/"> Directory</a></span></p>
        </div>
      </div>

      <div className="project">
        <a href="https://jsrojasn.github.io/Tic-Tac-Toe/">
          <h2 className="project-title">Tic-Tac-Toe</h2>
          <div className="project-image">
            <img src="/images/tictactoe.jpg"></img>
          </div>
        </a>
        <div className="project-info">
          <p className="project-description">Funny Tic-Tac-Toe for two players with turns, different screens and boards for winners. It was a good practice for object-oriented JavaScript.</p>
          <p className="project-link">Github Repository:<span className="project-repository"><a href="https://github.com/jsrojasn/Tic-Tac-Toe"> Tic-Tac-Toe</a></span></p>
          <p className="project-link">Live Demo:<span className="project-repository"><a href="https://jsrojasn.github.io/Tic-Tac-Toe/"> Tic-Tac-Toe</a></span></p>
        </div>
      </div>

      <div className="project">
        <a href="https://fullstackform-validation.herokuapp.com">
          <h2 className="project-title">Client Side Validation</h2>
          <div className="project-image">
            <img src="/images/clientside.jpg"></img>
          </div>
        </a>
        <div className="project-info">
          <p className="project-description">Complete client side validation for a complex form including DOM element behavior, regular expression and different kind of check functions for different inputs.</p>
          <p className="project-link">Github Repository:<span className="project-repository"><a href="https://github.com/jsrojasn/Clientside-Validation"> Client-Side Validation</a></span></p>
          <p className="project-link">Live Demo:<span className="project-repository"><a href="https://fullstackform-validation.herokuapp.com/index.html"> Client-Side Validation</a></span></p>
        </div>
      </div>

      <div className="project">
        <a href="https://the-expensify-app-2.herokuapp.com">
          <h2 className="project-title">Expensify</h2>
          <div className="project-image">
            <img src="/images/expensify.jpg"></img>
          </div>
        </a>
        <div className="project-info">
          <p className="project-description">React Web app to handle your expenses. It includes authentication with Google and real-time database with firebase and filters by amount or date for your different expenses.</p>
          <p className="project-link">Github Repository:<span className="project-repository"><a href="https://github.com/jsrojasn/React-Expensify"> Expensify</a></span></p>
          <p className="project-link">Live Demo:<span className="project-repository"><a href="https://the-expensify-app-2.herokuapp.com"> Expensify</a></span></p>
        </div>
      </div>

      <div className="project">
        <a href="https://jsrojasn.github.io/Project1/">
          <h2 className="project-title">Random Quotes</h2>
          <div className="project-image">
            <img src="/images/random.jpg"></img>
          </div>
        </a>
        <div className="project-info">
          <p className="project-description">Web page that shows famous random quotes to the user. The user can change the quote using a click event and every 20 seconds there is a new phrase.</p>
          <p className="project-link">Github Repository:<span className="project-repository"><a href="https://github.com/jsrojasn/Project1"> Random Quotes</a></span></p>
          <p className="project-link">Live Demo:<span className="project-repository"><a href="https://jsrojasn.github.io/Project1/"> Random Quotes</a></span></p>
        </div>
      </div>

      
    </div>
  </div>
  
)

export default Portfolio
