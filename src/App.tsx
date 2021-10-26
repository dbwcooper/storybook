import TailwindButton from './TailwindButton';

import CustomSandpack from './sandpack';

export default function App() {
  return (
    <div className='App'>
      <CustomSandpack>
        <div className='App'>
          <button className='px-8 p-2 rounded-lg cursor-pointer text-white bg-purple-400 border border-white hover:bg-primary-v1 hover:text-white transition-colors duration-200 '>
            Custom Button
          </button>
        </div>
      </CustomSandpack>
    </div>
  );
}
