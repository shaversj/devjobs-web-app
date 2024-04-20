export async function getJobsByTitle(title, data) {
  if (!title) return data;
  return data.filter((job) => job.position.toLowerCase().includes(title.toLowerCase()));
}
