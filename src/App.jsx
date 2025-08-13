import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MenuGrid from './components/MenuGrid'
import CartDrawer from './components/CartDrawer'
import Footer from './components/Footer'

export default function App() {
  const [open, setOpen] = useState(false)
  const [items, setItems] = useState([])

  const addItem = (item) => {
    setOpen(true)
    setItems(prev => {
      const found = prev.find(p => p.id === item.id)
      if (found) return prev.map(p => p.id === item.id ? { ...p, qty: p.qty + 1 } : p)
      return [...prev, { ...item, qty: 1 }]
    })
  }
  const inc = (item) => setItems(prev => prev.map(p => p.id === item.id ? { ...p, qty: p.qty + 1 } : p))
  const dec = (item) => setItems(prev => prev.map(p => p.id === item.id ? { ...p, qty: Math.max(1, p.qty - 1) } : p))
  const clear = () => setItems([])

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onCartOpen={() => setOpen(true)} />
      <Hero />
      <MenuGrid onAdd={addItem} />
      <Footer />
      <CartDrawer open={open} onClose={() => setOpen(false)} items={items} onInc={inc} onDec={dec} onClear={clear} />
    </div>
  )
}