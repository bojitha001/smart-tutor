import React, { useEffect, useState } from "react";
import styles from "../../.ExternalCss/KuppiGroups.module.css";
import CommunityCard from "./CommunityCard";

const Communities = () => {
  const [communities, setCommunities] = useState([]);

  useEffect(() => {
    const fetchCommunities = async () => {
      const res = await fetch("http://localhost:8080/communities", {
        method: "GET",
      });

      const communities = await res.json();
      console.log(communities);
      setCommunities(communities);
    };
    fetchCommunities();
  }, []);

  return (
    <div className={styles.communitiesPage}>
      <h1 className={styles.communitiesTitle}>Communities</h1>
      <div className={styles.communitiesGrid}>
        {communities.map((community) => (
          <CommunityCard
            id={community._id}
            key={community._id}
            name={community.name}
            members={community.members}
          />
        ))}
      </div>
    </div>
  );
};

export default Communities;
