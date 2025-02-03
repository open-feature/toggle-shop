export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">{children}</div>
  );
}
