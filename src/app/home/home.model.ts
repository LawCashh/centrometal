export interface ListedProizvod {
  id: number;
  naziv: string;
  vrijeme: string;
  cijena1: string;
  cijena2: string;
  url: string;
  path?: string;
}

export interface Artikl {
  id: number;
  h3: string;
  p: string;
  b: string;
  url: string;
}

export interface Testera {
  id: number;
  naziv: string;
  url: string;
}
