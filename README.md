# 🍔 Burger Shop UI

Interface moderna para hamburgueria, feita com **React + Vite + Tailwind**. Inclui landing page, grade de produtos e **carrinho lateral** com totalizador.

https://github.com/therunnas/burger-shop-ui-

## ✨ Destaques
- UI limpa, responsiva e com foco em conversão
- Cardápio dinâmico (mock)
- Carrinho lateral (drawer) com somatório
- Design system simples via Tailwind (cores brand + sombras)
- Build rápido com Vite

## 🚀 Como rodar
```bash
npm install
npm run dev
```

## 📦 Build de produção
```bash
npm run build
npm run preview
```

## 🗂 Estrutura
```
burger-shop-ui/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── MenuGrid.jsx
│   │   ├── CartDrawer.jsx
│   │   └── Footer.jsx
│   ├── data.js
│   ├── main.jsx
│   ├── App.jsx
│   └── styles.css
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

## 📝 Próximos passos (issues sugeridas)
- [ ] Adicionar busca e filtro por categoria
- [ ] Badge de quantidade no botão do carrinho
- [ ] Dark mode
- [ ] Página de checkout (mock)
- [ ] Integração com um backend/planilha
- [ ] Testes e Preview com GitHub Actions