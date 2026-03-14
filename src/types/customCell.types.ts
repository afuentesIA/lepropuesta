// types/customCell.types.ts
export interface TechnicalSpec {
  label: {
    en: string;
    es: string;
    pt: string;
  };
  value: string;
}

export interface ModelImage {
  url: string;
  alt: {
    en: string;
    es: string;
    pt: string;
  };
}

export interface Application {
  title: {
    en: string;
    es: string;
    pt: string;
  };
  items: {
    en: string[];
    es: string[];
    pt: string[];
  };
}

export interface Benefit {
  en: string[];
  es: string[];
  pt: string[];
}

export interface Component {
  name: string;
  specifications?: string[];
}

export interface MainComponents {
  title: {
    en: string;
    es: string;
    pt: string;
  };
  components: Component[];
}

export interface Options {
  title: {
    en: string;
    es: string;
    pt: string;
  };
  items: {
    en: string[];
    es: string[];
    pt: string[];
  };
}

export interface CustomCellModel {
  id: string;
  name: string;
  subtitle: {
    en: string;
    es: string;
    pt: string;
  };
  images: ModelImage[];
  description: {
    en: string;
    es: string;
    pt: string;
  };
  applications: Application;
  benefits: Benefit;
  technicalSpecs: TechnicalSpec[];
  mainComponents: MainComponents;
  options?: Options;
}