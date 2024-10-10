import styles from  "./aboutCSS/values.module.css";

const valueFields = [
  {
    heading: "Exploration",
    description: "We are driven by a deep-seated desire to explore the unknown. We believe that the pursuit of discovery is at the heart of human nature, and we are committed to pushing the boundaries of what is possible.",
  },
  {
    heading: "Innovation",
    description: "At Galactica, we prioritize cutting-edge technology and innovation. We are constantly evolving our spacecraft, safety protocols, and services to ensure that our travelers experience the most advanced and secure space journeys available.",
  },
  {
    heading:"Sustainability",
    description: "We are committed to making space exploration sustainable for future generations. Our space missions are designed to minimize environmental impact, both on Earth and in space, and to foster a spirit of responsibility towards our universe.",
  },
  {
    heading:"Community",
    description: "We believe in the power of collective exploration. Our journeys are not just about reaching new destinations; they are about building a community of space enthusiasts who share a passion for the stars.",
  },
];

const ValueElement = ({ heading, subHeading, description }) => (
  <div className={styles.value}>
    <h1 className={styles.valueTitle}>{heading}</h1>
    <p className={styles.valueDescription}>{description}</p>
  </div>
);

export default function OurValues() {
  return (
    <div className={styles.valueContainer}>
      {valueFields.map((value, index) => (
        <ValueElement
          key={index}
          {...value}
        />
      ))}
    </div>
  );
}