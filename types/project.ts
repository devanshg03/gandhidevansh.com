export interface Project {
  id: string;
  title: string;
  subheading: string;
  description1: string;
  description2: string;
  image1: string;
  image2: string;
  image3: string;
  caption1: string;
  caption2: string;
  caption1year: string;
  caption2year: string;
}

export interface ProjectCardProps {
  title: string;
  subtitle: string;
  image: string;
  url: string;
}

