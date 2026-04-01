type Ave = {
  nombre: string;
  cientifico: string;
  tamano: string;
  alimentacion: string;
  habitat: string;
  identificacion: string;
  dimorfismo: string;
  nota?: string;
  imagenes: string[];
  audios: string[];
};

const aves: Ave[] = [
  {
    nombre: "Zorzal",
    cientifico: "Turdus falcklandii",
    tamano: "26–28 cm",
    alimentacion: "Omnívoro: insectos, lombrices y frutos.",
    habitat: "Jardines, plazas, sectores arbolados y bordes de bosque.",
    identificacion: "Pecho anaranjado, dorso pardo y patas amarillas.",
    dimorfismo: "Leve; macho y hembra muy parecidos.",
    imagenes: ["/imagenes/zorzal-1.png"],
    audios: ["/audios/placeholder-audio.mp3"],
  },
  {
    nombre: "Chincol",
    cientifico: "Zonotrichia capensis",
    tamano: "14–16 cm",
    alimentacion: "Semillas e insectos.",
    habitat: "Jardines, campos, matorrales y ciudades.",
    identificacion: "Cabeza con franjas, collar rufo y copete discreto.",
    dimorfismo: "Poco marcado; macho y hembra similares.",
    imagenes: ["/imagenes/chincol-1.png"],
    audios: ["/audios/placeholder-audio.mp3"],
  },
  {
    nombre: "Diuca",
    cientifico: "Diuca diuca",
    tamano: "17–18 cm",
    alimentacion: "Principalmente semillas.",
    habitat: "Zonas abiertas, jardines y áreas rurales.",
    identificacion: "Color grisáceo, garganta blanca y cola larga.",
    dimorfismo: "Leve; ambos sexos son parecidos.",
    imagenes: ["/imagenes/diuca-1.png"],
    audios: ["/audios/placeholder-audio.mp3"],
  },
  {
    nombre: "Tenca",
    cientifico: "Mimus thenca",
    tamano: "25–29 cm",
    alimentacion: "Insectos, frutos y otros pequeños invertebrados.",
    habitat: "Matorrales, zonas semiabiertas y jardines grandes.",
    identificacion: "Ave gris parda, cola larga, muy vocal.",
    dimorfismo: "No evidente a simple vista.",
    imagenes: ["/imagenes/tenca-1.png"],
    audios: ["/audios/placeholder-audio.mp3"],
  },
  {
    nombre: "Chercán",
    cientifico: "Troglodytes musculus",
    tamano: "10–12 cm",
    alimentacion: "Insectívoro.",
    habitat: "Jardines, cercos, arbustos y zonas con cobertura vegetal.",
    identificacion: "Muy pequeño, inquieto y con cola frecuentemente levantada.",
    dimorfismo: "No evidente.",
    imagenes: ["/imagenes/chercan-1.png"],
    audios: ["/audios/placeholder-audio.mp3"],
  },
  {
    nombre: "Fío-fío",
    cientifico: "Elaenia albiceps",
    tamano: "13–14 cm",
    alimentacion: "Insectos y frutos pequeños.",
    habitat: "Bosques, jardines y zonas arboladas; más frecuente en primavera-verano.",
    identificacion: "Oliva grisáceo, discreto, con coronilla algo más clara.",
    dimorfismo: "No evidente.",
    imagenes: ["/imagenes/fiofio-1.png"],
    audios: ["/audios/placeholder-audio.mp3"],
  },
  {
    nombre: "Jilguero",
    cientifico: "Spinus barbatus",
    tamano: "12–14 cm",
    alimentacion: "Semillas.",
    habitat: "Áreas arboladas, jardines, bordes de bosque y sectores rurales.",
    identificacion: "Pequeño, con tonos amarillos y negros.",
    dimorfismo: "Macho más llamativo y amarillo; hembra más apagada.",
    imagenes: ["/imagenes/jilguero-1.png"],
    audios: ["/audios/placeholder-audio.mp3"],
  },
  {
    nombre: "Picaflor chico",
    cientifico: "Sephanoides sephaniodes",
    tamano: "10–11 cm",
    alimentacion: "Néctar e insectos pequeños.",
    habitat: "Jardines, bosque nativo, matorrales y zonas floridas.",
    identificacion: "Colibrí pequeño; vuelo suspendido y muy rápido.",
    dimorfismo: "Macho con brillo más evidente; hembra más pálida.",
    imagenes: ["/imagenes/picaflor-1.png"],
    audios: ["/audios/placeholder-audio.mp3"],
  },
  {
    nombre: "Loica",
    cientifico: "Leistes loyca",
    tamano: "24–28 cm",
    alimentacion: "Insectos, larvas y semillas.",
    habitat: "Praderas, potreros y campos abiertos.",
    identificacion: "Pecho rojo intenso en el macho, muy característico.",
    dimorfismo: "Macho con pecho rojo intenso; hembra parda listada.",
    imagenes: ["/imagenes/loica-1.png"],
    audios: ["/audios/placeholder-audio.mp3"],
  },
  {
    nombre: "Queltehue",
    cientifico: "Vanellus chilensis",
    tamano: "32–38 cm",
    alimentacion: "Insectos y pequeños invertebrados.",
    habitat: "Praderas, humedales, campos y sectores abiertos.",
    identificacion: "Llamativo, con canto fuerte y espolones en las alas.",
    dimorfismo: "Leve; ambos sexos similares.",
    imagenes: ["/imagenes/queltehue-1.png"],
    audios: ["/audios/placeholder-audio.mp3"],
  },
  {
    nombre: "Bandurria",
    cientifico: "Theristicus melanopis",
    tamano: "70–75 cm",
    alimentacion: "Invertebrados, lombrices e insectos.",
    habitat: "Praderas húmedas, campos, humedales y lagunas.",
    identificacion: "Pico largo curvo y vuelo en grupos con vocalización fuerte.",
    dimorfismo: "No evidente.",
    imagenes: ["/imagenes/bandurria-1.png"],
    audios: ["/audios/placeholder-audio.mp3"],
  },
  {
    nombre: "Rayadito",
    cientifico: "Aphrastura spinicauda",
    tamano: "14–15 cm",
    alimentacion: "Insectívoro.",
    habitat: "Bosque nativo templado y zonas arboladas del sur.",
    identificacion: "Ceja clara, cola larga y muy activo entre ramas.",
    dimorfismo: "No evidente.",
    imagenes: ["/imagenes/rayadito-1.png"],
    audios: ["/audios/placeholder-audio.mp3"],
  },
  {
    nombre: "Chucao",
    cientifico: "Scelorchilus rubecula",
    tamano: "18–19 cm",
    alimentacion: "Insectos y otros invertebrados.",
    habitat: "Bosque húmedo, sotobosque denso.",
    identificacion: "Pecho rojizo y canto muy característico del bosque sureño.",
    dimorfismo: "No evidente.",
    imagenes: ["/imagenes/chucao-1.png"],
    audios: ["/audios/placeholder-audio.mp3"],
  },
  {
    nombre: "Hued-hued",
    cientifico: "Pteroptochos tarnii",
    tamano: "23–25 cm",
    alimentacion: "Invertebrados del suelo.",
    habitat: "Bosque templado y sotobosque cerrado.",
    identificacion: "Grande para un tapaculo, de tonos pardos; más oído que visto.",
    dimorfismo: "No evidente.",
    imagenes: ["/imagenes/huedhued-1.png"],
    audios: ["/audios/placeholder-audio.mp3"],
  },
  {
    nombre: "Martín pescador",
    cientifico: "Megaceryle torquata",
    tamano: "38–41 cm",
    alimentacion: "Principalmente peces.",
    habitat: "Ríos, lagos, esteros y zonas lacustres.",
    identificacion: "Grande, crestudo, de pico fuerte; suele posarse cerca del agua.",
    dimorfismo: "Macho y hembra difieren en el patrón del pecho.",
    imagenes: ["/imagenes/martinpescador-1.png"],
    audios: ["/audios/placeholder-audio.mp3"],
  },
  {
    nombre: "Tagua común",
    cientifico: "Fulica armillata",
    tamano: "45–53 cm",
    alimentacion: "Vegetación acuática e invertebrados.",
    habitat: "Lagos, lagunas y humedales.",
    identificacion: "Ave acuática oscura con escudo frontal claro.",
    dimorfismo: "Leve o poco evidente.",
    imagenes: ["/imagenes/tagua-1.png"],
    audios: ["/audios/placeholder-audio.mp3"],
  },
  {
    nombre: "Pato jergón chico",
    cientifico: "Anas flavirostris",
    tamano: "35–40 cm",
    alimentacion: "Semillas, vegetación y pequeños invertebrados.",
    habitat: "Lagunas, humedales y cuerpos de agua tranquilos.",
    identificacion: "Pato pequeño de patrón moteado.",
    dimorfismo: "Leve; macho y hembra relativamente parecidos.",
    imagenes: ["/imagenes/patojergon-1.png"],
    audios: ["/audios/placeholder-audio.mp3"],
  },
  {
    nombre: "Huala",
    cientifico: "Podiceps major",
    tamano: "60–70 cm",
    alimentacion: "Peces y fauna acuática pequeña.",
    habitat: "Lagos y lagunas grandes.",
    identificacion: "Cuello largo, perfil elegante y conducta buceadora.",
    dimorfismo: "Poco evidente.",
    imagenes: ["/imagenes/huala-1.png"],
    audios: ["/audios/placeholder-audio.mp3"],
  },
  {
    nombre: "Siete colores",
    cientifico: "Tachuris rubrigastra",
    tamano: "11–12 cm",
    alimentacion: "Insectívoro.",
    habitat: "Totorales y vegetación palustre.",
    identificacion: "Muy pequeño y llamativo, con varios colores visibles.",
    dimorfismo: "Leve; ambos sexos parecidos.",
    imagenes: ["/imagenes/sietecolores-1.png"],
    audios: ["/audios/placeholder-audio.mp3"],
  },
  {
    nombre: "Mirlo",
    cientifico: "Molothrus bonariensis",
    tamano: "19–22 cm",
    alimentacion: "Semillas, insectos y otros pequeños recursos alimenticios.",
    habitat: "Campos, ciudades, praderas y zonas abiertas.",
    identificacion: "Ave oscura; el macho suele verse negro brillante.",
    dimorfismo: "Macho negro brillante; hembra más parda o apagada.",
    nota: "Importante: es un parásito de cría; pone sus huevos en nidos de otras aves.",
    imagenes: ["/imagenes/mirlo-1.png"],
    audios: ["/audios/placeholder-audio.mp3"],
  },
  {
    nombre: "Tordo",
    cientifico: "Curaeus curaeus",
    tamano: "25–28 cm",
    alimentacion: "Insectos, granos y otros recursos del suelo.",
    habitat: "Campos, pastizales y sectores rurales.",
    identificacion: "Negro con brillo violáceo o azulado, robusto. *Se diferencia de Mirlo por el brillo de su plumaje",
    dimorfismo: "Leve; ambos sexos oscuros, hembra algo menos brillante.",
    imagenes: ["/imagenes/tordo-1.png"],
    audios: ["/audios/placeholder-audio.mp3"],
  },
];

function AudioPlayer({ src }: { src: string }) {
  const isPlaceholder = src.includes("placeholder");

  if (isPlaceholder) {
    return (
      <div className="mt-3 rounded-xl border border-dashed border-gray-300 bg-gray-50 p-3 text-sm text-gray-500">
        Audio pendiente de agregar
      </div>
    );
  }

  return (
    <audio controls className="mt-3 w-full">
      <source src={src} type="audio/mpeg" />
      Tu navegador no soporta audio.
    </audio>
  );
}

function BirdImage({ src, alt }: { src: string; alt: string }) {
  const isPlaceholder = src.includes("placeholder");

  if (isPlaceholder) {
    return (
      <div className="flex h-52 w-full items-center justify-center rounded-xl border border-dashed border-gray-300 bg-gray-100 text-center text-sm text-gray-500">
        Imagen pendiente
      </div>
    );
  }

  return (
      <div className="flex h-64 w-full items-center justify-center rounded-xl bg-gray-100 p-2">
        <img
        src={src}
        alt={alt}
        className="max-h-full max-w-full rounded-lg object-contain"
    />
  </div>
  );
}

export default function EspeciesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 to-white px-4 py-8 text-gray-900 md:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold md:text-5xl">Aves de Chile</h1>
          <p className="mx-auto mt-4 max-w-3xl text-base text-gray-600 md:text-lg">
            Fichas de aves frecuentes de la zona centro-sur y lacustre de Chile,
            con espacio para imágenes, audios y material educativo para tu
            póster con QR.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {aves.map((ave) => (
            <article
              key={ave.nombre}
              className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
            >
              <div className="grid gap-3">
                {ave.imagenes.map((img, idx) => (
                  <BirdImage
                    key={`${ave.nombre}-img-${idx}`}
                    src={img}
                    alt={`${ave.nombre} ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="mt-4">
                <h2 className="text-2xl font-semibold">{ave.nombre}</h2>
                <p className="text-sm italic text-gray-500">{ave.cientifico}</p>
              </div>

              <div className="mt-4 space-y-2 text-sm leading-6 text-gray-700">
                <p>
                  <span className="font-semibold text-gray-900">Tamaño:</span>{" "}
                  {ave.tamano}
                </p>
                <p>
                  <span className="font-semibold text-gray-900">
                    Alimentación:
                  </span>{" "}
                  {ave.alimentacion}
                </p>
                <p>
                  <span className="font-semibold text-gray-900">Hábitat:</span>{" "}
                  {ave.habitat}
                </p>
                <p>
                  <span className="font-semibold text-gray-900">
                    Identificación:
                  </span>{" "}
                  {ave.identificacion}
                </p>
                <p>
                  <span className="font-semibold text-gray-900">
                    Macho / hembra:
                  </span>{" "}
                  {ave.dimorfismo}
                </p>
                {ave.nota && (
                  <p className="rounded-lg bg-amber-50 p-3 text-amber-900">
                    <span className="font-semibold">Dato importante:</span>{" "}
                    {ave.nota}
                  </p>
                )}
              </div>

              <div className="mt-4">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                  Audios
                </h3>
                <div className="mt-2 space-y-2">
                  {ave.audios.map((audio, idx) => (
                    <AudioPlayer
                      key={`${ave.nombre}-audio-${idx}`}
                      src={audio}
                    />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </section>

        <footer className="mt-12 rounded-2xl border border-gray-200 bg-white p-6 text-sm text-gray-600 shadow-sm">
          <h3 className="text-base font-semibold text-gray-900">Créditos y fuentes</h3>
          <p className="mt-2">
            Para mayor información existe múltiples sitios como avesdechile.cl o Cornell Lab
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5">
            <li>Imágenes: Ilustraciones creadas artificialmente</li>
            <li>Audios: Audios extraídos de Xeno-canto</li>
          </ul>
        </footer>
      </div>
    </main>
  );
}