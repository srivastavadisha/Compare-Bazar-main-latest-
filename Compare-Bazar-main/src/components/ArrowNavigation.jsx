// 2 arrows
// import React from "react";
// import { ChevronUp, ChevronDown } from "lucide-react";
// const ArrowNavigation = () => {
//   // Function to scroll to the top of the page
//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth", // Smooth scrolling
//     });
//   };

//   // Function to scroll to the bottom of the page
//   const scrollToBottom = () => {
//     window.scrollTo({
//       top: document.documentElement.scrollHeight, // Scroll to the bottom
//       behavior: "smooth", // Smooth scrolling
//     });
//   };

//   return (
//     <div className="fixed bottom-20 right-8 flex flex-col space-y-4 z-50">
//       {/* Up Arrow */}
//       <div
//         className="p-3 bg-[#000e54] rounded-full cursor-pointer hover:bg-[#000e54]/90 transition-all duration-200 shadow-lg"
//         onClick={scrollToTop}
//       >
//         <ChevronUp className="h-6 w-6 text-white" />
//       </div>

//       {/* Down Arrow */}
//       <div
//         className="p-3 bg-[#000e54] rounded-full cursor-pointer hover:bg-[#000e54]/90 transition-all duration-200 shadow-lg"
//         onClick={scrollToBottom}
//       >
//         <ChevronDown className="h-6 w-6 text-white" />
//       </div>
//     </div>
//   );
// };

// export default ArrowNavigation;


import React, { useState, useEffect } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
const ArrowNavigation = () => {
  const [isAtBottom, setIsAtBottom] = useState(false);

  // Function to check if the user is at the bottom of the page
  const checkScrollPosition = () => {
    const scrollTop = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    // Check if the user is near the bottom of the page
    if (scrollTop + clientHeight >= scrollHeight - 100) {
      setIsAtBottom(true); // User is at the bottom
    } else {
      setIsAtBottom(false); // User is not at the bottom
    }
  };

  // Function to scroll to the top or bottom of the page
  const handleScroll = () => {
    if (isAtBottom) {
      // Scroll to the top
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      // Scroll to the bottom
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  // Add a scroll event listener to update the arrow icon
  useEffect(() => {
    window.addEventListener("scroll", checkScrollPosition);
    return () => window.removeEventListener("scroll", checkScrollPosition);
  }, []);

  return (
    <div className="fixed bottom-20 right-8 z-50">
      <div
        className="p-3 bg-[#000e54] rounded-full cursor-pointer hover:bg-[#000e54]/90 transition-all duration-200 shadow-lg"
        onClick={handleScroll}
      >
        {isAtBottom ? (
          <ChevronUp className="h-6 w-6 text-white" />
        ) : (
          <ChevronDown className="h-6 w-6 text-white" />
        )}
      </div>
    </div>
  );
};

export default ArrowNavigation;