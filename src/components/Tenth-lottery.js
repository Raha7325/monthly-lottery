import React, { Component } from 'react';

class TenthLottery extends Component {

  render() {
    return(
      <>
        <div className='flex-col my-10 md:my-0'>
          <div className='mb-10 px-3 py-1 rounded-md bg-rose-200 text-center text-rose-400 font-bold'>صندوق ۱۰ ام <span className='text-xs'>(شروع از ۱۰-۰۹-۱۴۰۱)</span></div>
          <div className='grid grid-cols-3 gap-x-4 gap-y-5 place-items-center'>
          <div>
            <div className='w-[50px] h-[50px] rounded-[50px] shadow-md shadow-gray-200 text-gray-100 bg-gray-200 flex items-center justify-center col-span-1'>۳</div>
            <h5 className='text-xs text-gray-200 pt-2'>۱۴۰۱-۰۹-۱۰</h5>
          </div>          
          <div className='flex self-start'>
           <div className='w-[50px] h-[50px] rounded-[50px] shadow-md shadow-rose-400 text-rose-400 bg-rose-100  flex items-center justify-center col-span-1'>۲</div>
           <h5 className='text-xs text-gray-200 pt-2'> </h5>
          </div>          
          <div className='flex self-start'>
           <div className='w-[50px] h-[50px] rounded-[50px] shadow-md shadow-rose-400 text-rose-400 bg-rose-100  flex items-center justify-center col-span-1'>۱</div>
           <h5 className='text-xs text-gray-200 pt-2'> </h5>
          </div>             
          <div className='w-[50px] h-[50px] rounded-[50px]	shadow-md shadow-rose-400 text-rose-400 bg-rose-100 flex items-center justify-center col-span-1'>۶</div>         
           <div className='w-[50px] h-[50px] rounded-[50px]	shadow-md shadow-rose-400 text-rose-400 bg-rose-100 flex items-center justify-center col-span-1'>۵</div>
           <div className='w-[50px] h-[50px] rounded-[50px]	shadow-md shadow-rose-400 text-rose-400 bg-rose-100 flex items-center justify-center col-span-1'>۴</div>
           <div className='w-[50px] h-[50px] rounded-[50px]	shadow-md shadow-rose-400 text-rose-400 bg-rose-100 flex items-center justify-center col-span-1'>۹</div>
           <div className='w-[50px] h-[50px] rounded-[50px]	shadow-md shadow-rose-400 text-rose-400 bg-rose-100 flex items-center justify-center col-span-1'>۸</div>
           <div className='w-[50px] h-[50px] rounded-[50px]	shadow-md shadow-rose-400 text-rose-400 bg-rose-100 flex items-center justify-center col-span-1'>۷</div>
           <div className='w-[50px] h-[50px] rounded-[50px]	shadow-md shadow-rose-400 text-rose-400 bg-rose-100 flex items-center justify-center col-span-3'>۱۰</div>
          </div>
        </div>
      </>
    )
  }

}

export default TenthLottery;