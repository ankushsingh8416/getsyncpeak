'use client';

import React, { useState } from 'react';
import hicon from '@/public/images/icon/magic.svg';
import { Fade } from 'react-awesome-reveal';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';
import Image from 'next/image';

const FaqSection: React.FC = () => {
  const [open, setOpen] = useState<string>('1');

  const toggle = (id: string) => {
    if (open === id) {
      setOpen('');
    } else {
      setOpen(id);
    }
  };

  return (
    <section className="faq pb-140">
      <div className="container">
        <div className="sec-title--two text-center mb-60">
          <Fade direction="down" triggerOnce={false} duration={1000} delay={9}>
            <div className="sub-title wow fadeInDown" data-wow-duration="600ms">
              <Image src={hicon} alt="Magic Icon" /> FAQ’s
            </div>
          </Fade>
          <Fade direction="up" triggerOnce={false} duration={1200} delay={9}>
            <h2
              className="title wow fadeInDown"
              data-wow-delay="150ms"
              data-wow-duration="600ms"
            >
              Have a question? Look here
            </h2>
          </Fade>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="xb-faq wow fadeInUp" data-wow-delay="200ms" data-wow-duration="600ms">
              <Accordion open={open} toggle={toggle} className="accordion_box clearfix list-unstyled">
                {faqList.map(({ id, question, content }) => (
                  <AccordionItem className="block" key={id}>
                    <AccordionHeader targetId={id} className="acc-btn">
                      <span className="number">{id}</span> _ {question}
                      <span className="arrow"></span>
                    </AccordionHeader>
                    <AccordionBody accordionId={id} className="acc_body">
                      <div className="content">
                        <p>{content.text}</p>
                        <ul className="list-unstyled">
                          {content.points.map((point, idx) => (
                            <li key={idx}>
                              <i className="far fa-check"></i>
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </AccordionBody>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;

interface FaqContent {
  text: string;
  points: string[];
}

interface FaqItem {
  id: string;
  question: string;
  content: FaqContent;
}

const faqList: FaqItem[] = [
  {
    id: '1',
    question: 'What is DLT registration and do I need it for SMS?',
    content: {
      text: "DLT (Distributed Ledger Technology) registration is a TRAI requirement for sending SMS in India. getsyncpeak guides you through the full process, which includes:",
      points: [
        'Registering your business as a DLT entity.',
        'Registering and getting your message templates approved.',
        'Linking your approved sender ID and templates to your account.'
      ]
    }
  },
  {
    id: '2',
    question: 'How is WhatsApp Business API pricing calculated?',
    content: {
      text: "WhatsApp charges per conversation, and getsyncpeak adds a transparent platform fee on top. Your cost depends on:",
      points: [
        'Whether the conversation is business- or user-initiated.',
        'The customer\'s country and messaging category.',
        'Your monthly conversation volume and plan tier.'
      ]
    }
  },
  {
    id: '3',
    question: 'Which channels can I use through one getsyncpeak account?',
    content: {
      text: "getsyncpeak gives you a single account and API for every channel your customers use, including:",
      points: [
        'Bulk SMS and OTP/2FA verification.',
        'WhatsApp Business API and RCS business messaging.',
        'Voice calls, IVR flows and email delivery.'
      ]
    }
  },
  {
    id: '4',
    question: 'Can getsyncpeak handle enterprise-scale message volume?',
    content: {
      text: "Yes, our infrastructure is built for high-volume senders across every industry. Enterprise plans include:",
      points: [
        'Dedicated account and onboarding manager.',
        'Priority routing and custom rate limits.',
        'SLA-backed uptime and 24/7 priority support.'
      ]
    }
  },
  {
    id: '5',
    question: 'Do you offer developer APIs and SDKs?',
    content: {
      text: "Yes, getsyncpeak provides REST APIs and SDKs for popular languages so you can integrate quickly. Every plan includes:",
      points: [
        'Well-documented REST APIs for every channel.',
        'Sandbox access for testing before you go live.',
        'Webhooks and delivery reports for real-time tracking.'
      ]
    }
  }
];
