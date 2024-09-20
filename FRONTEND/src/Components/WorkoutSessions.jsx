import React from 'react'

const WorkoutSessions = () => {
  return (
    <section className='workout_session'>
      <div className='wrapper'>
        <h1>OUR TOP WORKOUT SESSIONS</h1>
        <img src='/img5.jpg' style={{height:"650px" , width:"500px" , borderRadius:"2rem", border:"3px solid #6EC207" }} alt='workout_pic'/>
      </div>
      <div className='wrapper'>
        <h1>OUR TESTIMONIALS</h1>
        <p>
          Check Out Our Awesome Awesome Reviews 
        </p>
        <div className='bootcamps'>
          <div>
            <h4 style={{color:"#0095ff",fontFamily:"sans-serif"}}>TANMAY DAS</h4>
            <p style={{fontStyle:"italic"}}>"It is an awesome experience,the trainers are so dedicated"</p>
          </div> 
           <div>
            <h4 style={{color:"#0095ff",fontFamily:"sans-serif"}}>SUCHITRA MAITRA</h4>
            <p style={{fontStyle:"italic"}}>"Highly Motivating,People here are so friendly"</p>
           </div> 
           <div>
            <h4 style={{color:"#0095ff",fontFamily:"sans-serif"}}>SUJOY BOSE</h4>
            <p style={{fontStyle:"italic"}}>"Highly Overwelmed"</p>
          </div> <div>
            <h4 style={{color:"#0095ff",fontFamily:"sans-serif"}}>RITESH PANDEY</h4>
            <p style={{fontStyle:"italic"}}>"Awesome equipments,at this package this is highly helpful"</p>
          </div>
        </div>
      </div>
     
    </section>
  )
}

export default WorkoutSessions
