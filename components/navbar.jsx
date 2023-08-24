import Link from "next/link"

const Navbar = () => {
  return (
    <div className="border-b">
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
            <Link href='/' className="ml-4 flex lg:ml-0 gap-x-2">
                <p className="font-bold text-xl">STORE</p>
            </Link>
            <ul className="mx-6 flex items-center space-x-4 lg:space-x-6">
                <Link href='/brands'>
                    <p className="font-bold text-l">Brands</p>
                </Link>
            </ul>
        </div>
    </div>
  )
}

export default Navbar