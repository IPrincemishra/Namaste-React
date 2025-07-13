const Contact = () => {
    return (
        <div className="w-12/12 h-[80vh] flex flex-col justify-center items-center">
            <div className="flex flex-col w-4/12 flex-wrap justify-center items-center bg-gray-200 rounded-2xl py-5 gap-5">
                <div className="text-center">
                    <h1 className="text-2xl">Fill the form</h1>
                    <span className="text-[11px] capitalize bg-black  text-orange-500 py-1 px-2 rounded-2xl"> for Contacting us</span>
                </div>
                <input className="outline-none border-b-2 w-9/12 px-1" type="text" placeholder="username" />
                <input className="outline-none border-b-2 w-9/12 px-1" type="password" placeholder="password" />
                <button className="bg-gray-700 text-white px-3 py-1 rounded-2xl cursor-pointer">Submit</button>
            </div>
        </div>
    )
}

export default Contact;