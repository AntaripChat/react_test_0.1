function Nav(){
    return(
        <>
            <div className="relative container mx-auto p-6">
                <div className="flex items-center justify-between">
                    <h1 className="font-bold text-2xl">Antarip</h1>
                    <ul className="hidden md:flex space-x-6">
                        <li className="hover:text-blue-700 cursor-pointer text-1xl">Home</li>
                        <li className="hover:text-blue-700 cursor-pointer text-1xl">About</li>
                        <li className="hover:text-blue-700 cursor-pointer text-1xl">Contect</li>
                    </ul>
                    <a href="#" className="hidden md:block p-3 px-6 text-white bg-green-700 rounded-full hover:bg-blue-700">Get Started</a>
                </div>
            </div>
        </>
    )
}

export default Nav;