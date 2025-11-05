# Anime API Integration

This project now integrates with **Jikan API** (MyAnimeList) to fetch real anime data.

## Available APIs

### 1. **Jikan API** (Currently Integrated)
- **Base URL**: `https://api.jikan.moe/v4`
- **Rate Limit**: 3 requests/second, 60 requests/minute
- **Free**: Yes, no API key required
- **Documentation**: https://docs.api.jikan.moe/

**What it provides:**
- ✅ Anime metadata (titles, descriptions, ratings, genres)
- ✅ Episode lists and information
- ✅ Character and staff data
- ✅ User reviews and ratings
- ✅ Seasonal anime data
- ❌ **Does NOT provide video streaming URLs**

### 2. **AniList API** (Alternative)
- **Base URL**: `https://graphql.anilist.co`
- **Type**: GraphQL API
- **Free**: Yes, no API key required
- **Documentation**: https://anilist.gitbook.io/anilist-apiv2-docs/

### 3. **Kitsu API** (Alternative)
- **Base URL**: `https://kitsu.io/api/edge`
- **Free**: Yes, no API key required
- **Documentation**: https://kitsu.docs.apiary.io/

## Current Implementation

### API Routes Created:
- `/api/anime/top-airing` - Get top airing anime
- `/api/anime/most-popular` - Get most popular anime
- `/api/anime/[id]` - Get anime by ID
- `/api/anime/search` - Search anime by query

### Usage Example:

```typescript
// Fetch top airing anime
const response = await fetch('/api/anime/top-airing?page=1&limit=25');
const data = await response.json();

// Search anime
const searchResponse = await fetch('/api/anime/search?q=one%20piece&page=1');
const searchData = await searchResponse.json();
```

## Important Notes

### ⚠️ Video Streaming Limitation

**The APIs listed above provide metadata only** - they do NOT provide actual video streaming URLs.

For actual video streaming, you would need:

1. **Legal Streaming Services APIs** (Requires partnerships):
   - Crunchyroll API
   - Funimation API
   - Netflix API
   - These require business partnerships and are not publicly available

2. **Third-party Streaming APIs** (NOT Recommended):
   - Autoembed, Anime API, etc.
   - ⚠️ These often host copyrighted content illegally
   - ⚠️ Violate terms of service
   - ⚠️ May have legal issues

### Recommended Approach:

1. **Use Jikan API for metadata** (what we've implemented)
   - Display anime information, ratings, descriptions
   - Show episode lists and airing schedules
   - Provide search and discovery features

2. **For actual video streaming:**
   - Partner with legal streaming services
   - Host your own content (requires licensing)
   - Link to official streaming platforms (Crunchyroll, Funimation, etc.)

## Testing the Integration

1. Start your development server:
```bash
npm run dev
```

2. Visit `http://localhost:3000` - The home page now fetches real anime data from Jikan API

3. Check the browser console for any API errors

4. Test the API routes directly:
   - `http://localhost:3000/api/anime/top-airing`
   - `http://localhost:3000/api/anime/most-popular`
   - `http://localhost:3000/api/anime/search?q=naruto`

## Rate Limiting

Jikan API has rate limits:
- **3 requests per second**
- **60 requests per minute**

Our implementation includes basic error handling, but you may want to add:
- Request caching
- Exponential backoff retry logic
- Request queuing

## Future Enhancements

- [ ] Add caching layer (Redis/Memory cache)
- [ ] Implement request rate limiting
- [ ] Add error retry logic
- [ ] Integrate search functionality in header
- [ ] Add anime detail pages with real data
- [ ] Implement genre filtering with real data
- [ ] Add episode listing from API


