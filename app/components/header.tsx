'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import SignoutDropdown from './signout'
 
export function Header() {
  const pathname = usePathname()
 
  return (
    <div className='bg-gray-200'>
      <nav className='mx-8'>
        <ul className="h-16 flex flex-row items-center justify-between">
          <li className='w-80'>
              <span>Bread Crumbs</span>
          </li>

          <li>
            <SignoutDropdown />
          </li>
        </ul>
      </nav>
    </div>

  )
}