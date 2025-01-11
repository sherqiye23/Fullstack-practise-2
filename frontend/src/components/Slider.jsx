import Carousel from 'react-bootstrap/Carousel';

export default function Slider() {
    return (
        <Carousel fade>
            <Carousel.Item interval={1000} className='relative flex items-center justify-center'>
                <img className='w-full h-[80vh] object-cover' src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg" alt="..." />
                <Carousel.Caption className='absolute max-w-[800px] top-[5%] lg:top-[10%] flex items-start flex-col'>
                    <div>
                        <div className="text-[#FF2548] flex items-center gap-2 text-lg">
                            <div className="w-[40px] h-[2px] bg-[#FF2548]"></div>
                            <span>COMMITTED TO SUCCESS</span>
                        </div>
                        <h1 className='text-2xl sm:text-4xl lg:text-7xl font-bold text-left text-white lg:my-4'>We help to grow your business</h1>
                        <p className='text-lg text-left text-white'>
                            Mollit anim laborum.Dvcuis aute serunt  iruxvfg dhjkolohr indd re voluptate velit esscillumlore eu quife nrulla parihatur.
                        </p>
                        <button className='self-start py-2 px-4 bg-[#ff2548] text-white mt-4'>OUR SERVICES</button>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500} className='relative flex items-center justify-center'>
                <img className='w-full h-[80vh] object-cover' src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg" alt="..." />
                <Carousel.Caption className='absolute max-w-[800px] top-[5%] lg:top-[10%] flex items-start flex-col'>
                    <div>
                        <div className="text-[#FF2548] flex items-center gap-2 text-lg">
                            <div className="w-[40px] h-[2px] bg-[#FF2548]"></div>
                            <span>COMMITTED TO SUCCESS</span>
                        </div>
                        <h1 className='text-2xl sm:text-4xl lg:text-7xl font-bold text-left text-white lg:my-4'>We help to grow your business</h1>
                        <p className='text-lg text-left text-white'>
                            Mollit anim laborum.Dvcuis aute serunt  iruxvfg dhjkolohr indd re voluptate velit esscillumlore eu quife nrulla parihatur.
                        </p>
                        <button className='py-2 px-4 bg-[#ff2548] text-white mt-4'>OUR SERVICES</button>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}