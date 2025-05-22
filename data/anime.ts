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
}

export const featuredAnime: AnimeData = {
  id: "one-piece",
  title: "One Piece",
  image:
    "https://m.media-amazon.com/images/M/MV5BODcwNWE3OTMtMDc3MS00NDFjLWE1OTAtNDU3NjgxODMxY2UyXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
  type: "TV Series",
  rating: 9.2,
  description:
    'Follows the adventures of Monkey D. Luffy and his pirate crew in order to find the greatest treasure ever left by the legendary Pirate, Gold Roger. The famous mystery treasure named "One Piece".',
  genres: ["Action", "Adventure", "Comedy", "Fantasy"],
  status: "Ongoing",
  releaseYear: 1999,
};

export const latestEpisodes: AnimeData[] = [
  {
    id: "demon-slayer-s4e3",
    title: "Demon Slayer: Kimetsu no Yaiba Season 4 Episode 3",
    image:
      "https://m.media-amazon.com/images/M/MV5BZjZjNzI5MDctY2Y4YS00NmM4LTljMmItZTFkOTExNGI3ODRhXkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_.jpg",
    type: "TV",
    episodeNumber: 3,
    rating: 9.5,
  },
  {
    id: "jujutsu-kaisen-s2e21",
    title: "Jujutsu Kaisen Season 2 Episode 21",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTMwMDM4N2EtOTJiYy00OTQ0LThlZDYtYWUwOWFlY2IxZGVjXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
    type: "TV",
    episodeNumber: 21,
    rating: 9.3,
  },
  {
    id: "my-hero-academia-s7e1",
    title: "My Hero Academia Season 7 Episode 1",
    image:
      "https://m.media-amazon.com/images/M/MV5BNTk1NTc0MTYtY2IyNC00OWVjLWJhYWItNDQ0ODdiNWI2NjczXkEyXkFqcGdeQXVyMTQ3MjMyMTYz._V1_.jpg",
    type: "TV",
    episodeNumber: 1,
    rating: 8.7,
  },
  {
    id: "bleach-tybw-e20",
    title: "BLEACH: Thousand-Year Blood War Episode 20",
    image:
      "https://m.media-amazon.com/images/M/MV5BODFmYTUwYzMtM2M2My00NGExLWIzMDctYmRjNTNhZDc4MTQ0XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_.jpg",
    type: "TV",
    episodeNumber: 20,
    rating: 9.1,
  },
  {
    id: "attack-on-titan-ova",
    title: "Attack on Titan: Special Episode",
    image:
      "https://m.media-amazon.com/images/M/MV5BMGY3Mzg3M2UtNzYxNy00ZTAyLWFkMWQtYzUyZjlmYmY5NDMzXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg",
    type: "OVA",
    episodeNumber: 1,
    rating: 8.9,
  },
  {
    id: "solo-leveling-e11",
    title: "Solo Leveling Episode 11",
    image:
      "https://m.media-amazon.com/images/M/MV5BZjUxMDVkMTQtNDQwMi00OTU2LTk1YTQtYTI3MWJiM2ZlMmJhXkEyXkFqcGdeQXVyODMyNTM0MjM@._V1_FMjpg_UX1000_.jpg",
    type: "TV",
    episodeNumber: 11,
    rating: 9.4,
  },
];

export const popularAnime: AnimeData[] = [
  {
    id: "naruto",
    title: "Naruto Shippuden",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTE5NzIwMGUtYTE1MS00MDUxLTgyZjctOWVkZDAxM2M4ZWQ4XkEyXkFqcGdeQXVyNjc2NjA5MTU@._V1_.jpg",
    type: "TV",
    rating: 8.7,
  },
  {
    id: "chainsaw-man",
    title: "Chainsaw Man",
    image:
      "https://m.media-amazon.com/images/M/MV5BZjY5MDFhZTgtOGVhMi00NTUzLTk5NjktNmRlMjI2NzI3Y2M4XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_FMjpg_UX1000_.jpg",
    type: "TV",
    rating: 8.6,
  },
  {
    id: "haikyu",
    title: "Haikyu!!",
    image:
      "https://m.media-amazon.com/images/M/MV5BNjkyNDI2MTgtN2Y3NS00M2IyLWJhNjktODEwMTkzMzYwMzQzXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
    type: "TV",
    rating: 8.8,
  },
  {
    id: "fullmetal-alchemist",
    title: "Fullmetal Alchemist: Brotherhood",
    image:
      "https://m.media-amazon.com/images/M/MV5BZmEzN2YzOTItMDI5MS00MGU4LWI1NWQtOTg5ZThhNGQwYTEzXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
    type: "TV",
    rating: 9.1,
  },
  {
    id: "tokyo-revengers",
    title: "Tokyo Revengers",
    image:
      "https://m.media-amazon.com/images/M/MV5BMzJiZDdjMGEtODRlNS00ZjBkLWE4MmMtODQ4YzRhYmY4MmJjXkEyXkFqcGdeQXVyMTQ3MjMyMTYz._V1_FMjpg_UX1000_.jpg",
    type: "TV",
    rating: 8.3,
  },
  {
    id: "hunter-hunter",
    title: "Hunter x Hunter",
    image:
      "https://m.media-amazon.com/images/M/MV5BNGM0YTk3MWEtN2JiYy00ZDMxLTg5MzUtYThkZjNjNDJlM2JkXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
    type: "TV",
    rating: 9.0,
  },
];

export const topAiringAnime: AnimeData[] = [
  {
    id: "jujutsu-kaisen",
    title: "Jujutsu Kaisen",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTMwMDM4N2EtOTJiYy00OTQ0LThlZDYtYWUwOWFlY2IxZGVjXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
    type: "TV",
    rating: 8.8,
  },
  {
    id: "demon-slayer",
    title: "Demon Slayer: Kimetsu no Yaiba",
    image:
      "https://m.media-amazon.com/images/M/MV5BZjZjNzI5MDctY2Y4YS00NmM4LTljMmItZTFkOTExNGI3ODRhXkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_.jpg",
    type: "TV",
    rating: 8.7,
  },
  {
    id: "one-piece",
    title: "One Piece",
    image:
      "https://m.media-amazon.com/images/M/MV5BODcwNWE3OTMtMDc3MS00NDFjLWE1OTAtNDU3NjgxODMxY2UyXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
    type: "TV",
    rating: 9.2,
  },
  {
    id: "solo-leveling",
    title: "Solo Leveling",
    image:
      "https://m.media-amazon.com/images/M/MV5BZjUxMDVkMTQtNDQwMi00OTU2LTk1YTQtYTI3MWJiM2ZlMmJhXkEyXkFqcGdeQXVyODMyNTM0MjM@._V1_FMjpg_UX1000_.jpg",
    type: "TV",
    rating: 9.4,
  },
  {
    id: "blue-lock",
    title: "Blue Lock",
    image:
      "https://m.media-amazon.com/images/M/MV5BODBmM2JmY2EtMzRlZC00Njk0LTkzMWMtZTMxYzljZTJkYTFlXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
    type: "TV",
    rating: 8.5,
  },
  {
    id: "mashle",
    title: "Mashle: Magic and Muscles",
    image:
      "https://m.media-amazon.com/images/M/MV5BMWQ1MzA2YzctOTgxZS00YTdmLTlhZGItMDI3OGI1ZGEwZDI0XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_.jpg",
    type: "TV",
    rating: 8.0,
  },
];

export const upcomingAnime: AnimeData[] = [
  {
    id: "spy-family-s3",
    title: "Spy x Family Season 3",
    image:
      "https://m.media-amazon.com/images/M/MV5BNGY5NWIxMjAtODBjNC00MmZhLTk1ZTAtNGRhYTYyYjgwYTJiXkEyXkFqcGdeQXVyODMyNTM0MjM@._V1_.jpg",
    type: "TV",
    rating: 8.6,
  },
  {
    id: "vinland-saga-s3",
    title: "Vinland Saga Season 3",
    image:
      "https://m.media-amazon.com/images/M/MV5BNzQwODI0ODItMmFkMS00ZmRiLWFhM2ItODViNDlkNjRmZGI1XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_.jpg",
    type: "TV",
    rating: 8.8,
  },
  {
    id: "dragon-ball-daima",
    title: "Dragon Ball Daima",
    image:
      "https://m.media-amazon.com/images/M/MV5BMzk3YjYxMTMtYzY3Mi00NmE1LTk2YzMtMzZlZGM4ZDRmMzU4XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
    type: "TV",
    rating: 8.5,
  },
  {
    id: "kaiju-no8",
    title: "Kaiju No. 8",
    image:
      "https://m.media-amazon.com/images/M/MV5BMmNiZGY3ZGYtNWVkYy00Y2QyLWIyYjItMWVmMTFiZThjN2I2XkEyXkFqcGdeQXVyODMyNTM0MjM@._V1_FMjpg_UX1000_.jpg",
    type: "TV",
    rating: 8.7,
  },
  {
    id: "tower-of-god-s2",
    title: "Tower of God Season 2",
    image:
      "https://m.media-amazon.com/images/M/MV5BZjY0YjJmZjAtM2I2ZS00OGI1LWIyZjItMzBjOWUwYjY4Y2NkXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_.jpg",
    type: "TV",
    rating: 8.4,
  },
  {
    id: "dungeon-black-company-s2",
    title: "The Dungeon of Black Company Season 2",
    image:
      "https://m.media-amazon.com/images/M/MV5BOWUwZTkwMGMtNTU0MS00NDgwLWE0YTAtNTJkYmU5NzZiZDZiXkEyXkFqcGdeQXVyODUwNjEzMzg@._V1_.jpg",
    type: "TV",
    rating: 7.5,
  },
];
