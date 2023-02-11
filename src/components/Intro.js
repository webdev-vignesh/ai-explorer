import BgImage from "../assets/wave.png";
import Logo from "../assets/ai-logo.png";
import AI from "../assets/ai.png";
import AIRobo from "../assets/ai-robo.png";
import TypewriterComponent from "typewriter-effect";

function Intro() {
    return (
        <div className="main-container h-[100vh] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">

            <div className="w-full max-w-lg relative">
            <div className="absolute top-20 left-2 w-52 h-52 md:w-72 md:h-72 bg-purple-300 rounded-full"></div>
            <div className="absolute top-20 right-2  md:right-4 w-52 h-52 md:w-72 md:h-72 bg-yellow-300 rounded-full"></div>
            <div className="absolute top-36 md:top-48 right-28 w-52 h-52 md:w-72 md:h-72 bg-pink-300 rounded-full"></div>
            
            {/* Logo */}
            <div className="header pt-4 pl-6 flex space-x-4 items-center z-10">
                <img className="h-10 w-10" src={Logo} alt="ai-explorer-logo" />
                <h1 className="font-bold md:text-3xl text-dark">AI Explorer</h1>
            </div>

            {/* Typewriter text and Content */}
            <div className="main-content text-dark  flex flex-col lg:flex-row justify-between">
                    
                {/* Typewriter */}
                <div className="sub-1 flex flex-col items-center lg:items-start lg:ml-14 mx-16 my-8 lg:mt-14 z-10">
                    <div className="font-bold text-3xl md:text-5xl">
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
                    <div className="md:font-semibold md:text-xl mt-8 break-normal">
                        <p>You have landed here - AI Explorer.</p>
                        <p>Ultimate destination for all things AI.</p>
                        <p>We have curated a collection of the </p>
                        <p>best AI websites available on the internet just for you...</p>
                    </div>
                </div>
            </div>
            <div className="">
                            
            </div>
            </div>
        </div>
    );
}

export default Intro;