import React from 'react';

export enum ServiceType {
  ERP = 'ERP Solutions',
  MARKETING = 'Digital Marketing',
  TRADE = 'B2B Trade',
  ACCOUNTING = 'Bookkeeping',
  ADVISORY = 'Advisory'
}

export interface NavItem {
  label: string;
  path: string;
  isMega?: boolean;
}

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  path: string;
  delay: number;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
  suggestions?: string[];
}

export interface Testimonial {
  name: string;
  company: string;
  quote: string;
}

export interface SiteConfig {
  company: {
    name: string;
    tagline: string;
    phone: string;
    email: string;
    whatsappNumber: string;
    location: string;
  };
  hero: {
    badge: string;
    mainHeadlinePrefix: string;
    withText: string;
    headlines: string[];
    description: string;
    cta: {
      consult: string;
      whatsapp: string;
      ai: string;
    };
    whyChoose: Array<{
      icon: any;
      title: string;
      text: string;
    }>;
  };
  services: Array<{
    id: string;
    title: string;
    shortDesc: string;
    summary: string;
    fullDesc: string;
    features: string[];
    icon: any;
    path: string;
  }>;
  erpPage: {
    title: string;
    subtitle: string;
    description: string;
    platforms: string[];
    industries: Array<{
      name: string;
      icon: any;
    }>;
    modules: Array<{
      title: string;
      desc: string;
    }>;
  };
  contact: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      company: string;
      email: string;
      message: string;
      button: string;
    };
  };
}