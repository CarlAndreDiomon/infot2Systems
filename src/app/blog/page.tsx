import Navbar from "../../components/Navbar";
import Slideshow from "../../components/Slideshow";

export default function components(){
    return(
        <main className=" w-screen h-screen bg-black">
            <div className=" absolute inset-0 w-screen h-screen bg-blogMobile md:bg-blogDesktop bg-repeat bg-cover bg-bottom opacity-55"></div>
            
            <div className=" relative z-10">
                <nav>
                    <Navbar/>
                </nav>
                
                {/* Header Of Slide show page */}
                <div className="pt-20 p-5">
                    {/* design and interface of slideshow */}
                    <div className = " flex justify-center ">
                        <div className = "text-white p-1 mt-16 shadow-gray-100 shadow-sm h-96 rounded-xl w-80 md:w-full md:h-1/2 md:flex md:justify-center md:items-center lg:w-4/5 xl:ring-opacity-0 xl:h ">
                            <Slideshow/>
                        </div>
                    </div>
                    <div className=" flex justify-center mt-14 text-6xl font-semibold md:flex md:justify-center xl:text-9xl ">
                        <h1 className=" text-gray-200 flex justify-center">
                            KAR<span className=" text-yellow-300 ">A</span>N-<span className="text-red-600">U</span>N
                        </h1>
                    </div>
                </div>
            </div>
        </main>
    );
}