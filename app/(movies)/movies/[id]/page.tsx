export default async function MovieDetails(props) {
  const param = await props;

  return <h2>This is movie detail with id: {param.id}</h2>;
}
