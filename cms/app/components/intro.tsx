"use client";

import { motion } from 'motion/react';
import viewers from '../connector/view';

const { photo1, photo2, photo3, photo4 } = viewers;
const view = [photo1, photo2, photo3, photo4];

const HomePage = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="w-320 flex justify-center pt-20 border-b border-[#000]/20 pb-20">
                {/* TextSide */}
                <motion.section 
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                className="w-[40%] text-[12px]">
                    <span className="border border-[#000]/20 pl-4 pr-4 pt-2 pb-2 rounded-3xl font-[Recursive]">EDUCATION COMMUNITY : MYANMAR</span>

                    {/* Main Pargraph */}
                    <div className="flex flex-col mt-5 pl-5 border-l border-orange-400 pt-5 pb-5">
                        <h3 className="font-[Recursive] font-400 text-[25px]">Empowering Students to Learn, Connect, and Grow Beyond Boundaries</h3>
                        <p className="text-[15px] text-[#000]/60 mt-1">Access world-class educational resources, join active student communities,
                            and participate in events designed to build your future.
                        </p>

                        <div className="mt-10 gap-2 flex text-[13px] font-[Valley]">
                            <button className="border border-[#000]/20 pl-3 pr-3 pt-1 pb-1 rounded-3xl cursor-pointer hover:bg-[#000] hover:text-[#fff] transition duration-200">Follow on Facebook</button>
                            <button className="border border-[#000]/20 pl-3 pr-3 pt-1 pb-1 rounded-3xl cursor-pointer hover:bg-[#000] hover:text-[#fff] transition duration-200">Join our Telegram group</button>
                        </div>
                    </div>

                    <div className='flex mt-5 ml-8'>
                        {
                            view.map((element, index) => {
                                return (
                                    <li key={index} className='w-9 h-9 rounded-[50px] list-none border border-[#000]/20 -ml-2 overflow-hidden'>
                                        <img src={element.src} className=''/>
                                    </li>
                                )
                            })
                        }

                        <div className='flex flex-col ml-5 font-[Valley]'>
                            <span className='text-[15px] font-bold'>1k+</span>
                            <span>Active Learners</span>
                        </div>
                    </div>
                </motion.section>

                {/* ImageSide */}
                <section className="w-[60%]">
                    
                </section>
            </div>
        </div>
    )
}

export default HomePage