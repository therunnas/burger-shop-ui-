import ThemeToggle from "./ThemeToggle";

export default function Navbar({ onCartOpen }) {
  return (
    <header className="sticky top-0 z-30 border-b bg-white/70 backdrop-blur dark:bg-neutral-900/60 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🍔</span>
          <span className="text-xl font-extrabold tracking-tight">
            <span className="text-brand-500">Burger</span> <span className="dark:text-white">Shop</span>
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#menu" className="hover:text-brand-600 dark:hover:text-brand-400">Cardápio</a>
          <a href="#sobre" className="hover:text-brand-600 dark:hover:text-brand-400">Sobre</a>
          <a href="#contato" className="hover:text-brand-600 dark:hover:text-brand-400">Contato</a>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={onCartOpen}
            className="btn btn-primary rounded-xl"
          >
            Ver carrinho
          </button>
        </div>
      </div>
    </header>
  );
}
