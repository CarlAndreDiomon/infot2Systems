import Navbar from "../../components/Navbar";
import Image from "next/image";

export default function aboutUs(){
    return(
        <main className="w-screen h-screen bg-black">
            <div className=" absolute inset-0 w-screen h-screen bg-blogMobile md:bg-blogDesktop bg-repeat bg-cover bg-bottom opacity-55"></div>
            <div className="relative z-10 h-full overflow-y-auto ">
                <nav>
                    <Navbar/>
                </nav>
                <div className="">
                    <div className=" p-3 pt-16 text-gray-200 ">
                        <h1>
                            BS-INFO 2D
                        </h1>
                        <div className=" m-5 ">
                            <h1 className=" text-xl font-bold ">
                                Programmer
                            </h1>
                            <p className="mt-3 flex justify-center">
                                Carl Andre R. Diomon <br/>
                                Kyle Steven Morillo
                            </p>
                        </div>
                        <div className=" m-5 ">
                            <h1 className=" text-xl font-bold">
                                Designer
                            </h1>
                            <p className="mt-3 flex justify-center">
                                Joshua Antoy <br/>
                                Clyde Dextler Padrillan
                            </p>
                        </div>

                        <div>
                            <h1 className=" flex justify-center text-7xl font-semibold text-red-600 ">
                                U<span className="text-yellow-300">A</span>
                            </h1>
                            <h1 className=" flex justify-center text-2xl font-semibold">
                                <span className="text-red-600">U</span>NIVERSITY OF<span className="ml-1 text-yellow-300"> A</span>NTIQUE
                            </h1>
                        </div>

                        <div className="mt-5">
                            <h1 className=" flex justify-center text-2xl font-bold">
                                Filipino Heritage System
                            </h1>
                        </div>
                    </div>
                </div>
                <footer className=" ">
                    <div className=" flex justify-center space-x-16">
                        <Image src="/image/CSSlogo.png" alt="" width={100} height={100}/>
                        <Image src="/image/UAlogo.png" alt="" width={100} height={100}/>
                    </div>   
                    <div className=" flex justify-center">
                        <Image src="/image/PSITlogo.png" alt="" width={100} height={100} /> 
                    </div>
                </footer>    
            </div> 
        </main>
    )
}