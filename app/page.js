import Image from 'next/image'
const products = require('../data/products')
import Product from '@/components/product'

const HomePage = () => {
  return (
    <div>
      <section className='py-16 md:px-6 lg:px-8'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
            {products.map((product) => {
              return <Product product={product}/>
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

// (
//   <div className='w-full h-[300px] bg-pink-200'>
//     <Image src={product.image} className='max-h-[160px] group-hover:scale-110'/>
//     <p className=' font-bold'>{product.name}</p>
//     <p>{product.brand}</p>
//   </div>
// )

export default HomePage