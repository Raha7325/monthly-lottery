import React, { Component } from 'react';

class TwentyFourLottery extends Component {

  render() {
    return (
      <>
        <div className='flex-col mt-[40px] md:mt-0 shadow-md p-4'>
          <div className='mb-10 px-3 py-1 rounded-md bg-cyan-100 text-center text-cyan-400 font-bold'>صندوق ۲۰ ام <span className='text-xs'>(شروع از ۲۰-۱۲-۱۴۰۲)</span></div>
          <div className='grid grid-cols-3 gap-x-4 gap-y-5 place-items-center'>
            <div>
              <div className='w-[50px] h-[50px] rounded-[50px] shadow-md shadow-gray-200 text-gray-100 bg-gray-200 flex items-center justify-center col-span-1'>۳</div>
              <h5 className='text-xs text-gray-200 pt-2'>۱۴۰۳-۰۷-۲۰</h5>
            </div>
            <div>
              <div className='w-[50px] h-[50px] rounded-[50px] shadow-md shadow-gray-200 text-gray-100 bg-gray-200 flex items-center justify-center col-span-1'>۲</div>
              <h5 className='text-xs text-gray-200 pt-2'>۱۴۰۳-۰۶-۲۰</h5>
            </div>
            <div>
              <div className='w-[50px] h-[50px] rounded-[50px] shadow-md shadow-gray-200 text-gray-100 bg-gray-200 flex items-center justify-center col-span-1'>۱</div>
              <h5 className='text-xs text-gray-200 pt-2'>۱۴۰۲-۱۲-۲۰</h5>
            </div>
            <div>
              <div className='w-[50px] h-[50px] rounded-[50px] shadow-md shadow-gray-200 text-gray-100 bg-gray-200 flex items-center justify-center col-span-1'>۶</div>
              <h5 className='text-xs text-gray-200 pt-2'>۱۴۰۳-۰۵-۲۰</h5>
            </div>
            <div>
              <div className='w-[50px] h-[50px] rounded-[50px] shadow-md shadow-gray-200 text-gray-100 bg-gray-200 flex items-center justify-center col-span-1'>۵</div>
              <h5 className='text-xs text-gray-200 pt-2'>۱۴۰۳-۰۴-۲۰</h5>
            </div>
            <div>
              <div className='w-[50px] h-[50px] rounded-[50px] shadow-md shadow-cyan-400 text-cyan-400 bg-cyan-100 flex items-center justify-center col-span-1'>۴</div>
              <h5 className='text-xs text-transparent pt-2'> .</h5>
            </div>
            <div>
              <div className='w-[50px] h-[50px] rounded-[50px] shadow-md shadow-gray-200 text-gray-100 bg-gray-200 flex items-center justify-center col-span-1'>۹</div>
              <h5 className='text-xs text-gray-200 pt-2'>۱۴۰۳-۰۲-۲۰</h5>
            </div>
            <div>
              <div className='w-[50px] h-[50px] rounded-[50px] shadow-md shadow-md shadow-gray-200 text-gray-100 bg-gray-200 flex items-center justify-center col-span-1'>۸</div>
              <h5 className='text-xs text-gray-200 pt-2'>۱۴۰۳-۰۳-۲۰</h5>
            </div>
            <div>
              <div className='w-[50px] h-[50px] rounded-[50px] shadow-md shadow-cyan-400 text-cyan-400 bg-cyan-100 flex items-center justify-center col-span-1'>۷</div>
              <h5 className='text-xs text-transparent pt-2'> .</h5>
            </div>
            <div className='col-span-3'>
              <div className='w-[50px] h-[50px] rounded-[50px] shadow-md shadow-gray-200 text-gray-100 bg-gray-200 flex items-center justify-center'>۱۰</div>
              <h5 className='text-xs text-gray-200 pt-2 flex justify-center'>۱۴۰۳-۰۱-۲۰</h5>
            </div>
          </div>
        </div>
      </>
    )
  }

}

export default TwentyFourLottery;
