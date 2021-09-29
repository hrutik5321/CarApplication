import React from "react";

function DetailsContent() {
  return (
    <div className="w-full flex items-center flex-col">
      <div className="mt-3 w-3/4 flex">
        <div className="flex-1 p-3">
          <img
            src="https://www.pluglesspower.com/wp-content/uploads/2016/12/charger-diagram-corded-3.jpg"
            alt="electric car"
            className="w-full"
          />
        </div>
        <div className="flex-1">
          <p className="text-xl font-medium">Battery-Electric car</p>
          <p className="mt-2 font-medium text-base">Life of a battery</p>
          <p className="text-sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga iste
            labore illo eligendi enim earum rerum consequuntur quis, culpa
            cumque voluptates id dolor neque! Minima corrupti nam sequi incidunt
            reiciendis? Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Fuga iste labore illo eligendi enim earum rerum consequuntur
            quis, culpa cumque voluptates id dolor neque! Minima corrupti nam
            sequi incidunt reiciendis?
          </p>
          <p className="text-sm mt-3">
            {" "}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga iste
            labore illo eligendi enim earum rerum consequuntur quis, culpa
            cumque voluptates id dolor neque! Minima corrupti nam sequi incidunt
            reiciendis?
          </p>
        </div>
      </div>
    </div>
  );
}

export default DetailsContent;
