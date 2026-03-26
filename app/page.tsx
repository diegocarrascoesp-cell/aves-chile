export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 text-center">
        <h1 className="text-4xl font-bold md:text-6xl">
          Aves de Chile
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-600 md:text-xl">
          Explora especies, conoce sus características y aprende a identificar
          aves comunes de Chile en una plataforma simple y visual.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="rounded-2xl bg-black px-6 py-3 text-white transition hover:opacity-90">
            Explorar aves
          </button>

          <button className="rounded-2xl border border-gray-300 px-6 py-3 transition hover:bg-gray-100">
            Ver galería
          </button>
        </div>
      </section>
    </main>
  );
}