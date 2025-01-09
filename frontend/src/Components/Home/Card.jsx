import React from 'react';

function Card({ item }) {
    console.log(item);

    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="card" style={{ width: "18rem" }}>
                        {/* Ensure the image URL is correct */}
                        <img src={item.img} className="card-img-top" alt="Book" />
                        <div className="card-body">
                            <h4 className="card-title">{item.titel}</h4>
                            <h5 className="card-title">{item.category}</h5>
                            
                            <p className="card-text">
                                {item.desc}
                            </p>

                            <a href="#" className="btn btn-primary">
                                Get it at  Rs {item.price}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
}

export default Card;
