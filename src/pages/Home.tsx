import RoundedContainer from '@/components/container/RoundedContainer';
import gameScreenshot from '@/assets/images/game-screenshot.png';

const Home = () => {
  return (
    <RoundedContainer color='bg-red-500'>
      <div className='mx-60 mb-12'>
        <h1 className='text-4xl font-bold text-white'>Welcome to NookureStaff</h1>
        <p className='text-white'>The most advanced staff utils plugin made for large servers.</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, perferendis. Laboriosam enim tempore, iusto
          deleniti quam fuga. Ad voluptatum veniam animi sequi nulla ut recusandae facilis repellat, sint natus quam?
        </p>
      </div>
      <section className='flex justify-center'>
        <img src={gameScreenshot} alt='Game Screenshot' className='w-4/6 rounded-lg' />
      </section>
    </RoundedContainer>
  );
};

export default Home;
