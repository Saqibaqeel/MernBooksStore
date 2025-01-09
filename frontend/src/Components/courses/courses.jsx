import React from "react";
import data from '../../assets/data.json'
import Card from "../Home/Card";

function courses() {
  return (
    <>
    <br />
    <br />
    <br />
    <div className="container mt-5">
      <h1>
        We are Happy to see you <span style={{ color: "pink" }}> Here !</span>
      </h1>
      <div className="row mt-5 mb-5">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati quam
        iure consequatur temporibus architecto dolores natus ipsam totam placeat
        error nihil perspiciatis a, facere dolor. Dolorum beatae nisi,
        repudiandae nulla fugit ea animi similique minima.
      </div>
      
      <button className="btn btn-success p-1  text-center shadow-lg rounded">
    Go Back
  </button>
    </div>
    <hr />


    <div className="container mt-5 mb-5 shadow-sm">
  <h2 className="text-center mb-5">Our Premium Courses</h2> 
  <div className="row"> 
    {data.map((item, index) => (
      <div className="col-md-4 mb-4" key={index}> 
        <Card item={item} />
      </div>
    ))}
  </div>
</div>


    


    
    </>
    
  );
}

export default courses;
