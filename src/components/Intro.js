import Logo from "../assets/ai-logo.png";
import ChatGPT from "../assets/website-logos/chatgpt.png";
import copyai from "../assets/website-logos/copyai.png";
import rytr from "../assets/website-logos/rytr.png";
import wordtune from "../assets/website-logos/wordtune.png";
import erasebg from "../assets/website-logos/erasebg.png";
import quillbot from "../assets/website-logos/quillbot.png";
import TypewriterComponent from "typewriter-effect";


function Intro() {
    return (
        <div className="main-container h-[100vh] relative ">

            {/* Blob moving animation */}
            <div className="absolute top-52 md:top-80 lg:top-28 right-16 md:left-[40%] lg:left-[50%] w-36 h-36 md:w-72 md:h-72 bg-purple-300 rounded-full mix-blend-multiply animate-violet opacity-70 blur-xl"></div>
            <div className="absolute top-48 md:top-80 lg:top-20 left-2 md:left-[20%] lg:left-[30%] w-52 h-52 md:w-72 md:h-72 bg-yellow-300 rounded-full mix-blend-multiply animate-yellow animation-delay-2000 opacity-70 blur-xl"></div>
            <div className="absolute top-80 md:top-[40%] lg:top-48 right-28 md:right-[30%] lg:right-[40%] w-52 h-52 md:w-72 md:h-72 bg-pink-300 rounded-full mix-blend-multiply  animate-pink animation-delay-4000 opacity-70 blur-xl"></div>

            {/* Logos of several AI applications */}
            <img className="absolute left-10 md:left-[35%] lg:left-[40%] top-[65%] md:top-[60%] lg:top-96 h-28 w-28" src={ChatGPT} alt="chatgpt" />           
            <img className="absolute left-[40%] md:left-[50%] top-[68%] md:top-[63%] lg:top-[70%] h-12 w-32" src={copyai} alt="copyai" />           
            <img className="absolute left-10 md:left-24 lg:left-44 top-[80vh] md:top-[70%] lg:top-3/4 h-24 w-24" src={rytr} alt="rytr" />           
            <img className="absolute hidden md:block md:left-10 lg:left-20 top-96 md:top-60 lg:top-44 h-24 w-24" src={quillbot} alt="quillbot" />           
            <img className="absolute right-10 md:right-32 lg:right-24 top-3/4 lg:top-3/4 h-24 w-24" src={wordtune} alt="word tune" />           
            <img className="absolute right-10 md:right-20 top-16 md:top-16 lg:top-20 h-24 w-24" src={erasebg} alt="erasebg" />           


            {/* Logo */}
            <div className="header pt-4 pl-6 flex space-x-4 items-center z-10">
                <img className="h-10 w-10" src={Logo} alt="ai-explorer-logo" />
                <h1 className="font-bold md:text-3xl text-dark">AI Explorer</h1>
            </div>

            {/* Typewriter text and Content */}                    
            <div className="flex flex-col justify-center items-center lg:ml-14 mx-16 my-8 mt-32 md:mt-48 lg:mt-20 z-10">
                    
                {/* Typewriter */}
                <div className="font-bold text-4xl md:text-6xl text-violet-900">
                    <TypewriterComponent
                        onInit={(typewriter) => {
                                typewriter
                                .typeString("Hello Human!")
                                .pauseFor(2000)
                                .deleteAll()
                                .typeString("Welcome!!")
                                .pauseFor(2000)
                                .deleteAll()
                                .start();  
                        }}
                        options={{
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>

                {/* Content */}
                <div className="mt-12 md:mt-36 lg:mt-12 break-normal">
                    <h1 className="text-2xl md:text-4xl text-center"><span className="text-4xl md:text-5xl font-bold">AI Explorer </span>- the ultimate destination <br/> for all things AI.</h1>
                    <p className="mt-10 md:mt-4 text-xl font-semibold">We have curated a collection of the 
                    best AI web applications on the internet just for you</p>
                </div>
            </div>
        </div>
    );
}

export default Intro;