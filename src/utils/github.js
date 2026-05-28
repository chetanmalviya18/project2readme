import { logger } from "./logger.js";

export async function fetchGitHubProfile(username) {
  const result = { avatarUrl: "", fullName: "", bio: "" };

  if (!username) return result;

  logger.info("\nFetching GitHub profile details...");
  try {
    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: { "User-Agent": "Node.js-Readme-CLI" },
    });

    if (response.ok) {
      const data = await response.json();
      result.avatarUrl = data.avatar_url || "";
      result.fullName = data.name || "";
      result.bio = data.bio || "";
      logger.success("Loaded GitHub profile info successfully!");
    } else {
      logger.warn(
        "Could not retrieve GitHub profile details (profile not found).",
      );
    }
  } catch (error) {
    logger.warn(
      "Could not connect to GitHub API. Using default profile settings.",
    );
  }

  return result;
}
