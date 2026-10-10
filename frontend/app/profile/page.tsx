"use client";

import { useState } from "react";
import DashboardShell from "@/components/layout/DashboardShell";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { LogOut } from "lucide-react";

export default function ProfilePage() {
  const [editing, setEditing] = useState(false);
  const [saved, setSaved] = useState(false);
  const [form, setForm] = useState({
    fullName: "David Mensah",
    email: "david.mensah@northbridge.com",
    age: "38",
    gender: "Male",
  });

  const handleSave = () => {
    setEditing(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <DashboardShell>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-heading">My Profile</h1>
          <p className="text-muted text-sm mt-1">
            Manage your personal and employment details.
          </p>
        </div>
        {editing ? (
          <div className="flex gap-3">
            <button
              onClick={() => setEditing(false)}
              className="text-sm font-medium text-muted px-4 h-[42px] rounded-lg border border-border"
            >
              Cancel
            </button>
            <Button onClick={handleSave}>Save changes</Button>
          </div>
        ) : (
          <Button onClick={() => setEditing(true)}>Edit profile</Button>
        )}
      </div>

      {saved && (
        <p className="text-sm text-accent font-medium mt-3">
          Profile updated successfully
        </p>
      )}

      <Card className="mt-6 flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-xl font-semibold">
          DM
        </div>
        <div>
          <p className="text-heading font-semibold text-lg">David Mensah</p>
          <p className="text-sm text-muted">
            Logistics Coordinator · Operations
          </p>
          <p className="text-xs text-muted mt-1">Employee ID: NB-20481</p>
        </div>
      </Card>

      <Card className="mt-6">
        <h2 className="text-heading font-semibold mb-4">Personal information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-heading mb-1">
              Full name
            </label>
            {editing ? (
              <input
                value={form.fullName}
                onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                className="w-full h-[42px] rounded-lg border border-border bg-card px-3 text-sm outline-none focus:border-primary"
              />
            ) : (
              <div className="w-full h-[42px] rounded-lg bg-beige px-3 flex items-center text-sm text-heading">
                {form.fullName}
              </div>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-heading mb-1">
              Email
            </label>
            {editing ? (
              <input
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full h-[42px] rounded-lg border border-border bg-card px-3 text-sm outline-none focus:border-primary"
              />
            ) : (
              <div className="w-full h-[42px] rounded-lg bg-beige px-3 flex items-center text-sm text-heading">
                {form.email}
              </div>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-heading mb-1">
              Age
            </label>
            {editing ? (
              <input
                value={form.age}
                onChange={(e) => setForm({ ...form, age: e.target.value })}
                className="w-full h-[42px] rounded-lg border border-border bg-card px-3 text-sm outline-none focus:border-primary"
              />
            ) : (
              <div className="w-full h-[42px] rounded-lg bg-beige px-3 flex items-center text-sm text-heading">
                {form.age}
              </div>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-heading mb-1">
              Gender
            </label>
            {editing ? (
              <select
                value={form.gender}
                onChange={(e) => setForm({ ...form, gender: e.target.value })}
                className="w-full h-[42px] rounded-lg border border-border bg-card px-3 text-sm outline-none focus:border-primary"
              >
                <option>Male</option>
                <option>Female</option>
                <option>Prefer not to say</option>
              </select>
            ) : (
              <div className="w-full h-[42px] rounded-lg bg-beige px-3 flex items-center text-sm text-heading">
                {form.gender}
              </div>
            )}
          </div>
        </div>
      </Card>

      <Card className="mt-6">
        <h2 className="text-heading font-semibold mb-4">Employment details</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-heading mb-1">
              Department
            </label>
            <div className="w-full h-[42px] rounded-lg bg-beige px-3 flex items-center text-sm text-heading">
              Operations
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-heading mb-1">
              Position
            </label>
            <div className="w-full h-[42px] rounded-lg bg-beige px-3 flex items-center text-sm text-heading">
              Logistics Coordinator
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-heading mb-1">
              Employee ID
            </label>
            <div className="w-full h-[42px] rounded-lg bg-beige px-3 flex items-center text-sm text-muted">
              NB-20481
            </div>
          </div>
        </div>
      </Card>

      <Card className="mt-6">
        <h2 className="text-heading font-semibold mb-4">Account</h2>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between text-heading">
            <span className="text-muted">Email</span>
            <span>david.mensah@northbridge.com</span>
          </div>
          <div className="flex justify-between text-heading">
            <span className="text-muted">Signed in as</span>
            <span>David Mensah</span>
          </div>
        </div>
        <p className="text-xs text-muted mt-4">
          Your welfare data is encrypted and only accessible to authorized
          welfare administrators.
        </p>
        <button className="flex items-center gap-2 text-sm font-medium text-destructive border border-destructive/40 rounded-lg px-4 h-9 mt-4">
          <LogOut size={16} />
          Logout
        </button>
      </Card>
    </DashboardShell>
  );
}