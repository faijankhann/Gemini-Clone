import "./Sidebar.css"
import { assets } from "../../assets/images/assets"
import { useState } from "react"

const Sidebar = () => {

  const [extended,setExtended] = useState(false)

  return (
    <aside className='sidebar'>
      <div className="sidebar-top">
        <img onClick={()=>{setExtended(prv => !prv)}} className="menu" src={assets.menu_icon} alt="" />
        <div className="new-chat">
          <img src={assets.plus_icon} alt="" />
         {extended?<p>New Chat</p>: null} 
        </div>
        {extended?
        <div className="recent">
          <p className="recent-titel">Recent</p>
          <div className="recent-entry">
            <img src={assets.message_icon} alt="" />
            <p>what is react...</p>
          </div>
        </div>
        
        : null} 
      </div>
      <div className="sidebar-bottom">
          <div className="bottom-item recent-entry">
            <img src={assets.question_icon} alt="" />
            {extended?<p>Help</p>: null} 
          </div>
          <div className="bottom-item recent-entry">
            <img src={assets.history_icon} alt="" />
            {extended?<p>Activity</p>: null} 
          </div>
          <div className="bottom-item recent-entry">
            <img src={assets.setting_icon} alt="" />
            {extended?<p>Setting</p>: null} 
          </div>
      </div>
    </aside>
  )
}

export default Sidebar