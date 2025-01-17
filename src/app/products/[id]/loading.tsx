export default function Loading() {
  return (
    <div className="md:flex">
      <div className="md:flex-shrink-0 p-8">
        <div className="w-48 h-48 bg-gray-300 rounded-md animate-pulse" />
      </div>
      <div className="p-8 w-full">
        <div className="h-8 bg-gray-300 rounded w-1/2 mb-2 animate-pulse" />
        <div className="h-6 bg-gray-300 rounded w-3/4 mb-2 animate-pulse" />
        <div className="h-4 bg-gray-300 rounded w-1/4 mb-2 animate-pulse" />
      </div>
    </div>
  );
}
