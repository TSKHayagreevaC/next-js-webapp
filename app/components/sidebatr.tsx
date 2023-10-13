'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import SignoutDropdown from './signout'
 
export function Sidebar() {
  const pathname = usePathname()
  const routes = ['Dashboard', 'Playground', 'Prompts', 'Evaluations', 'Applications', 'Fine Tuning']
 
  return (
    <div className='bg-gray-200' style={{minHeight: '100vh', maxWidth: '13%'}}>
      <nav className='px-8'>
        <ul className="flex flex-col justify-start items-start">
          <li className='h-16 flex items-center mb-4'>
            <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
            <img
              className="mx-auto h-10 w-auto"
              src="data:image/png;base64,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"
              alt="Your Company"
            />
            </Link>
          </li>
          {routes.map((eachItem: string) => 
            <li className="mb-4" key={eachItem}>
                <Link href={`${eachItem.replaceAll(' ', '').toLocaleLowerCase()}`}  className="block hover:text-blue-300">
                    {eachItem}
                </Link>
            </li>
          )}

        </ul>
      </nav>
    </div>

  )
}
