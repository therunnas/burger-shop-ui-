export default function CartDrawer({ open, onClose, items, onInc, onDec, onClear }) {
  return (
    <div className={`fixed inset-0 z-40 ${open ? '' : 'pointer-events-none'}`} aria-hidden={!open}>
      {/* Overlay */}
      <div onClick={onClose} className={`absolute inset-0 bg-black/30 transition ${open ? 'opacity-100' : 'opacity-0'}`}></div>
      {/* Panel */}
      <aside className={`absolute right-0 top-0 h-full w-full sm:w-[420px] bg-white shadow-2xl transition-transform duration-300
        ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-4 border-b flex items-center justify-between">
          <h3 className="text-xl font-bold">Seu carrinho</h3>
          <button onClick={onClose} className="px-3 py-1 rounded border">Fechar</button>
        </div>
        <div className="p-4 space-y-3 max-h-[calc(100%-150px)] overflow-auto">
          {items.length === 0 && <p className="text-neutral-600">Seu carrinho está vazio.</p>}
          {items.map((it) => (
            <div key={it.id} className="flex items-center gap-3 border rounded-xl p-3">
              <div className="text-3xl">{it.img}</div>
              <div className="flex-1">
                <div className="font-bold">{it.name}</div>
                <div className="text-sm text-neutral-600">R$ {it.price.toFixed(2)}</div>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => onDec(it)} className="px-2 rounded border">-</button>
                <span className="w-6 text-center">{it.qty}</span>
                <button onClick={() => onInc(it)} className="px-2 rounded border">+</button>
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 border-t space-y-3">
          <div className="flex items-center justify-between font-bold">
            <span>Total</span>
            <span>R$ {items.reduce((s,i)=>s + i.price * i.qty, 0).toFixed(2)}</span>
          </div>
          <div className="flex gap-2">
            <button onClick={onClear} className="flex-1 px-4 py-2 rounded-xl border">Limpar</button>
            <button className="flex-1 px-4 py-2 rounded-xl bg-brand-500 text-white hover:bg-brand-600">Finalizar</button>
          </div>
        </div>
      </aside>
    </div>
  )
}