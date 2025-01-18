import React from "react";
import styles from './AboutUs.module.css';


function AboutUs() {
  return (
    <div className={styles['about-us-container']}>
      <br>
      </br>
      <center>
        <h1>About Us</h1>
      </center>
        <p>
          Welcome to Unseen, the platform that makes learning an interactive, eye-opening experience. 
          Our mission is to bridge the gap between what you know and what you don’t about pressing global issues. 
          By asking simple yet thought-provoking questions, we educate you on important facts you might have overlooked 
          and help build a collective understanding of the world’s most significant challenges.
        </p>
        <h2>Our Vision</h2>
        <p>
          At Unseen, we believe in the power of knowledge to drive change. Every individual has a unique perspective, 
          and by uncovering the "unseen" truths together, we can create a better-informed society that’s ready to tackle global issues. 
          Whether it's environmental crises, societal inequalities, or scientific advancements, Unseen is here to shed light 
          on the facts that matter.
        </p>
        <h2>How It Works</h2>
        <p>
          Unseen engages you with interactive questions about current world issues. For every question, we provide insightful answers, 
          backed by data and research, to educate and inform. Here’s how our platform stands out:
        </p>
        <ul>
          <li><strong>Interactive Learning:</strong> Discover global issues by answering questions designed to challenge your understanding.</li>
          <li><strong>Data-Driven Insights: </strong> We use your responses to identify gaps in collective awareness and prioritize those topics in the future.</li>
          <li><strong>Personalized Content:</strong> Over time, Unseen tailors its content to ensure you’re exposed to the most relevant and overlooked facts.</li>
        </ul>
        <h2>Why It Matters</h2>
        <p>
          Knowledge is the foundation of change. By helping you uncover and understand the facts you didn’t know, we aim to foster 
          informed discussions and build a shared consensus on pressing global challenges. Together, we can shine a spotlight on 
          the issues that deserve our attention.
        </p>
        <h2>Our Team</h2>
        <p>
          Unseen was brought to life by a dedicated team of innovators: <strong>Allen, Theo, Nehal, and Pragya</strong>. 
          With a shared passion for education and a commitment to empowering individuals through knowledge, 
          we are excited to share this journey with you.
        </p>
        <h2>Join Us</h2>
        <p>
          Whether you’re a curious learner or an advocate for change, Unseen invites you to be part of this journey. 
          Let’s uncover the unknown, one fact at a time, and use knowledge as a catalyst for a brighter, more informed future.
        </p>
      </div>
  );
}

export default AboutUs;