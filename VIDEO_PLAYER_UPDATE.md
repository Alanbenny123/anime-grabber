# Trailer display

The anime detail page shows a YouTube trailer only when Jikan returns a valid `trailer.youtube_id`. It uses a `youtube-nocookie.com` iframe and labels the content as a trailer. If no trailer is available, the page shows a placeholder message.

Episode count is displayed as catalog information. The page has no episode selector, episode video player, or automatic next-episode behavior. Streaming links listed by MyAnimeList appear below the title details.

To inspect this behavior, visit a numeric title route such as `/anime/21` while Jikan is reachable. The page also handles unavailable Jikan responses without inventing title or episode data.
