'use client';

import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { Fade } from "react-awesome-reveal";
import Link from 'next/link';
import Image from 'next/image';

import icon from '@/public/images/icon/dollar-icon.svg';
import picon from '@/public/images/icon/pricing-icon01.svg';
import picon2 from '@/public/images/icon/pricing-icon02.svg';
import picon3 from '@/public/images/icon/pricing-icon03.svg';
import check from '@/public/images/icon/check-icon.svg';
import cross from '@/public/images/icon/cross-icon.svg';

const PricingSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('1');

  const toggle = (tab: string) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <section className="pricing pt-130 pb-130">
      <div className="container">
        <div className="sec-title--two text-center mb-60">
          <Fade direction='down' triggerOnce={false} duration={1000} delay={9}>
            <div>
              <div className="sub-title wow fadeInDown" data-wow-duration="600ms">
                <Image src={icon} alt="Dollar Icon" />
                {' '}Our best pricing
              </div>
            </div>
          </Fade>
          <Fade direction='down' triggerOnce={false} duration={1200} delay={9}>
            <div>
              <h2 className="title wow fadeInDown" data-wow-delay="150ms" data-wow-duration="600ms">
                Simple, usage-based pricing
              </h2>
            </div>
          </Fade>
        </div>

        <div className="xb-pricing-nav-wrap text-center mb-110">
          <Nav tabs className="xb-pricing-nav ul_li_center nav nav-tabs" id="myTab" role="tablist">
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '1' })}
                onClick={() => toggle('1')}
                style={{ cursor: 'pointer' }}
              >
                Billed yearly <span>30%</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '2' })}
                onClick={() => toggle('2')}
                style={{ cursor: 'pointer' }}
              >
                Billed monthly
              </NavLink>
            </NavItem>
          </Nav>
        </div>

        <div className="pg-pricing_content">
          <TabContent activeTab={activeTab} id="myTabContent">
            {/* Yearly Tab Content */}
            <TabPane tabId="1">
              <Row className="mt-none-30">
                {/* Pricing Plan 1 */}
                <Col lg="4" className="mt-30">
                  <div className="pg-pricing-item pos-rel">
                    <div className="xb-item--inner o-hidden pos-rel">
                      <div className="xb-item--holder ul_li">
                        <div className="xb-item--icon">
                          <Image src={picon} alt="Basic Icon" />
                        </div>
                        <div className="xb-item--right">
                          <h3 className="xb-item--title">Starter</h3>
                          <span className="xb-item--text">For businesses starting out.</span>
                        </div>
                      </div>
                      <div className="xb-item--price">
                        <h2 className="xb-item--number">$299</h2>
                        <span className="xb-item--time">Per Year</span>
                      </div>
                      <div className="xb-item--line"></div>
                      <h4 className="xb-item--feature">Features</h4>
                      <ul className="xb-item--list list-unstyled">
                        <li><Image src={check} alt="Check" /> Bulk SMS (10,000 credits/mo)</li>
                        <li><Image src={check} alt="Check" /> DLT Registration Support</li>
                        <li><Image src={check} alt="Check" /> OTP & 2FA Verification</li>
                        <li><Image src={check} alt="Check" /> Delivery Reports Dashboard</li>
                        <li className="deactive"><Image src={cross} alt="Cross" /> WhatsApp & RCS Messaging</li>
                      </ul>
                      <div className="pg-det-btn">
                        <Link href="/contact" className="cp-btn">Choose your plan</Link>
                      </div>
                    </div>
                  </div>
                </Col>

                {/* Pricing Plan 2 */}
                <Col lg="4" className="mt-30">
                  <div className="pg-pricing-item active pos-rel">
                    <span className="xb-item--top-text">Most popular ✨</span>
                    <div className="xb-item--inner o-hidden pos-rel">
                      <div className="xb-item--holder ul_li">
                        <div className="xb-item--icon">
                          <Image src={picon2} alt="Growth Icon" />
                        </div>
                        <div className="xb-item--right">
                          <h3 className="xb-item--title">Growth</h3>
                          <span className="xb-item--text">For businesses with growing volume.</span>
                        </div>
                      </div>
                      <div className="xb-item--price">
                        <h2 className="xb-item--number">$499</h2>
                        <span className="xb-item--time">Per Year</span>
                      </div>
                      <div className="xb-item--line"></div>
                      <h4 className="xb-item--feature">Features</h4>
                      <ul className="xb-item--list list-unstyled">
                        <li><Image src={check} alt="Check" /> All features of the Starter plan</li>
                        <li><Image src={check} alt="Check" /> WhatsApp Business API</li>
                        <li><Image src={check} alt="Check" /> RCS Business Messaging</li>
                        <li><Image src={check} alt="Check" /> Voice Call & IVR (2,000 mins/mo)</li>
                        <li><Image src={check} alt="Check" /> Dedicated Onboarding Manager</li>
                      </ul>
                      <div className="pg-det-btn">
                        <Link href="/contact" className="cp-btn">Choose your plan</Link>
                      </div>
                    </div>
                  </div>
                </Col>

                {/* Pricing Plan 3 */}
                <Col lg="4" className="mt-30">
                  <div className="pg-pricing-item pos-rel">
                    <div className="xb-item--inner o-hidden pos-rel">
                      <div className="xb-item--holder ul_li">
                        <div className="xb-item--icon">
                          <Image src={picon3} alt="Enterprise Icon" />
                        </div>
                        <div className="xb-item--right">
                          <h3 className="xb-item--title">Enterprise</h3>
                          <span className="xb-item--text">For large-scale operations.</span>
                        </div>
                      </div>
                      <div className="xb-item--price">
                        <h2 className="xb-item--number">$999</h2>
                        <span className="xb-item--time">Per Year</span>
                      </div>
                      <div className="xb-item--line"></div>
                      <h4 className="xb-item--feature">Features</h4>
                      <ul className="xb-item--list list-unstyled">
                        <li><Image src={check} alt="Check" /> All features of the Growth plan</li>
                        <li><Image src={check} alt="Check" /> Unlimited Messaging Volume</li>
                        <li><Image src={check} alt="Check" /> Chatbot & Conversational API</li>
                        <li><Image src={check} alt="Check" /> Custom API & SDK Integration</li>
                        <li><Image src={check} alt="Check" /> 24/7 Priority Support & SLA</li>
                      </ul>
                      <div className="pg-det-btn">
                        <Link href="/contact" className="cp-btn">Choose your plan</Link>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </TabPane>

            {/* Monthly Tab Content */}
            <TabPane tabId="2">
              <Row className="mt-none-30">
                {/* Pricing Plan 1 (Monthly) */}
                <Col lg="4" className="mt-30">
                  <div className="pg-pricing-item pos-rel">
                    <div className="xb-item--inner o-hidden pos-rel">
                      <div className="xb-item--holder ul_li">
                        <div className="xb-item--icon">
                          <Image src={picon} alt="Basic Icon" />
                        </div>
                        <div className="xb-item--right">
                          <h3 className="xb-item--title">Starter</h3>
                          <span className="xb-item--text">For businesses starting out.</span>
                        </div>
                      </div>
                      <div className="xb-item--price">
                        <h2 className="xb-item--number">$29</h2>
                        <span className="xb-item--time">Per Month</span>
                      </div>
                      <div className="xb-item--line"></div>
                      <h4 className="xb-item--feature">Features</h4>
                      <ul className="xb-item--list list-unstyled">
                        <li><Image src={check} alt="Check" /> Bulk SMS (10,000 credits/mo)</li>
                        <li><Image src={check} alt="Check" /> DLT Registration Support</li>
                        <li><Image src={check} alt="Check" /> OTP & 2FA Verification</li>
                        <li><Image src={check} alt="Check" /> Delivery Reports Dashboard</li>
                        <li className="deactive"><Image src={cross} alt="Cross" /> WhatsApp & RCS Messaging</li>
                      </ul>
                      <div className="pg-det-btn">
                        <Link href="/contact" className="cp-btn">Choose your plan</Link>
                      </div>
                    </div>
                  </div>
                </Col>

                {/* Pricing Plan 2 (Monthly) */}
                <Col lg="4" className="mt-30">
                  <div className="pg-pricing-item active pos-rel">
                    <span className="xb-item--top-text">Most popular ✨</span>
                    <div className="xb-item--inner o-hidden pos-rel">
                      <div className="xb-item--holder ul_li">
                        <div className="xb-item--icon">
                          <Image src={picon2} alt="Growth Icon" />
                        </div>
                        <div className="xb-item--right">
                          <h3 className="xb-item--title">Growth</h3>
                          <span className="xb-item--text">For businesses with growing volume.</span>
                        </div>
                      </div>
                      <div className="xb-item--price">
                        <h2 className="xb-item--number">$49</h2>
                        <span className="xb-item--time">Per Month</span>
                      </div>
                      <div className="xb-item--line"></div>
                      <h4 className="xb-item--feature">Features</h4>
                      <ul className="xb-item--list list-unstyled">
                        <li><Image src={check} alt="Check" /> All features of the Starter plan</li>
                        <li><Image src={check} alt="Check" /> WhatsApp Business API</li>
                        <li><Image src={check} alt="Check" /> RCS Business Messaging</li>
                        <li><Image src={check} alt="Check" /> Voice Call & IVR (2,000 mins/mo)</li>
                        <li><Image src={check} alt="Check" /> Dedicated Onboarding Manager</li>
                      </ul>
                      <div className="pg-det-btn">
                        <Link href="/contact" className="cp-btn">Choose your plan</Link>
                      </div>
                    </div>
                  </div>
                </Col>

                {/* Pricing Plan 3 (Monthly) */}
                <Col lg="4" className="mt-30">
                  <div className="pg-pricing-item pos-rel">
                    <div className="xb-item--inner o-hidden pos-rel">
                      <div className="xb-item--holder ul_li">
                        <div className="xb-item--icon">
                          <Image src={picon3} alt="Enterprise Icon" />
                        </div>
                        <div className="xb-item--right">
                          <h3 className="xb-item--title">Enterprise</h3>
                          <span className="xb-item--text">For large-scale operations.</span>
                        </div>
                      </div>
                      <div className="xb-item--price">
                        <h2 className="xb-item--number">$99</h2>
                        <span className="xb-item--time">Per Month</span>
                      </div>
                      <div className="xb-item--line"></div>
                      <h4 className="xb-item--feature">Features</h4>
                      <ul className="xb-item--list list-unstyled">
                        <li><Image src={check} alt="Check" /> All features of the Growth plan</li>
                        <li><Image src={check} alt="Check" /> Unlimited Messaging Volume</li>
                        <li><Image src={check} alt="Check" /> Chatbot & Conversational API</li>
                        <li><Image src={check} alt="Check" /> Custom API & SDK Integration</li>
                        <li><Image src={check} alt="Check" /> 24/7 Priority Support & SLA</li>
                      </ul>
                      <div className="pg-det-btn">
                        <Link href="/contact" className="cp-btn">Choose your plan</Link>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
