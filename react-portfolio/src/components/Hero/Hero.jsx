// import React from "react";

// import styles from "./Hero.module.css";
// import { getImageUrl } from "../../utils";

// export const Hero = () => {
//   return (
//     <section className={styles.container}>
//       <div className={styles.content}>
//         <h1 className={styles.title}>Hi, I'm Vaibhav</h1>
//         <p className={styles.description}>
//           I'm a full-stack developer with 1 year of experience using React and
//           NodeJS. Reach out if you'd like to learn more!
//         </p>
//         <a href="mailto:vaibhavpal9935@gmail.com" className={styles.contactBtn}>
//           Contact Me
//         </a>
//       </div>
//       <img
//         src={getImageUrl("hero/image.png")}
//         alt="Hero image of me"
//         className={styles.heroImg}
//       />
//       <div className={styles.topBlur} />
//       <div className={styles.bottomBlur} />
//     </section>
//   );
// };
import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Vaibhav</h1>
        <p className={styles.description}>
          I'm a full-stack developer with 1 year of experience using React and
          NodeJS. Reach out if you'd like to learn more!
        </p>
        <div className={styles.buttons}>
          <a href="mailto:myemail@email.com" className={styles.contactBtn}>
            Contact Me
          </a>
          <a 
            href="/Resume.pdf" 
            className={styles.resumeBtn} 
            download
          >
            Download Resume
          </a>
        </div>
      </div>
      <img
        src={getImageUrl("hero/image.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
