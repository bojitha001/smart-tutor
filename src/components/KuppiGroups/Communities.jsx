import React, { useEffect, useState } from "react";
import styles from "../../.ExternalCss/KuppiGroups.module.css";
import CommunityCard from "./CommunityCard";
import { useUser } from "@clerk/clerk-react";
import { Navigate, useNavigate } from "react-router-dom";

const Communities = () => {
  const [communities, setCommunities] = useState([]);
  const navigate = useNavigate();
  const { isLoaded, isSignedIn, user } = useUser();

  useEffect(() => {
    const fetchCommunities = async () => {
      const token = await window.Clerk.session.getToken();

      const res = await fetch("https://smart-tutor-backend-production.up.railway.app/communities", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const communities = await res.json();
      console.log(communities);
      setCommunities(communities);
    };
    
    if (isSignedIn) {
      fetchCommunities();
    }
  }, [isSignedIn]);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!isSignedIn) {
    return <Navigate to="/login" replace/>;
  }

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
            imageUrl={community.imageUrl}
            discordLink={community.discordLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Communities;
