import { API_BASE_URL } from "../../../(home)/page";

async function getMovie(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(`${API_BASE_URL}/${id}`);

  return response.json();
}

async function getMovieVideos(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(`${API_BASE_URL}/${id}/videos`);
  return response.json();
}

export default async function MovieDetails({
  params: { id },
}: {
  params: { id: string };
}) {
  const [movie, videos] = await Promise.all([getMovie(id), getMovieVideos(id)]);

  return (
    <div>
      <h2>Title: {movie.title}</h2>
      <p>{JSON.stringify(videos)}</p>
    </div>
  );
}
