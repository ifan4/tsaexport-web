

export default function(){

    return(
        <div className="relative container px-4 md:px-12">
            <img className="absolute right-0"src={'/hero-image.jpg'}/>
            <div className="absolute z-10">
                <img src="/tsa-logo-hero.png" className="mb-4"/>
                <div className="md:ml-12">
                    <div className="bg-orange-900 text-2xl text-white px-4 py-3 inline-block"
                    style={{ 
                        lineHeight: '21px',
                        letterSpacing: '0.41em',
                    }}
                    >
                        Provide the best quality
                    </div>
                    <h1 
                    className="text-9xl w-1/2 font-bold mb-3" 
                    style={{ 
                        textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' 
                    }}>
                        Excellent Manufactured
                    </h1>
                    <p className="text-lg w-1/4 font-bold"> 
                        with proper standard qualification, a brand that has a perfect time conscious.
                    </p>
                </div>
            </div>
        </div>
    )
}