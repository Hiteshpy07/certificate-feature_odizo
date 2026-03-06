import { useState, useEffect } from 'react';
import axios from 'axios';

export const useInternProfile = (certId) => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Don't fetch if there's no ID
    if (!certId) return;

    const fetchProfile = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:5069/interns");
        
        // Find the specific intern by ID
        const userProfile = response.data.find(item => item.id === certId);
        
        setProfile(userProfile);
        setError(null);
      } catch (err) {
        console.error("Error fetching profile:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [certId]); // Re-run if certId changes

  return { profile, loading, error };
};