export interface AnimeData {
  id: string;
  title: string;
  image: string;
  type?: string;
  episodeNumber?: number;
  rating?: number;
  description?: string;
  genres?: string[];
  status?: string;
  releaseYear?: number;
  stats?: {
    views?: number;
    likes?: number;
    episode?: number;
  };
}

export const featuredAnime = {
  id: "1",
  title: "Fire Force Season 3",
  description:
    "The story follows Special Fire Force Company 8, which features young and powerful third-generation pyrokinetic Shinra Kusakabe.",
  image: "/images/fire-force-banner.jpg",
  type: "TV",
  rating: 9.2,
};

export const latestEpisodes = [
  {
    id: "1",
    title: "Fire Force",
    episodeNumber: 1,
    image: "/images/fire-force.jpg",
    type: "TV",
    rating: 9.2,
  },
];

export const popularAnime = [
  {
    id: "1",
    title: "One Piece",
    image: "/images/one-piece.jpg",
    type: "TV",
    rating: 9.5,
  },
];

export const topAiringAnime = [
  {
    id: "one-piece",
    title: "One Piece",
    image:
      "https://m.media-amazon.com/images/M/MV5BODcwNWE3OTMtMDc3MS00NDFjLWE1OTAtNDU3NjgxODMxY2UyXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
    type: "TV",
    stats: {
      views: 1131,
      likes: 1122,
    },
  },
  {
    id: "sakamoto-days",
    title: "Sakamoto Days",
    image: "https://cdn.myanimelist.net/images/anime/1418/134095.jpg",
    type: "TV",
    stats: {
      views: 11,
      likes: 11,
    },
  },
  {
    id: "apothecary-diaries",
    title: "The Apothecary Diaries Season 2",
    image: "https://cdn.myanimelist.net/images/anime/1708/138033.jpg",
    type: "TV",
    stats: {
      views: 21,
      likes: 19,
    },
  },
  {
    id: "wind-breaker",
    title: "Wind Breaker Season 2",
    image: "https://cdn.myanimelist.net/images/anime/1792/139337.jpg",
    type: "TV",
    stats: {
      views: 10,
      likes: 8,
    },
  },
  {
    id: "case-closed",
    title: "Case Closed",
    image: "https://cdn.myanimelist.net/images/anime/7/75199.jpg",
    type: "TV",
    stats: {
      views: 1164,
      likes: 129,
    },
  },
];

export const upcomingAnime = [
  {
    id: "1",
    title: "Solo Leveling",
    image: "/images/solo-leveling.jpg",
    type: "TV",
    rating: 9.3,
  },
];

export const mostPopularAnime = [
  {
    id: "one-piece",
    title: "One Piece",
    image:
      "https://m.media-amazon.com/images/M/MV5BODcwNWE3OTMtMDc3MS00NDFjLWE1OTAtNDU3NjgxODMxY2UyXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
    type: "TV",
    stats: {
      views: 1131,
      likes: 1122,
    },
  },
  {
    id: "naruto-shippuden",
    title: "Naruto: Shippuden",
    image: "https://cdn.myanimelist.net/images/anime/1565/111305.jpg",
    type: "TV",
    stats: {
      views: 500,
      likes: 500,
      episode: 500,
    },
  },
  {
    id: "bleach",
    title: "Bleach",
    image: "https://cdn.myanimelist.net/images/anime/3/40451.jpg",
    type: "TV",
    stats: {
      views: 366,
      likes: 366,
      episode: 366,
    },
  },
  {
    id: "solo-leveling",
    title: "Solo Leveling Season 2: Arise from the Shadow",
    image: "https://cdn.myanimelist.net/images/anime/1926/138845.jpg",
    type: "TV",
    stats: {
      views: 13,
      likes: 13,
      episode: 13,
    },
  },
  {
    id: "black-clover",
    title: "Black Clover",
    image: "https://cdn.myanimelist.net/images/anime/2/88336.jpg",
    type: "TV",
    stats: {
      views: 170,
      likes: 170,
      episode: 170,
    },
  },
];

export const mostFavoriteAnime = [
  {
    id: "one-piece",
    title: "One Piece",
    image:
      "https://m.media-amazon.com/images/M/MV5BODcwNWE3OTMtMDc3MS00NDFjLWE1OTAtNDU3NjgxODMxY2UyXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
    type: "TV",
    stats: {
      views: 1131,
      likes: 1122,
    },
  },
  {
    id: "chainsaw-man",
    title: "Chainsaw Man",
    image: "https://cdn.myanimelist.net/images/anime/1806/126216.jpg",
    type: "TV",
    stats: {
      views: 12,
      likes: 12,
      episode: 12,
    },
  },
  {
    id: "jujutsu-kaisen",
    title: "Jujutsu Kaisen (TV)",
    image: "https://cdn.myanimelist.net/images/anime/1171/109222.jpg",
    type: "TV",
    stats: {
      views: 24,
      likes: 24,
      episode: 24,
    },
  },
  {
    id: "demon-slayer",
    title: "Demon Slayer: Kimetsu no Yaiba Swordsmith Village Arc",
    image: "https://cdn.myanimelist.net/images/anime/1908/135431.jpg",
    type: "TV",
    stats: {
      views: 11,
      likes: 11,
      episode: 11,
    },
  },
  {
    id: "black-clover",
    title: "Black Clover",
    image: "https://cdn.myanimelist.net/images/anime/2/88336.jpg",
    type: "TV",
    stats: {
      views: 170,
      likes: 170,
      episode: 170,
    },
  },
];

export const latestCompletedAnime = [
  {
    id: "hua-jianghu",
    title: "Hua Jianghu: Bu Liang Ren 7th Season",
    image: "https://cdn.myanimelist.net/images/anime/1392/134978.jpg",
    type: "ONA",
    stats: {
      views: 12,
      episode: 12,
    },
  },
  {
    id: "honor-of-kings",
    title: "Honor of Kings: Chapter of Glory",
    image: "https://cdn.myanimelist.net/images/anime/1794/139314.jpg",
    type: "ONA",
    stats: {
      views: 4,
      episode: 4,
    },
  },
  {
    id: "thunderbolt-fantasy",
    title: "Thunderbolt Fantasy - The Final Chapter",
    image: "https://cdn.myanimelist.net/images/anime/1519/133791.jpg",
    type: "Movie",
    stats: {
      views: 1,
      episode: 1,
    },
  },
  {
    id: "boy-who-saw-wind",
    title: "The Boy Who Saw the Wind",
    image: "https://cdn.myanimelist.net/images/anime/1597/134090.jpg",
    type: "Movie",
    stats: {
      views: 1,
      episode: 1,
    },
  },
  {
    id: "dr-slump",
    title: "Dr. Slump: Arale-chan",
    image: "https://cdn.myanimelist.net/images/anime/1259/132765.jpg",
    type: "TV",
    stats: {
      views: 168,
      episode: 243,
    },
  },
];
