import React, { Fragment } from 'react';
import Header from '../../components/header/Header';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Footer from '../../components/footer/Footer';
import CtaSection from '../../components/CtaSection/CtaSection';

import icon from '@/public/images/icon/ser-01.svg';
import srImg from '@/public/images/shape/brd_shape.png';
import srImg2 from '@/public/images/hero/sd-img.png';
import vImg from '@/public/images/video/img03.jpg';
import vImg2 from '@/public/images/video/polygon02.png';
import sImg1 from '@/public/images/icon/sd-icon01.svg';
import sImg2 from '@/public/images/icon/sd-icon02.svg';
import sImg3 from '@/public/images/icon/sd-icon03.svg';
import sImg4 from '@/public/images/icon/sd-icon04.svg';
import shape from '@/public/images/shape/sd-shape.png';
import sicon from '@/public/images/icon/check-icon.svg';
import Image from 'next/image';


const ServiceSinglePage = () => {

  return (
    <Fragment>
      <div className="sco_agency">
        <Header />
        <main className="page_content service-single-page">
          <section
            className="page-title pt-200 pos-rel bg_img"
            style={{ backgroundImage: `url('/images/bg/page_bg01.jpg')` }}
          >
            <div className="container">
              <div className="page-title-wrap sd-title-wrap">
                <div className="row mt-none-30 align-items-end">
                  <div className="col-lg-9 mt-30">
                    <div className="page-title-box">
                      <span className="sub-title">
                        <Image src={icon} alt="" /> WhatsApp Business API
                      </span>
                      <h2 className="title">
                        Discover our comprehensive <br /> CPaaS services to boost your <br /> customer engagement
                      </h2>
                    </div>
                  </div>
                  <div className="col-lg-3 mt-30">
                    <div className="sd-right-img pos-rel">
                      <Image src={srImg2} alt="" />
                      <div className="sd-arrow-shape">
                        <Image className="xbzoominzoomup" src={srImg} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="video pt-70 pb-65">
            <div className="container">
              <div className="xb-video sd-video pos-rel">
                <Image src={vImg} alt="" />
                <button className="popup-video btn-video">
                  <Image src={vImg2} alt="" />
                </button>
              </div>
            </div>
          </div>

          <div className="sd-ser-content_wrap pb-110">
            <div className="container">
              <div className="sd-ser-content">
                <h2 className="sd-title">Engage customers where they already are</h2>
                <p className="sd-content">
                  The WhatsApp Business API lets you send order updates, appointment reminders, delivery alerts and support replies directly on WhatsApp, the app your customers open every day. Verified business profiles, rich media messages and quick-reply buttons help you build trust while cutting down on missed calls and unread emails. getsyncpeak handles the Meta approval process, template registration and number setup so you can focus on the conversation, not the paperwork.
                </p>
                <br />
                <p className="sd-content">
                  Once live, you can route conversations to a chatbot for instant answers or hand them off to a live agent when a human touch is needed. Delivery and read receipts, contact management and detailed analytics are built in from day one, so you always know how your messages are performing and where to improve.
                </p>
              </div>
            </div>
          </div>

          <div className="sd-process_warp">
            <div className="container">
              <div className="sd-heading">
                <h2 className="sd-title">Service process</h2>
                <p className="sd-content">
                  Our onboarding starts with a consultation on your use case, followed by number and template setup, so your first campaign launches with confidence. We stay involved with delivery monitoring and reporting for continuous improvement.
                </p>
              </div>
              <div className="sd-process_inner ul_li">
                <div className="sd-process-item">
                  <div className="xb-item--icon">
                    <Image src={sImg1} alt="" />
                  </div>
                  <h3 className="xb-item--title">Use case consultation</h3>
                  <p className="xb-item--contact">Assess your messaging needs and recommend the right channel.</p>
                  <span className="xb-item--number">01</span>
                </div>
                <div className="sd-process-item">
                  <div className="xb-item--icon">
                    <Image src={sImg2} alt="" />
                  </div>
                  <h3 className="xb-item--title">Number & template setup</h3>
                  <p className="xb-item--contact">Register your WhatsApp number and get message templates approved.</p>
                  <span className="xb-item--number">02</span>
                </div>
                <div className="sd-process-item">
                  <div className="xb-item--icon">
                    <Image src={sImg3} alt="" />
                  </div>
                  <h3 className="xb-item--title">API integration</h3>
                  <p className="xb-item--contact">Connect our API or chatbot builder to your app or CRM.</p>
                  <span className="xb-item--number">03</span>
                </div>
                <div className="sd-process-item">
                  <div className="xb-item--icon">
                    <Image src={sImg4} alt="" />
                  </div>
                  <h3 className="xb-item--title">Reporting</h3>
                  <p className="xb-item--contact">Track delivery, reads and replies with regular progress updates.</p>
                  <span className="xb-item--number">04</span>
                </div>
                <div className="sd-shape">
                  <Image src={shape} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="sd-service_wrap pt-115 pb-130">
            <div className="container">
              <div className="sd-ser-outcome">
                <div className="sd-heading">
                  <h2 className="sd-title">Services outcome</h2>
                  <p className="sd-content">
                    Here&apos;s what businesses typically see after moving customer conversations onto getsyncpeak&apos;s WhatsApp Business API:
                  </p>
                </div>
                <div className="sd-list-item ul_li">
                  <ul className="sd-ser-list list-unstyled">
                    <li>
                      <Image src={sicon} alt="" />
                      Higher open and response rates.
                    </li>
                    <li>
                      <Image src={sicon} alt="" />
                      Faster customer support resolution.
                    </li>
                    <li>
                      <Image src={sicon} alt="" />
                      Fewer missed calls and unread emails.
                    </li>
                  </ul>
                  <ul className="sd-ser-list list-unstyled">
                    <li>
                      <Image src={sicon} alt="" />
                      Automated order and delivery updates.
                    </li>
                    <li>
                      <Image src={sicon} alt="" />
                      Lower support cost per conversation.
                    </li>
                    <li>
                      <Image src={sicon} alt="" />
                      Stronger long-term customer retention.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>
        <CtaSection />
      </div>
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default ServiceSinglePage;
