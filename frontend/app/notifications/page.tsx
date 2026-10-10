"use client";

import { useState } from "react";
import DashboardShell from "@/components/layout/DashboardShell";
import { Bell } from "lucide-react";

type Notification = {
  id: string;
  title: string;
  message: string;
  date: string;
  unread: boolean;
};

const seed: Notification[] = [
  {
    id: "1",
    title: "Your welfare recommendations have been updated",
    message: "New programs matched to your profile based on recent changes.",
    date: "2 days ago",
    unread: true,
  },
  {
    id: "2",
    title: "Life event reviewed",
    message: "HR has reviewed your reported life event.",
    date: "1 week ago",
    unread: true,
  },
  {
    id: "3",
    title: "Welcome to the Welfare Management System",
    message: "Your account has been set up successfully.",
    date: "2 weeks ago",
    unread: false,
  },
];

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<Notification[]>(seed);

  const hasUnread = notifications.some((n) => n.unread);

  const markAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, unread: false })));
  };

  return (
    <DashboardShell>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-heading">Notifications</h1>
          <p className="text-muted text-sm mt-1 max-w-xl">
            Updates about your welfare recommendations, life events and
            support requests.
          </p>
        </div>
        {hasUnread && (
          <button
            onClick={markAllRead}
            className="text-sm font-medium border border-primary text-primary rounded-lg px-4 h-9"
          >
            Mark all as read
          </button>
        )}
      </div>

      <div className="space-y-3 mt-6">
        {notifications.map(({ id, title, message, date, unread }) => (
          <div
            key={id}
            className={`rounded-card p-4 flex items-start gap-4 border ${
              unread ? "bg-primary-light border-accent/40" : "bg-card border-border"
            }`}
          >
            <div
              className={`rounded-full p-2 ${
                unread ? "bg-accent text-white" : "bg-beige text-muted"
              }`}
            >
              <Bell size={18} />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <p
                  className={`text-sm ${
                    unread ? "font-semibold text-heading" : "font-medium text-heading"
                  }`}
                >
                  {title}
                </p>
                {unread && <span className="w-2 h-2 rounded-full bg-accent" />}
              </div>
              <p className="text-sm text-muted mt-1">{message}</p>
              <p className="text-xs text-muted mt-1">{date}</p>
            </div>
          </div>
        ))}
      </div>
    </DashboardShell>
  );
}