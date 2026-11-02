# Anime API integration

AnimeGrabber uses [Jikan v4](https://docs.api.jikan.moe/) for anime discovery data. The server requests top lists, seasonal lists, genres, search results, and title details. It maps Jikan IDs to `/anime/[id]` routes and caches successful fetches for five minutes.

The application also exposes these JSON routes:

- `/api/anime/top-airing`
- `/api/anime/most-popular`
- `/api/anime/search?q=title`
- `/api/anime/[id]` (numeric MyAnimeList ID)

The pages fetch Jikan data on the server. Jikan provides catalog details, trailer information, and streaming links listed for a title. It does not provide full episode video URLs to this application.

If Jikan is unavailable, catalog and detail pages show an unavailable message. There is no sample catalog fallback. Jikan may rate limit requests, so avoid adding unnecessary calls for each page render.

Run `npm run dev`, then visit `/`, `/search?q=naruto`, and `/anime/21` to check the integration. Run `npm run build` and `npm run lint` before shipping changes.
