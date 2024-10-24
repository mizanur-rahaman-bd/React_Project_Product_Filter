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
      <div className='text-center p-4 bg-slate-500 rounded-lg '>
        <p className='text-4xl font-bold text-[#F9E400]'>Perfume World</p>
      </div>
        <div className='flex gap-5 mt-10 mb-10'>
            <button onClick={()=>setData(alldata)} className='text-lg font-bold text-green-400 p-2 rounded-lg bg-slate-700 w-[100px] active:scale-110 hover:bg-[#C70039]'>All</button>
            <button onClick={()=>handleFilter('Male')} className='text-lg font-bold text-green-400 p-2 rounded-lg bg-slate-700 w-[100px] active:scale-110 hover:bg-[#C70039]'>Male</button>
            <button onClick={()=>handleFilter('Female')} className='text-lg font-bold text-green-400 p-2 rounded-lg bg-slate-700 w-[100px] active:scale-110 hover:bg-[#C70039]'>Female</button>
            <button onClick={()=>handleFilter('Unisex')} className='text-lg font-bold text-green-400 p-2 rounded-lg bg-slate-700 w-[100px] active:scale-110 hover:bg-[#C70039]'>Unisex</button>
        </div>
        <div className="product_card flex flex-wrap gap-5 rounded-[10px] bg-gray-400 py-6">

            {
                data.map((item, id)=>(
                    <div key={id} className="w-[450px] mx-auto bg-white shadow-lg rounded-lg overflow-hidden relative">
            {
                item.discount&&
                <div className="sell py-2 px-3 text-lg bg-red-600 text-white font-bold rounded-lg absolute top-1 right-1">Sale

            </div>

            }
            
            <div className="product_info_row flex gap-3 bg-lime-200">
                <div className="img_col">
                <img className="w-[230px] h-60 object-cover object-center" src={item.image} alt={'image'} />

                </div>
                <div className="text_col">
                <div className="p-1">
                    <h2 className="text-[#D91656] font-bold text-2xl">{item.brand}</h2>
                     <p className="text-[#7C00FE] font-semibold text-xl">{item.name}</p>
        <div className="mt-2 pl-3">
            
          <p className={item.discount? 'text-xl font-semibold text-gray-400': 'text-xl font-semibold text-black'}>{item.price}
            {
                item.discount&& <span className='text-[#F94C10] font-semibold pl-2'>{item.discount_price}</span>
            }
            
             </p>
          <ul className='list-disc'>
             <li className="text-gray-800 text-lg font-semibold">Size: {item.size}</li>
             <li className="text-gray-800 text-lg font-semibold">Fragrance: {item.fragrance_type}</li>
             <li className="text-gray-800 text-lg font-semibold">Gender: {item.gender}</li>
             <li className="text-gray-800 text-lg font-semibold">Origin: {item.origin_country}</li>
                
            </ul>
          
        </div>
      </div>

                </div>
            </div>
            <div className="button_row flex gap-3 justify-center items-center bg-lime-500">
            <div className="px-4 py-2 bg-lime-500 text-center">
        <button className="px-4 py-2 bg-lime-800 text-white text-sm font-medium rounded hover:bg-[#F5004F] active:scale-110">
          Add to Cart
        </button>
      </div>
      <div className="px-4 py-2 bg-lime-500 text-center">
        <button className="px-4 py-2 bg-lime-800 text-white text-sm font-medium rounded hover:bg-[#F5004F] active:scale-110">
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