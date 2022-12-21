import React, { Component } from 'react';

class FifthLottery extends Component {

  render() {
    return(
      <>
        <div className='flex-col mt-[40px] md:mt-0'>
          <div className='mb-10 px-3 py-1 rounded-md bg-green-200 text-center text-green-400 font-bold'>صندوق ۵ ام</div>
          <div className='grid grid-cols-3 gap-x-4 gap-y-5 place-items-center'>
          <div className='w-[50px] h-[50px] rounded-[50px] shadow-md shadow-green-400 text-green-400 bg-green-100 flex items-center justify-center col-span-1'>۳</div>
           <div className='w-[50px] h-[50px] rounded-[50px] shadow-md shadow-green-400 text-green-400 bg-green-100 flex items-center justify-center col-span-1'>۲</div>
           <div className='w-[50px] h-[50px] rounded-[50px] shadow-md shadow-green-400 text-green-400 bg-green-100 flex items-center justify-center col-span-1'>۱</div>
           <div className='w-[50px] h-[50px] rounded-[50px] shadow-md shadow-green-400 text-green-400 bg-green-100 flex items-center justify-center col-span-1'>۶</div>
           <div className='w-[50px] h-[50px] rounded-[50px] shadow-md shadow-green-400 text-green-400 bg-green-100 flex items-center justify-center col-span-1'>۵</div>
           <div className='w-[50px] h-[50px] rounded-[50px] shadow-md shadow-green-400 text-green-400 bg-green-100 flex items-center justify-center col-span-1'>۴</div>
           <div className='w-[50px] h-[50px] rounded-[50px] shadow-md shadow-green-400 text-green-400 bg-green-100 flex items-center justify-center col-span-1'>۹</div>
           <div className='w-[50px] h-[50px] rounded-[50px] shadow-md shadow-green-400 text-green-400 bg-green-100 flex items-center justify-center col-span-1'>۸</div>
           <div className='w-[50px] h-[50px] rounded-[50px] shadow-md shadow-green-400 text-green-400 bg-green-100 flex items-center justify-center col-span-1'>۷</div>
           <div className='w-[50px] h-[50px] rounded-[50px] shadow-md shadow-green-400 text-green-400 bg-green-100 flex items-center justify-center col-span-3'>۱۰</div>
          </div>
        </div>
      </>
    )
  }

}

export default FifthLottery;