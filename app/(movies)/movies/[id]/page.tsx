export default function MovieDetails({
  params: { id },
}: {
  params: { id: string };
}) {
  return <h2>This is movie detail with id: {id}</h2>;
}
