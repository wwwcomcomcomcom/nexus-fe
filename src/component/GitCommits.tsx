import React, { useEffect, useState } from "react";

interface CommitAuthor {
  name: string;
  date: string;
}

interface CommitData {
  message: string;
  author: CommitAuthor;
}

interface Commit {
  sha: string;
  commit: CommitData;
}

const GitCommits: React.FC = () => {
  const [commits, setCommits] = useState<Commit[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCommits = async () => {
      try {
        const response = await fetch(
          // "https://api.github.com/repos/{owner}/{repo}/commits"
          "https://api.github.com/repos/GSM-Reflection/reflection-landing/commits" //예시
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();

        if (Array.isArray(data)) {
          setCommits(data);
        } else {
          setError("Unexpected API response format");
        }
      } catch (err) {
        setError((err as Error).message);
      }
    };

    fetchCommits();
  }, []);

  return (
    <div className="space-y-4">
      {error ? (
        <p className="text-red-500">Failed to fetch commits: {error}</p>
      ) : commits.length > 0 ? (
        commits.map((commit) => (
          <div key={commit.sha} className="p-4 border rounded">
            <p>
              <strong>Message:</strong> {commit.commit.message}
            </p>
            <p>
              <strong>Author:</strong> {commit.commit.author.name}
            </p>
            <p>
              <strong>Date:</strong>{" "}
              {new Date(commit.commit.author.date).toLocaleDateString()}
            </p>
          </div>
        ))
      ) : (
        <p>No commits found.</p>
      )}
    </div>
  );
};

export default GitCommits;
