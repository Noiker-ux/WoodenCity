export type THouseProjectCard = {
  imageHouse: string;
  nameHouse: string;
  description: string;
  subdescription: string;
  sizesHouse: string;
  floors: number;
  square: number;
  attic: boolean;
  price: number;
  walls: string;
  foundament: string;
  crovlya: string;
  water: string;
  brush: string;
  electro: string;
  rooms: string;
  toalet: string;
  balcony: string;
  ground: string;
  garage: string;
  security: string;
};

export type THouseProjectCardItem = {
  data: THouseProjectCard;
};
