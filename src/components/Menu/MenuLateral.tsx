import { useEffect, useRef, useState, MutableRefObject } from 'react'
import { useLocation, useNavigate } from 'react-router'

function MenuLateral() {
  const [isOpen, setIsOpen] = useState(false)
  const sidebarRef = useRef(null)
  const address = useLocation().pathname

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const useClickOutside = (
    isOpen: boolean,
    sidebarRef: MutableRefObject<HTMLElement | null>,
    setIsOpen: (value: boolean) => void
  ) => {
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          sidebarRef.current &&
          !sidebarRef.current.contains(event.target as Node)
        ) {
          setIsOpen(false) // Fecha a sidebar se clicar fora dela
        }
      }

      if (isOpen) {
        document.addEventListener('mousedown', handleClickOutside)
      } else {
        document.removeEventListener('mousedown', handleClickOutside)
      }

      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [isOpen, sidebarRef, setIsOpen])
  }

  useClickOutside(isOpen, sidebarRef, setIsOpen)

  const navigate = useNavigate()

  return (
    <>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        onClick={toggleSidebar}
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-green- focus:outline-none focus:ring-2 focus:ring-gray-200"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          />
        </svg>
      </button>

      <aside
        id="default-sidebar"
        ref={sidebarRef}
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full py-4 overflow-y-auto bg-green">
          <img
            src="/logo.png"
            alt="logo genérico"
            className="w-1/3 mx-auto mb-8"
          />
          <ul className="space-y-2 font-medium">
            <li onClick={() => navigate('/visita')}>
              <a
                href=""
                className={`flex items-center p-2 text-white  dark:text-white hover:bg-green- ${address === '/visita' ? 'bg-green-light text-green-dark' : 'opacity-100'}`}
              >
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Visitas da Semana
                </span>
              </a>
            </li>
            <li onClick={() => navigate('/historico')}>
              <a
                href=""
                className={`flex items-center p-2 text-white  dark:text-white hover:bg-green- ${address === '/historico' ? 'bg-green-light text-green-dark' : 'opacity-100'}`}
              >
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Histórico de Visitas
                </span>
              </a>
            </li>
            <li onClick={() => navigate('/minhas')}>
              <a
                href=""
                className={`flex items-center p-2 text-white  dark:text-white hover:bg-green- ${address === '/minhas' ? 'bg-green-light text-green-dark' : 'opacity-100'}`}
              >
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Minhas Visitas
                </span>
              </a>
            </li>
            <li>
              <a
                href=""
                className={`flex items-center p-2 text-white  dark:text-white hover:bg-green- ${address === '/cadastro' ? 'bg-green-light text-green-dark' : 'opacity-100'}`}
              >
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Inserir Nova Visita
                </span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  )
}

export default MenuLateral
