import { Suspense } from "react";
import MovieInfo from "../../../../components/MovieInfo";
import MovieVideos from "../../../../components/MovieVideos";

export default function MovieDetails({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div>
      <h3>Movie detail page</h3>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
