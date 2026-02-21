import React, { useEffect, useRef, useState } from "react";

function Scroll() {
  const contactRef = useRef();
  const [showContact, setShowContact] = useState(false);

  // Scroll par section visible hota hi animation chalu hogi
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShowContact(true);
        }
      },
      { threshold: 0.2 } // 20% visible hote hi effect start
    );

    observer.observe(contactRef.current);
  }, []);

  return (
    <div>

      {/* Top Section */}
      <div style={{ height: "100vh", padding: "20px" }}>
        <h1>Home</h1>
        <p>Scroll down to see Contact Section animation</p>
      </div>

      {/* Contact Section */}
      <div
        ref={contactRef}
        style={{
          height: "60vh",
          padding: "20px",
          background: "#dff7df",
          marginTop: "150px",

          // Animation styling
          opacity: showContact ? 1 : 0,
          transform: showContact ? "translateY(0px)" : "translateY(40px)",
          transition: "all 0.8s ease-out",
        }}
      >
        <h1>Contact Section</h1>
        <p>Scroll karte hi ye dheere-dheere appear hota hai.</p>
      </div>
    </div>
  );
}

export default Scroll;
