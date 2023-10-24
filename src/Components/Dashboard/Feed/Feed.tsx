import React from "react";
import "./Feed.css";
import Card from "../../Card/Card";
const Feed = () => {
  const cardsData = [
    { title: "Classes", content: "10" },
    { title: "Subjects", content: "20" },
    { title: "Course units", content: "100" },
    { title: "Results", content: "10" },
    { title: "Scripts", content: "5" },
  ];

  return (
    <div className="feed">
      <h3>Dashboard Overview</h3>
      <hr />
      <div className="card-container">
        {cardsData.map((card, index) => (
          <Card key={index} title={card.title} content={card.content} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
