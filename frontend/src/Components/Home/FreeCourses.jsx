import React from "react";
import data from '../../assets/data.json';
import Card from './Card'

function FreeCourses() {
    // Filtering free courses
    let freeData = data.filter((item) => {
        return item.price === 0;
    });
    console.log(freeData);

    return (
        <>
            <div className="container mb-5">
                <div className="row">
                    <h2 className="fw-bold fs-3">Free Offered Courses</h2>
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                            velit vitae deleniti saepe consequatur. Commodi impedit earum
                            iusto optio quam?
                        </p>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    {freeData.map((item) => {
                        return (
                            <div className="col-md-4 mb-4" key={item.id}>
                                <Card item={item} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default FreeCourses;
