// services.ts
import type { StaticImageData } from 'next/image'

import icon1 from '@/public/images/icon/research.gif'
import icon2 from '@/public/images/icon/durability.gif'
import icon3 from '@/public/images/icon/digital-tra.gif'
import icon4 from '@/public/images/icon/business-develop.gif'
import icon5 from '@/public/images/icon/search.gif'
import icon6 from '@/public/images/icon/warning.gif'

import sicon1 from '@/public/images/icon/ser-icon01.svg'
import sicon2 from '@/public/images/icon/ser-icon02.svg'
import sicon3 from '@/public/images/icon/ser-icon03.svg'
import sicon4 from '@/public/images/icon/ser-icon04.svg'

import serviceImg01 from '@/public/images/service/service-img01.jpg'
import serviceImg02 from '@/public/images/service/service-img02.jpg'
import serviceImg03 from '@/public/images/service/service-img03.jpg'
import serviceImg04 from '@/public/images/service/service-img04.jpg'

export interface Service {
  Id: string
  title: string
  slug: string
  sImg?: StaticImageData
  sIcon?: StaticImageData
  thumb1?: string
  thumb2?: string
  description?: string
  features?: string[]
  bgClass?: string
}

const Services: Service[] = [
  {
    Id: '1',
    sImg: icon1,
    title: 'Bulk SMS',
    slug: 'Bulk-SMS',
    thumb1: 'Promotional',
    thumb2: 'Transactional',
    description: 'Send promotional and transactional SMS at scale with industry-leading delivery rates across every network.',
  },
  {
    Id: '2',
    sImg: icon2,
    title: 'WhatsApp Business API',
    slug: 'WhatsApp-Business-API',
    thumb1: 'Notifications',
    thumb2: 'Support',
    description: 'Engage customers on their favourite app with verified WhatsApp Business messaging, alerts and live support.',
  },
  {
    Id: '3',
    sImg: icon3,
    title: 'RCS Business Messaging',
    slug: 'RCS-Business-Messaging',
    thumb1: 'Rich Media',
    thumb2: 'Branded Chat',
    description: 'Send rich, interactive RCS messages with images, carousels and quick-reply buttons for higher engagement.',
  },
  {
    Id: '4',
    sImg: icon4,
    title: 'Voice Call & IVR',
    slug: 'Voice-Call-IVR',
    thumb1: 'Automated Calls',
    thumb2: 'Click-to-Call',
    description: 'Automated voice broadcasts, smart IVR flows and click-to-call solutions to reach customers instantly.',
  },
  {
    Id: '5',
    sImg: icon5,
    title: 'DLT Registration',
    slug: 'DLT-Registration',
    thumb1: 'Entity Registration',
    thumb2: 'Template Scrubbing',
    description: 'End-to-end DLT entity and template registration so every SMS campaign stays fully TRAI compliant.',
  },
  {
    Id: '6',
    sImg: icon6,
    title: 'OTP & 2FA Verification',
    slug: 'OTP-2FA-Verification',
    thumb1: 'Instant Delivery',
    thumb2: 'Fraud Protection',
    description: 'Secure one-time password and two-factor verification delivered instantly over SMS, voice or WhatsApp.',
  },
  {
    Id: '7',
    sImg: serviceImg02,
    sIcon: sicon1,
    title: 'Email API',
    slug: 'Email-API',
  },
  {
    Id: '8',
    sImg: serviceImg01,
    sIcon: sicon2,
    title: 'Number Masking & 2-Way SMS',
    slug: 'Number-Masking-2-Way-SMS',
  },
  {
    Id: '9',
    sImg: serviceImg03,
    sIcon: sicon3,
    title: 'Chatbot & Conversational API',
    slug: 'Chatbot-Conversational-API',
  },
  {
    Id: '10',
    sImg: serviceImg04,
    sIcon: sicon4,
    title: 'API & SDK Integration',
    slug: 'API-SDK-Integration',
  },
]

export default Services
