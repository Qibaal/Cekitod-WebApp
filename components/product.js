import React from 'react'
import Link from 'next/link';
import Image from 'next/image'
// import { BsPlus, BsEyeFill } from 'react-icons/bs'

const Product = ({product}) => {
    const {id, image, brand, name, price} = product;
    return (
        <div>
            <div className='border border-[#e4e4e4] rounded-lg h-[300px] mb-4 relative overflow-hidden group transition shadow-xl'>
                <div className='w-full h-full flex justify-center items-center'>
                    <div className='w-[200px] mx-auto flex justify-center items-center'>
                        <Image src={image} className=' max-h-[160px] group-hover:scale-110'/>
                    </div>
                </div>
            </div>
            <div>
                <div className='text-gray-500 mb-1'>{brand}</div>
                <h2 className='font-bold text-xl'>{name}</h2>
                <h2>Rp {price}</h2>
            </div>
        </div>
  )
}

export default Product