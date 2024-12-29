type User = {
  id: number;
  username: string;
  name: string;
  email: string;
};

export default function NameCard(user: User) {
  return (
    <div className="name-card">
      <img
        src={`https://robohash.org/${user.id}?set=set2&size=120x120`}
        alt=""
      />
      <p>
        {user.id}.{user.username}
      </p>
      <p>{user.name}</p>
      <p>{user.email}</p>
    </div>
  );
}
