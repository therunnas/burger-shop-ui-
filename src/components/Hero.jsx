export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Gradiente de fundo */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-orange-50 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950" />
      {/* Glow decorativo */}
      <div className="pointer-events-none absolute -top-24 right-[-10%] h-72 w-72 rounded-full blur-3xl opacity-40 bg-accent-500 dark:opacity-30" />
      <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Hambúrguer artesanal, <span className="text-brand-600 dark:text-brand-500">feito na hora</span>.
          </h1>
          <p className="mt-4 text-neutral-700 dark:text-neutral-300 text-lg">
            Ingredientes frescos, combinações criativas e uma experiência que começa no primeiro olhar.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#menu" className="btn btn-primary">Ver Cardápio</a>
            <a href="#sobre" className="btn btn-ghost">Conhecer a casa</a>
          </div>
        </div>

        <div className="aspect-[4/3] rounded-3xl card grid place-items-center text-8xl">
          🍔
        </div>
      </div>
    </section>
  );
}
