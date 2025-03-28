import './style/App.css';
import React from 'react';
import TenthLottery from './components/tenth-lottery'
import SeventhLottery from './components/seventh-lottery'
import SeventeenthLottery from './components/seventeenth-lottery'
import FifthLottery from './components/fifth-lottery'
function App() {
  return (
    <div className='App w-full h-full bg-gray-100 px-4 py-8'>
      <header className="container mx-auto">
        <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
          <div className='col-span-1 md:col-span-3'>
            <h4 className='shadow-lg text-center p-2 bg-violet-100 rounded text-violet-200 text-bold'>شرایط صندوق</h4>
            <ul className='text-violet-300 text-sm text-justify mx-3 px-3 list-disc pt-5'>
              <li>ضمن عرض خوش آمدگویی خدمت همه ی عزیزان شرایط صندوق به شرح زیر می باشد:</li>
              <li className='pt-2'>واریزی ها یک روز قبل از تاریخ قرعه کشی انجام شود.</li>
              <li>افرادی که واریزی خود را انجام نداده باشند از قرعه کشی آن روز حذف خواهند شد.</li>
              <li>اگر بنا به هر دلیلی شرکت کننده دو مرحله در واریزی همکاری لازم رو نداشته باشند از صندوق حذف خواهند شد.</li>
              <li>ماه اول متعلق  به صاحب صندوق می باشد.</li>
              <li>در حال حاضر قرعه کشی های زیر در حال انجام می باشد:
                <ul className='px-4 pt-1 list-disc'>
                  <li>۵۰۰ هزار تومان ماهانه  =&gt;  ۵ میلیون تومان</li>
                  <li>۱ میلیون تومان ماهانه  =&gt;  ۱۰ میلیون تومان</li>
                  <li>۲ میلیون تومان ماهانه  =&gt;  ۲۰ میلیون تومان</li>
                  <li>۳ میلیون تومان ماهانه  =&gt;  ۳۰ میلیون تومان</li>
                  <li>۴ میلیون تومان ماهانه  =&gt;  ۴۰ میلیون تومان</li>
                  <li>۵ میلیون تومان ماهانه  =&gt;  ۵۰ میلیون تومان</li>
                  <li>مدت زمان تمام قرعه کشی ها ۱۰ ماه می باشد.</li>
                </ul>
              </li>
            </ul>
          </div>
          <FifthLottery className='col-span-1' />
          <SeventhLottery className='col-span-1' />
          <TenthLottery className='col-span-1' />
          <SeventeenthLottery className='col-span-1' />
        </div>
      </header>
    </div>
  );
}

export default App;

