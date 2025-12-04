import React, { useState, useEffect } from "react";

function DemoApp() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    // Dummy example data (aap API ka data yaha rakh sakte ho)
    const sampleData = [
      {
        id: 1,
        title: "Chicken Dish",
        description:
          "This is a long description of the chicken dish. It includes steps, ingredients, and details about how the dish is prepared. You can cook it using simple home ingredients. This description is for testing the More and Less button."
      },
      {
        id: 2,
        title: "Pasta Recipe",
        description:
          "Pasta recipe is delicious and easy to cook. Add some cheese, veggies, and enjoy your meal. This description is intentionally longer so that slicing can be tested properly."
      }
    ];

    setItems(sampleData);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Show More / Less Demo</h2>

      {items.map((item) => (
        <Card key={item.id} title={item.title} description={item.description} />
      ))}
    </div>
  );
}

function Card({ title, description }) {
  const [showFull, setShowFull] = useState(false); // toggle state
  const limit = 100; // kitna text show karna hai

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "15px",
        marginBottom: "20px",
        maxWidth: "500px"
      }}
    >
      <h3>{title}</h3>

      <p style={{ marginBottom: "10px" }}>
        {showFull ? description : description.slice(0, limit)}

        {/* MORE button */}
        {!showFull && description.length > limit && (
          <span
            style={{ color: "blue", cursor: "pointer" }}
            onClick={() => setShowFull(true)}
          >
            {" "}
            ...More
          </span>
        )}

        {/* LESS button */}
        {showFull && (
          <span
            style={{ color: "blue", cursor: "pointer" }}
            onClick={() => setShowFull(false)}
          >
            {" "}
            ...Less
          </span>
        )}
      </p>
    </div>
  );
}

export default DemoApp;
