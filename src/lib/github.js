// GitHub API client placeholder
// Replace with actual GitHub API integration when ready

export async function fetchGitHubRepos(username = "roshan-poudhyal") {
    try {
        const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
        if (!res.ok) throw new Error("Failed to fetch");
        return await res.json();
    } catch (error) {
        console.error("GitHub API error:", error);
        return [];
    }
}
