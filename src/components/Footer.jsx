export default function Footer() {
  return (
    <footer className="border-t">
      <div className="max-w-6xl mx-auto px-4 py-8 flex items-center justify-between text-sm text-neutral-600">
        <p>© {new Date().getFullYear()} Burger Shop. Todos os direitos reservados.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-brand-600">Instagram</a>
          <a href="#" className="hover:text-brand-600">WhatsApp</a>
        </div>
      </div>
    </footer>
  )
}