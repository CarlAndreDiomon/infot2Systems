"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

{/* variables for images */}
interface Slide{
    id: number;
    src: string;
    alt: string;
    title: string;
    description: string;
}

{/* here are the list of images with their title and description */}
const slides: Slide[] = [
    {id:1, src:"/image/bibingka.jpg", alt:'bibingka', title:'Bibingka', 
        description:'Bibingka is a type of rice cake native to the Philippines. It goes without saying that we Filipinos love rice. We have it with almost every meal, and dessert is no exception.' },
    {id:2, src:'/image/puto.jpg', alt:'puto', title:'Puto', 
        description:'"Puto" is a Filipino steamed rice cake made from rice flour, sugar, and coconut milk, often served as a snack or dessert. In a different context, it can be a derogatory term in Spanish slang.' },
    {id:3, src:'/image/sapin-sapin.jpg', alt:'sapin-sapin', title:'Sapin-sapin', 
        description:'Sapin-sapin is a colorful Filipino dessert made from layered glutinous rice flour and coconut milk, featuring different flavors like ube and topped with grated coconut or latik.' },
];

{/* function for the slideshow duration of every images and details */}
const Slideshow = () =>{
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    useEffect(() => {
        const interval =setInterval(() => {
            setCurrentIndex((preIndex) => (preIndex + 1) % slides.length);
        }, 7000);

        return () => clearInterval(interval);
    },[]);

    {/*  */}
    return (
        <div className=" ">
            {slides.map((slide, index) => (
            <div key={slide.id} style={{display: index === currentIndex ? 'block' : 'none', textAlign: 'center', transition:'opacity 0.5s',}}>
                <div className=" md:bg-transparent md:flex md:justify-between">
                    <Image src={slide.src} alt={slide.alt} width={1500} height={1500} className=" rounded-xl w-full h-52 md:w-96 md:h-72 xl:h-96 xl:w-1/2 xl:mr-32 "/>
                    <div>
                        <h2 className=" mt-10 text-green-500 font-semibold text-2xl md:mb-5 md:text-3xl lg:font-normal xl:text-5xl" >{slide.title}</h2>
                        <p className=" text-sm font-normal text-white md:w-80 md:text-base xl:text-2xl xl:w-96">{slide.description}</p>
                    </div>
                </div>
            </div>
                 ))}
        </div>        
    );
};

export default Slideshow;