

export default function Index(){

    return(
        <div className="container px-4 md:px-12 text-center relative mb-10" id="visionmision">
            <div className="flex justify-center">
                <img className="absolute" src="vision-mision-bg.jpg" alt="warehouse"/>
            </div>
            <div className="relative mt-7 md:mt-12 mb-4 md:mb-9">
                <h3 className="text-3xl text-white font-bold">
                    Vision and Mission
                </h3>
                <h5 className="text-white text-2xl">PT. Trisula Semesta Astungkara</h5>
            </div>
            <div className="flex justify-center">
                <div className="relative w-full md:w-1/2 border-2 border-black bg-white p-8 rounded-xl drop-shadow-xl">
                    <h2 className="text-3xl font-semibold mb-4">Vision</h2>
                    <p>Reliable company that we are hoping those values can be manifested into our products and services.</p>
                    <p>Excellent manufactured product with proper standard qualification, a brand that has a perfect time conscious.</p>

                    <hr className="my-6"/>
                    <h2 className="text-3xl font-semibold mb-4">Mision</h2>
                    <p>Trust , Rely on our company shown from the quality of our varies product, and experience a good services.a</p>

                </div>
            </div>
            
        </div>
    )
}