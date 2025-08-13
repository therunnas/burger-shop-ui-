export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Hambúrguer artesanal, <span className="text-brand-600">feito na hora</span>.
          </h1>
          <p className="mt-4 text-neutral-600 text-lg">
            Ingredientes frescos, combinações criativas e uma experiência que começa no primeiro olhar.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#menu" className="px-5 py-3 rounded-xl bg-brand-500 text-white hover:bg-brand-600 transition shadow-soft">Ver Cardápio</a>
            <a href="#sobre" className="px-5 py-3 rounded-xl border hover:bg-white transition">Conhecer a casa</a>
          </div>
        </div>
        <div className="aspect-[4/3] rounded-3xl bg-white shadow-soft grid place-items-center text-8xl">
          🍔
        </div>
      </div>
    </section>
  )
}