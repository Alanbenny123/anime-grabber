# AnimeGrabber

AnimeGrabber is an anime discovery site built with Next.js. It uses Jikan and MyAnimeList data for browsing, search, title details, trailers, and streaming links. It does not host full episodes.

## Features

- Browse live Movies, TV Series, Most Popular, Top Airing, and seasonal lists
- Browse anime by genre and search by title
- View title details, trailers, and streaming links listed by MyAnimeList
- Responsive layout for mobile and desktop

## Technology Stack

- **Frontend**: Next.js, React, TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

## Getting Started

Use Node.js 20.9 or newer. Install dependencies with `npm ci` before starting the app.

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Run `npm run lint` and `npm run build` to check changes. The production build uses Next.js's supported Webpack option.

## Project Structure

- `app/`: Next.js app router pages and layouts
- `components/`: Reusable React components
- `lib/api/jikan.ts`: Jikan API client and data mapping
- `public/`: Static assets

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to all contributors who have helped shape this project
- Built around anime discovery and metadata
- Built with Next.js and Tailwind CSS
