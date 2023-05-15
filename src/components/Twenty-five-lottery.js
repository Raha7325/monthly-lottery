import React, { Component } from 'react';

class TwentyFiveLottery extends Component {

  render() {
    return(
      <>
        <div className='flex-col shadow-md p-4'>
          <div className='mb-10 px-3 py-1 rounded-md bg-amber-200 text-center text-amber-500 font-bold'>صندوق ۲۵ ام <span className='text-xs'>(شروع از ۲۵-۰۸-۱۴۰۱)</span></div>
          <div className='grid grid-cols-3 gap-x-4 gap-y-5 place-items-center'>
          <div>
           <div className='w-[50px] h-[50px] rounded-[50px] shadow-md shadow-gray-200 text-gray-100 bg-gray-200 flex items-center justify-center col-span-1'>۳</div>
           <h5 className='text-xs text-gray-200 pt-2'>۱۴۰۱-۱۰-۲۵</h5>
          </div>
          <div>
            <div className='w-[50px] h-[50px] rounded-[50px] shadow-md shadow-gray-200 text-gray-100 bg-gray-200 flex items-center justify-center col-span-1'>۲</div>
            <h5 className='text-xs text-gray-200 pt-2'>۱۴۰۱-۰۹-۲۵</h5>
          </div>
          <div>
            <div className='w-[50px] h-[50px] rounded-[50px] shadow-md shadow-gray-200 text-gray-100 bg-gray-200 flex items-center justify-center col-span-1'>۱</div>
            <h5 className='text-xs text-gray-200 pt-2'>۱۴۰۱-۰۸-۲۵</h5>
          </div>           
          <div>
           <div className='w-[50px] h-[50px] rounded-[50px] shadow-gray-200 text-gray-100 bg-gray-200 flex items-center justify-center col-span-1'>۶</div>
           <h5 className='text-xs text-gray-200 pt-2'>۱۴۰۲-۰۲-۲۵</h5>
          </div>
          <div>
           <div className='w-[50px] h-[50px] rounded-[50px] shadow-md shadow-gray-200 text-gray-100 bg-gray-200 flex items-center justify-center col-span-1'>۵</div>
            <h5 className='text-xs text-gray-200 pt-2'>۱۴۰۲-۰۱-۲۵</h5>
          </div>
          <div>
           <div className='w-[50px] h-[50px] rounded-[50px] shadow-md shadow-amber-500 text-amber-500 bg-amber-100 flex items-center justify-center col-span-1'>۴</div>
           <h5 className='text-xs text-transparent pt-2'>.</h5>
          </div>
          <div>
           <div className='w-[50px] h-[50px] rounded-[50px] shadow-md shadow-gray-200 text-gray-100 bg-gray-200 flex items-center justify-center col-span-1'>۹</div>
           <h5 className='text-xs text-gray-200 pt-2'>۱۴۰۱-۱۱-۲۵</h5>
          </div>
          <div>
           <div className='w-[50px] h-[50px] rounded-[50px] shadow-md shadow-amber-500 text-amber-500 bg-amber-100 flex items-center justify-center col-span-1'>۸</div>
           <h5 className='text-xs text-transparent pt-2'>.</h5>
          </div>
          <div>
           <div className='w-[50px] h-[50px] rounded-[50px] shadow-md shadow-amber-500 text-amber-500 bg-amber-100 flex items-center justify-center col-span-1'>۷</div>
           <h5 className='text-xs text-transparent pt-2'>.</h5>
          </div>
          <div className='col-span-3'>
          <div className='w-[50px] h-[50px] rounded-[50px] shadow-md shadow-gray-200 text-gray-100 bg-gray-200 flex items-center justify-center'>۱۰</div>
           <h5 className='text-xs text-gray-200 pt-2 flex justify-center'>۱۴۰۱-۱۲-۲۵</h5>
          </div>
          </div>
        </div>
      </>
    )
  }

}

export default TwentyFiveLottery;