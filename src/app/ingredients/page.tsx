import Navbar from "../../components/Navbar";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  

export default function ingredients(){
    

    return(
        
        <main className=" w-screen h-screen bg-black">
            <div className=" absolute inset-0 w-screen h-screen bg-blogMobile md:bg-blogDesktop bg-repeat bg-cover bg-bottom opacity-55"></div>
            <div className=" relative z-10 h-full overflow-y-auto ">
                <nav>
                    <Navbar/>
                </nav>
                <div className="pt-20 p-4 w-full h-full  ">
                    <header className="font-semibold text-gray-200 md:text-3xl ">
                        <h1>Ingredients</h1>
                    </header>

                    {/* Bibingka */}
                    <Accordion type="single" collapsible className=" m-2 ">
                        <AccordionItem value="item-1" className= "rounded-lg shadow-black w-full h-full shadow-sm">
                            <AccordionTrigger className="font-bold text-gray-200 ml-3 text-xl">Bibingka</AccordionTrigger>
                                <AccordionContent className=" p-2 ">
                                    <div className ="text-gray-200">
                                        <p>
                                            ▢1 cup rice flour<br/>
                                            ▢1/8 teaspoon salt<br/>
                                            ▢2 1/2 teaspoon baking powder<br/>
                                            ▢3 tablespoons butter<br/>
                                            ▢1/2 cup granulated sugar<br/>
                                            ▢1 cup coconut milk<br/>
                                            ▢1/4 cup fresh milk<br/>
                                            ▢1 piece salted duck egg sliced<br/>
                                            ▢1/2 cup grated cheese<br/>
                                            ▢3 pieces raw eggs<br/>
                                            ▢1/4 cup grated coconut<br/>
                                            ▢Pre-cut banana leaf<br/>
                                        </p>
                                    </div>
                                    <div className=" text-gray-200 ">
                                        <h1 className="font-bold m-3 text-xl ">
                                            Instructions
                                        </h1>
                                        <p>
                                            (1.)Preheat oven to 375 degrees Fahrenheit. 

                                            (2.)Combine rice flour, baking powder, and salt then mix well. Set aside.

                                            (3.)Cream butter then gradually put-in sugar while whisking.

                                            (4.)Add the eggs then whisk until every ingredient is well incorporated.

                                            (5.)Gradually add the rice flour, salt, and baking powder mixture then continue mixing.

                                            (6.)Pour-in coconut milk and fresh milk then whisk some more for 1 to 2 minutes.

                                            (7.)Arrange the pre-cut banana leaf on a cake pan or baking pan.

                                            (8.)Pour the mixture on the pan.

                                            (9.)Bake for 15 minutes.

                                            (10.)Remove from the oven then top with sliced salted egg and grated cheese (do not turn the oven off).

                                            (11.)Put back in the oven and bake for 15 to 20 minutes or until the color of the top turn medium brown.

                                            (12.)Remove from the oven and let cool.

                                            (13.)Brush with butter and top with grated coconut.

                                            (14.)Serve. Share and enjoy!
                                        </p>
                                    </div>
                                </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    
                    {/*Puto*/}
                    <Accordion type="single" collapsible className=" m-2 ">
                        <AccordionItem value="item-1" className= " rounded-lg shadow-black w-full h-full shadow-sm ">
                            <AccordionTrigger className="font-bold ml-3 text-gray-200 text-xl">Puto</AccordionTrigger>
                                <AccordionContent className=" p-2 ">
                                    <div className =" text-gray-200 ">
                                        <p>
                                            ▢1 cup all-purpose flour <br/>
                                            ▢1/2 cup granulated white sugar <br/>
                                            ▢3 teaspoons baking powder <br/>
                                            ▢1 cup fresh milk <br/>
                                            ▢1/4 teaspoon vanilla extract <br/>
                                            ▢3/4 cup shredded sharp cheddar cheese <br/>
                                            ▢5 cups water for steaming <br/>
                                        </p>
                                    </div>
                                    <div className=" text-gray-200 ">
                                        <h1 className="m-3 font-bold text-xl ">
                                            Instruction 
                                        </h1>
                                        <p>
                                            (1)Pour the water into a steamer or cooking pot. Let boil.

                                            (2)Sift flour, sugar, and baking powder. Combine in a bowl. Mix well.

                                            (3)Gradually add the milk while stirring. Continue to stir until the texture of the mixture becomes smooth.

                                            (4)Stir-in the vanilla extract and half of the cheese.

                                            (5)Pour the mixture into small to medium sized molds. Arrange in a steamer. Cover and steam for 25 minutes. Top each puto with the remaining cheese. Steam for 5 minutes more.

                                            (6)Take the steamed cheese puto out of the steamer. Let it cool down.

                                            (7)Gently remove the puto from the mold with the help of a spatula.

                                            (8)Arrange in serving plate. Serve. 

                                            Share and enjoy!
                                        </p>
                                    </div>
                                </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                    {/*Sapin-sapin*/}
                    <Accordion type="single" collapsible className=" m-2 ">
                        <AccordionItem value="item-1" className= " rounded-lg shadow-black w-full h-full shadow-sm ">
                            <AccordionTrigger className="font-bold ml-3 text-gray-200 text-xl">Sapin-sapin</AccordionTrigger>
                                <AccordionContent className=" p-2 ">
                                    <div className =" text-gray-200 ">
                                        <p>
                                            ▢1 cup all-purpose flour <br/>
                                            ▢1/2 cup granulated white sugar <br/>
                                            ▢3 teaspoons baking powder <br/>
                                            ▢1 cup fresh milk <br/>
                                            ▢1/4 teaspoon vanilla extract <br/>
                                            ▢3/4 cup shredded sharp cheddar cheese <br/>
                                            ▢5 cups water for steaming <br/>
                                        </p>
                                    </div>
                                    <div className=" text-gray-200 ">
                                        <h1 className="m-3 font-bold text-xl ">
                                            Instruction 
                                        </h1>
                                        <p>
                                            (1)Pour the water into a steamer or cooking pot. Let boil.

                                            (2)Sift flour, sugar, and baking powder. Combine in a bowl. Mix well.

                                            (3)Gradually add the milk while stirring. Continue to stir until the texture of the mixture becomes smooth.

                                            (4)Stir-in the vanilla extract and half of the cheese.

                                            (5)Pour the mixture into small to medium sized molds. Arrange in a steamer. Cover and steam for 25 minutes. Top each puto with the remaining cheese. Steam for 5 minutes more.

                                            (6)Take the steamed cheese puto out of the steamer. Let it cool down.

                                            (7)Gently remove the puto from the mold with the help of a spatula.

                                            (8)Arrange in serving plate. Serve. 

                                            Share and enjoy!
                                        </p>
                                    </div>
                                </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>    
            </div>
        </main>
    )
}