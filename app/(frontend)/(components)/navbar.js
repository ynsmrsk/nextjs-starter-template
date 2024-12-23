import Link from "next/link"

const links = [
  { href: '/', label: 'home' },
  { href: '/projects', label: 'projects' },
  { href: '/services', label: 'services' },
  { href: '/contact', label: 'contact' },
]

export default function Navbar() {
  return (
    <nav className="flex items-center justify-center gap-8">
      {links.map((link) => (
        <Link key={link.href} href={link.href}>
          {link.label}
        </Link>
      ))}
    </nav>
  )
}