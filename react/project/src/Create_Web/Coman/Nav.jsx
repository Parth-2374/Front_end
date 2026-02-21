import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'home', href: '#', current: true },
  { name: 'about', href: '#', current: false },
  { name: 'services', href: '#', current: false },
  { name: 'page', href: '#', current: false },
  { name: 'contact', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

 function Nav() {
  return (
    <Disclosure
      as="nav"
      className="relative bg-white  dark:after:pointer-events-none dark:after:absolute dark:after:inset-x-0 dark:after:bottom-0 dark:after:h-px dark:after:bg-white/10 border"
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-black    hover:!text-orange-500 focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-8 group-data-open:hidden " />
              <XMarkIcon aria-hidden="true" className="hidden size-10 group-data-open:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              {/* <img
                alt="Your Company"
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                className="h-8 w-auto"
              /> */}
            </div>
            <div className="hidden sm:ml-6 sm:block ">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name }
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      "group block  transition-all duration-300 !no-underline",
                      item.current
                        ? 'hover:bg-orange-600 text-black '
                        : 'text-black hover:bg-orange-600 ',
                      'rounded-md px-3 py-2 font-medium text-1xl text-black uppercase  hover:text-white',
                    )}
                  >
                   <span className='transition-colors duration-300 group-hover:text-white'>
                    {item.name}
                   </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative rounded-full  p-1 text-gray-400 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500 dark:hover:text-black hover:bg-orange-500 border "
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="size-8 " />
            </button>

            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <MenuButton className="relative flex rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                <span className="absolute -inset-1.5" />
                <span className="sr-only">Open user menu</span>
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  className="size-10 rounded-full bg-gray-800 outline -outline-offset-1 outline-white/10 "
                />
              </MenuButton>

              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg outline outline-black/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in dark:bg-gray-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10 "
              >
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-2xl text-black hover:bg-orange-500 hover:!text-white transition-colors duration-300 !no-underline "
                  >
                    Your profile
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 !no-underline text-2xl text-black  hover:bg-orange-500 hover:!text-white transition-colors duration-300"
                  >
                    Settings
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 !no-underline text-2xl text-black  hover:bg-orange-500 hover:!text-white transition-colors duration-300"
                  >
                    Sign out
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

    <DisclosurePanel className="sm:hidden">
  <div className="space-y-1 px-2 pt-2 pb-3 bg-white sm:bg-white">
    {navigation.map((item) => (
      <DisclosureButton
        key={item.name}
        as="a"
        href={item.href}
        aria-current={item.current ? "page" : undefined}
        className={classNames(
          "group block rounded-md px-3 py-2 font-medium uppercase text-3xl transition-all duration-300 !no-underline",
          item.current
            ? "hover:bg-orange-600 text-black"
            : " text-black hover:bg-orange-600"
        )}
      >
        <span className="transition-colors duration-300 group-hover:text-white">
          {item.name}
        </span>
      </DisclosureButton>
    ))}
  </div>
</DisclosurePanel>


    </Disclosure>
  )
}
export default Nav