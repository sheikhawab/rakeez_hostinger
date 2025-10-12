// import React, { useEffect, useRef, useState } from "react";

// // Utility function for className merging
// const cn = (...classes: (string | undefined | null | false)[]) => {
//   return classes.filter(Boolean).join(" ");
// };

// export const MacbookScroll = ({
//   src,
//   showGradient,
//   title,
// }: {
//   src?: string;
//   showGradient?: boolean;
//   title?: string | React.ReactNode;
// }) => {
//   const ref = useRef<HTMLDivElement>(null);
//   const [scrollProgress, setScrollProgress] = useState(0);
//   const [isMobile, setIsMobile] = useState(false);
//   const [isTablet, setIsTablet] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       const width = window.innerWidth;
//       setIsMobile(width < 768);
//       setIsTablet(width >= 768 && width < 1024);
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!ref.current) return;
      
//       const element = ref.current;
//       const rect = element.getBoundingClientRect();
//       const scrollEnd = element.clientHeight;
      
//       const progress = Math.max(0, Math.min(1, -rect.top / scrollEnd));
//       setScrollProgress(progress);
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll();
    
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Calculate transform values based on scroll progress
//   const scaleX = 1.2 + (scrollProgress * 0.3) * ((isMobile ? 1 : isTablet ? 1.3 : 1.5) - 1.2);
//   const scaleY = 0.6 + (scrollProgress * 0.3) * ((isMobile ? 1 : isTablet ? 1.3 : 1.5) - 0.6);
//   const translate = scrollProgress * (isMobile ? 800 : isTablet ? 1200 : 1500);
//   const rotate = scrollProgress < 0.1 ? -28 : scrollProgress < 0.3 ? -28 + ((scrollProgress - 0.1) / 0.2) * 28 : 0;
//   const textTransform = scrollProgress * 0.3 * 100;
//   const textOpacity = Math.max(0, 1 - (scrollProgress / 0.2));

//   return (
//     <div
//       ref={ref}
//       className="flex min-h-screen w-full shrink-0 transform flex-col items-center justify-center py-10 md:min-h-[200vh] md:justify-start"
//       style={{ perspective: "800px" }}
//     >
//       <h2
//         className="mb-10 px-4 text-center text-2xl font-bold text-neutral-800 transition-opacity dark:text-white md:mb-20 md:text-3xl lg:text-4xl"
//         style={{
//           transform: `translateY(${textTransform}px)`,
//           opacity: textOpacity,
//         }}
//       >
//         {title || (
//           <span>
//             This Macbook is built with Tailwindcss. <br /> No kidding.
//           </span>
//         )}
//       </h2>
      
//       <div className="w-full px-4 md:px-6 lg:px-8">
//         <div 
//           className="mx-auto" 
//           style={{ 
//             maxWidth: isMobile ? "100%" : isTablet ? "600px" : "1000px",
//             width: "100%"
//           }}
//         >
//           <Lid
//             src={src}
//             scaleX={scaleX}
//             scaleY={scaleY}
//             rotate={rotate}
//             translate={translate}
//             isMobile={isMobile}
//             isTablet={isTablet}
//           />
          
//           <div 
//             className="relative -z-10 w-full overflow-hidden rounded-2xl bg-gray-200 dark:bg-[#272729]" 
//             style={{ 
//               height: isMobile ? "250px" : isTablet ? "380px" : "550px" 
//             }}
//           >
//             <div className="relative w-full" style={{ height: isMobile ? "24px" : isTablet ? "36px" : "48px" }}>
//               <div 
//                 className="absolute inset-x-0 mx-auto bg-[#050505]" 
//                 style={{ 
//                   height: isMobile ? "12px" : isTablet ? "18px" : "24px",
//                   width: "80%"
//                 }}
//               />
//             </div>
//             <div className="relative flex">
//               <div className="mx-auto h-full w-[10%] overflow-hidden">
//                 <SpeakerGrid isMobile={isMobile} isTablet={isTablet} />
//               </div>
//               <div className="mx-auto h-full w-[80%]">
//                 <Keypad isMobile={isMobile} isTablet={isTablet} />
//               </div>
//               <div className="mx-auto h-full w-[10%] overflow-hidden">
//                 <SpeakerGrid isMobile={isMobile} isTablet={isTablet} />
//               </div>
//             </div>
//             <Trackpad isMobile={isMobile} isTablet={isTablet} />
//             <div 
//               className="absolute inset-x-0 bottom-0 mx-auto rounded-tl-3xl rounded-tr-3xl bg-gradient-to-t from-[#272729] to-[#050505]" 
//               style={{
//                 height: isMobile ? "8px" : isTablet ? "12px" : "16px",
//                 width: isMobile ? "60px" : isTablet ? "80px" : "100px"
//               }}
//             />
//             {showGradient && (
//               <div className="absolute inset-x-0 bottom-0 z-50 h-40 w-full bg-gradient-to-t from-white via-white to-transparent dark:from-black dark:via-black"></div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export const Lid = ({
//   scaleX,
//   scaleY,
//   rotate,
//   translate,
//   src,
//   isMobile,
//   isTablet,
// }: {
//   scaleX: number;
//   scaleY: number;
//   rotate: number;
//   translate: number;
//   src?: string;
//   isMobile: boolean;
//   isTablet: boolean;
// }) => {
//   const lidHeight = isMobile ? "150px" : isTablet ? "250px" : "400px";
//   const screenHeight = isMobile ? "300px" : isTablet ? "500px" : "800px";

//   return (
//     <div className="relative" style={{ perspective: "800px" }}>
//       <div
//         style={{
//           transform: "perspective(800px) rotateX(-25deg) translateZ(0px)",
//           transformOrigin: "bottom",
//           transformStyle: "preserve-3d",
//           height: lidHeight,
//         }}
//         className="relative w-full rounded-2xl bg-[#010101] p-2"
//       >
//         <div
//           style={{
//             boxShadow: "0px 2px 0px 2px #171717 inset",
//           }}
//           className="absolute inset-0 flex items-center justify-center rounded-lg bg-[#010101]"
//         >
//           <span className="text-white">
//             <AceternityLogo isMobile={isMobile} isTablet={isTablet} />
//           </span>
//         </div>
//       </div>
//       <div
//         style={{
//           transform: `scaleX(${scaleX}) scaleY(${scaleY}) rotateX(${rotate}deg) translateY(${translate}px)`,
//           transformStyle: "preserve-3d",
//           transformOrigin: "top",
//           transition: "transform 0.1s ease-out",
//           height: screenHeight,
//         }}
//         className="absolute inset-0 w-full rounded-2xl bg-[#010101] p-2"
//       >
//         <div className="absolute inset-0 rounded-lg bg-[#272729]" />
//         {src && (
//           <img
//             src={src}
//             alt="MacBook Screen"
//             className="absolute inset-0 h-full w-full rounded-lg object-cover object-left-top"
//           />
//         )}
//       </div>
//     </div>
//   );
// };

// export const Trackpad = ({ isMobile, isTablet }: { isMobile: boolean; isTablet: boolean }) => {
//   const height = isMobile ? "80px" : isTablet ? "120px" : "180px";
  
//   return (
//     <div
//       className="mx-auto my-1 w-[40%] rounded-xl"
//       style={{
//         boxShadow: "0px 0px 1px 1px #00000020 inset",
//         height: height,
//       }}
//     ></div>
//   );
// };

// // Icon Components (Simple SVG replacements)
// const IconComponent = ({ d, className }: { d: string; className?: string }) => (
//   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
//     <path d={d} />
//   </svg>
// );

// const BrightnessIcon = ({ className, up }: { className?: string; up?: boolean }) => (
//   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
//     <circle cx="12" cy="12" r="4"/>
//     <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
//     {up && <path d="M12 8v8m-4-4h8"/>}
//   </svg>
// );

// const VolumeIcon = ({ className, level }: { className?: string; level?: number }) => (
//   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
//     <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
//     {level && level >= 2 && <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>}
//     {level && level >= 3 && <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>}
//   </svg>
// );

// export const Keypad = ({ isMobile, isTablet }: { isMobile: boolean; isTablet: boolean }) => {
//   const scale = isMobile ? 0.6 : isTablet ? 0.85 : 1.2;
  
//   return (
//     <div className="mx-1 h-full rounded-md bg-[#050505] p-1" style={{ transform: `scale(${scale})`, transformOrigin: 'top center' }}>
//       {/* First Row */}
//       <div className="mb-[2px] flex w-full shrink-0 gap-[2px]">
//         <KBtn className="w-10 items-end justify-start pb-[2px] pl-[4px]" childrenClassName="items-start">esc</KBtn>
//         <KBtn><BrightnessIcon className="h-[6px] w-[6px]" /><span className="mt-1 inline-block">F1</span></KBtn>
//         <KBtn><BrightnessIcon className="h-[6px] w-[6px]" up /><span className="mt-1 inline-block">F2</span></KBtn>
//         <KBtn><IconComponent d="M3 3h7v7H3z M14 3h7v7h-7z M14 14h7v7h-7z M3 14h7v7H3z" className="h-[6px] w-[6px]" /><span className="mt-1 inline-block">F3</span></KBtn>
//         <KBtn><IconComponent d="M11 3a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 0l10 10" className="h-[6px] w-[6px]" /><span className="mt-1 inline-block">F4</span></KBtn>
//         <KBtn><IconComponent d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z M19 10v2a7 7 0 0 1-14 0v-2 M12 19v4 M8 23h8" className="h-[6px] w-[6px]" /><span className="mt-1 inline-block">F5</span></KBtn>
//         <KBtn><IconComponent d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" className="h-[6px] w-[6px]" /><span className="mt-1 inline-block">F6</span></KBtn>
//         <KBtn><IconComponent d="M6 4L2 8l4 4 M2 8h12.5a5.5 5.5 0 0 1 0 11H11" className="h-[6px] w-[6px]" /><span className="mt-1 inline-block">F7</span></KBtn>
//         <KBtn><IconComponent d="M5 4l5 4-5 4z M13 4l5 4-5 4z" className="h-[6px] w-[6px]" /><span className="mt-1 inline-block">F8</span></KBtn>
//         <KBtn><IconComponent d="M18 4L12 8l6 4 M6 8h12.5" className="h-[6px] w-[6px]" /><span className="mt-1 inline-block">F9</span></KBtn>
//         <KBtn><VolumeIcon className="h-[6px] w-[6px]" level={3} /><span className="mt-1 inline-block">F10</span></KBtn>
//         <KBtn><VolumeIcon className="h-[6px] w-[6px]" level={2} /><span className="mt-1 inline-block">F11</span></KBtn>
//         <KBtn><VolumeIcon className="h-[6px] w-[6px]" level={1} /><span className="mt-1 inline-block">F12</span></KBtn>
//         <KBtn>
//           <div className="h-4 w-4 rounded-full bg-gradient-to-b from-neutral-900 from-20% via-black via-50% to-neutral-900 to-95% p-px">
//             <div className="h-full w-full rounded-full bg-black" />
//           </div>
//         </KBtn>
//       </div>

//       {/* Second row */}
//       <div className="mb-[2px] flex w-full shrink-0 gap-[2px]">
//         <KBtn><span className="block">~</span><span className="mt-1 block">`</span></KBtn>
//         <KBtn><span className="block">!</span><span className="block">1</span></KBtn>
//         <KBtn><span className="block">@</span><span className="block">2</span></KBtn>
//         <KBtn><span className="block">#</span><span className="block">3</span></KBtn>
//         <KBtn><span className="block">$</span><span className="block">4</span></KBtn>
//         <KBtn><span className="block">%</span><span className="block">5</span></KBtn>
//         <KBtn><span className="block">^</span><span className="block">6</span></KBtn>
//         <KBtn><span className="block">&</span><span className="block">7</span></KBtn>
//         <KBtn><span className="block">*</span><span className="block">8</span></KBtn>
//         <KBtn><span className="block">(</span><span className="block">9</span></KBtn>
//         <KBtn><span className="block">)</span><span className="block">0</span></KBtn>
//         <KBtn><span className="block">—</span><span className="block">_</span></KBtn>
//         <KBtn><span className="block">+</span><span className="block"> = </span></KBtn>
//         <KBtn className="w-10 items-end justify-end pr-[4px] pb-[2px]" childrenClassName="items-end">delete</KBtn>
//       </div>

//       {/* Third row */}
//       <div className="mb-[2px] flex w-full shrink-0 gap-[2px]">
//         <KBtn className="w-10 items-end justify-start pb-[2px] pl-[4px]" childrenClassName="items-start">tab</KBtn>
//         {["Q","W","E","R","T","Y","U","I","O","P"].map(key => <KBtn key={key}><span className="block">{key}</span></KBtn>)}
//         <KBtn><span className="block">{`{`}</span><span className="block">{`[`}</span></KBtn>
//         <KBtn><span className="block">{`}`}</span><span className="block">{`]`}</span></KBtn>
//         <KBtn><span className="block">{`|`}</span><span className="block">{`\\`}</span></KBtn>
//       </div>

//       {/* Fourth Row */}
//       <div className="mb-[2px] flex w-full shrink-0 gap-[2px]">
//         <KBtn className="w-[2.8rem] items-end justify-start pb-[2px] pl-[4px]" childrenClassName="items-start">caps lock</KBtn>
//         {["A","S","D","F","G","H","J","K","L"].map(key => <KBtn key={key}><span className="block">{key}</span></KBtn>)}
//         <KBtn><span className="block">{`:`}</span><span className="block">{`;`}</span></KBtn>
//         <KBtn><span className="block">{`"`}</span><span className="block">{`'`}</span></KBtn>
//         <KBtn className="w-[2.85rem] items-end justify-end pr-[4px] pb-[2px]" childrenClassName="items-end">return</KBtn>
//       </div>

//       {/* Fifth Row */}
//       <div className="mb-[2px] flex w-full shrink-0 gap-[2px]">
//         <KBtn className="w-[3.65rem] items-end justify-start pb-[2px] pl-[4px]" childrenClassName="items-start">shift</KBtn>
//         {["Z","X","C","V","B","N","M"].map(key => <KBtn key={key}><span className="block">{key}</span></KBtn>)}
//         <KBtn><span className="block">{`<`}</span><span className="block">{`,`}</span></KBtn>
//         <KBtn><span className="block">{`>`}</span><span className="block">{`.`}</span></KBtn>
//         <KBtn><span className="block">{`?`}</span><span className="block">{`/`}</span></KBtn>
//         <KBtn className="w-[3.65rem] items-end justify-end pr-[4px] pb-[2px]" childrenClassName="items-end">shift</KBtn>
//       </div>

//       {/* Sixth Row */}
//       <div className="mb-[2px] flex w-full shrink-0 gap-[2px]">
//         <KBtn childrenClassName="h-full justify-between py-[4px]">
//           <div className="flex w-full justify-end pr-1"><span className="block">fn</span></div>
//           <div className="flex w-full justify-start pl-1">
//             <IconComponent d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 5v10M7 12h10" className="h-[6px] w-[6px]" />
//           </div>
//         </KBtn>
//         <KBtn childrenClassName="h-full justify-between py-[4px]">
//           <div className="flex w-full justify-end pr-1">
//             <IconComponent d="M12 19V5M5 12l7-7 7 7" className="h-[6px] w-[6px]" />
//           </div>
//           <div className="flex w-full justify-start pl-1"><span className="block">ctrl</span></div>
//         </KBtn>
//         <KBtn childrenClassName="h-full justify-between py-[4px]">
//           <div className="flex w-full justify-end pr-1"><OptionKey className="h-[6px] w-[6px]" /></div>
//           <div className="flex w-full justify-start pl-1"><span className="block">opt</span></div>
//         </KBtn>
//         <KBtn className="w-8" childrenClassName="h-full justify-between py-[4px]">
//           <div className="flex w-full justify-end pr-1">
//             <IconComponent d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3" className="h-[6px] w-[6px]" />
//           </div>
//           <div className="flex w-full justify-start pl-1"><span className="block">cmd</span></div>
//         </KBtn>
//         <KBtn className="w-[8.2rem]"></KBtn>
//         <KBtn className="w-8" childrenClassName="h-full justify-between py-[4px]">
//           <div className="flex w-full justify-start pl-1">
//             <IconComponent d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3" className="h-[6px] w-[6px]" />
//           </div>
//           <div className="flex w-full justify-start pl-1"><span className="block">cmd</span></div>
//         </KBtn>
//         <KBtn childrenClassName="h-full justify-between py-[4px]">
//           <div className="flex w-full justify-start pl-1"><OptionKey className="h-[6px] w-[6px]" /></div>
//           <div className="flex w-full justify-start pl-1"><span className="block">opt</span></div>
//         </KBtn>
//         <div className="mt-[2px] flex h-6 w-[4.9rem] flex-col items-center justify-end rounded-[4px] p-[0.5px]">
//           <KBtn className="h-3 w-6">
//             <svg className="h-[6px] w-[6px]" fill="currentColor" viewBox="0 0 24 24"><path d="M7 14l5-5 5 5z"/></svg>
//           </KBtn>
//           <div className="flex">
//             <KBtn className="h-3 w-6">
//               <svg className="h-[6px] w-[6px]" fill="currentColor" viewBox="0 0 24 24"><path d="M14 7l-5 5 5 5z"/></svg>
//             </KBtn>
//             <KBtn className="h-3 w-6">
//               <svg className="h-[6px] w-[6px]" fill="currentColor" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"/></svg>
//             </KBtn>
//             <KBtn className="h-3 w-6">
//               <svg className="h-[6px] w-[6px]" fill="currentColor" viewBox="0 0 24 24"><path d="M10 7l5 5-5 5z"/></svg>
//             </KBtn>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export const KBtn = ({
//   className,
//   children,
//   childrenClassName,
//   backlit = true,
// }: {
//   className?: string;
//   children?: React.ReactNode;
//   childrenClassName?: string;
//   backlit?: boolean;
// }) => {
//   return (
//     <div className={cn("rounded-[4px] p-[0.5px]", backlit && "bg-white/[0.2] shadow-xl shadow-white")}>
//       <div
//         className={cn("flex h-6 w-6 items-center justify-center rounded-[3.5px] bg-[#0A090D]", className)}
//         style={{
//           boxShadow: "0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset",
//         }}
//       >
//         <div className={cn("flex w-full flex-col items-center justify-center text-[5px] text-neutral-200", childrenClassName, backlit && "text-white")}>
//           {children}
//         </div>
//       </div>
//     </div>
//   );
// };

// export const SpeakerGrid = ({ isMobile, isTablet }: { isMobile: boolean; isTablet: boolean }) => {
//   const height = isMobile ? "120px" : isTablet ? "180px" : "280px";
  
//   return (
//     <div
//       className="mt-2 flex gap-[2px] px-[0.5px]"
//       style={{
//         backgroundImage: "radial-gradient(circle, #08080A 0.5px, transparent 0.5px)",
//         backgroundSize: "3px 3px",
//         height: height,
//       }}
//     ></div>
//   );
// };

// export const OptionKey = ({ className }: { className: string }) => {
//   return (
//     <svg fill="none" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={className}>
//       <rect stroke="currentColor" strokeWidth={2} x="18" y="5" width="10" height="2" />
//       <polygon stroke="currentColor" strokeWidth={2} points="10.6,5 4,5 4,7 9.4,7 18.4,27 28,27 28,25 19.6,25 " />
//     </svg>
//   );
// };

// const AceternityLogo = ({ isMobile, isTablet }: { isMobile: boolean; isTablet: boolean }) => {
//   const size = isMobile ? "h-4 w-4" : isTablet ? "h-5 w-5" : "h-6 w-6";
  
//   return (
//     <svg width="66" height="65" viewBox="0 0 66 65" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${size} text-white`}>
//       <path
//         d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
//         stroke="currentColor"
//         strokeWidth="15"
//         strokeMiterlimit="3.86874"
//         strokeLinecap="round"
//       />
//     </svg>
//   );
// };

// // Demo Component
// export default function MacbookScrollDemo() {
//   return (
//     <div className="min-h-screen w-full overflow-hidden bg-white dark:bg-[#0B0B0F]">
//       <MacbookScroll
//         title={
//           <span>
//             All Your IT Solutions, Under One Roof <br /> Rakeez Solutions.
//           </span>
//         }
//         src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80"
//         showGradient={false}
//       />
//     </div>
//   );
// }

//// orignal working component
import React, { useEffect, useRef, useState } from "react";
import { MotionValue, motion, useScroll, useTransform } from "motion/react";
import { cn } from "../../lib/utils";
import {
  IconBrightnessDown,
  IconBrightnessUp,
  IconCaretRightFilled,
  IconCaretUpFilled,
  IconChevronUp,
  IconMicrophone,
  IconMoon,
  IconPlayerSkipForward,
  IconPlayerTrackNext,
  IconPlayerTrackPrev,
  IconTable,
  IconVolume,
  IconVolume2,
  IconVolume3,
} from "@tabler/icons-react";
import { IconSearch } from "@tabler/icons-react";
import { IconWorld } from "@tabler/icons-react";
import { IconCommand } from "@tabler/icons-react";
import { IconCaretLeftFilled } from "@tabler/icons-react";
import { IconCaretDownFilled } from "@tabler/icons-react";

// import { logo } from "../../assets/landinglogo.jpg";

export const MacbookScroll = ({
  src,
  showGradient,
  title,
  // badge,
}: {
  src?: string;
  showGradient?: boolean;
  title?: string | React.ReactNode;
  badge?: React.ReactNode;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window && window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, []);

  const scaleX = useTransform(
    scrollYProgress,
    [0, 0.3],
    [1.2, isMobile ? 1 : 1.5]
  );
  const scaleY = useTransform(
    scrollYProgress,
    [0, 0.3],
    [0.6, isMobile ? 1 : 1.5]
  );
  const translate = useTransform(scrollYProgress, [0, 1], [0, 1500]);
  const rotate = useTransform(scrollYProgress, [0.1, 0.12, 0.3], [-28, -28, 0]);
  const textTransform = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  console.log(src, "src macbook");
  return (
    <div
      ref={ref}
      className="flex min-h-[200vh] shrink-0 scale-[0.35] transform flex-col items-center justify-start py-0 [perspective:800px] sm:scale-50 md:scale-100 md:py-10"
    >
      <motion.h2
        style={{
          translateY: textTransform,
          opacity: textOpacity,
        }}
        className="mb-20 text-center text-3xl font-bold text-neutral-800 dark:text-white"
      >
        {title || (
          <span>
            This Macbook is built with Tailwindcss. <br /> No kidding.
          </span>
        )}
      </motion.h2>
      {/* Lid */}
      <Lid
        src={src}
        scaleX={scaleX}
        scaleY={scaleY}
        rotate={rotate}
        translate={translate}
      />
      {/* Base area */}
      <div className="relative -z-10 h-[22rem] w-[32rem] overflow-hidden rounded-2xl bg-gray-200 dark:bg-[#272729]">
        {/* above keyboard bar */}
        <div className="relative h-10 w-full">
          <div className="absolute inset-x-0 mx-auto h-4 w-[80%] bg-[#050505]" />
        </div>
        <div className="relative flex">
          <div className="mx-auto h-full w-[10%] overflow-hidden">
            <SpeakerGrid />
          </div>
          <div className="mx-auto h-full w-[80%]">
            <Keypad />
          </div>
          <div className="mx-auto h-full w-[10%] overflow-hidden">
            <SpeakerGrid />
          </div>
        </div>
        <Trackpad />
        <div className="absolute inset-x-0 bottom-0 mx-auto h-2 w-20 rounded-tl-3xl rounded-tr-3xl bg-gradient-to-t from-[#272729] to-[#050505]" />
        {showGradient && (
          <div className="absolute inset-x-0 bottom-0 z-50 h-40 w-full bg-gradient-to-t from-white via-white to-transparent dark:from-black dark:via-black"></div>
        )}
        {/* {badge && <div className="absolute bottom-4 left-4">{badge}</div>} */}
      </div>
    </div>
  );
};

export const Lid = ({
  scaleX,
  scaleY,
  rotate,
  translate,
  src,
}: {
  scaleX: MotionValue<number>;
  scaleY: MotionValue<number>;
  rotate: MotionValue<number>;
  translate: MotionValue<number>;
  src?: string;
}) => {
  return (
    <div className="relative [perspective:800px]">
      <div
        style={{
          transform: "perspective(800px) rotateX(-25deg) translateZ(0px)",
          transformOrigin: "bottom",
          transformStyle: "preserve-3d",
        }}
        className="relative h-[12rem] w-[32rem] rounded-2xl bg-[#010101] p-2"
      >
        <div
          style={{
            boxShadow: "0px 2px 0px 2px #171717 inset",
          }}
          className="absolute inset-0 flex items-center justify-center rounded-lg bg-[#010101]"
        >
          <span className="text-white">
            <AceternityLogo />
          </span>
        </div>
      </div>
      <motion.div
        style={{
          scaleX: scaleX,
          scaleY: scaleY,
          rotateX: rotate,
          translateY: translate,
          transformStyle: "preserve-3d",
          transformOrigin: "top",
        }}
        className="absolute inset-0 h-96 w-[32rem] rounded-2xl bg-[#010101] p-2"
      >
        <div className="absolute inset-0 rounded-lg bg-[#272729]" />
        <img
          src={src as string}
          // src="/assets/images/landinglogo.jpg"
          // src={src || "/public/rakeez.png"} // Public folder se direct path
          
          // alt="awabbbbbbbbbbbbbbbbbbbbbbbbbbbb"
          className="absolute inset-0 h-full w-full rounded-lg object-cover object-left-top"
        />
      </motion.div>
    </div>
  );
};

export const Trackpad = () => {
  return (
    <div
      className="mx-auto my-1 h-32 w-[40%] rounded-xl"
      style={{
        boxShadow: "0px 0px 1px 1px #00000020 inset",
      }}
    ></div>
  );
};

export const Keypad = () => {
  return (
    <div className="mx-1 h-full [transform:translateZ(0)] rounded-md bg-[#050505] p-1 [will-change:transform]">
      {/* First Row */}
      <div className="mb-[2px] flex w-full shrink-0 gap-[2px]">
        <KBtn
          className="w-10 items-end justify-start pb-[2px] pl-[4px]"
          childrenClassName="items-start"
        >
          esc
        </KBtn>
        <KBtn>
          <IconBrightnessDown className="h-[6px] w-[6px]" />
          <span className="mt-1 inline-block">F1</span>
        </KBtn>
        <KBtn>
          <IconBrightnessUp className="h-[6px] w-[6px]" />
          <span className="mt-1 inline-block">F2</span>
        </KBtn>
        <KBtn>
          <IconTable className="h-[6px] w-[6px]" />
          <span className="mt-1 inline-block">F3</span>
        </KBtn>
        <KBtn>
          <IconSearch className="h-[6px] w-[6px]" />
          <span className="mt-1 inline-block">F4</span>
        </KBtn>
        <KBtn>
          <IconMicrophone className="h-[6px] w-[6px]" />
          <span className="mt-1 inline-block">F5</span>
        </KBtn>
        <KBtn>
          <IconMoon className="h-[6px] w-[6px]" />
          <span className="mt-1 inline-block">F6</span>
        </KBtn>
        <KBtn>
          <IconPlayerTrackPrev className="h-[6px] w-[6px]" />
          <span className="mt-1 inline-block">F7</span>
        </KBtn>
        <KBtn>
          <IconPlayerSkipForward className="h-[6px] w-[6px]" />
          <span className="mt-1 inline-block">F8</span>
        </KBtn>
        <KBtn>
          <IconPlayerTrackNext className="h-[6px] w-[6px]" />
          <span className="mt-1 inline-block">F8</span>
        </KBtn>
        <KBtn>
          <IconVolume3 className="h-[6px] w-[6px]" />
          <span className="mt-1 inline-block">F10</span>
        </KBtn>
        <KBtn>
          <IconVolume2 className="h-[6px] w-[6px]" />
          <span className="mt-1 inline-block">F11</span>
        </KBtn>
        <KBtn>
          <IconVolume className="h-[6px] w-[6px]" />
          <span className="mt-1 inline-block">F12</span>
        </KBtn>
        <KBtn>
          <div className="h-4 w-4 rounded-full bg-gradient-to-b from-neutral-900 from-20% via-black via-50% to-neutral-900 to-95% p-px">
            <div className="h-full w-full rounded-full bg-black" />
          </div>
        </KBtn>
      </div>

      {/* Second row */}
      <div className="mb-[2px] flex w-full shrink-0 gap-[2px]">
        <KBtn>
          <span className="block">~</span>
          <span className="mt-1 block">`</span>
        </KBtn>
        <KBtn>
          <span className="block">!</span>
          <span className="block">1</span>
        </KBtn>
        <KBtn>
          <span className="block">@</span>
          <span className="block">2</span>
        </KBtn>
        <KBtn>
          <span className="block">#</span>
          <span className="block">3</span>
        </KBtn>
        <KBtn>
          <span className="block">$</span>
          <span className="block">4</span>
        </KBtn>
        <KBtn>
          <span className="block">%</span>
          <span className="block">5</span>
        </KBtn>
        <KBtn>
          <span className="block">^</span>
          <span className="block">6</span>
        </KBtn>
        <KBtn>
          <span className="block">&</span>
          <span className="block">7</span>
        </KBtn>
        <KBtn>
          <span className="block">*</span>
          <span className="block">8</span>
        </KBtn>
        <KBtn>
          <span className="block">(</span>
          <span className="block">9</span>
        </KBtn>
        <KBtn>
          <span className="block">)</span>
          <span className="block">0</span>
        </KBtn>
        <KBtn>
          <span className="block">&mdash;</span>
          <span className="block">_</span>
        </KBtn>
        <KBtn>
          <span className="block">+</span>
          <span className="block"> = </span>
        </KBtn>
        <KBtn
          className="w-10 items-end justify-end pr-[4px] pb-[2px]"
          childrenClassName="items-end"
        >
          delete
        </KBtn>
      </div>

      {/* Third row */}
      <div className="mb-[2px] flex w-full shrink-0 gap-[2px]">
        <KBtn
          className="w-10 items-end justify-start pb-[2px] pl-[4px]"
          childrenClassName="items-start"
        >
          tab
        </KBtn>
        <KBtn>
          <span className="block">Q</span>
        </KBtn>
        <KBtn>
          <span className="block">W</span>
        </KBtn>
        <KBtn>
          <span className="block">E</span>
        </KBtn>
        <KBtn>
          <span className="block">R</span>
        </KBtn>
        <KBtn>
          <span className="block">T</span>
        </KBtn>
        <KBtn>
          <span className="block">Y</span>
        </KBtn>
        <KBtn>
          <span className="block">U</span>
        </KBtn>
        <KBtn>
          <span className="block">I</span>
        </KBtn>
        <KBtn>
          <span className="block">O</span>
        </KBtn>
        <KBtn>
          <span className="block">P</span>
        </KBtn>
        <KBtn>
          <span className="block">{`{`}</span>
          <span className="block">{`[`}</span>
        </KBtn>
        <KBtn>
          <span className="block">{`}`}</span>
          <span className="block">{`]`}</span>
        </KBtn>
        <KBtn>
          <span className="block">{`|`}</span>
          <span className="block">{`\\`}</span>
        </KBtn>
      </div>

      {/* Fourth Row */}
      <div className="mb-[2px] flex w-full shrink-0 gap-[2px]">
        <KBtn
          className="w-[2.8rem] items-end justify-start pb-[2px] pl-[4px]"
          childrenClassName="items-start"
        >
          caps lock
        </KBtn>
        <KBtn>
          <span className="block">A</span>
        </KBtn>
        <KBtn>
          <span className="block">S</span>
        </KBtn>
        <KBtn>
          <span className="block">D</span>
        </KBtn>
        <KBtn>
          <span className="block">F</span>
        </KBtn>
        <KBtn>
          <span className="block">G</span>
        </KBtn>
        <KBtn>
          <span className="block">H</span>
        </KBtn>
        <KBtn>
          <span className="block">J</span>
        </KBtn>
        <KBtn>
          <span className="block">K</span>
        </KBtn>
        <KBtn>
          <span className="block">L</span>
        </KBtn>
        <KBtn>
          <span className="block">{`:`}</span>
          <span className="block">{`;`}</span>
        </KBtn>
        <KBtn>
          <span className="block">{`"`}</span>
          <span className="block">{`'`}</span>
        </KBtn>
        <KBtn
          className="w-[2.85rem] items-end justify-end pr-[4px] pb-[2px]"
          childrenClassName="items-end"
        >
          return
        </KBtn>
      </div>

      {/* Fifth Row */}
      <div className="mb-[2px] flex w-full shrink-0 gap-[2px]">
        <KBtn
          className="w-[3.65rem] items-end justify-start pb-[2px] pl-[4px]"
          childrenClassName="items-start"
        >
          shift
        </KBtn>
        <KBtn>
          <span className="block">Z</span>
        </KBtn>
        <KBtn>
          <span className="block">X</span>
        </KBtn>
        <KBtn>
          <span className="block">C</span>
        </KBtn>
        <KBtn>
          <span className="block">V</span>
        </KBtn>
        <KBtn>
          <span className="block">B</span>
        </KBtn>
        <KBtn>
          <span className="block">N</span>
        </KBtn>
        <KBtn>
          <span className="block">M</span>
        </KBtn>
        <KBtn>
          <span className="block">{`<`}</span>
          <span className="block">{`,`}</span>
        </KBtn>
        <KBtn>
          <span className="block">{`>`}</span>
          <span className="block">{`.`}</span>
        </KBtn>
        <KBtn>
          <span className="block">{`?`}</span>
          <span className="block">{`/`}</span>
        </KBtn>
        <KBtn
          className="w-[3.65rem] items-end justify-end pr-[4px] pb-[2px]"
          childrenClassName="items-end"
        >
          shift
        </KBtn>
      </div>

      {/* sixth Row */}
      <div className="mb-[2px] flex w-full shrink-0 gap-[2px]">
        <KBtn className="" childrenClassName="h-full justify-between py-[4px]">
          <div className="flex w-full justify-end pr-1">
            <span className="block">fn</span>
          </div>
          <div className="flex w-full justify-start pl-1">
            <IconWorld className="h-[6px] w-[6px]" />
          </div>
        </KBtn>
        <KBtn className="" childrenClassName="h-full justify-between py-[4px]">
          <div className="flex w-full justify-end pr-1">
            <IconChevronUp className="h-[6px] w-[6px]" />
          </div>
          <div className="flex w-full justify-start pl-1">
            <span className="block">control</span>
          </div>
        </KBtn>
        <KBtn className="" childrenClassName="h-full justify-between py-[4px]">
          <div className="flex w-full justify-end pr-1">
            <OptionKey className="h-[6px] w-[6px]" />
          </div>
          <div className="flex w-full justify-start pl-1">
            <span className="block">option</span>
          </div>
        </KBtn>
        <KBtn
          className="w-8"
          childrenClassName="h-full justify-between py-[4px]"
        >
          <div className="flex w-full justify-end pr-1">
            <IconCommand className="h-[6px] w-[6px]" />
          </div>
          <div className="flex w-full justify-start pl-1">
            <span className="block">command</span>
          </div>
        </KBtn>
        <KBtn className="w-[8.2rem]"></KBtn>
        <KBtn
          className="w-8"
          childrenClassName="h-full justify-between py-[4px]"
        >
          <div className="flex w-full justify-start pl-1">
            <IconCommand className="h-[6px] w-[6px]" />
          </div>
          <div className="flex w-full justify-start pl-1">
            <span className="block">command</span>
          </div>
        </KBtn>
        <KBtn className="" childrenClassName="h-full justify-between py-[4px]">
          <div className="flex w-full justify-start pl-1">
            <OptionKey className="h-[6px] w-[6px]" />
          </div>
          <div className="flex w-full justify-start pl-1">
            <span className="block">option</span>
          </div>
        </KBtn>
        <div className="mt-[2px] flex h-6 w-[4.9rem] flex-col items-center justify-end rounded-[4px] p-[0.5px]">
          <KBtn className="h-3 w-6">
            <IconCaretUpFilled className="h-[6px] w-[6px]" />
          </KBtn>
          <div className="flex">
            <KBtn className="h-3 w-6">
              <IconCaretLeftFilled className="h-[6px] w-[6px]" />
            </KBtn>
            <KBtn className="h-3 w-6">
              <IconCaretDownFilled className="h-[6px] w-[6px]" />
            </KBtn>
            <KBtn className="h-3 w-6">
              <IconCaretRightFilled className="h-[6px] w-[6px]" />
            </KBtn>
          </div>
        </div>
      </div>
    </div>
  );
};

export const KBtn = ({
  className,
  children,
  childrenClassName,
  backlit = true,
}: {
  className?: string;
  children?: React.ReactNode;
  childrenClassName?: string;
  backlit?: boolean;
}) => {
  return (
    <div
      className={cn(
        "[transform:translateZ(0)] rounded-[4px] p-[0.5px] [will-change:transform]",
        backlit && "bg-white/[0.2] shadow-xl shadow-white"
      )}
    >
      <div
        className={cn(
          "flex h-6 w-6 items-center justify-center rounded-[3.5px] bg-[#0A090D]",
          className
        )}
        style={{
          boxShadow:
            "0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset",
        }}
      >
        <div
          className={cn(
            "flex w-full flex-col items-center justify-center text-[5px] text-neutral-200",
            childrenClassName,
            backlit && "text-white"
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export const SpeakerGrid = () => {
  return (
    <div
      className="mt-2 flex h-40 gap-[2px] px-[0.5px]"
      style={{
        backgroundImage:
          "radial-gradient(circle, #08080A 0.5px, transparent 0.5px)",
        backgroundSize: "3px 3px",
      }}
    ></div>
  );
};

export const OptionKey = ({ className }: { className: string }) => {
  return (
    <svg
      fill="none"
      version="1.1"
      id="icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      className={className}
    >
      <rect
        stroke="currentColor"
        strokeWidth={2}
        x="18"
        y="5"
        width="10"
        height="2"
      />
      <polygon
        stroke="currentColor"
        strokeWidth={2}
        points="10.6,5 4,5 4,7 9.4,7 18.4,27 28,27 28,25 19.6,25 "
      />
      <rect
        id="_Transparent_Rectangle_"
        className="st0"
        width="32"
        height="32"
        stroke="none"
      />
    </svg>
  );
};

const AceternityLogo = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-3 w-3 text-white"
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
      />
    </svg>
  );
};
