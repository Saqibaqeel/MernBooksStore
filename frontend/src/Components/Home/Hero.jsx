import React from "react";

function Hero() {
  return (
    <div className="container mt-5 p-5">
      <div className="row">
        <div className="col-6">
          <h1>
            Discover a world of stories, from timeless classics to modern
            bestsellers. Find your next great read and fuel your imagination.
           <span className="text-color-pink" style={{color:'pink'}}> Your dream library is just a click away!</span>
          </h1>
          <p className="mt-5 text-muted">
            
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reprehenderit saepe error eius at aliquid. Iusto harum reiciendis
            ducimus tempore velit quae corrupti cupiditate, repudiandae, aliquid
            recusandae error aspernatur nobis officiis deleniti ipsam,
            voluptatem iure odio.
          </p>
          <div className="mb-5">
          <input type="text" class="rounded-3 w-100 h-40 border-0 border-bottom" placeholder="Enter your email to login" name="email" />
          </div>
          <button className="btn btn-success w-40 p-3 "> Secondary</button>

        </div>
        <div className="col-1"></div>
        <div className="col-5 "> 
          
        <img src="/world-book.avif"alt="" style={{width:'100%' ,height:'100%'}}className="rounded-circle" />
        
        </div>  
      </div>
      <hr className="mt-4"/>
    </div>

    
    
  );
}

export default Hero;
