export default function Navbar({ onCartOpen }) {
  return (
    <header className="sticky top-0 z-30 bg-white/70 backdrop-blur border-b">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🍔</span>
          <span className="text-xl font-bold">Burger Shop</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#menu" className="hover:text-brand-600">Cardápio</a>
          <a href="#sobre" className="hover:text-brand-600">Sobre</a>
          <a href="#contato" className="hover:text-brand-600">Contato</a>
        </nav>
        <button onClick={onCartOpen} className="px-4 py-2 rounded-xl bg-brand-500 text-white hover:bg-brand-600 transition shadow-soft">
          Ver carrinho
        </button>
      </div>
    </header>
  )
}