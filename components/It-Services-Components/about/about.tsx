'use client';

import React, { useState, FC } from 'react';
import about1 from '@/public/images/about/img-01.png';
import about2 from '@/public/images/about/img-02.png';
import about3 from '@/public/images/about/img-03.png';
import aIcon1 from '@/public/images/icon/about-icon01.png';
import aIcon2 from '@/public/images/icon/about-icon02.png';
import aIcon3 from '@/public/images/icon/about-icon03.png';
import Image, { StaticImageData } from 'next/image';

interface AboutItem {
  img: StaticImageData;
  icon: StaticImageData;
  heading: string;
  content: string;
}

const aboutItems: AboutItem[] = [
  {
    img: about1,
    icon: aIcon1,
    heading: 'About us',
    content:
      'getsyncpeak is a CPaaS solutions provider offering Bulk SMS, DLT registration, RCS, WhatsApp Business API and voice calling on one unified platform. Our team helps businesses reach customers reliably at scale.',
  },
  {
    img: about2,
    icon: aIcon2,
    heading: 'Our mission',
    content:
      'To give every business a single, reliable platform for SMS, RCS, WhatsApp and voice communication, backed by compliant delivery, transparent pricing and hands-on support.',
  },
  {
    img: about3,
    icon: aIcon3,
    heading: 'Our vision',
    content:
      'To be the CPaaS partner businesses trust for every customer conversation, powering messaging and voice communication that scales from startup to enterprise.',
  },
];

const About: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(2);

  const handleMouseEnter = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="about pb-140">
      <div className="container">
        <div className="about-wrap mt-none-30 ul_li_between">
          {aboutItems.map((item, index) => (
            <div
              key={index}
              className={`about-item mt-30 xb-mouseenter wow fadeInUp ${activeIndex === index ? 'active' : ''}`}
              data-wow-delay={`${index * 150}ms`}
              data-wow-duration="600ms"
              onMouseEnter={() => handleMouseEnter(index)}
            >
              <div>
                <div className="xb-item--img">
                  <Image src={item.img} alt={`${item.heading} image`} />
                </div>
                <h3 className="xb-item--heading">
                  <span>
                    <Image src={item.icon} alt={`${item.heading} icon`} />
                  </span>
                  {item.heading}
                </h3>
                <div className="xb-item--holder">
                  <h3 className="xb-item--title">
                    <span>
                      <Image src={item.icon} alt={`${item.heading} icon`} />
                    </span>
                    {item.heading}
                  </h3>
                  <p className="xb-item--content">{item.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
