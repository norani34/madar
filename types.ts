import { LucideIcon } from "lucide-react";

export type Language = 'ar' | 'en';
export type Direction = 'rtl' | 'ltr';

export interface NavLink {
  key: string;
  path: string;
}

export interface ServiceItem {
  key: string;
  icon: LucideIcon;
  color: string;
}

export interface StatItem {
  labelKey: string;
  value: string | number;
  suffix?: string;
  trend?: number; // percentage
}

export interface TestimonialItem {
  name: string;
  roleKey: string; // Key for translation
  commentKey: string; // Key for translation
  rating: number;
}
