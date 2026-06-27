
"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Profile = {
  id: string;
  full_name: string;
};

export default function AdminChatPage() {
 const [users, setUsers] = useState<Profile[]>([]);
const [selectedUser, setSelectedUser] = useState<Profile | null>(null);
const [messages, setMessages] = useState<any[]>([]);
const [newMessage, setNewMessage] = useState("");

  
useEffect(() => {
  async function loadUsers() {
    const { data, error } = await supabase
      .from("profiles")
      .select("id, full_name")
      .neq("id", "43ba9c3b-502a-4bf0-8fac-badbb86ad675");

    if (!error && data) {
      setUsers(data);
    }
  }

  loadUsers();
}, []);

useEffect(() => {
  async function loadMessages() {
    if (!selectedUser) return;

    const { data } = await supabase
      .from("messages")
      .select("*")
      .or(
        `and(sender_id.eq.${selectedUser.id},receiver_id.eq.43ba9c3b-502a-4bf0-8fac-badbb86ad675),and(sender_id.eq.43ba9c3b-502a-4bf0-8fac-badbb86ad675,receiver_id.eq.${selectedUser.id})`
      )
      .order("created_at", { ascending: true });

    if (data) {
      setMessages(data);
    }
  }

  loadMessages();
}, [selectedUser]);

async function sendMessage() {
  if (!selectedUser) return;
  if (!newMessage.trim()) return;

 
const { error } = await supabase.from("messages").insert({
  sender_id: "43ba9c3b-502a-4bf0-8fac-badbb86ad675",
  receiver_id: selectedUser.id,
  message: newMessage,
  is_admin: true,
});




if (error) {
  console.log("FULL ERROR:", error);
  alert(JSON.stringify(error));
  return;
}



  setNewMessage("");

  const { data } = await supabase
    .from("messages")
    .select("*")
    .or(
      `and(sender_id.eq.${selectedUser.id},receiver_id.eq.43ba9c3b-502a-4bf0-8fac-badbb86ad675),and(sender_id.eq.43ba9c3b-502a-4bf0-8fac-badbb86ad675,receiver_id.eq.${selectedUser.id})`
    )
    .order("created_at", { ascending: true });

  if (data) {
    setMessages(data);
  }
}



  return (
    <main className="min-h-screen bg-black text-white p-10">

      <h1 className="text-5xl font-bold mb-10">
        💬 Admin Chat
      </h1>

      <div className="grid grid-cols-4 gap-6 h-[700px]">

        {/* Users */}

        <div className="col-span-1 rounded-3xl border border-white/10 bg-white/5 p-6">

          <h2 className="text-2xl font-bold mb-6">
            Users
          </h2>

          <div className="space-y-3">

            {users.map((user) => (
              <button
  key={user.id}
  onClick={() => setSelectedUser(user)}
  className={`w-full rounded-xl p-4 text-left transition ${
    selectedUser?.id === user.id
      ? "bg-pink-500"
      : "bg-zinc-800 hover:bg-zinc-700"
  }`}
>
  👤 {user.full_name}
</button>
            ))}

          </div>

        </div>

   
{/* Chat */}

<div className="col-span-3 rounded-3xl border border-white/10 bg-white/5 p-6 flex flex-col justify-between">

  <div className="flex-1 overflow-y-auto space-y-4">

    {!selectedUser && (
      <div className="bg-zinc-800 rounded-2xl p-4 w-fit">
        Select a user to view chat.
      </div>
    )}

    {messages.map((message) => (
      <div
        key={message.id}
        className={
          message.sender_id ===
          "43ba9c3b-502a-4bf0-8fac-badbb86ad675"
            ? "flex justify-end"
            : "flex justify-start"
        }
      >
        <div
          className={
            message.sender_id ===
            "43ba9c3b-502a-4bf0-8fac-badbb86ad675"
              ? "bg-pink-500 rounded-2xl p-4 max-w-md"
              : "bg-zinc-800 rounded-2xl p-4 max-w-md"
          }
        >
          {message.message}
        </div>
      </div>
    ))}

  </div>

  <div className="flex gap-4 mt-6">

    <input
      value={newMessage}
      onChange={(e) => setNewMessage(e.target.value)}
      type="text"
      placeholder="Reply..."
      className="flex-1 rounded-xl bg-zinc-900 p-4 border border-white/10"
    />

    
<button
  onClick={sendMessage}
  className="rounded-xl bg-pink-500 px-8 hover:bg-pink-600 transition"
>
  Send
</button>



  </div>

</div>



      </div>

    </main>
  );
}
