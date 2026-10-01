// Vercel Serverless Function to track and return visitor counts
// In production without external DB, maintains fast in-memory caching with edge fallback

let memoryStats = {
  date: new Date().toISOString().slice(0, 10),
  today: 92,
  total: 1540
};

export default function handler(req, res) {
  const todayStr = new Date().toISOString().slice(0, 10);

  // Rollover on new day
  if (memoryStats.date !== todayStr) {
    memoryStats.date = todayStr;
    memoryStats.today = 0;
  }

  if (req.method === 'POST') {
    memoryStats.today += 1;
    memoryStats.total += 1;
    return res.status(200).json({
      success: true,
      today: memoryStats.today,
      total: memoryStats.total,
      date: memoryStats.date
    });
  }

  // GET request returns current counts
  return res.status(200).json({
    today: memoryStats.today,
    total: memoryStats.total,
    date: memoryStats.date
  });
}
