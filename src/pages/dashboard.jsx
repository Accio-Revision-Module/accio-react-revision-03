function Dashboard() {
  const arr = ["user1", "user2", "user3"];
  return (
    <>
      <h1>Dashboard</h1>
      <h2>List of users: </h2>
      <ol>
        {arr.map((e, i) => (
          <li key={i}>{e}</li>
        ))}
      </ol>
    </>
  );
}

export default Dashboard;
