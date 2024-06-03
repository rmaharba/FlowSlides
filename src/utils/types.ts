export interface Slide {
  [key: string]: any;
}

export interface OriginalObject {
  [key: string]: any;
}

export interface EyebrowImage {
  contentType?: string; // Opcional porque no todos los objetos tienen este campo
  url: string;
}

export interface MobileImageOrVideo {
  contentType: string;
  url: string;
}

export interface SlideItem {
  enableDarkBackdrop: boolean;
  eyebrowImage?: EyebrowImage;
  eyebrowText?: string;
  mobileImageOrVideo?: MobileImageOrVideo;
  targetUrl?: string;
  title?: string;
  targetLink?: string;
}

export type SlidesArray = SlideItem[];
