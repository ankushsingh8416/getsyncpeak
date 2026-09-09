// /api/blogs.ts

import { StaticImageData } from "next/image";

// Import all images
import blogImg1 from "@/public/images/blog/da-img01.jpg";
import blogImg2 from "@/public/images/blog/da-img02.jpg";
import blogImg3 from "@/public/images/blog/da-img03.jpg";
import blogImg4 from "@/public/images/blog/da-img04.jpg";
import blogImg5 from "@/public/images/blog/da-img05.jpg";
import blogImg6 from "@/public/images/blog/da-img06.jpg";
import blogImg7 from "@/public/images/blog/img01.jpg";
import blogImg8 from "@/public/images/blog/img02.jpg";
import blogImg9 from "@/public/images/blog/img03.jpg";
import blogImg10 from "@/public/images/blog/cd-img01.jpg";
import blogImg11 from "@/public/images/blog/cd-img02.jpg";
import blogImg12 from "@/public/images/blog/cd-img03.jpg";
import blogImg13 from "@/public/images/blog/img04.jpg";
import blogImg14 from "@/public/images/blog/img05.jpg";
import blogImg15 from "@/public/images/blog/img06.jpg";
import blogImg16 from "@/public/images/blog/img07.jpg";

// Base blog interface without read time
export interface BlogBase {
  id: string;
  title: string;
  slug: string;
  screens: StaticImageData;
  description?: string;
  author?: string;
  authorTitle?: string;
  create_at?: string;
  comment?: string;
  thumb?: string;
  blClass?: string;
}

export interface ReadableBlog extends BlogBase {
  read: string;  
}

export type Blog = BlogBase | ReadableBlog;

export const blogs: Blog[] = [
  {
    id: '1',
    title: 'DLT Registration Guide: Getting Your SMS Templates Approved',
    slug: 'DLT-Registration-Guide-Getting-Your-SMS-Templates-Approved',
    screens: blogImg1,
    description: 'A step-by-step walkthrough of registering your business and message templates for TRAI-compliant SMS.',
    author: 'Farugia',
    authorTitle: 'Senior Consultant',
    create_at: 'October 4, 2022',
    comment: '35',
    thumb: 'Compliance',
    blClass: 'format-standard-image',
  },
  {
    id: '2',
    title: 'Cutting Support Costs with the WhatsApp Business API',
    slug: 'Cutting-Support-Costs-with-the-WhatsApp-Business-API',
    screens: blogImg2,
    description: 'How automating order updates and FAQs on WhatsApp can lower your support cost per conversation.',
    author: 'Andrew',
    authorTitle: 'Creative Director',
    create_at: 'October 4, 2023',
    comment: '80',
    thumb: 'WhatsApp',
    blClass: 'format-standard-image',
  },
  {
    id: '3',
    title: 'RCS vs SMS vs WhatsApp: Choosing the Right Channel',
    slug: 'RCS-vs-SMS-vs-WhatsApp-Choosing-the-Right-Channel',
    screens: blogImg3,
    description: 'A practical comparison to help you pick the best messaging channel for every use case.',
    author: 'Kurtz',
    authorTitle: 'Art Director',
    create_at: 'October 4, 2024',
    comment: '95',
    thumb: 'Messaging',
    blClass: 'format-video',
  },
  {
    id: '4',
    title: 'Reducing SMS Delivery Failures at Scale',
    slug: 'Reducing-SMS-Delivery-Failures-at-Scale',
    screens: blogImg4,
    description: 'Smart routing, sender ID hygiene, and other techniques that keep delivery rates high.',
    author: 'Alex',
    authorTitle: 'Art Director',
    create_at: 'October 5, 2023',
    comment: '95',
    thumb: 'Bulk SMS',
  },
  {
    id: '5',
    title: 'OTP vs Voice OTP: When to Use Each',
    slug: 'OTP-vs-Voice-OTP-When-to-Use-Each',
    screens: blogImg5,
    description: 'The future of secure login relies on choosing the right verification channel for every user.',
    author: 'Aliza',
    authorTitle: 'Art Director',
    create_at: 'October 6, 2022',
    comment: '95',
    thumb: 'Verification',
  },
  {
    id: '6',
    title: 'Building a Chatbot on getsyncpeak\'s Conversational API',
    slug: 'Building-a-Chatbot-on-getsyncpeaks-Conversational-API',
    screens: blogImg6,
    description: 'A hands-on guide to designing automated flows that hand off to a live agent when needed.',
    author: 'Tika',
    authorTitle: 'Art Director',
    create_at: 'October 9, 2024',
    comment: '95',
    thumb: 'Chatbot',
  },
  {
    id: '7',
    title: 'A Complete TRAI DLT Compliance Checklist for Businesses',
    slug: 'A-Complete-TRAI-DLT-Compliance-Checklist-for-Businesses',
    screens: blogImg7,
    description: 'Everything you need to register, get templates approved, and stay compliant on every campaign.',
    author: 'Johnson',
    authorTitle: 'Art Director',
    create_at: '11/12/2024',
    comment: '95',
    thumb: 'Compliance',
  },
  {
    id: '8',
    title: '5 Ways to Improve Your WhatsApp Message Open Rates',
    slug: '5-Ways-to-Improve-Your-WhatsApp-Message-Open-Rates',
    screens: blogImg8,
    description: 'Simple template and timing changes that make a measurable difference in engagement.',
    author: 'Anderson',
    authorTitle: 'Art Director',
    create_at: '18/12/2024',
    comment: '95',
    thumb: 'WhatsApp',
  },
  {
    id: '9',
    title: 'API-First Messaging: Why It Matters for Developers',
    slug: 'API-First-Messaging-Why-It-Matters-for-Developers',
    screens: blogImg9,
    description: 'How a well-documented REST API and SDKs cut integration time from weeks to hours.',
    author: 'Martinez',
    authorTitle: 'Art Director',
    create_at: '27/12/2024',
    comment: '95',
    thumb: 'Developers',
  },
  {
    id: '10',
    title: 'Voice Broadcast vs IVR: Which Fits Your Use Case',
    slug: 'Voice-Broadcast-vs-IVR-Which-Fits-Your-Use-Case',
    screens: blogImg10,
    description: 'A breakdown of when to use one-way voice broadcasts versus interactive IVR flows.',
    author: 'Alex Olebar',
    authorTitle: 'Art Director',
    create_at: '11/12/2024',
    comment: '95',
    thumb: 'Voice',
  },
  {
    id: '11',
    title: 'Scaling SMS Infrastructure for High-Volume Senders',
    slug: 'Scaling-SMS-Infrastructure-for-High-Volume-Senders',
    screens: blogImg11,
    description: 'What changes when you go from thousands to millions of messages a month, and how to prepare.',
    author: 'Rakim Yakun',
    authorTitle: 'Art Director',
    create_at: '18/12/2024',
    comment: '95',
    thumb: 'Bulk SMS',
  },
  {
    id: '12',
    title: 'The Complete Guide to RCS Business Messaging',
    slug: 'The-Complete-Guide-to-RCS-Business-Messaging',
    screens: blogImg12,
    description: 'Everything you need to know about rich cards, carousels and branded chat before you launch RCS.',
    author: 'Kim Jung',
    authorTitle: 'Art Director',
    create_at: '27/12/2024',
    comment: '95',
    thumb: 'RCS',
  },
  {
    id: '13',
    title: 'getsyncpeak Launches AI-Powered WhatsApp Chatbots..',
    slug: 'getsyncpeak-Launches-AI-Powered-WhatsApp-Chatbots',
    screens: blogImg13,
    read: '3 min read',
  },
  {
    id: '14',
    title: 'New Features Boost getsyncpeak Messaging Delivery..',
    slug: 'New-Features-Boost-getsyncpeak-Messaging-Delivery',
    screens: blogImg14,
    read: '4 min read',
  },
  {
    id: '15',
    title: 'getsyncpeak Enhances Support with Voice AI Automation..',
    slug: 'getsyncpeak-Enhances-Support-with-Voice-AI-Automation..',
    screens: blogImg15,
    read: '8 min read',
  },
  {
    id: '16',
    title: 'getsyncpeak AI Chatbots Deflect 15% of Support Chats..',
    slug: 'getsyncpeak-AI-Chatbots-Deflect-15%-of-Support-Chats..',
    screens: blogImg16,
    read: '9 min read',
  },
];

export async function getBlogs() {
  return blogs;
}
