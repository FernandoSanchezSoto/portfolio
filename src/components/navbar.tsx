import { useEffect, useState } from 'react'

interface NavBarProps {
  name: string;
}

const links = [
  { href: '#about',      label: 'Stack'       },
  { href: '#experience', label: 'Experiencia' },
  { href: '#projects',   label: 'Proyectos'   },
  { href: '#contact',    label: 'Contacto'    },
]

export function NavBar({ name }: NavBarProps) {
  const [active, setActive] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const sections = document.querySelectorAll<HTMLElement>('section[id]')
      let current = ''
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 100) current = s.id
      })
      setActive(current)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{ background: 'linear-gradient(to bottom, #0a0a0f, rgba(10,10,15,0.9), transparent)' }}
      className="w-full px-6 py-3 text-white fixed top-0 left-0 z-50">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold tracking-widest" style={{ color: '#a855f7' }}>{name}</h1>

        {/* Desktop */}
        <ul className="hidden md:flex gap-6 list-none m-0 p-0">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a href={href}
                className="text-sm font-medium uppercase tracking-wider transition-colors"
                style={{ color: active === href.replace('#', '') ? '#a855f7' : '#9ca3af' }}>
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button className="md:hidden flex flex-col gap-1.5 p-1 bg-transparent border-0 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}>
          <span className="block w-6 h-0.5 bg-white transition-all duration-300"
            style={{ transform: menuOpen ? 'rotate(45deg) translateY(8px)' : 'none' }} />
          <span className="block w-6 h-0.5 bg-white transition-all duration-300"
            style={{ opacity: menuOpen ? 0 : 1 }} />
          <span className="block w-6 h-0.5 bg-white transition-all duration-300"
            style={{ transform: menuOpen ? 'rotate(-45deg) translateY(-8px)' : 'none' }} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col gap-4 mt-4 pb-4 list-none p-0 border-t border-gray-800 pt-4">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a href={href} onClick={() => setMenuOpen(false)}
                className="text-sm font-medium uppercase tracking-wider block"
                style={{ color: active === href.replace('#', '') ? '#a855f7' : '#9ca3af' }}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
