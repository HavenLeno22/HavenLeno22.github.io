import { useState, useEffect, useCallback } from 'react';

const CACHE_KEY = 'github-data-cache';
const CACHE_DURATION = 30 * 60 * 1000; // 30 minutes

function getCache() {
  try {
    const cached = localStorage.getItem(CACHE_KEY);
    if (!cached) return null;
    const parsed = JSON.parse(cached);
    if (Date.now() - parsed.timestamp > CACHE_DURATION) {
      localStorage.removeItem(CACHE_KEY);
      return null;
    }
    return parsed.data;
  } catch {
    return null;
  }
}

function setCache(data) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({ data, timestamp: Date.now() }));
  } catch { /* ignore */ }
}

export function useGitHubData(username = 'HavenLeno22') {
  const [data, setData] = useState({
    profile: null,
    repos: [],
    languages: {},
    loading: true,
    error: null,
  });

  const fetchData = useCallback(async () => {
    const cached = getCache();
    if (cached) {
      setData({ ...cached, loading: false, error: null });
      return;
    }

    try {
      const [profileRes, reposRes] = await Promise.all([
        fetch(`https://api.github.com/users/${username}`),
        fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=20`),
      ]);

      if (!profileRes.ok || !reposRes.ok) {
        throw new Error('Failed to fetch GitHub data');
      }

      const profile = await profileRes.json();
      const repos = await reposRes.json();

      // Calculate language distribution
      const languages = {};
      repos.forEach(repo => {
        if (repo.language) {
          languages[repo.language] = (languages[repo.language] || 0) + 1;
        }
      });


      const result = { profile, repos, languages };
      setCache(result);
      setData({ ...result, loading: false, error: null });
    } catch (error) {
      setData(prev => ({ ...prev, loading: false, error: error.message }));
    }
  }, [username]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return data;
}
