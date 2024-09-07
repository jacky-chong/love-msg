"use client";

import { trpc } from "@/server/client";
import { useState } from "react";

export default function Home() {
  const getUsers = trpc.user.getUsers.useQuery();
  const addUsers = trpc.user.addUser.useMutation({
    onSettled: () => {
      getUsers.refetch();
    },
  });

  const [name, setName] = useState("");
  const [race, setRace] = useState("");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {JSON.stringify(getUsers.data)}
      <div>
        Name: <input type="text" className="border" onChange={(e)=> setName(e.target.value)}></input>
        Race: <input type="text" className="border" onChange={(e)=> setRace(e.target.value)}></input>
        <button className="border" onClick={()=> addUsers.mutate({name, race})}>Add</button>
      </div>
    </main>
  );
}
