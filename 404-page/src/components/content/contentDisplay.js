import Image from './image.js';
import Text from './text.js';
import Button from './button.js';

const ContentDisplay = () => {
    return (
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 py-16 md:py-32'>
        <div className='flex items-center pl-4 md:pl-24'>
            <Image />
        </div>
        <div className='flex flex-col justify-center pl-10 md:pl-12'>
            <Text />
            <div className='mt-8 md:mt-16'>
                <Button />
            </div>
        </div>
      </div>
    );
  }
  
  export default ContentDisplay;
  