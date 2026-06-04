import { ui } from "../utils/ui.js";
import { GitHubProfile } from "../types/index.js";

/**
 * Service responsible for communicating with the public GitHub User API.
 * Uses system spinners to ensure beautiful visual terminal states.
 * 
 * @param {string} [username] - The target GitHub username to query.
 * @returns {Promise<GitHubProfile>} Formatted avatar, full name, and bio.
 */
export async function fetchGitHubProfile(username?: string): Promise<GitHubProfile> {
  const result: GitHubProfile = { avatarUrl: "", fullName: "", bio: "" };

  if (!username) return result;

  // Start Ora loading spinner
  const spinner = ui.spinner(`Fetching GitHub profile for @${username}...`).start();
  
  try {
    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: { "User-Agent": "project2readme-CLI" },
    });

    if (response.ok) {
      const data: any = await response.json();
      result.avatarUrl = data.avatar_url || "";
      result.fullName = data.name || "";
      result.bio = data.bio || "";
      spinner.succeed("Loaded GitHub profile info successfully!");
    } else {
      spinner.warn(`GitHub profile for @${username} not found. Using default values.`);
    }
  } catch (error) {
    spinner.fail("Could not connect to GitHub API. Using default profile settings.");
  }

  return result;
}
