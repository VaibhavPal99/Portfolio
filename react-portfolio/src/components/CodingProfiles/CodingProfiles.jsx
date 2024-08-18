import React from "react";
import styles from "./CodingProfiles.module.css";
import { getImageUrl } from "../../utils";

export const CodingProfiles = () => {
  return (
    <section className={styles.container} id="coding-profiles">
      <h2 className={styles.title}>Competitive Programming Profiles</h2>
      <div className={styles.content}>
        <ul className={styles.profileList}>
          <li className={styles.profileItem}>
            <img
              src={getImageUrl("codingProfiles/codeforcesIcon.png")}
              alt="Codeforces icon"
              className={styles.profileIcon}
            />
            <div className={styles.profileText}>
              <h3>Codeforces</h3>
              <p>
                Check out my competitive programming achievements on <a href="https://codeforces.com/profile/VaibhavPal99" target="_blank" rel="noopener noreferrer" style={{ color: 'skyblue' }}>Codeforces</a>. Rating: 1161
              </p>
            </div>
          </li>
          <li className={styles.profileItem}>
            <img
              src={getImageUrl("codingProfiles/codechefIcon.png")}
              alt="CodeChef icon"
              className={styles.profileIcon}
            />
            <div className={styles.profileText}>
              <h3>CodeChef</h3>
              <p>
                Explore my profile on <a href="https://www.codechef.com/users/vaibhavpal9935" target="_blank" rel="noopener noreferrer" style={{ color: 'skyblue' }}>CodeChef</a>. Rating: 2 Star(1461)
              </p>
            </div>
          </li>
          <li className={styles.profileItem}>
            <img
              src={getImageUrl("codingProfiles/leetcodeIcon.png")}
              alt="LeetCode icon"
              className={styles.profileIcon}
            />
            <div className={styles.profileText}>
              <h3>LeetCode</h3>
              <p>
                View my problem-solving progress on <a href="https://leetcode.com/u/VaibhavPal99/" target="_blank" rel="noopener noreferrer" style={{ color: 'skyblue' }}>LeetCode</a>.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
