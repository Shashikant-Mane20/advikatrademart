// "use client";
// import React from 'react';

// export default function ComingSoon() {
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-amber-100 to-orange-200 text-gray-800 px-4">
//       <div className="text-center max-w-lg sm:max-w-xl">
//         {/* Logo with Stylish Font */}
//         <div className="mb-8">
//           <h1
//             className="text-4xl sm:text-5xl font-bold text-amber-700"
//             style={{ fontFamily: "'Dancing Script', cursive" }}
//           >
//             Advika<span className="text-orange-600">TradeMart</span>
//           </h1>
//           <p
//             className="text-base sm:text-lg text-gray-700 mt-2"
//             style={{ fontFamily: "'Roboto', sans-serif" }}
//           >
//             Premium Dry Fruits Delivered Fresh to Your Doorstep
//           </p>
//         </div>

//         {/* Hero Section */}
//         <div className="space-y-4 sm:space-y-6">
//           <h2
//             className="text-2xl sm:text-3xl font-semibold"
//             style={{ fontFamily: "'Roboto', sans-serif" }}
//           >
//             We're launching soon!
//           </h2>
//           <p className="text-sm sm:text-base text-gray-600">
//             Stay tuned for the grand opening of our online store.
//           </p>
//         </div>

//         {/* Contact Information */}
//         <div className="mt-6 sm:mt-8 space-y-2 sm:space-y-3">
//           <p className="text-base sm:text-lg text-gray-700">
//             📞 <span className="font-bold">Contact Number:</span> +91 98765 43210
//           </p>
//           <p className="text-base sm:text-lg text-gray-700">
//             📧 <span className="font-bold">Email:</span> contact@advikatrademart.com
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import React, { useEffect, useRef } from "react";

export default function ComingSoon() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const width = (canvas.width = window.innerWidth);
    const height = (canvas.height = window.innerHeight);

    const snowflakes = [];

    class Snowflake {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.radius = Math.random() * 4 + 1;
        this.speed = Math.random() * 2 + 1;
        this.opacity = Math.random() * 0.5 + 0.5;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.fill();
        ctx.closePath();
      }

      update() {
        this.y += this.speed;
        if (this.y > height) {
          this.y = 0;
          this.x = Math.random() * width;
        }
        this.draw();
      }
    }

    function createSnowflakes() {
      for (let i = 0; i < 100; i++) {
        snowflakes.push(new Snowflake());
      }
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);
      snowflakes.forEach((snowflake) => snowflake.update());
      requestAnimationFrame(animate);
    }

    createSnowflakes();
    animate();

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resizeCanvas);

    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-amber-50 to-orange-400 text-gray-800 px-4 overflow-hidden">
      {/* Snowfall Effect */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
      />
      
      <div className="relative text-center max-w-lg sm:max-w-xl z-10">
        {/* Logo with Stylish Font */}
        <div className="mb-8">
          <h1
            className="text-4xl sm:text-5xl font-bold text-amber-700"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Advika<span className="text-orange-600">TradeMart</span>
          </h1>
          <p
            className="text-base sm:text-lg text-gray-700 mt-2"
            style={{ fontFamily: "'Roboto', sans-serif" }}
          >
            Premium Dry Fruits Delivered Fresh to Your Doorstep
          </p>
        </div>

        {/* Hero Section */}
        <div className="space-y-4 sm:space-y-6">
          <h2
            className="text-2xl sm:text-3xl font-semibold"
            style={{ fontFamily: "'Roboto', sans-serif" }}
          >
            We're launching soon!
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Stay tuned for the grand opening of our online store.
          </p>
        </div>

        {/* Contact Information */}
        {/* <div className="mt-6 sm:mt-8 space-y-2 sm:space-y-3">
          <p className="text-base sm:text-lg text-gray-700">
            📞 <span className="font-bold">Contact Number:</span> +91 98765 43210
          </p>
          <p className="text-base sm:text-lg text-gray-700">
            📧 <span className="font-bold">Email:</span> contact@advikatrademart.com
          </p>
        </div> */}
      </div>
    </div>
  );
}
