const Records = ({ records, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 space-x-4">
      {records.map((result) => (
        <div key={result.id}>
          <div>
            <p>{result.id}</p>
            <h1 className="font-medium flex justify-center">{result.title}</h1>
            <img
              className="group-hover:shadow-xl w-full h-60 object-contain"
              src={result.url}
              alt={result.title}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Records;
<div></div>;
