// import  { useEffect, useRef, useState } from 'react';
// import { motion, useMotionValue, animate } from 'motion/react';

// export const items = [
//   {
//     id: 1,
//     url: 'https://images.unsplash.com/photo-1471899236350-e3016bf1e69e?q=80&w=880&auto=format&fit=crop',
//     title: 'Misty Mountain Majesty',
//   },
//   {
//     id: 2,
//     url: 'https://images.unsplash.com/photo-1539552678512-4005a33c64db?q=80&w=880&auto=format&fit=crop',
//     title: 'Winter Wonderland',
//   },
//   {
//     id: 3,
//     url: 'https://images.unsplash.com/photo-1709983966747-58c311fa6976?q=80&w=880&auto=format&fit=crop',
//     title: 'Autumn Mountain Retreat',
//   },
//   // ... baaki items
// ];

// export default function Team({
//   breakpoints = {
//     0: { slidesToShow: 1 },
//     768: { slidesToShow: 2 },
//     1024: { slidesToShow: 3 },
//   },
// }) {
//   const [index, setIndex] = useState(0);
//   const [slidesToShow, setSlidesToShow] = useState(1);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const x = useMotionValue(0);

//   // Handle responsive breakpoints
//   useEffect(() => {
//     const updateSlidesToShow = () => {
//       const width = window.innerWidth;
//       const sortedBreakpoints = Object.keys(breakpoints)
//         .map(Number)
//         .sort((a, b) => b - a);

//       for (const bp of sortedBreakpoints) {
//         if (width >= bp) {
//           // @ts-ignore
//           setSlidesToShow(breakpoints[bp].slidesToShow);
//           break;
//         }
//       }
//     };

//     updateSlidesToShow();
//     window.addEventListener('resize', updateSlidesToShow);
//     return () => window.removeEventListener('resize', updateSlidesToShow);
//   }, [breakpoints]);

//   useEffect(() => {
//     if (containerRef.current) {
//       const containerWidth = containerRef.current.offsetWidth || 1;
//       const slideWidth = containerWidth / slidesToShow;
//       const targetX = -index * slideWidth;

//       animate(x, targetX, {
//         type: 'spring',
//         stiffness: 300,
//         damping: 30,
//       });
//     }
//   }, [index, slidesToShow]);

//   const maxIndex = Math.max(0, items.length - slidesToShow);

//   return (
//     <div className='w-full lg:p-10 sm:p-4 p-2'>
//       <h2 className='text-2xl mb-4'>
//         Responsive Multi-Slide Carousel (Showing {slidesToShow})
//       </h2>
//       <div className='flex flex-col gap-3'>
//         <div className='relative overflow-hidden rounded-lg' ref={containerRef}>
//           <motion.div className='flex gap-4' style={{ x }}>
//             {items.map((item) => (
//               <div
//                 key={item.id}
//                 className='flex-shrink-0 h-[300px] rounded-lg overflow-hidden relative'
//                 style={{
//                   width: `calc((100% - ${(slidesToShow - 1) * 16}px) / ${slidesToShow})`,
//                 }}
//               >
//                 <img
//                   src={item.url}
//                   alt={item.title}
//                   className='w-full h-full object-cover select-none pointer-events-none'
//                   draggable={false}
//                 />
//                 <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3'>
//                   <p className='text-white text-sm font-medium'>{item.title}</p>
//                 </div>
//               </div>
//             ))}
//           </motion.div>

//           {/* Navigation Buttons */}
//           <motion.button
//             disabled={index === 0}
//             onClick={() => setIndex((i) => Math.max(0, i - 1))}
//             className={`absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-transform z-10
//               ${index === 0 ? 'opacity-40 cursor-not-allowed bg-gray-300' : 'bg-white hover:scale-110 hover:opacity-100 opacity-70'}`}
//           >
//             <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
//               <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
//             </svg>
//           </motion.button>

//           <motion.button
//             disabled={index === maxIndex}
//             onClick={() => setIndex((i) => Math.min(maxIndex, i + 1))}
//             className={`absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-transform z-10
//               ${index === maxIndex ? 'opacity-40 cursor-not-allowed bg-gray-300' : 'bg-white hover:scale-110 hover:opacity-100 opacity-70'}`}
//           >
//             <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
//               <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
//             </svg>
//           </motion.button>
//         </div>

//         {/* Dummy Member Card Below Carousel */}
//         <div className="mt-8 max-w-md mx-auto">
//           <motion.div
//             className="relative bg-gray-100 border border-gray-300 rounded-lg p-6 shadow-md cursor-pointer overflow-hidden"
//             whileHover={{ borderColor: "#F97316", scale: 1.02 }}
//             transition={{ type: "spring", stiffness: 300, damping: 20 }}
//           >
//             {/* Animated Orange Left Border */}
//             <motion.div
//               className="absolute left-0 top-0 bottom-0 w-1 bg-orange-400"
//               layout
//               initial={{ height: 0 }}
//               animate={{ height: "100%" }}
//               transition={{ type: "spring", stiffness: 500, damping: 30 }}
//             />

//             {/* Dummy Name & Position */}
//             <div className="relative z-10">
//               <h3 className="text-lg font-semibold text-gray-800">Awab Sheikh</h3>
//               <p className="text-gray-600">Frontend Developer</p>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// }


// // import React from "react";
// // import { motion } from "framer-motion";

// // const team = [
// //   { name: "Awab Sheikh", position: "Frontend Developer", img: "/team1.jpg" },
// //   { name: "Ali Khan", position: "Backend Developer", img: "/team2.jpg" },
// //   { name: "Sara Ahmed", position: "UI/UX Designer", img: "/team3.jpg" },
// //   { name: "Zara Malik", position: "Project Manager", img: "/team4.jpg" },
// // ];

// // export const Team = () => {
// //   return (
// //     <section className="py-20 bg-gray-50">
// //       <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
// //         {team.map((member, idx) => (
// //           <motion.div
// //             key={member.name}
// //             className="bg-white rounded-lg shadow-lg overflow-hidden text-center p-4"
// //             initial={{ y: 50, opacity: 0 }}
// //             whileInView={{ y: 0, opacity: 1 }}
// //             viewport={{ once: true }}
// //             transition={{ delay: idx * 0.1, type: "spring", stiffness: 120 }}
// //             whileHover={{ scale: 1.05 }}
// //           >
// //             <img
// //               src={member.img}
// //               alt={member.name}
// //               className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
// //             />
// //             <h3 className="text-lg font-semibold">{member.name}</h3>
// //             <p className="text-sm text-gray-500">{member.position}</p>
// //           </motion.div>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // };
