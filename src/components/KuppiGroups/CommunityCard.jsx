import React from "react";
import styles from "../../.ExternalCss/KuppiGroups.module.css";
import { Link } from "react-router";

const CommunityCard = ({ id, name, members, imageUrl, discordLink }) => {

  const handleDiscordClick = (e) => {
    e.preventDefault(); 
    e.stopPropagation(); // Stop event bubbling
    window.open(discordLink, "_blank"); // Open Discord link in new tab
  };

  return (
    <Link to={`/kuppigroups-communities/${id}`}>
      <div key={id} className={styles.communityCard}>
        <div className={styles.communityImage}>
          <img src={imageUrl} alt={name} />
        </div>
        <div className={styles.communityInfo}>
          <div>
            <h3>{name}</h3>
            <p>{members} members</p>
          </div>
          <div className={styles.communityButtons}>
            <button className={styles.disJoinButton} onClick={handleDiscordClick}>Join Discord</button>
            <button className={styles.joinButton}>Join</button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CommunityCard;
