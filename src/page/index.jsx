import React, {useRef, useState} from "react";
import "./index.css";
import video from "../assets/videos/sample-video.mp4";


export default function Main() {

  const videoRef = useRef(null);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

    return (
        <div className="main-container">
          <div className="flex-row-ae">
            <span className="logo">LOGO</span>
            <div className="image"/>
            <div className="image-1"/>
            <div className="frame">
              <span className="home">Home</span>
              <span className="about-us">About us</span>
              <span className="product">Product</span>
            </div>
            <div className="vuesax-linear-call-calling"/>
            <div className="vuesax-linear-profile-circle"/>
            <div className="vuesax-linear-shopping-cart"/>
            <div className="buttons">
              <div className="button-primary">
                <span className="try-it-free">Login</span>
              </div>
              <button className="button-primary-2">
                <span className="try-it-free-3">Sign up</span>
              </button>
            </div>
            <span className="join-now-via-telegram">Join now via telegram</span>
          </div>
          <div className="flex-row-bc">
            <div className="mob">
              <button className="frame-4">
                <div className="image-5"/>
                <div className="frame-6">
                  <span className="rihanna">Rihanna</span>
                  <span className="m-followers">3.2M+ Followers</span>
                </div>
              </button>
              <button className="frame-7">
                <div className="group"/>
                <span className="reviews">1203 reviews (4.5)</span>
              </button>
            </div>
            <span className="connecting-influencers">
          Connecting Influencers with Brands Across the USA
        </span>
            <span className="find-the-perfect-match">
          Find the perfect match for your campaign with our trusted influencer
          network.
        </span>
            <div className="frame-8">
              <div className="image-9"/>
              <div className="frame-a">
                <span className="marques-brownlee">Marques Brownlee</span>
                <span className="m-followers-b">4.9M+ Followers</span>
              </div>
            </div>
            <div className="image-c"/>
            <div className="image-d"/>
            <div className="image-e"/>
            <button className="frame-f">
              <div className="frame-10">
                <span className="rihanna-11">Rihanna</span>
                <span className="followers">3.2M+ Followers</span>
              </div>
            </button>
            <button className="frame-12">
              <div className="frame-13">
                <span className="jacqueline-jossa">Jacqueline Jossa</span>
                <span className="followers-14">4.9M+ Followers</span>
              </div>
            </button>
            <div className="image-15"/>
            <button className="frame-16">
              <div className="frame-17">
                <span className="marques-brownlee-18">Marques Brownlee</span>
                <span className="followers-19">4.9M+ Followers</span>
              </div>
            </button>
            <div className="rectangle">
              <button className="frame-1a">
                <div className="frame-1b">
                  <span className="amanda-cerny">amanda cerny</span>
                  <span className="followers-1c">4.9M+ Followers</span>
                </div>
              </button>
            </div>
            <span className="how-it-works">How It Works</span>
          </div>
          <div className="flex-row-e">
        <span className="simple-steps">
          Simple Steps to Your Perfect Partnership
        </span>
            <div className="rectangle-1d" >
              <div className="image-1e" onClick={togglePlayPause}>
                <video
                    className="responsive-video"
                    ref={videoRef}
                    src={video}
                    autoPlay

                    loop
                    playsInline

                />
                <div className="image-1f"/>
              </div>
            </div>
          </div>
          {/*/!* Pause/Play Button *!/*/}
          {/*<div className="play-pause-button">*/}
          {/*  <button onClick={togglePlayPause} className="play-pause-btn"*/}
          {/*          aria-label={isPlaying ? "Pause video" : "Play video"}>*/}
          {/*    {isPlaying ? (*/}
          {/*        <i className="fa fa-pause"></i> // Customize this with a suitable icon*/}
          {/*    ) : (*/}
          {/*        <i className="fa fa-play"></i> // Customize this with a suitable icon*/}
          {/*    )}*/}
          {/*  </button>*/}

          {/*</div>*/}

          <div className="rectangle-20">
            <span className="plans-pricing">Plans & Pricing</span>
            <span className="no-contracts">
          Whether your time-saving automation needs are large or small, we’re
          here to help you scale.
        </span>
            <div className="flex-row-fc">
              <div className="rectangle-21">
                <div className="rectangle-22">
                  <span className="choose-plan">15:59 Min Left</span>
                </div>
                <div className="price">
                  <span className="dollar">$997</span>
                  <span className="per-year">/YEAR</span>
                </div>
                <div className="frame-23">
                  <div className="list-item">
                <span className="limited-links">
                  Multi-Niche Groups Access ( 20k+ Members ){" "}
                </span>
                    <div className="check-circle"/>
                  </div>
                  <div className="list-item-24">
                    <span className="own-analytics">Engagement Boosting</span>
                    <div className="check-circle-25"/>
                  </div>
                  <div className="list-item-26">
                    <span className="optimize-hashtags">1 To 1 Calls </span>
                    <div className="check-circle-27"/>
                  </div>
                  <div className="list-item-28">
                    <span className="unlimited-users">Dedicated Manager </span>
                    <div className="check-circle-29"/>
                  </div>
                </div>
                <button className="button">
                  <span className="choose-plan-2a">Claim Now</span>
                  <div className="rectangle-2b"/>
                </button>
                <span className="unlimited-users-2c">Growth Mentorship </span>
                <div className="check-circle-2d"/>
                <span className="unlimited-users-2e">Community Access</span>
                <div className="check-circle-2f"/>
                <span className="unlimited-users-30">Instant Post Pick-Up</span>
                <div className="check-circle-31"/>
              </div>
              <div className="no-contracts-no-sur">
            <span className="buy-1-year-get-1-year">
              Buy 1 year <br/>
              Get 1 Year{" "}
            </span>
                <span className="free">free</span>
              </div>
              <div className="rectangle-32">
                <button className="most-popular">
                  <span className="most-popular-33">MOST POPULAR</span>
                  <div className="rectangle-34"/>
                </button>
                <div className="flex-row-c">
                  <div className="button-35">
                    <button className="rectangle-36"/>
                    <span className="choose-plan-37">Choose Plan</span>
                  </div>
                  <div className="button-38">
                    <button className="rectangle-39"/>
                    <span className="choose-plan-3a">Choose Plan</span>
                  </div>
                </div>
                <div className="flex-row-d">
                  <div className="price-3b">
                    <span className="price-3c">$179 </span>
                    <span className="price-3d">/month</span>
                  </div>
                  <div className="price-3e">
                    <span className="price-3f">$99</span>
                    <span className="price-40">/month</span>
                  </div>
                </div>
                <div className="flex-row-f">
                  <div className="ellipse"/>
                  <div className="frame-41">
                    <div className="list-item-42">
                  <span className="limited-links-43">
                    5k+ Member Group Access
                  </span>
                      <div className="check-circle-44"/>
                    </div>
                    <div className="list-item-45">
                  <span className="analytics-platform">
                    Discord Community Access
                  </span>
                      <div className="check-circle-46"/>
                    </div>
                    <div className="list-item-47">
                  <span className="analytics-platform-48">
                    Weekly Live Calls{" "}
                  </span>
                      <div className="check-circle-49"/>
                    </div>
                  </div>
                  <div className="frame-4a">
                    <div className="list-item-4b">
                  <span className="limited-links-4c">
                    Multi-Niche Groups Access ( 20k+ Members ){" "}
                  </span>
                      <div className="check-circle-4d"/>
                    </div>
                    <div className="list-item-4e">
                  <span className="analytics-platform-4f">
                    Engagement Boosting
                  </span>
                      <div className="check-circle-50"/>
                    </div>
                    <div className="list-item-51">
                      <span className="optimize-hashtags-52">1 To 1 Calls </span>
                      <div className="check-circle-53"/>
                    </div>
                    <div className="list-item-54">
                      <span className="unlimited-users-55">Dedicated Manager </span>
                      <div className="check-circle-56"/>
                    </div>
                  </div>
                  <div className="frame-57"/>
                  <span className="limited-links-58">
                Multi-Niche Group Accsss{" "}
              </span>
                  <div className="check-circle-59"/>
                  <div className="frame-5a"/>
                  <div className="check-circle-5b"/>
                  <div className="frame-5c"/>
                  <div className="check-circle-5d"/>
                </div>
                <div className="flex-row-df">
                  <span className="unlimited-users-5e">Growth Mentorship </span>
                  <span className="analytics-platform-5f">1 To 1 Calls </span>
                </div>
                <div className="flex-row-fbd">
                  <span className="analytics-platform-60">Dedicated Manager</span>
                  <span className="unlimited-users-61">Community Access</span>
                </div>
                <span className="unlimited-users-62">Instant Post Pick-Up</span>
              </div>
            </div>
          </div>
          <div className="flex-row-cc">
            <div className="rectangle-63">
              <span className="trusted-view">Trusted View</span>
              <div className="flex-row-ee">
                <div className="frame-64"/>
                <div className="trustpilot-logo-text">
                  <div className="shape"/>
                  <span className="trustpilot">Trustpilot</span>
                </div>
              </div>
              <div className="frame-65">
                <div className="star-x">
                  <div className="shape-66"/>
                </div>
                <div className="star-x-67">
                  <div className="shape-68"/>
                </div>
                <div className="star-x-69">
                  <div className="shape-6a"/>
                </div>
                <div className="star-x-6b">
                  <div className="shape-6c"/>
                </div>
                <div className="star-x-6d">
                  <div className="shape-6e"/>
                </div>
              </div>
              <span className="rated">Rated 4.5/5.0</span>
              <div className="flex-row-bc-6f">
                <div className="payment-method-mastercard"/>
                <button className="payment-method-visa"/>
                <button className="payment-method-amex"/>
                <button className="payment-method-stripe"/>
                <button className="payment-method-paypal"/>
                <button className="payment-method-googlepay"/>
                <div className="frame-70"/>
              </div>
            </div>
            <div className="content">
              <div className="column">
                <div className="content-71">
                  <div className="content-72">
                    <span className="address">Address:</span>
                    <span className="address-info">
                  4140 Parker Rd. Allentown, New Mexico 31134
                </span>
                  </div>
                  <div className="content-73">
                    <span className="contact">Contact:</span>
                    <span className="contact-info">(270) 555-0117</span>
                    <span className="contact-email">info@example.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="untitled"/>
          <div className="image-74"/>
        </div>
    );
  }

