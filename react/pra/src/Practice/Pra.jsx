// import React, { useEffect, useRef, useState } from 'react'

// function Pra() {
//     const contactRef = useRef(null);
//   const [show, setShow] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setShow(true); // scroll pe show
//           }
//         });
//       },
//       { threshold: 0.3 } // 30% aaye tab animation start
//     );

//     observer.observe(contactRef.current);
//   }, []);


//   return (
//     <div>
//        <div style={{ height: "150vh", padding: "40px" }}>
//       <h1>Scroll Down 👇</h1>

//       {/* CONTACT SECTION */}
//       <div
//   ref={contactRef}
//   className={`contact-box ${show ? "show" : ""}`}
//   style={{
//     marginTop: "300px",
//     width: "300px",
//     padding: "20px",
//     borderRadius: "15px",
//     background: "#f4f4f4",
//     transition: "all 0.8s ease",
//     opacity: show ? 1 : 0,
//     transform: show ? "translateY(0px)" : "translateY(50px)",
//   }}
// >
//   Contact Section
// </div>

//         <h2>Contact Us</h2>
//         <p>Phone: ‪+91 99999 88888‬</p>
//       </div>
//     </div>

//   )
// }

// export default Pra
// import React from "react";

// export default function Pra() {
//   const text = "HELLO WORLD";
//   const card = section

//   return (
    
//     <div style={{ fontSize: "40px", display: "flex", gap: "6px" }}>
     
//       {text.split("").map((char, i) => (
//         <span
//           key={i}
//           style={{
//             opacity: 0,
//             animation: `fadeIn 0.5s forwards`,
//             animationDelay: `${2 + i * 0.1}s`,
//           }}
//         >
//           {char}
//         </span>
//       ))}

//       <style>{`
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//       `}</style>
//     </div>
//   );
// }
// import React from "react";

// export default function Pra() {
//   const cards = ["Card 1", "Card 2", "Card 3", "Card 4", "Card 5"];

//   return (
//     <div
//       style={{
//         display: "flex",
//         gap: "20px",
//         padding: "40px",
//       }}
//     >
      
//       {cards.map((item, i) => (
//         <div
//           key={i}
//           style={{
//             width: "150px",
//             height: "120px",
//             background: "#f3f3f3",
//             borderRadius: "15px",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             fontSize: "20px",
//             opacity: 0,
//             animation: `fadeIn 0.6s forwards`,
//             animationDelay: `${1 + i * 0.3}s`, // delay auto increasing
//             boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
//           }}
//         >
//           {item}
//         </div>
//       ))}

//       <style>{`
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//       `}</style>
//     </div>
//   );
// }
// import React, { useEffect, useRef, useState } from "react";

// export default function Pra() {
//   const cards = ["Card 1", "Card 2", "Card 3", "Card 4", "Card 5"];
//   const containerRef = useRef(null);
//   const [show, setShow] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setShow(true);
//         }
//       },
//       { threshold: 0.2 }
//     );

//     if (containerRef.current) {
//       observer.observe(containerRef.current);
//     }
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       style={{
//         padding: "40px",
//         marginTop: "400px", // scroll test
//         display: "flex",
//         gap: "20px",
//       }}
//     >
      
//       {cards.map((item, i) => (
//         <div
//           key={i}
//           style={{
//             width: "150px",
//             height: "120px",
//             background: "#f3f3f3",
//             borderRadius: "15px",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             fontSize: "20px",
//             opacity: show ? 1 : 0,
//             transform: show ? "translateY(0px)" : "translateY(40px)",
//             transition: "all 0.8s ease",
//             transitionDelay: `${i * 0.3}s`,
//             boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
//           }}
//         >
//           {item}
//         </div>
//       ))}
//     </div>
//   );
// }
// import React, { useEffect, useState } from "react";

// export default function Pra() {
//   const [show, setShow] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPos = window.scrollY;
//       if (scrollPos > 200) { 
//         setShow(true);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const cards = ["Card 1", "Card 2", "Card 3", "Card 4", "Card 5"];

//   return (
//     <div
//       style={{
//         marginTop: "400px",
//         display: "flex",
//         gap: "20px",
//         padding: "40px",
//       }}
//     >
//       {cards.map((item, i) => (
//         <div
//           key={i}
//           style={{
//             width: "150px",
//             height: "120px",
//             background: "#f3f3f3",
//             borderRadius: "15px",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             fontSize: "20px",
//             opacity: show ? 1 : 0,
//             transform: show ? "translateY(0px)" : "translateY(40px)",
//             transition: "all 0.8s ease",
//             transitionDelay: `${i * 0.3}s`,
//             boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
//           }}
//         >
//           {item}
//         </div>
//       ))}
//     </div>
//   );
// }

// import React, { useEffect, useState } from "react";

// export default function Pra() {
//   const [show, setShow] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 200) {
//         setShow(true);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const cards = [
//     {
//       title: "Card 1",
//       desc: "This is card number one.",
//       img: "data:image/jpeg;base64,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"
//     },
//     {
//       title: "Card 2",
//       desc: "This is card number two.",
//       img: "data:image/jpeg;base64,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"
//     },
//     {
//       title: "Card 3",
//       desc: "This is card number three.",
//       img: "data:image/jpeg;base64,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"
//     },
//     {
//       title: "Card 4",
//       desc: "This is card number four.",
//       img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAzQMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAECBQAGB//EADcQAAIBAwIEAwYEBQUBAAAAAAECAwAEERIhBRMxQSJRYRQycYGRoQZCwfAjUmKx0RUkM+Hxcv/EABoBAAMBAQEBAAAAAAAAAAAAAAABAwIEBQb/xAAjEQACAgICAwEAAwEAAAAAAAAAAQIRAxIhMQQTQVEUImEy/9oADAMBAAIRAxEAPwB574MdKqWzQ18Mmt1AHpR47aJV2O/pXPGDt1HrXoKUfhwuMu2L3DxyJsMb96XnAKplI8dj3FOiOMAjO/rQJ7VGGdYBHQVaEo9EMkJNWI3a6xpZ06eXWkmi5YzqHwFaBhVQSfEaXZFLZKbV2Y5UeXnxtu2uRRdA97JFVx5VoLYrINQJUfy9qs3Cx+WX6iqe6KIvxctcIzT0qKZktJU6DIoBUjrtVFJPohKEo9orXVdcd+lEUqjasavjRYkv0D611Xd9T6sY9KhjqOelCbB0UrqnFdimIqRUEVfFRikOymKjFXxXYpBZSoomKgig0UqCKtXYpAUqKvioxQOz1bSumQsZNLtcnJ1KwNaWuGTOE+YoLxxdBIc+orycco3yj6LLGdcMzzfle1SvENwWjFTcWi5JVs770tyYl2LHPpXZGGNro82eTyIvl8DvNtpiG0Yaufkk74zSJVVPhOalnYjdaPT+DXlccoZdo1XCgfWhe0nI2FAyarpJ61tYo/SUvJldodkuAy4KDHxpCXBO4FXKZqpStRgo9EsuaWTsAV8hXaTR9FToNVs5tGL6anRTHLqdFLY16xXRXaKa0V3Lo2D1ipQ4quk+VNFNqroo2F6xbTXaaOUqNFFi0YviuxTHLqClFj0F9NQVpjl7V3LpWPVixBqMUwUqumiw1ZvglNtx6VDaicDIJpyON87gURkkOyrXnLIr4PeeJtcsypIZF6sD8KHyidwDT08MgO64/wDmh4kGwJxXVGfBwzx8ifL3qdFMlD3qNFb2IvGLaK7l0yEq3KB6UOaBYrFNFRop0QKfPNTyQKz7Eb9DEglWWEscAE/CmhCGbAXPrTlmotp5UOzqCjgHcZxjG3TFTyZ1BFcXiObLRcNsjYfxpDHcZyZcEqB5EDestrdlJGBjPXzremSB7KTnyGKNEdnZBlh+zSENusvBkaFmk9nyhZlIOnPQ58vP19K5cXkyv+zO7yPEgl/VfDOMJ/p+tU5dMlfIZ+FRo9K7k/08xxXwWKVGmmSlQUp2Z1FSm9RopnRUaKNhaCxWo0UyUFdoFGwaCxSqlKa0VBQUbD0FTHUcumilV00tg0NhDIDktmje0NjAAFBxiu3rl9MWel/JZd5ARvQz1q1VNajFInLK2UIFVK0TFdprZJuwWKkZHaiaakfCnYJAgSN8/aodxpJY4AGSTRycjGMUk8wnvk4esWssDzd9lX5d6w2krZRJyeqY5+FLtLy5n5riGyZCrtJsD5evb7CtE26sWliYTeHKOmCGwAP7fahQ2UUWpIIS0YC6wdttX9qFwKUWjS29qugl90fcZzjavOyS3bkj1MMdEosQ4nOs9slvE5OZfEvcDGcH6faspr+/s2aGwmMCM2qQyHJZsYwSeu3avRXcKpxNjJGDk6WkwMBjv/ivPNaLcXJHtACs5OAc99zVsVURzRbfA9aSuwYT6U0KMnoCfKmQAy6lII9DWHdAXN2QkmlNWAuN8evrUcg28oNvcvrU7qpHauiM39OSeP6kbumoK1bh7Pd2hmKaWRgrhdwNutHERJwoLZ2G1bU0SeJr4K6KgpTkttJE2mVHQ/1DFUMda3TE8bXwVKVGimhEW6A1Bhb+Un5Ut0Cxt9IV0VBSn0s5n6RkijWXCbi7m5SJg4ySxwBWXlivptYZP4ZOjP8A2KqU9K3r/g95YLnAkhb3ZI9wR6+VZvs8j7ort8FpLKnymN4WnTQcrjrUhdWwomrfAxnyoMlwsTprOCxwKHKlY1BN0F9nk38LYqohYkAKTmjNfrEmJCD6VaC9SdtOAvlUHnl+HV/Fh+jFjwWe5j5j6Y/FgKdy3+Kch4Cq3jx3ToIeVlSNsPn47/apF4IIcyXCRgflL4pmyaC8b/k1HOMButcs8+Tu6OuHjYkqoQbgI8eJwU/IdO5+NRb8GhZ15k50/mAGDmte5lggUCJhkbkZ2pN7tOZu6Nny7Uvfla7H/Fwp9Hf6VYG40BZCv8ytnFRHwGPh8TvCdSlsksPESetHgu9K+CRAvxq/tk0m4OVHU6dqm5zfbKxxwXSM9bK4u7iUQs2g4Dbj3dOcfJiDVR+GbqzRmikDsclQhxjO/f1z9a1LK6ETFlwCeuB1p5bzWpPasPI10b9afZ5TivD57izuZZIl53KCyRnrqA976Y+YrxYe2tUZJ4naU7gKcMoxtX1nlwS5lnuYhC3U6xuPWvlvHI0ivrj2EKYxJ4SDqJ+flXX40tuGcXlRUaYhIFgUR2pOqQeI6s6T5f2pi14Pc3fiRHc4zpHf4GhWVo89zzLgkFmzpAwM17uxuQgRQVBUYGBV5zcOjnxYlkfPAr+HeFTWNhPHLcGO6kKkW7xk5AP0Of0r0vCbOOKUOxXGMjbvQFv1DhpGBIG2TVP9QVZWIwMnYZ6VxSlKR6EMcYpHo544ryIK+Co8xWLfcHiBZ4QDRI71nwNQHqKrM8ml/GWz51JSlHplHjjIyZbcRHoBVQo7ih310sLaTkselVhuS+xX61baX0woxTGRpqwDAgxDB7HNTEFbc7U7CkWnUTU3IooopCt9FCFt5wmWLY64z1xQPY5ckvLlj1Jp9snePaqcqRtzWPYx+tHym9/El0WIt4liUnbmHWapN+IHmijIt05sZPjzvuN/h2+lEVOGWihZ/G6kkEnOaz+fz42jRNCjJyR9q9dVLijwmpw+k3HF+ITpouJ3Kj3VAxihxtJMQXuWBG+5JoCNMM+E9MZIzihy3DRNy1XHc9s1qopcElKT7Y77Y0ceos0mG2Yk9f0ram4tfcICcvLO+AUcgj4+mc159TJfqI449MCZYgH3j0Hx+NRPaSRwNcSlnxudRyem1Skos6oOcU2jdtOPXdxKBNNMIsKWw2T3Hf4Va44hFoeQ8RRSmTplBBI8sDvXkFvGQkoCAeoz1q1tBzIzLjodh2xS9SQ1mk+D0X+t2sjEPGQA2zhmUsPMD/NbNv8AiiKzCey8ZkSN9gZRrK+h2r5/M5UcoE+Hb/yptYXm2jA1DdmbsPKiWKLXIRzyTPuEfFE4haQSRXVvEzIGZiCAwPcLQr66e1Rwk0dw2jIYDTq9PSvltvNc28a8meRIjuBnYZ9PrWjZcWvB/Bkv9CYwI2GpcfOuV4afZ2xzbKqNW+4pNckoY1GDsMnas555Ii3hBz++tNI7iEtzoTI3RgPeq4tl5GQBI4GQG9O1XjOK4RCeHI+WZJ4tMm6rgA9RvWlBNdS2vO9qjjJ3AckZ+3WgWkdpJPKLiLlkjBCbjP6VU2625CxRCVACdDSbHHqK3Jp8UShGSVstNeTwyqHnky3TI2o9tfXcbK02Cpbc9sfLf7UxwSTh3FbR0uokTDnY3JVs+m2+1Fk4ZYG9D286mSPGIJZgNeeu4OOlSco9NFlCdbJmhwvi1tczvHz5YJwMiPWCreopy34ldTRMqQmSRCQ+2NvP97V4grNZ8aWR4F2JUhX6qfUd+lbsV/F7RCZbZ48fnQ7g9RvUskEnZfFOTTTNC6ubhXGIldT3U5xQ2vLmNfHHjuM0eC+iuAokMVuzN4ZYh4X8wwyMHr3/AL1vQGxuIZIuVzosZ1BlyAfLvkEGpOSXwto/086tzNJDq5qrg9KPDxB7c6i4b+ljRobCzkuBFBNKQNWFchSPtWZxK2jgfDvKGB/MM6vUEUcMKaVmsv4oUbCAE98sR+lanDuNW17CW1pEw6q7D7HvXzy8jeMCb/kjO+dWPtQI22zHOy+YbrWnhTRn2tOmIXcMaf7t3DqHUMcEDBzgZpafiS28RhtZVZ9elAwyVGT/ANbUOa/W4FxaQMjI43lYEAKMbD71j3csDXGm3XEK7Z7t611xTl2cU3GP/JtcNmnbiEKTu2iRgrdPWgXUsThufGpcuw2G436GrzcXsk4fFBaK/NCjU2jA8z8welZk1wskzPrDmRssACN/OiKt8hOSjGk7Nyx4msC6o4VK4wcdR+8UHinExdQtHbxsit7+V3rHglBdlXwsR1+dNEqRsjax37E471rVJ2Yc5OFFLO1eZy2gMqEZFGu7h0UwxnwhiNu3wolu12ITNyyQDpD6cjz7UsIVIdpG3xnI31fCtqSbJOLjHgDDBLcy4UE+ZHat21toYouWzZYIQ+n16GjcCggl4Xr8KNqJcA4O3Q109rLEFVR4pTpXP5vX9+dSlO3R048OsduxV1QMg52lUAznqvkP35U8kcLjClX7jVt23qIIGtYxFJuxPUnq57L9vpUtbTOsUhiC83AULvoXG5/fnWHIqo/4BmtNBw2Rnpg7Vm302ico0kpKgg57H0rVuBJbIgdlODkEbfLevPXTCS7kMZL5OxxVcavs5s8qVIm2eTWscILPqyPWvRwLNFAs6EHAwADlR5j615lhySdYOrGcA9K9DwjjJEKWscDOS3uRqAPh++tGVNK0LxpRupBI/wCFdsZcpghgMnA29K2jcR3Cq6woxAwxViCPgetZDS2066gTGNX/ABFcafUCioghgBR43JGkjPcf5qEnt2dcFr10PkxSqDGyFlJ/hzLg7ddxt5VEl1HE450LoCRuDkCsaP8A2ytIdTsyhirHpnt+/SjR3d05AXTJERgodjnvvRpyaWX9NuN0cNy3JDbkEdKZW6RYkCxIkgPXT7wHYnt8RWEk3Uw6lIOSMnw/Wji6mlR1kB1YJ2GzDyqbhZdZE0aHOZLlpY5A0ROkHJDIfKqyyT8kyI6514IJO2euPOs6C+iEXJOrYYyvvDG29S13qRmjcykMCwBwSRRozO8WuxTjLXEbLEzZCqBuoFY6yS9PaFGPN63L90uwG1+IAgqSOtef0aXYBA/fNdMOjgzJqVoxCxORkgHrUGozXZz2NVIE5rgcHuDUrGzdKYtwIiGcHUOlKxpBLHlqkhkBLup0diD2OaYjkMbqysAPzgrkVu2t1wy7tUhud5TgFtO+fh0ArDCQrLLFMrgLnLq22N/P5VJS2vg6ZY3BKmelsfxHZug1L7PMNtQHhb4+lOSy8Lvsifh8SzdzG+NX0/vXkZY2lgRmcMQoHLKYI29NqDbyyW7BkY+E5Gaw8KfKZReVJcTVm/f8PZY3fh3PEWPFC7AkeePOlLfiEnNi1kgwnKK3QHGKJa8UWQbyMD5hth8qPxCS1nsgzBHkDbygYIHyoTa4kgai/wC0HX+C1/c/72KUOc6W8upB/wA1K8akhskcsHmC6M9xvWXOuvCq3MK9NutJuzBQh6A9KsoRao5JZZp2EnuJJ2BkYkjYb9qqJWUYXYnuKFmu1VXhdHPy3yFVQcs5O+wXrmtm05ltZm40aWcgIBtywP1NZsEbxxi4IyOgPYUy8vNiXUDg9mOcetTk7L4/68/TTtLyfiBwZFBAGzAAn4bb0reCdJZF0huXsANvF2/WlrS8kh5WT4QT0GSKJdcQgn992A1D0Pfp9anq0+C/sUocvkOJQLfQ6azqID6sb5GKjnacLE4zjdOuKxpbsNICgZVUkgZyRRLUghmXdifCe4p6GFlt0br38euTWNIxnGc5Pf16U5Dex8iMRXCtKw91lzvj/wArEmhMoBLZPckdaXAVdtWh85HYfWs6JlfZKPw0prmKQPcW4IaRtJJbIJHfHasxmlDEEnDHfBqg1Jq6b5zXLLrwScnFVitTmm9mHhuUjkAcsqjHQ5z50dr4cxuQI9GwBc6SaRZQ3TY0BwVOGFPhmHKaVAUiRh+tWMLKuBuKWVicEHBoocndjms2U4GY4zpGfKiKQMa98Uus+BjsOlW5qkYpGuBuGTSRpUYXpj71cMst48ki6g27LnqKzhKQNuvWqmU5znelQ96NNWRGkC7qehPUVntIyMRj3dqo0z7knqMUNm8XpTSoxKWyDphTrRuvamRPkYYEfrSQcaMGpDFQPKmJDwcg5RtwMVSZdahjtk9qUMuDkdasJz0Gcjz3oDhnNEwG24qsYDtozudqvHcLuCNzvmjxFM5HXzp7GVFfBuSdCixFMKBtilmLRjDA565xQ5S2C2dwahH1plulJGm7Ls2IgfpSTtlvhRZc8pR5d6XzWkYZOTRYpim2dqAavshUnehsEjRjuGkTSCwIqz5nzkjSDsBSVrJuxPu+VMSPkq6HxHqawXTtckANGcdUzvmjAQtsByj1DKf0oSlpMhu2+fOoZsfDzotiSoKY2jTUGEgH5lqokXucGqpMUOVHhfr2zR+ZDOikp4hscjGaVtD1TMJTRATXV1MyTk1bNdXUCIBOTXMfBn1rq6gRyeLrVc11dQInO1EBygrq6gaKd6sh3J711dQCKKMuc1IYqdjXV1AFzK2AM7VZJG3HaurqYjlJOsdqD2rq6tIRKjOaqTnrXV1IC5JWPbvRYzqQ57V1dSNoIsrFOvpUZ0jaurqybZOSRjtVo/EN66uoBH//2Q=="
//     },
//     {
//       title: "Card 5",
//       desc: "This is card number five.",
//       img: "data:image/jpeg;base64,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"
//     }
//   ];

//   return (
//     <div
//       style={{
//         marginTop: "400px",
//         display: "flex",
//         gap: "20px",
//         padding: "40px",
//       }}
//     >
//       {cards.map((card, i) => (
//         <div
//           key={i}
//           style={{
//             width: "180px",
//             background: "#fff",
//             borderRadius: "10px",
//             padding: "10px",
//             opacity: show ? 1 : 0,
//             transform: show ? "translateY(0px)" : "translateY(40px)",
//             transition: "all 0.8s ease",
//             transitionDelay: `${i * 0.3}s`,
//             boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
//           }}
//         >
//           {/* Image */}
//           <img
//             src={card.img}
//             alt="card"
//             style={{
//               width: "100%",
//               height: "100px",
//               borderRadius: "10px",
//               objectFit: "cover",
//             }}
//           />

//           {/* Title */}
//           <h3 style={{ margin: "10px 0 5px 0", fontSize: "18px" }}>
//             {card.title}
//           </h3>

//           {/* Description */}
//           <p style={{ fontSize: "14px", color: "#555" }}>{card.desc}</p>

//           {/* Button */}
//           <button
//             style={{
//               marginTop: "10px",
//               padding: "8px 12px",
//               width: "100%",
//               border: "none",
//               borderRadius: "8px",
//               background: "#4f46e5",
//               color: "#fff",
//               cursor: "pointer",
//             }}
//           >
//             Learn More
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";

export default function Pra() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Just trigger animation when component loads
    setTimeout(() => {
      setShow(true);
    }, 1000);
  }, []);

  const cards = ["Card 1", "Card 2", "Card 3", "Card 4", "Card 5"];

  return (
    <div
      style={{
        marginTop: "400px",
        display: "flex",
        gap: "20px",
        padding: "40px",
      }}
    >
      {cards.map((item, i) => (
        <div
          key={i}
          className={show ? "card show" : "card"}
          style={{
            width: "150px",
            height: "120px",
            background: "#f3f3f3",
            borderRadius: "15px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "20px",
            transitionDelay: `${i * 0.3}s`,
          }}
        >
          {item}
        </div>
      ))}

      <style>{`
        .card {
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.8s ease;
        }
        .card.show {
          opacity: 1;
          transform: translateY(0px);
        }
      `}</style>
    </div>
  );
}





