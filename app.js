const stats = {
  owner: "octocat",
  repo: "Hello-World"
};

async function hydrateRepoStats() {
  const starsEl = document.getElementById("stars");
  const forksEl = document.getElementById("forks");
  const issuesEl = document.getElementById("issues");

  try {
    const res = await fetch(`https://api.github.com/repos/${stats.owner}/${stats.repo}`);
    if (!res.ok) throw new Error(`GitHub API failed: ${res.status}`);

    const data = await res.json();
    starsEl.textContent = data.stargazers_count.toLocaleString();
    forksEl.textContent = data.forks_count.toLocaleString();
    issuesEl.textContent = data.open_issues_count.toLocaleString();
  } catch (_error) {
    starsEl.textContent = "N/A";
    forksEl.textContent = "N/A";
    issuesEl.textContent = "N/A";
  }
}

document.addEventListener("DOMContentLoaded", hydrateRepoStats);
