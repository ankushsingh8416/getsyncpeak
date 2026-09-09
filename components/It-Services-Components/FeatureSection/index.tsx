import React, { FC } from 'react';
import { Slide } from 'react-awesome-reveal';
import Image from 'next/image';

// Icon assets
import icon1 from '@/public/images/icon/user-icon.png';
import icon2 from '@/public/images/icon/music-play.png';
import icon3 from '@/public/images/icon/dollar-circle.png';

// Feature item type
interface Feature {
  title: string;
  des: string;
  icon: any;
  duration: number;
}

// Features data
const Features: Feature[] = [
  {
    title: '99.9% uptime delivery',
    des: 'Carrier-grade infrastructure that keeps your SMS, RCS and voice traffic flowing without interruption.',
    icon: icon1,
    duration: 1000,
  },
  {
    title: 'Fast, dedicated support',
    des: 'A dedicated onboarding and support team that helps you go live and stay compliant, fast.',
    icon: icon2,
    duration: 1200,
  },
  {
    title: 'Transparent, usage-based pricing',
    des: 'Pay only for what you send across SMS, WhatsApp, RCS and voice with no hidden fees.',
    icon: icon3,
    duration: 1400,
  },
];

// Component
const FeatureSection: FC = () => {
  return (
    <div className="feature pt-110 pb-130">
      <div className="container">
        <div className="feature-wrap">
          <div className="row mt-none-30">
            {Features.map((feature, index) => (
              <div className="col-lg-4 col-md-12 mt-30" key={index}>
                <Slide direction="left" triggerOnce={false} duration={feature.duration}>
                  <div className="feature-item ul_li">
                    <div className="xb-item--icon">
                      <span>
                        <Image src={feature.icon} alt={feature.title} />
                      </span>
                    </div>
                    <div className="xb-item--holder">
                      <h4 className="xb-item--title">{feature.title}</h4>
                      <p className="xb-item--content">{feature.des}</p>
                    </div>
                  </div>
                </Slide>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
