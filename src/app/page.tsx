export default function Home(){
  return(
    <main className=" bg-black relative w-screen h-screen p-3 flex justify-center pt-32 sm:p-5 xl:items-center">
      <div className=" absolute inset-0 w-screen h-screen border bg-main bg-repeat bg-cover bg-bottom opacity-50"></div>
      <div className="w-96 sm:w-full relative z-10 ">
        <header className=" flex justify-center ">
          <h1 className=" text-3xl font-semibold md:text-4xl lg:text-7xl text-white  ">
            WELCOME TO<span className=" text-green-400 "> FILIPINO </span>HERITAGE 
          </h1>
        </header>

        <div className=" flex justify-center mt-16 ">
            <h1 className=" text-white text-2xl font-semibold sm:text-3xl lg:text-4xl">
              The KAR<span className="text-yellow-300">A</span>N-<span className="text-red-600">U</span>N 
            </h1>
        </div>
        <div className=" flex justify-center">
          <p className=" text-white text-sm font-light mt-3 sm:text-sm md:text-lg lg:text-2xl lg:w-3/5 lg:ml-14">
            Let us explore three out of thousands Filipino dishes.
            Filipino cuisine is characterized by its rich blend of 
            flavors and influences, reflecting the countrys diverse 
            history and culture. The emphasis on communal dining 
            fosters a sense of togetherness, making meals an integral 
            part of family and community bonding.
          </p>          
        </div>

        <div className=" flex justify-center mt-10">
          <a href="blog" className=" flex justify-center items-center text-white border-white border-2 w-40 rounded-xl hover:bg-white hover:text-black sm:text-lg lg:text-xl lg:w-48 lg:h-10">
            `Let's Explore`
          </a>
        </div>
      </div>
    </main>
  );
}