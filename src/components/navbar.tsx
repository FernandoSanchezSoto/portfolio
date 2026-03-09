import { useEffect, useState } from 'react'

interface NavBarProps {
  name: string;
}

const links = [
  { href: '#about',      label: 'Stack'          },
  { href: '#experience', label: 'Experiencia'    },
  { href: '#projects',   label: 'Proyectos'      },
  { href: '#contact',    label: 'Contacto'       },
]

export function NavBar({ name }: NavBarProps) {
  const [active, setActive] = useState('')

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
    <nav className="w-full px-6 py-2 text-white flex items-center justify-between fixed top-0 left-0 z-50 bg-gradient-to-b from-[#0a0a0f] via-[#0a0a0f]/80 to-transparent">
      <h1 className="text-xl font-bold text-purple-400 tracking-widest cursor-pointer">
        {name}
      </h1>
      <ul className="flex gap-6 list-none">
        {links.map(({ href, label }) => (
          <li key={href}>
            <a
              href={href}
              className={`text-sm font-medium uppercase tracking-wider transition-colors relative
                after:absolute after:bottom-[-3px] after:left-0 after:h-px after:bg-purple-400 after:transition-all after:duration-300
                ${active === href.replace('#', '')
                  ? 'text-purple-400 after:w-full'
                  : 'text-gray-400 hover:text-white after:w-0 hover:after:w-full'
                }`}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
