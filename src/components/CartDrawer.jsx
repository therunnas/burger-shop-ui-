export default function CartDrawer({ open, onClose, items, onInc, onDec, onClear }) {
  return (
    <div className={`fixed inset-0 z-40 ${open ? '' : 'pointer-events-none'}`} aria-hidden={!open}>
      {/* Overlay */}
      <div onClick={onClose} className={`absolute inset-0 bg-black/40 transition ${open ? 'opacity-100' : 'opacity-0'}`}></div>
      {/* Panel */}
      <aside className={`absolute right-0 top-0 h-full w-full sm:w-[420px] bg-white dark:bg-neutral-900 dark:text-neutral-100 border-l dark:border-white/10 shadow-2xl transition-transform duration-300
        ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-4 border-b dark:border-white/10 flex items-center justify-between">
          <h3 className="text-xl font-bold">Seu carrinho</h3>
          <button onClick={onClose} className="btn btn-ghost">Fechar</button>
        </div>
        <div className="p-4 space-y-3 max-h-[calc(100%-150px)] overflow-auto">
          {items.length === 0 && <p className="text-neutral-600 dark:text-neutral-400">Seu carrinho está vazio.</p>}
          {items.map((it) => (
            <div key={it.id} className="flex items-center gap-3 rounded-xl border p-3 dark:border-white/10">
              <div className="text-3xl">{it.img}</div>
              <div className="flex-1">
                <div className="font-bold">{it.name}</div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">R$ {it.price.toFixed(2)}</div>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => onDec(it)} className="btn btn-ghost px-2">-</button>
                <span className="w-6 text-center">{it.qty}</span>
                <button onClick={() => onInc(it)} className="btn btn-ghost px-2">+</button>
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 border-t dark:border-white/10 space-y-3">
          <div className="flex items-center justify-between font-bold">
            <span>Total</span>
            <span>R$ {items.reduce((s,i)=>s + i.price * i.qty, 0).toFixed(2)}</span>
          </div>
          <div className="flex gap-2">
            <button onClick={onClear} className="btn btn-ghost flex-1">Limpar</button>
            <button className="btn btn-primary flex-1">Finalizar</button>
          </div>
        </div>
      </aside>
    </div>
  )
}
