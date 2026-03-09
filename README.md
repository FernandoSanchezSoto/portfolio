# 🚀 Fernando Sánchez Soto — Portfolio

Portfolio personal desarrollado con **Next.js**, **React**, **TypeScript** y **Tailwind CSS**.

## Stack

- **Next.js 14** (Pages Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS**

## Estructura

```
portfolio/
├── pages/
│   ├── _app.tsx        # App wrapper
│   ├── _document.tsx   # HTML document
│   └── index.tsx       # Página principal
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── data/
│   └── portfolio.ts    # ← Edita aquí tus datos
├── styles/
│   └── globals.css
├── types/
│   └── index.ts
├── tailwind.config.ts
└── package.json
```

## Instalación

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build de producción
npm run build
npm start
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Personalización

Edita el archivo `data/portfolio.ts` para actualizar:
- Información personal (nombre, bio, email, etc.)
- Experiencia laboral
- Proyectos
- Educación y certificaciones
- Habilidades técnicas

## Deploy en Vercel

```bash
npm install -g vercel
vercel
```
