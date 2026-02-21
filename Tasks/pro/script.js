// Scroll animation
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("show");
      }
    });
  },{ threshold:0.2 });
  
  document.querySelectorAll(".animate").forEach(el=>{
    observer.observe(el);
  });
  
  // Mobile menu
  const menuBtn = document.querySelector(".menu-btn");
  const nav = document.querySelector("nav");
  
  menuBtn.onclick = () => {
    nav.classList.toggle("active");
  };
  