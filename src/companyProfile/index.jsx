

export default function Index() {
    
    return(
        <div className="flex justify-center items-center px-4 md:px-12 mx-auto space-x-5 py-5 w-full 2xl:w-3/6">
            <div>
                <img src="logo.png" alt="" />
            </div>
            <div className="md:w-2/5">
                <h3 className="text-orange-900 inline-block text-3xl font-bold mb-3">Company Profile</h3>
                <p className="mb-5">we prepared our commodities with a greater manufactured and  the best quality of the most</p>
                <button className="px-3 py-2 bg-orange-800 text-white hover:bg-orange-900 drop-shadow-md rounded-lg focus:ring focus:ring-orange-700">
                    Download
                </button>
            </div>
        </div>
    )
}