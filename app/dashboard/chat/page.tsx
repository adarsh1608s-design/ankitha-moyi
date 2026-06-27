
"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function ChatPage() {
  const ADMIN_ID = "43ba9c3b-502a-4bf0-8fac-badbb86ad675";

  const [userId, setUserId] = useState("");
  const [messages, setMessages] = useState<any[]>([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    async function loadUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        setUserId(user.id);
      }
    }

    loadUser();
  }, []);

  useEffect(() => {
    async function loadMessages() {
      if (!userId) return;

      const { data } = await supabase
        .from("messages")
        .select("*")
        .or(
          `and(sender_id.eq.${userId},receiver_id.eq.${ADMIN_ID}),and(sender_id.eq.${ADMIN_ID},receiver_id.eq.${userId})`
        )
        .order("created_at", { ascending: true });

      if (data) {
        setMessages(data);
      }
    }

    loadMessages();
  }, [userId]);

  async function sendMessage() {
    if (!userId) return;
    if (!newMessage.trim()) return;

    const { error } = await supabase.from("messages").insert({
      sender_id: userId,
      receiver_id: ADMIN_ID,
      message: newMessage,
      is_admin: false,
    });

    if (error) {
      console.log(error);
      return;
    }

    setNewMessage("");

    const { data } = await supabase
      .from("messages")
      .select("*")
      .or(
        `and(sender_id.eq.${userId},receiver_id.eq.${ADMIN_ID}),and(sender_id.eq.${ADMIN_ID},receiver_id.eq.${userId})`
      )
      .order("created_at", { ascending: true });

    if (data) {
      setMessages(data);
    }
  }

  return (
    <main className="text-white">
      <div className="flex-1 p-8">
        {/* Header */}

        <div className="flex items-center justify-between rounded-[30px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <div>
            <h1 className="text-4xl font-bold">
              💬 Chat with Ankitha
            </h1>

            <p className="mt-2 text-gray-400">
              🟢 Online now
            </p>
          </div>

          <div className="rounded-full bg-pink-500 px-5 py-2 font-semibold">
            Ultimate Member
          </div>
        </div>

        {/* Chat Box */}

        <div className="mt-8 rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl p-8 h-[650px] flex flex-col">
          {/* Messages */}

          <div className="flex-1 overflow-y-auto space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={
                  msg.sender_id === userId
                    ? "flex justify-end"
                    : "flex justify-start"
                }
              >
                <div
                  className={
                    msg.sender_id === userId
                      ? "bg-pink-500 rounded-2xl px-6 py-4 max-w-md"
                      : "bg-zinc-800 rounded-2xl px-6 py-4 max-w-md"
                  }
                >
                  {msg.message}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}

          <div className="mt-6 flex items-center gap-4 border-t border-white/10 pt-6">
            <button className="text-3xl">
              😊
            </button>

            <button className="text-3xl">
              📎
            </button>

            <input
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              type="text"
              placeholder="Type your message..."
              className="flex-1 rounded-full bg-zinc-900 px-6 py-4 outline-none border border-white/10 focus:border-pink-500"
            />

            <button
              onClick={sendMessage}
              className="rounded-full bg-pink-500 px-8 py-4 font-bold transition hover:bg-pink-600"
            >
              Send 🚀
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

