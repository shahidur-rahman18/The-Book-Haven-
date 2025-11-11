import React from "react";

const authors = [
  {
    id: 1,
    name: "Esther Howard",
    books: 10,
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 2,
    name: "Shikhon Islam",
    books: 7,
    img: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    id: 3,
    name: "Kawser Ahmed",
    books: 4,
    img: "https://randomuser.me/api/portraits/men/43.jpg",
  },
  {
    id: 4,
    name: "Brooklyn Simmons",
    books: 15,
    img: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    id: 5,
    name: "Leslie Alexander",
    books: 5,
    img: "https://randomuser.me/api/portraits/men/13.jpg",
  },
  {
    id: 6,
    name: "Guy Hawkins",
    books: 12,
    img: "https://randomuser.me/api/portraits/women/48.jpg",
  },
];

// Looping carousel with CSS animation
const FeaturedAuthors = () => {
  return (
    <div style={styles.container}>
      <h2  className="text-primary" style={styles.title}>Featured Author</h2>
      <p style={styles.subtitle}>
        Ours have osm author those who wrote many book like nobel, fiction , fantasy, Science fictions</p>
      <div style={styles.sliderWrapper}>
        <div style={styles.slider}>
          {[...authors, ...authors].map((author, idx) => (
            <AuthorCard key={idx} author={author} />
          ))}
        </div>
      </div>
    </div>
  );
};

const AuthorCard = ({ author }) => {
  return (
    <div style={styles.card}>
      <div style={styles.medalWrapper}>
        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={styles.medal}
        >
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="#C49A2D"
            strokeWidth="5"
            strokeDasharray="5 10"
          />
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="#C49A2D"
            strokeWidth="5"
            strokeDasharray="5 10"
            transform="rotate(180 50 50)"
          />
        </svg>
        <img
          src={author.img}
          alt={author.name}
          style={styles.authorImage}
          loading="lazy"
        />
      </div>
      <div style={styles.textBox}>
        <h3 style={styles.authorName}>{author.name}</h3>
        <p style={styles.booksCount}>
          {author.books.toString().padStart(2, "0")} Published Books
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: 1200,
    margin: "auto",
    padding: "40px 20px",
    textAlign: "center",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#003552",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    color: "#6c7a89",
    marginBottom: 40,
    lineHeight: 1.4,
  },
  sliderWrapper: {
    overflow: "hidden",
  },
  slider: {
    display: "flex",
    width: "calc(200% )",
    animation: "slideLeft 30s linear infinite",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    boxShadow: "0 4px 15px rgb(0 0 0 / 0.1)",
    padding: 20,
    margin: "0 15px",
    minWidth: 160,
    flexShrink: 0,
  },
  medalWrapper: {
    position: "relative",
    width: 100,
    height: 100,
    margin: "auto",
  },
  medal: {
    position: "absolute",
    top: 0,
    left: 0,
  },
  authorImage: {
    width: 80,
    height: 80,
    borderRadius: "50%",
    position: "relative",
    margin: "auto",
    top: 10,
    objectFit: "cover",
    border: "4px solid #C49A2D",
    backgroundColor: "#f0f0f0",
  },
  textBox: {
    marginTop: 20,
  },
  authorName: {
    fontWeight: "600",
    fontSize: 16,
    marginBottom: 5,
  },
  booksCount: {
    fontSize: 12,
    color: "#777",
  },
};

// Add keyframe animation styles
const styleSheet = document.styleSheets[0];
const keyframes =
  `@keyframes slideLeft {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }`;
styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

export default FeaturedAuthors;
