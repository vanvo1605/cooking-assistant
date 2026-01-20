import React, { Component } from "react";
import Header from "../../components/common/Header/Header.jsx";
import "./Home.scss";

export default class Home extends Component {
  render() {
    return (
      <div className="container">
        {/* Hero */}
        <div className="hero-summary">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/home-banner.jpg`}
            alt="Home banner"
            className="hero-summary__banner"
          />
          <Header></Header>
          <div className="hero-summary__desc">
            <p className="hero-summary__intro">
              Too tired to think? We've got you.
            </p>
            <h2 className="hero-summary__heading">
              Dinner decided in 60 seconds.
            </h2>
            <p className="hero-summary__text">
              No scrolling. No thinking. No long recipes.
            </p>
            <ul className="hero-summary__list">
              <li className="hero-summary__list-item">Tell us what you have</li>
              <li className="hero-summary__list-item">Tell us how much time</li>
              <li className="hero-summary__list-item">
                We'll tell you what to cook
              </li>
            </ul>
            <button className="btn action-btn">Decide My Dinner</button>
          </div>
        </div>

        {/* Step 1 */}
        <div className="step row row-cols-2 row-cols-sm-1">
          <div className="step-content col">
            <p className="step__number">01</p>
            <p className="step__heading">Add your ingredients</p>
            <p className="step__desc">Type what's in your fridge or pantry.</p>
          </div>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/ingredients.jpg`}
            alt="Step 1 illustration photo"
          />
        </div>

        {/* Step 2 */}
        <div className="step row row-cols-2 row-cols-sm-1">
          <img src={`${process.env.PUBLIC_URL}/assets/images/time.jpg`} alt="Step 2 illustration photo" />
          <div className="step-content col">
            <p className="step__number">02</p>
            <p className="step__heading">Choose your time</p>
            <p className="step__desc">Select how much time you have to cook.</p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="step row row-cols-2 row-cols-sm-1">
          <div className="step-content col">
            <p className="step__number">03</p>
            <p className="step__heading">Get your recipe</p>
            <p className="step__desc">
              We'll suggest a recipe you can make now.
            </p>
          </div>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/recipe.jpg`}
            alt="Step 3 illustration photo"
          />
        </div>

        {/* Contact details */}
        <div className="contact row row-cols-2 row-cols-sm-1">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/contact.jpg`}
            alt="Contact details illustration photo"
          />
          <div className="contact-content col">
            <p className="contact__heading">Contact details</p>
            <div className="row">
              <p className="contact__email col">Email Address</p>
              <p className="contact__info col">hongvant2@gmail.com</p>
            </div>
            <div className="row">
              <p className="contact__phone col">Phone Number</p>
              <p className="contact__info col">(64) 22 643 3187</p>
            </div>
          </div>
          
        </div>
      </div>
    );
  }
}
