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
    <nav className="w-full px-6 py-3 text-white fixed top-0 left-0 z-50 bg-gradient-to-b from-[#0a0a0f] via-[#0a0a0f]/90 to-transparent">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-purple-400 tracking-widest">{name}</h1>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-6 list-none">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a href={href}
                className={`text-sm font-medium uppercase tracking-wider transition-colors
                  ${active === href.replace('#', '') ? 'text-purple-400' : 'text-gray-400 hover:text-white'}`}>
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger - solo móvil */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Menú desplegable móvil */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col gap-4 mt-4 pb-4 list-none border-t border-[#1e1e30] pt-4">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a href={href}
                onClick={() => setMenuOpen(false)}
                className={`text-sm font-medium uppercase tracking-wider transition-colors block
                  ${active === href.replace('#', '') ? 'text-purple-400' : 'text-gray-400'}`}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
