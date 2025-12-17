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