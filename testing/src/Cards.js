import React from "react";
import Data from "./Data";
import "./cards.css";
import { Link } from "react-router-dom";

const Cards = () => {
  return (
    <div className="row row-cols-2 gap-2 ">
      {Data.map((x) => {
        return (
          <>
            <div className="card "   style={{ width: "18rem" }}>
              <img
                src={x.thumbnail}
                height={200}
                className="card-img-top"
                alt="..."
                  
              />
              <div className="card-body">
                <h5 className="card-title">{x.title}</h5>
                <p className="card-text">{x.desc}</p>
                  

                  <Link to={`carddetail/${x.id}`}  > 
                    <button  className="btn btn-primary">
                             Read More
                     </button>

                     </Link>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Cards;
