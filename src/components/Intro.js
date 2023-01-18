import BgImage from "../assets/wave.png";
import Logo from "../assets/ai-logo.png";
import AI from "../assets/ai.png";
import AIRobo from "../assets/ai-robo.png";
import TypewriterComponent from "typewriter-effect";

function Intro() {
    return (
        <div style={{backgroundImage : `url(${BgImage})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', height: '100vh'}} >
            <div className="header pt-4 pl-6 flex flex-1 space-x-4 items-center">
                <img className="h-10 w-10" src={Logo} alt="website-logo" />
                <h1 className="font-bold md:text-3xl text-white">AI Explorer</h1>
            </div>
            <div className="main-content text-white flex  flex-col lg:flex-row justify-between">
                    <div className="sub-1 flex flex-col items-center lg:items-start lg:ml-14 mx-16 my-8 lg:mt-14">
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
                        <p className="md:font-semibold md:text-xl mt-4 whitespace-pre-wrap">You have landed here - AI Explorer.
                        
                        Ultimate destination for all things AI.
                        
                        We have curated a collection of the best AI websites available on the internet for you.</p>
                    </div>
                <div className="sub-2">
                    <img className="invisible md:visible md:h-[35vh] md:w-[60vw] lg:h-[60vh] lg:w-[150vw] md:ml-48 md:-mt-16 lg:ml-0 lg:-mt-16" src={AI} alt="ai" />
                </div>
            </div>
            <div className=""></div>
        </div>
    );
}

export default Intro;