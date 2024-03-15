import Background from '../../assets/images/banner.png'

const Banner = () => {
    return (
        <div className='max-w-[1320px] mx-auto text-white'>
            <div className="min-h-[600px]" style={{background: `url(${Background})`, backgroundRepeat: 'no-repeat'}}>
                <div className="hero-content text-center text-neutral-content md:py-20">
                    <div className="max-w-4xl">
                        <h1 className="mb-5 leading-normal text-5xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
                        <p className="mb-5 leading-7">Explore diverse recipes for every taste and occasion on our website. From quick weekday meals to gourmet delights, each recipe is accompanied by clear instructions and enticing visuals. Join our culinary community and elevate your cooking skills with ease. Lets embark on a delicious journey together!</p>
                        <button className="btn bg-green-500 border-0 font-semibold text-xl rounded-3xl mr-3">Explore now</button>
                        <button className="btn btn-primary font-semibold text-xl rounded-3xl">Our feedback</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;