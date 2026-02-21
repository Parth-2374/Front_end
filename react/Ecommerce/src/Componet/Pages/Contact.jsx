import React from 'react'

function Contact() {
    return (
        <div>

      {/* Contact Area */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          height: "500px",
          width: "100%"
        }}
      >
        {/* Google Map */}
        <div
          style={{
            width: "50%",
            height: "100%"
          }}
        >
          <iframe
            title="map"
            src="https://www.google.com/maps?q=London,UK&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        {/* Contact Info */}
        <div
          style={{
            width: "50%",
            padding: "50px",
            backgroundColor: "#f9f9f9"
          }}
        >
          <h2 style={{ marginBottom: "20px" }}>How to Find Us</h2>

          <p style={{ lineHeight: "1.8", color: "#555" }}>
            Mauris viverra cursus ante laoreet eleifend. Donec vel fringilla ante.
            Aenean finibus velit id urna vehicula, nec maximus est sollicitudin.
          </p>

          <div style={{ marginTop: "40px" }}>
            <p><strong>Address:</strong> 10 Suffolk st Soho, London, UK</p>
            <p><strong>Telephone:</strong> +12 34 567 890</p>
            <p>
              <a
                href="mailto:contact@essence.com"
                style={{ color: "#000", textDecoration: "none" }}
              >
                contact@essence.com
              </a>
            </p>
          </div>
        </div>
      </div>

    </div>


            )
}

            export default Contact
