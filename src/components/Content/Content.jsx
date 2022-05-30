import React from 'react'
import './Content.css'

import Medium from '../Card/Medium/Medium'
import Tall from '../Card/Tall/Tall'
import Small from '../Card/Small/Small'
import ExtraLarge from '../Card/ExtraLarge/ExtraLarge'
import Wide from '../Card/Wide/Wide'

import bgHotel from "../../assets/BackgroundHotel.jpg"
import hotelInfoPic from "../../assets/Rectangle 12-6.png"
import nearbyHotelPic from "../../assets/Rectangle 12-1.png"
import restoPic from "../../assets/Rectangle 12-2.png"
import recomPic from "../../assets/Rectangle 12-3.png"
import vodPic from "../../assets/Rectangle 12-4.png"
import specialPic from "../../assets/Hotel Information.png"
import hotelServicePic from "../../assets/Rectangle 12.png"

import travelIcon from "../../assets/Travel.png"
import vehicleIcon from "../../assets/vehicle_rental.png"
import moodIcon from "../../assets/mood_boosters.png"
import weatherIcon from "../../assets/weather-1.png"
import shopIcon from "../../assets/Shopping.png"
import surveyIcon from "../../assets/survey.png"
import billingIcon from "../../assets/view_billing.png"
import eventsIcon from "../../assets/localevents2.png"
import numberIcon from "../../assets/important_number.png"
import liveIcon from "../../assets/LIVETV.png"
import internetIcon from "../../assets/InternetBrowser.png"
import msgIcon from "../../assets/message.png"
import spotifyIcon from "../../assets/spotify.png"
import youtubeIcon from "../../assets/youtube.png"
import netflixIcon from "../../assets/Netflix.png"
import videoIcon from "../../assets/VOD.png"

function Content() {
  return (
    <div className='content-wrapper'>
        <div className="content-cont">
          <ExtraLarge title="HOTEL INFORMATION" image={hotelInfoPic} columnStart="1" columnEnds="5" rowStart="1" rowEnds="3" icon={videoIcon}/>
          <Medium className="medium-1" image={restoPic} start="5" ends="7" title="RESTAURANTS & BARS"/>
          <Medium className="medium-2" image={nearbyHotelPic} start="7" ends="9" title="NEARBY HOTEL"/>
          <Small title="MOOD BOOSTERS" icon={moodIcon}/>
          <Small title="27˚C" icon={weatherIcon}/>
          <Small title="TRAVEL INFORMATION" icon={travelIcon}/>
          <Small title="VEHICLE RENTAL" icon={vehicleIcon}/>
          <Medium title="RECOMMENDED PLACES" image={recomPic} start="7" ends="9"/>
          <Small title="SHOPPING INFORMATION" icon={shopIcon}/>
          <Small title="SURVEY STATISFACTION" icon={surveyIcon}/>
          <Wide start="1" ends="4" image={hotelServicePic} title="HOTEL SERVICES"/>
          <Tall title="VIDEO ON DEMAND (VOD)" image={vodPic} columnStart="5" columnEnds="7" rowStart="3" rowEnds="5" icon={videoIcon}/>
          <Small title="VIEW BILLING" icon={billingIcon}/>
          <Small title="LOCAL EVENTS" icon={eventsIcon}/>
          <Small title="IMPORTANT NUMBER" icon={numberIcon}/>
          <Small title="LIVE TV" icon={liveIcon}/>
          <Small title="BROWSER" icon={internetIcon}/>
          <Small title="MESSAGES" icon={msgIcon}/>
          <Small title="SPOTIFY" icon={spotifyIcon}/>
          <Small title="YOUTUBE" icon={youtubeIcon}/>
          <Small title="NETFLIX" icon={netflixIcon}/>
          <Tall title="SPECIAL OFFERS FOR YOU" image={specialPic} columnStart="9" columnEnds="11" rowStart="3" rowEnds="5"/>
        </div>
    </div>
  )
}

export default Content