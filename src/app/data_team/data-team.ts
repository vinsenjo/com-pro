export default async function FetchingServer() {
  const res = await fetch("https://randomuser.me/api/?results=5", {
    method: "GET",
  });

  const user = await res.json();
  return user;
}
