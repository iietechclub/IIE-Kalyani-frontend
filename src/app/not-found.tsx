const NotFound = () => (
  <main className="grid min-h-[75dvh] items-center justify-center">
    <div className="ml-8 flex h-20 items-center justify-center space-x-6 text-center">
      <h1 className="font-semibold text-3xl">404</h1>
      <div className="h-full w-0.5 bg-neutral-900" />
      <div>
        <h2 className="text-lg text-neutral-800">
          This page could not be found.
        </h2>
      </div>
    </div>
  </main>
);

export default NotFound;
