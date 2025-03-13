import React from "react";
import styles from "../../.ExternalCss/KuppiGroups.module.css";
import { Link } from "react-router";


const CommunityCard = ({ id, name, members }) => {
  return (
    <Link to={`/kuppigroups-communities/${id}`}>
      <div key={id} className={styles.communityCard}>
        <div className={styles.communityImage}>
          <img src="" alt={name} />
        </div>
        <div className={styles.communityInfo}>
          <div>
            <h3>{name}</h3>
            <p>{members} members</p>
          </div>
          <button className={styles.joinButton}>Join</button>
        </div>
      </div>
    </Link>
  );
};

export default CommunityCard;
