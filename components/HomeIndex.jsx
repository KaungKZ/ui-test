"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { useWindowScrollPositions } from "./helpers/useWindowScrollPositions";
import LogoInfiniteSlider from "./LogoInfiniteSlider";

export default function HomeIndex() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [vdPlay, setVdplay] = useState(true);
  const { scrollX, scrollY } = useWindowScrollPositions();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      <div
        className="banner parallax-container"
        style={{
          background: "#000",
        }}
      >
        <div className="banner-vd-player">
          {isLoaded ? (
            <ReactPlayer
              url="/assets/videos/video.mp4"
              playing={vdPlay}
              muted
              loop
            />
          ) : null}
          {vdPlay ? (
            <button
              className="pause-icon"
              onClick={() => setVdplay(false)}
            ></button>
          ) : (
            <button
              className="play-icon"
              onClick={() => setVdplay(true)}
            ></button>
          )}
        </div>
        <div
          className="banner__black-screen"
          style={{
            opacity: scrollY / 200,
          }}
        ></div>
        <div className="parallax-content" style={{ height: "100vh" }}>
          <div
            className="section-content xl-expanded"
            style={{
              opacity: 1 - scrollY / 75,
            }}
          >
            <div className="headlines">
              <h1>All Apple Originals</h1>
              <h1>Only on Apple Tv+.</h1>
            </div>
            <div className="banner__link-wrapper">
              <Link className="p2-regular-17 banner__link" href="/sub">
                Stream Now
              </Link>
            </div>
          </div>
        </div>
        <div className="parallax-content">
          <div
            className={`section-content xl-expanded custom-fade-in ${
              scrollY > 100 ? "fade-in-up" : "opacity-0"
            }`}
          >
            <div className="headlines">
              <h2>New Apple Originals Every Month.</h2>
              <h2
                style={{
                  marginTop: 64,
                }}
              >
                Stream on the Apple TV app on Apple devices, smart TVs,
                consoles, or sticks.
              </h2>
              <h2
                style={{
                  marginTop: 64,
                }}
              >
                Share Apple TV+ with your family.
              </h2>
            </div>
            <div className="banner__link-wrapper">
              <Link className="p2-regular-17 banner__link" href="/sub">
                Stream Now
              </Link>
            </div>
            <div className="plans ">
              <div className="plan">
                <h4>Buy an Apple device</h4>
                <h3 className="plan__title">3 months free.</h3>
                <span className="p2-regular-17 plan__description" style={{}}>
                  Apple TV+ is included for 3 months when you purchase an Apple
                  device and redeem the offer within 90 days.1
                </span>
                <Link href="/sub" className="plan__link">
                  Check eligilibility
                </Link>
              </div>
              <div className="plan">
                <h4>Buy an Apple device</h4>
                <h3 className="plan__title">3 months free.</h3>
                <span className="p2-regular-17 plan__description" style={{}}>
                  Apple TV+ is included for 3 months when you purchase an Apple
                  device and redeem the offer within 90 days.1
                </span>
                <Link href="/sub" className="plan__link">
                  Check eligilibility
                </Link>
              </div>
              <div className="plan">
                <h4>Buy an Apple device</h4>
                <h3 className="plan__title">3 months free.</h3>
                <span className="p2-regular-17 plan__description" style={{}}>
                  Apple TV+ is included for 3 months when you purchase an Apple
                  device and redeem the offer within 90 days.1
                </span>
                <Link href="/sub" className="plan__link">
                  Check eligilibility
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-show">
        <LogoInfiniteSlider />
      </div>
    </>
  );
}
