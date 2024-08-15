import './Main.css'
import { assets } from "../../assets/images/assets"

const Main = () => {
    return (
        <main className='main'>
            <header className='main-top'>
                <p>Gemini</p>
                <img src={assets.user_icon} alt="" />
            </header>
            <div className="main-container">
                <div className="greet">
                    <p><span>Hello Faijan</span></p>
                    <p>How can i help you today?</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <p>Seggest beautiful plase to on an upcomming road trip</p>
                        <img src={assets.compass_icon} alt="" />
                    </div>


                    <div className="card">
                        <p>Give me phrases to learn a new language</p>
                        <img src={assets.bulb_icon} alt="" />
                    </div>


                    <div className="card">
                        <p>Help me plan a game night with 5 friends for under $100</p>
                        <img src={assets.message_icon} alt="" />
                    </div>

                    <div className="card">
                        <p>Generate unit tests for the following C# function</p>
                        <img src={assets.code_icon} alt="" />
                    </div>
                </div>
            </div>
            <div className="main-bottom">
                <div className="search-box">
                    <input type="text" placeholder='Inter a promt here' />
                    <div className="img-dv">
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        <img src={assets.send_icon} alt="" />
                    </div>
                </div>
                <p className='bottom-info'>
                Gemini may display inaccurate info, including about people, so double-check its responses. <span>Your privacy and Gemini Apps</span>
                </p>
            </div>
        </main>
    )
}

export default Main