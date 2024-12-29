import { useEffect, useState } from "react";

import NameCard from "./NameCard.tsx";

type User = {
  id: number;
  username: string;
  name: string;
  email: string;
};

export default function NameTable() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const json = await response.json();

      setUsers(json);
    };

    fetchUsers();
  });

  return (
    <div className="name-table">
      {users.map((user) => {
        return <NameCard {...user} />;
      })}
    </div>
  );
}
