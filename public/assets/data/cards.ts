// src/data/cardsData.ts

export interface Card {
  id: number;
  title: string;
  detail: string;
  color: string;
  icon: string;
  background: string;
}

export const cards: Card[] = [
  {
    id: 1,
    title: "Registration",
    detail:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    color: "89,230,255", 
    icon: '/assets/images/cards/icon-1.svg',
    background: '/assets/images/cards/card1_bg.png',
  },
  {
    id: 2,
    title: "LeaderBoard",
    detail:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    color: "253,207,126",
    icon: '/assets/images/cards/icon-2.svg',
    background: '/assets/images/cards/card2_bg.png',
  },
  {
    id: 3,
    title: "Store",
    detail:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    color: "245,47,242",
    icon: '/assets/images/cards/icon-3.svg',
    background: '/assets/images/cards/card3_bg.png',
  },
  {
    id: 4,
    title: "Tournament",
    detail:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    color: "130,202,83",
    icon: '/assets/images/cards/icon-4.svg',
    background: '/assets/images/cards/card4_bg.png',
  },
  {
    id: 5,
    title: "News",
    detail:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    color: "244,80,105",
    icon: '/assets/images/cards/icon-5.svg',
    background: '/assets/images/cards/card5_bg.png',
  },
  {
    id: 6,
    title: "BuyCoins",
    detail:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    color: "111,80,213",
    icon: '/assets/images/cards/icon-6.svg',
    background: '/assets/images/cards/card6_bg.png',
  },
];
