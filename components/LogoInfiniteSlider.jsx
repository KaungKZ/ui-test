import Image from "next/image";
import Link from "next/link";
import React from "react";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function LogoInfiniteSlider() {
  const slideDataRoll1 = [
    {
      id: 1,
      img_url: "https://picsum.photos/380/220",
      link: "https://www.crowdfundinsider.com/2015/06/69950-hongsin-kwek-ceo-and-founder-of-phoenixict-talks-crowdfunding-in-asia-female-entrepreneurs/",
    },
    {
      id: 2,
      img_url: "https://picsum.photos/380/220",
      link: "https://www.dealstreetasia.com/stories/thailand-sinwattana-funding-114172",
    },
    {
      id: 3,
      img_url: "https://picsum.photos/380/220",
      link: "https://www.thnk.org/community/people/hong-sin-kwek/",
    },
    {
      id: 4,
      img_url: "https://picsum.photos/380/220",
      link: "https://president.ac.id/article/1129-the-importance-of-innovation-and-crowdfunding-for-",
    },
    {
      id: 5,
      img_url: "https://picsum.photos/380/220",
      link: "https://hbsp.harvard.edu/product/SMU988-PDF-ENG?Ntt=Sinwattana",
    },
    {
      id: 6,
      img_url: "https://picsum.photos/380/220",
      link: "https://www.crowdfundinsider.com/2015/06/69950-hongsin-kwek-ceo-and-founder-of-phoenixict-talks-crowdfunding-in-asia-female-entrepreneurs/",
    },
    {
      id: 7,
      img_url: "https://picsum.photos/380/220",
      link: "https://www.dealstreetasia.com/stories/thailand-sinwattana-funding-114172",
    },
    {
      id: 8,
      img_url: "https://picsum.photos/380/220",
      link: "https://www.thnk.org/community/people/hong-sin-kwek/",
    },
    {
      id: 9,
      img_url: "https://picsum.photos/380/220",
      link: "https://president.ac.id/article/1129-the-importance-of-innovation-and-crowdfunding-for-",
    },
    {
      id: 10,
      img_url: "https://picsum.photos/380/220",
      link: "https://hbsp.harvard.edu/product/SMU988-PDF-ENG?Ntt=Sinwattana",
    },
    {
      id: 11,
      img_url: "https://picsum.photos/380/220",
      link: "https://hbsp.harvard.edu/product/SMU988-PDF-ENG?Ntt=Sinwattana",
      havepad: true,
    },
    {
      id: 12,
      img_url: "https://picsum.photos/380/220",
      link: "https://www.crowdfundinsider.com/2015/06/69950-hongsin-kwek-ceo-and-founder-of-phoenixict-talks-crowdfunding-in-asia-female-entrepreneurs/",
    },
    {
      id: 13,
      img_url: "https://picsum.photos/380/220",
      link: "https://www.dealstreetasia.com/stories/thailand-sinwattana-funding-114172",
    },
    {
      id: 14,
      img_url: "https://picsum.photos/380/220",
      link: "https://www.thnk.org/community/people/hong-sin-kwek/",
    },
    {
      id: 15,
      img_url: "https://picsum.photos/380/220",
      link: "https://president.ac.id/article/1129-the-importance-of-innovation-and-crowdfunding-for-",
    },
    {
      id: 16,
      img_url: "https://picsum.photos/380/220",
      link: "https://hbsp.harvard.edu/product/SMU988-PDF-ENG?Ntt=Sinwattana",
    },
    {
      id: 17,
      img_url: "https://picsum.photos/380/220",
      link: "https://www.crowdfundinsider.com/2015/06/69950-hongsin-kwek-ceo-and-founder-of-phoenixict-talks-crowdfunding-in-asia-female-entrepreneurs/",
    },
    {
      id: 18,
      img_url: "https://picsum.photos/380/220",
      link: "https://www.dealstreetasia.com/stories/thailand-sinwattana-funding-114172",
    },
    {
      id: 19,
      img_url: "https://picsum.photos/380/220",
      link: "https://www.thnk.org/community/people/hong-sin-kwek/",
    },
    {
      id: 20,
      img_url: "https://picsum.photos/380/220",
      link: "https://president.ac.id/article/1129-the-importance-of-innovation-and-crowdfunding-for-",
    },
    {
      id: 21,
      img_url: "https://picsum.photos/380/220",
      link: "https://hbsp.harvard.edu/product/SMU988-PDF-ENG?Ntt=Sinwattana",
    },
    {
      id: 22,
      img_url: "https://picsum.photos/380/220",
      link: "https://hbsp.harvard.edu/product/SMU988-PDF-ENG?Ntt=Sinwattana",
      havepad: true,
    },
  ];

  const slideDataRoll2 = [
    {
      id: 1,
      img_url: "https://picsum.photos/380/220",
      link: "https://www.crowdfundinsider.com/2015/06/69950-hongsin-kwek-ceo-and-founder-of-phoenixict-talks-crowdfunding-in-asia-female-entrepreneurs/",
    },
    {
      id: 2,
      img_url: "https://picsum.photos/380/220",
      link: "https://www.dealstreetasia.com/stories/thailand-sinwattana-funding-114172",
    },
    {
      id: 3,
      img_url: "https://picsum.photos/380/220",
      link: "https://www.thnk.org/community/people/hong-sin-kwek/",
    },
    {
      id: 4,
      img_url: "https://picsum.photos/380/220",
      link: "https://president.ac.id/article/1129-the-importance-of-innovation-and-crowdfunding-for-",
    },
    {
      id: 5,
      img_url: "https://picsum.photos/380/220",
      link: "https://hbsp.harvard.edu/product/SMU988-PDF-ENG?Ntt=Sinwattana",
    },
    {
      id: 6,
      img_url: "https://picsum.photos/380/220",
      link: "https://www.crowdfundinsider.com/2015/06/69950-hongsin-kwek-ceo-and-founder-of-phoenixict-talks-crowdfunding-in-asia-female-entrepreneurs/",
    },
    {
      id: 7,
      img_url: "https://picsum.photos/380/220",
      link: "https://www.dealstreetasia.com/stories/thailand-sinwattana-funding-114172",
    },
    {
      id: 8,
      img_url: "https://picsum.photos/380/220",
      link: "https://www.thnk.org/community/people/hong-sin-kwek/",
    },
    {
      id: 9,
      img_url: "https://picsum.photos/380/220",
      link: "https://president.ac.id/article/1129-the-importance-of-innovation-and-crowdfunding-for-",
    },
    {
      id: 10,
      img_url: "https://picsum.photos/380/220",
      link: "https://hbsp.harvard.edu/product/SMU988-PDF-ENG?Ntt=Sinwattana",
    },
    {
      id: 11,
      img_url: "https://picsum.photos/380/220",
      link: "https://hbsp.harvard.edu/product/SMU988-PDF-ENG?Ntt=Sinwattana",
      havepad: true,
    },
    {
      id: 12,
      img_url: "https://picsum.photos/380/220",
      link: "https://www.crowdfundinsider.com/2015/06/69950-hongsin-kwek-ceo-and-founder-of-phoenixict-talks-crowdfunding-in-asia-female-entrepreneurs/",
    },
    {
      id: 13,
      img_url: "https://picsum.photos/380/220",
      link: "https://www.dealstreetasia.com/stories/thailand-sinwattana-funding-114172",
    },
    {
      id: 14,
      img_url: "https://picsum.photos/380/220",
      link: "https://www.thnk.org/community/people/hong-sin-kwek/",
    },
    {
      id: 15,
      img_url: "https://picsum.photos/380/220",
      link: "https://president.ac.id/article/1129-the-importance-of-innovation-and-crowdfunding-for-",
    },
    {
      id: 16,
      img_url: "https://picsum.photos/380/220",
      link: "https://hbsp.harvard.edu/product/SMU988-PDF-ENG?Ntt=Sinwattana",
    },
    {
      id: 17,
      img_url: "https://picsum.photos/380/220",
      link: "https://www.crowdfundinsider.com/2015/06/69950-hongsin-kwek-ceo-and-founder-of-phoenixict-talks-crowdfunding-in-asia-female-entrepreneurs/",
    },
    {
      id: 18,
      img_url: "https://picsum.photos/380/220",
      link: "https://www.dealstreetasia.com/stories/thailand-sinwattana-funding-114172",
    },
    {
      id: 19,
      img_url: "https://picsum.photos/380/220",
      link: "https://www.thnk.org/community/people/hong-sin-kwek/",
    },
    {
      id: 20,
      img_url: "https://picsum.photos/380/220",
      link: "https://president.ac.id/article/1129-the-importance-of-innovation-and-crowdfunding-for-",
    },
    {
      id: 21,
      img_url: "https://picsum.photos/380/220",
      link: "https://hbsp.harvard.edu/product/SMU988-PDF-ENG?Ntt=Sinwattana",
    },
    {
      id: 22,
      img_url: "https://picsum.photos/380/220",
      link: "https://hbsp.harvard.edu/product/SMU988-PDF-ENG?Ntt=Sinwattana",
      havepad: true,
    },
  ];
  return (
    <>
      <div className="infinite__logo__slider">
        <div className="slide__track">
          {slideDataRoll1.map((item) => (
            <div
              className="infinite__slide"
              key={item.id}
              style={{
                marginRight: "32px",
              }}
            >
              <div
                style={{
                  width: "380px",
                  height: "220px",
                  paddingRight: item.havepad ? "40px" : 0,
                }}
              >
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={item.img_url}
                    alt="slideshow"
                    width={380}
                    height={220}
                    style={{
                      objectFit: "contain",
                      aspectRatio: "3/2",
                      borderRadius: "12px",
                    }}
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="infinite__logo__slider"
        style={{
          marginTop: "28px",
        }}
      >
        <div className="slide__track__reverse">
          {slideDataRoll2.map((item) => (
            <div
              className="infinite__slide"
              key={item.id}
              style={{
                marginRight: "32px",
              }}
            >
              <div
                style={{
                  width: "380px",
                  height: "220px",
                  paddingRight: item.havepad ? "40px" : 0,
                }}
              >
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={item.img_url}
                    alt="slideshow"
                    width={380}
                    height={220}
                    style={{
                      objectFit: "contain",
                      aspectRatio: "3/2",
                      borderRadius: "12px",
                    }}
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        style={{
          marginTop: "32px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Link href="/sub" className="logoslider__link p3-bold-14">
          See full lineup
          <FontAwesomeIcon
            icon={faAngleRight}
            style={{
              marginLeft: "6px",
            }}
          />
        </Link>
      </div>
    </>
  );
}

export default LogoInfiniteSlider;
