const leaders = [
  { name: "A. Rivera", points: 1920 },
  { name: "S. Tanaka", points: 1850 },
  { name: "M. Johnson", points: 1775 },
];

export default function LeaderboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Leaderboard</h1>
      <p className="mt-2 text-muted-foreground">Top learners this week based on lab completion and challenge score.</p>
      <div className="mt-6 space-y-2">
        {leaders.map((leader, idx) => (
          <div key={leader.name} className="flex items-center justify-between rounded-lg border border-border p-4">
            <span>
              #{idx + 1} {leader.name}
            </span>
            <span className="font-semibold text-primary">{leader.points} pts</span>
          </div>
        ))}
      </div>
    </div>
  );
}
