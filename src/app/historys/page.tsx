import Navbar from "../../components/Navbar";

export default function Historys(){
    return(
        <main className="w-screen h-screen bg-black">
            <div className=" absolute inset-0 w-screen h-screen bg-blogMobile md:bg-blogDesktop bg-repeat bg-cover bg-bottom opacity-55"></div>
            <div className="relative z-10 h-full overflow-y-auto ">
                <nav>
                    <Navbar/>
                </nav>

                <div className=" pt-20 p-3 text-gray-200 ">
                    {/* Bibingka */}
                    <div>
                        <h1 className=" text-xl text-white font-bold ">
                            Bibingka
                        </h1>
                        <p>
                            Bibingka is a type of rice cake native to the Philippines. It goes without saying that we Filipinos love rice. 
                            We have it with almost every meal, and dessert is no exception. This is why kakanin has become such a popular 
                            Filipino merienda. A combination of the words kanin (rice) and kain (eat), kakanin refers to a group of glutinous 
                            rice cakes Filipinos know and love.
                            <br/>
                            The origins of bibingka are vast. Some say that it came from Indonesia while some believe it came from India. 
                            In fact, the Indians call their version of this dessert as “Bebinca” or “Bibik”. Some also believe that the 
                            Portuguese brought this dessert from Goa.
                        </p>
                    </div>
                    {/*Puto*/}
                    <div>
                        <h1 className=" text-xl text-white font-bold ">
                            Puto
                        </h1>
                        <p>
                            Puto is a type of kakanin which are rice cakes made from glutinous rice and coconut milk.
                            <br/>
                            Despite the name sounding like a Spanish curse word, the name actually comes from the Malay and 
                            Indian word “puttu” meaning “portioned”.
                            <br/>
                            The Filipino version soaks the glutinous rice grains overnight to slightly ferment, then grinds the rice 
                            with coconut milk and sugar to form a dough. The dough it then portioned out to small mounds steamed on 
                            small cuts of banana leaves. The steamed cake can be eaten plain or topped with butter or cheese. It is 
                            typically paired with a savory plate such as diniguan (pork blood stew) or pancit (noodles).
                            <br/>
                            Outside of the Philippines, there are similar versions of put including the Indian Puttu, the Malaysian Kuih, 
                            the Singaporean Putu Piring, and the Vietnamese Banh Bo Hap. While the exact origins of rice cakes are unknown, 
                            it has been deduced that they were started by rice farmers in Southeast Asia and South Asia. Through trade and 
                            migration, recipes were shared and local versions were created that have been passed down through centuries.
                        </p>
                    </div>
                    {/* Sapin-sapin */}
                    <div>
                        <h1 className=" text-xl text-white font-bold ">
                            Sapin-sapin
                        </h1>
                        <p>
                            Sapin-sapin is a sticky rice cake from the Philippines, it originated in a northern province called Abra. 
                            From the root word sapin which is Tagalog for “blanket,” the name pertains to the layers of rice cake.
                            The name came from the word sapin which means sheets or layer, it is also the main characteristic of this rice cake, 
                            its vibrant multi colored layers. Sapin-sapin is a layered glutinous rice and coconut dessert in Philippine cuisine. 
                            It is made from rice flour, coconut milk, sugar, water, and coloring with coconut flakes sprinkled on top. 
                            Sapin-sapin means “layers” and the dessert is recognizable for its layers, each colored separately. It has been 
                            referred to as “a blancmange of several colored layers, sweetened and flavored with coconut milk”.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}