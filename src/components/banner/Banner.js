import React from 'react'
import "./Banner.css"
import DATA from "../static/Static"

function Banner() {
  
  return (
    <> 
    {/* // fragment -> <></> */}
    <div className="banner">
      {
        DATA?.map((item, index) =>   <div key={index} className="card">
        <img className='photo' src={item.url} alt="" />
        <h1>{item.name} </h1>
        <p>{item.text}</p>
        
        {
            item.f === true ? <button onClick={()=> alert(item.name + "ga obuna bo'lgansiz")} >follow</button> : <button onClick={()=> alert(item.name + "ga obuna bo'lmagansiz")} >unfollow</button> 
        }
    </div>)
      }

      
       
    </div>
        
    </>

  )
}

export default Banner
