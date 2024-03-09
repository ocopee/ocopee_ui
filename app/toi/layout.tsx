export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-8 min-h-[100vh] mx-auto max-w-xl text-justify">
      {children}
    </section>
  );
}
