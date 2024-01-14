import React, { Component } from 'react';

class TwentyFourLottery extends Component {

  render() {
    return(
      <>
        <div className='flex-col mt-[40px] md:mt-0 shadow-md p-4'>
          <div className='mb-10 px-3 py-1 rounded-md bg-fuchsia-100 text-center text-fuchsia-400 font-bold'>صندوق ۲۴ ام <span className='text-xs'>(شروع از ۲۴-۰۶-۱۴۰۲)</span></div>
          <div className='grid grid-cols-3 gap-x-4 gap-y-5 place-items-center'>
          <div>
           <div className='w-[50px] h-[50px] rounded-[50px] shadow-md shadow-fuchsia-400 text-fuchsia-400 bg-fuchsia-100 flex items-center justify-center col-span-1'>۳</div>
           <h5 className='text-xs text-transparent pt-2'> .</h5>
          </div>
          <div>
           <div className='w-[50px] h-[50px] rounded-[50px] shadow-md shadow-fuchsia-400 text-fuchsia-400 bg-fuchsia-100 flex items-center justify-center col-span-1'>۲</div>
           <h5 className='text-xs text-transparent pt-2'> .</h5>
          </div>
          <div>
           <div className='w-[50px] h-[50px] rounded-[50px] shadow-md shadow-gray-200 text-gray-100 bg-gray-200 flex items-center justify-center col-span-1'>۱</div>
           <h5 className='text-xs text-gray-200 pt-2'>۱۴۰۲-۰۶-۲۴</h5>
          </div>          
          <div>
            <div className='w-[50px] h-[50px] rounded-[50px] shadow-md shadow-gray-200 text-gray-100 bg-gray-200 flex items-center justify-center col-span-1'>۶</div>
            <h5 className='text-xs text-gray-200 pt-2'>۱۴۰۲-۰۷-۲۴</h5>
          </div>          
          <div>
           <div className='w-[50px] h-[50px] rounded-[50px] shadow-md shadow-gray-200 text-gray-100 bg-gray-200 flex items-center justify-center col-span-1'>۵</div>
           <h5 className='text-xs text-gray-200 pt-2'>۱۴۰۲-۰۹-۲۴</h5>
          </div>          
          <div>
           <div className='w-[50px] h-[50px] rounded-[50px] shadow-md shadow-fuchsia-400 text-fuchsia-400 bg-fuchsia-100 flex items-center justify-center col-span-1'>۴</div>
           <h5 className='text-xs text-transparent pt-2'> .</h5>
          </div>             
          <div>
           <div className='w-[50px] h-[50px] rounded-[50px] shadow-md shadow-gray-200 text-gray-100 bg-gray-200 flex items-center justify-center col-span-1'>۹</div>
           <h5 className='text-xs text-gray-200 pt-2'>۱۴۰۲-۱۰-۲۴</h5>
          </div>             
          <div>
           <div className='w-[50px] h-[50px] rounded-[50px] shadow-md shadow-md shadow-gray-200 text-gray-100 bg-gray-200 flex items-center justify-center col-span-1'>۸</div>
           <h5 className='text-xs text-gray-200 pt-2'>۱۴۰۲-۰۸-۲۴</h5>
          </div>  
          <div>
           <div className='w-[50px] h-[50px] rounded-[50px] shadow-md shadow-fuchsia-400 text-fuchsia-400 bg-fuchsia-100 flex items-center justify-center col-span-1'>۷</div>
           <h5 className='text-xs text-transparent pt-2'> .</h5>
          </div>
           <div className='w-[50px] h-[50px] rounded-[50px]	shadow-md shadow-fuchsia-400 text-fuchsia-400 bg-fuchsia-100 flex items-center justify-center col-span-3'>۱۰</div>
          </div>
        </div>
      </>
    )
  }

}

export default TwentyFourLottery;
