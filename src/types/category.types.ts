// types/category.types.ts
export interface Category {
  id: 'mobile-welding' | 'robotic-stations' | 'custom-cells';
  title: {
    en: string;
    es: string;
    pt: string;
  };
  description: {
    en: string;
    es: string;
    pt: string;
  };
  images: string[];
}

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

export interface Feature {
  title: {
    en: string;
    es: string;
    pt: string;
  };
  description: {
    en: string;
    es: string;
    pt: string;
  };
}

export interface Component {
  name: string;
  specifications?: string[];
}

export interface CustomCellModel {
  id: string;
  name: string;
  subtitle?: {
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
  benefits: {
    en: string[];
    es: string[];
    pt: string[];
  };
  technicalSpecs: TechnicalSpec[];
  mainComponents: {
    title: {
      en: string;
      es: string;
      pt: string;
    };
    components: Component[];
  };
  options?: {
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
  };
}