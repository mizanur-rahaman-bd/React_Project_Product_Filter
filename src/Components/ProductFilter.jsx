import React, { useState } from 'react'
import alldata from '../DataBase/DataBase'

const ProductFilter = () => {

    const [ data , setData ] = useState(alldata)


    const handleFilter = (gender)=>{
        const fiterData = alldata.filter((item)=>{
            return item.gender === gender
        })
        console.log(fiterData)
        setData(fiterData)

    }



    
  return (
    <>
     
     <div className="container">
        <div className='flex gap-5 mt-10 mb-10'>
            <button onClick={()=>setData(alldata)}>All</button>
            <button onClick={()=>handleFilter('Male')}>Male</button>
            <button onClick={()=>handleFilter('Female')}>Female</button>
            <button onClick={()=>handleFilter('Unisex')}>Unisex</button>
        </div>
        <div className="product_card flex flex-wrap gap-5 rounded-[10px]">

            {
                data.map((item, id)=>(
                    <div key={id} className="w-[450px] mx-auto bg-white shadow-lg rounded-lg overflow-hidden relative">
            {
                item.discount&&
                <div className="sell py-2 px-3 text-sm bg-green-500 absolute top-1 right-1">Sale

            </div>

            }
            
            <div className="product_info_row flex gap-3">
                <div className="img_col">
                <img className="w-[230px] h-60 object-cover object-center" src={item.image} alt={'image'} />

                </div>
                <div className="text_col">
                <div className="p-1">
                    <h2 className="text-gray-900 font-bold text-xl">{item.brand}</h2>
                     <p className="text-gray-700 text-sm">{item.name}</p>
        <div className="mt-2 pl-3">
            
          <p className={item.discount? 'text-lg font-semibold text-gray-400': 'text-lg font-semibold text-black'}>{item.price}
            {
                item.discount&& <span className='text-orange-400 pl-2'>{item.discount_price}</span>
            }
            
             </p>
          <ul className='list-disc'>
          <li className="text-gray-600 text-sm">Size: {item.size}</li>
          <li className="text-gray-600 text-sm">Fragrance: {item.fragrance_type}</li>
          <li className="text-gray-600 text-sm">Gender: {item.gender}</li>
          <li className="text-gray-600 text-sm">Origin: {item.origin_country}</li>
                
            </ul>
          
        </div>
      </div>

                </div>
            </div>
            <div className="button_row flex gap-3 justify-center items-center bg-gray-100">
            <div className="px-4 py-2 bg-gray-100 text-center">
        <button className="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded hover:bg-blue-600">
          Add to Cart
        </button>
      </div>
      <div className="px-4 py-2 bg-gray-100 text-center">
        <button className="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded hover:bg-blue-600">
          Buy Now
        </button>
      </div>

            </div>
      
      
      
    </div>


                )
            )
            }


        
        </div>
     </div>
   
    
    </>
  )
}

export default ProductFilter