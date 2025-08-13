import { MENU } from '../data'
export default function MenuGrid({ onAdd }) {
  return (
    <section id="menu" className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex items-end justify-between mb-6">
        <div>
          <h2 className="text-3xl font-bold">Cardápio</h2>
          <p className="text-neutral-600 dark:text-neutral-400">Escolha seu combo favorito.</p>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {MENU.map(item => (
          <article key={item.id} className="card p-5 flex flex-col hover:shadow-glow transition-shadow">
            <div className="text-6xl mb-3">{item.img}</div>
            <h3 className="font-bold text-lg">{item.name}</h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm">{item.desc}</p>
            <div className="mt-auto flex items-center justify-between pt-4">
              <span className="text-brand-700 dark:text-brand-400 font-extrabold">R$ {item.price.toFixed(2)}</span>
              <button onClick={() => onAdd(item)} className="btn btn-primary">
                Adicionar
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
