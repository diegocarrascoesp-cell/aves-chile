export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-900 to-green-700 text-white">
      
      {/* HERO */}
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <h1 className="text-5xl font-bold md:text-7xl">
          Aves de Chile
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-green-100 md:text-xl">
          Identifica, aprende y explora las aves más comunes de Chile con una
          plataforma diseñada para observadores, estudiantes y profesionales.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="rounded-2xl bg-white px-6 py-3 text-green-900 font-semibold transition hover:scale-105">
            Explorar especies
          </button>

          <button className="rounded-2xl border border-white px-6 py-3 transition hover:bg-white hover:text-green-900">
            Ver galería
          </button>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-white text-gray-900 py-20 px-6">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            ¿Qué puedes hacer?
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            
            <div className="rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-semibold">Identificación</h3>
              <p className="mt-2 text-gray-600">
                Reconoce aves según características visuales y hábitat.
              </p>
            </div>

            <div className="rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-semibold">Fichas completas</h3>
              <p className="mt-2 text-gray-600">
                Información detallada: nombre, distribución, comportamiento.
              </p>
            </div>

            <div className="rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-semibold">Uso en terreno</h3>
              <p className="mt-2 text-gray-600">
                Pensado para consulta rápida desde el celular.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">
          Comienza a explorar hoy
        </h2>

        <p className="mt-4 text-green-100">
          Una herramienta simple, visual y potente para aprender en terreno.
        </p>

        <button className="mt-8 rounded-2xl bg-white px-8 py-4 text-green-900 font-semibold transition hover:scale-105">
          Ir a especies
        </button>
      </section>
    </main>
  );
}