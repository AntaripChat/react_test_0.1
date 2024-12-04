import seagull from './assets/seagull.jpg'

function Hero(){
    return(
        <>
            <div className="text-center">
                <div className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
                    <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
                    <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
                        Bring everyOne together to build better product</h1>

                    <p className="max-w-sm text-center text-gray-700 md:text-left">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    </p>
                    <div className="flex justify-center md:justify-start ">
                    <a href="#" className=" p-3 px-6 text-white bg-green-700 rounded-full hover:bg-blue-700">Get Started</a>
                    </div>
                    </div>
                    <div className="md:w-1/2">
                        <img src={seagull} alt="" />
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Hero;