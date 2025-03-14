import React from "react";
import { FaFileVideo } from "react-icons/fa";

const HomeCategories = () => {
  const Categories = [
    { id: 1, title: "Printing" },
    { id: 2, title: "Rennovation" },
    { id: 3, title: "Wall Decor" },
    
  ];

  return (
    <div className="text-center mt-6 overflow-hidden">
      {/* Categories List */}
      <div className="mt-4 grid grid-cols-3 gap-24 px-8">
        {Categories.map((category) => (
            
          <div
            key={category.id}
            className="relative flex items-center justify-center text-white font-semibold text-lg 
              w-60 h-16   shadow-lg
              bg-gradient-to-b from-[#4A90E2] to-[#1B3C73]
              before:absolute before:left-0 before:-top-1 before:w-3 before:h-[110%] before:bg-gradient-to-b from-[#5CA9E6] to-[#0F265B]"
          >
            {category.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCategories;
