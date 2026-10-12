
const MenuTags = ["Home", "Process", "Events", "About", "Reviews"]

const Navbar = () => {
    return (
        <div className="flex justify-center  border-b border-[#000]/20 backdrop-blur-lg sticky z-50 top-0">
            <nav className="w-320 h-20 flex justify-between items-center">
                
                {/* Logo  */}
                <div>
                    <h3 className="font-[Recursive] font-bold text-[20px]">The Coffee <span className="text-orange-400">Club</span></h3>
                </div>

                {/* MenuTags */}
                <div className="flex gap-1">
                    {
                        MenuTags.map((Tag, index) => {
                            return (
                                <li key={index} className="list-none pl-3 pr-3 pt-1 pb-1 font-[Valley] text-[13px] cursor-pointer rounded-3xl hover:bg-purple-100 hover:text-purple-600 transition duration-200">
                                    {Tag}
                                </li>
                            )
                        })
                    }
                </div>

                {/* ActionKeys */}
                <div className="flex justify-center items-center font-[Valley] text-[12px] gap-2">
                    <button className="pl-4 pr-4 pt-1 pb-1 bg-[#000] text-[#fff] rounded-3xl cursor-pointer active:scale-[0.9] transition duration-200">Join Event</button>
                    <button className="pl-4 pr-4 pt-1 pb-1 border border-[#000]/20 text-[#000] rounded-3xl cursor-pointer active:scale-[0.9] transition duration-200">Login</button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar