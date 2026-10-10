"use client";

import { useState } from "react";
import DashboardShell from "@/components/layout/DashboardShell";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { Users, Pencil, Trash2, X } from "lucide-react";

type Dependent = {
  id: string;
  name: string;
  relationship: string;
  dob: string;
  care: string;
};

const relationships = ["Child", "Parent", "Spouse", "In-law"];

function calculateAge(dob: string) {
  const birth = new Date(dob);
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--;
  return age;
}

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

const seedDependents: Dependent[] = [
  {
    id: "1",
    name: "John Mensah",
    relationship: "Child",
    dob: "2016-04-12",
    care: "School expenses and after-school care",
  },
  {
    id: "2",
    name: "Grace Mensah",
    relationship: "Parent",
    dob: "1958-09-02",
    care: "Elder care and medical support",
  },
];

export default function DependentsPage() {
  const [dependents, setDependents] = useState<Dependent[]>(seedDependents);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "",
    relationship: relationships[0],
    dob: "",
    care: "",
  });

  const openAddModal = () => {
    setEditingId(null);
    setForm({ name: "", relationship: relationships[0], dob: "", care: "" });
    setModalOpen(true);
  };

  const openEditModal = (dep: Dependent) => {
    setEditingId(dep.id);
    setForm({
      name: dep.name,
      relationship: dep.relationship,
      dob: dep.dob,
      care: dep.care,
    });
    setModalOpen(true);
  };

  const handleSave = () => {
    if (editingId) {
      setDependents((prev) =>
        prev.map((d) => (d.id === editingId ? { ...d, ...form } : d))
      );
    } else {
      setDependents((prev) => [...prev, { id: crypto.randomUUID(), ...form }]);
    }
    setModalOpen(false);
  };

  const handleRemove = (id: string) => {
    setDependents((prev) => prev.filter((d) => d.id !== id));
  };

  return (
    <DashboardShell>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-heading">Dependents</h1>
          <p className="text-muted text-sm mt-1 max-w-xl">
            People who depend on you financially or for care. Keeping this
            accurate improves your recommendations.
          </p>
        </div>
        <Button onClick={openAddModal}>Add dependent</Button>
      </div>

      {dependents.length === 0 ? (
        <Card className="mt-6 flex flex-col items-center text-center py-12">
          <div className="bg-beige rounded-full p-4">
            <Users className="text-muted" size={28} />
          </div>
          <p className="text-heading font-medium mt-4">No dependents added yet</p>
          <p className="text-sm text-muted mt-1 max-w-sm">
            Add your dependents to unlock family and care-related support.
          </p>
          <button
            onClick={openAddModal}
            className="mt-4 text-sm font-medium border border-primary text-primary rounded-lg px-4 h-9"
          >
            Add your first dependent
          </button>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {dependents.map((dep) => (
            <Card key={dep.id}>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-light text-accent flex items-center justify-center font-semibold text-sm">
                    {initials(dep.name)}
                  </div>
                  <div>
                    <p className="text-heading font-medium">{dep.name}</p>
                    <span className="text-xs bg-beige text-muted px-2 py-0.5 rounded-full">
                      {dep.relationship}
                    </span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => openEditModal(dep)}
                    className="text-muted hover:text-primary"
                  >
                    <Pencil size={16} />
                  </button>
                  <button
                    onClick={() => handleRemove(dep.id)}
                    className="text-muted hover:text-destructive"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
              <p className="text-sm text-muted mt-3">Age {calculateAge(dep.dob)}</p>
              <p className="text-sm text-heading mt-1">{dep.care}</p>
            </Card>
          ))}
        </div>
      )}

      {modalOpen && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 p-4">
          <div className="bg-card rounded-card w-full max-w-md p-6 relative">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute right-4 top-4 text-muted hover:text-heading"
            >
              <X size={18} />
            </button>
            <h2 className="text-heading font-semibold text-lg">
              {editingId ? "Edit dependent" : "Add dependent"}
            </h2>
            <p className="text-sm text-muted mt-1">
              Provide details about the person who depends on you.
            </p>

            <div className="mt-5 space-y-4">
              <div>
                <label className="block text-sm font-medium text-heading mb-1">
                  Full name
                </label>
                <input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full h-[42px] rounded-lg border border-border bg-card px-3 text-sm outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-heading mb-1">
                  Relationship
                </label>
                <select
                  value={form.relationship}
                  onChange={(e) =>
                    setForm({ ...form, relationship: e.target.value })
                  }
                  className="w-full h-[42px] rounded-lg border border-border bg-card px-3 text-sm outline-none focus:border-primary"
                >
                  {relationships.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-heading mb-1">
                  Date of birth
                </label>
                <input
                  type="date"
                  value={form.dob}
                  onChange={(e) => setForm({ ...form, dob: e.target.value })}
                  className="w-full h-[42px] rounded-lg border border-border bg-card px-3 text-sm outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-heading mb-1">
                  Care responsibilities
                </label>
                <input
                  value={form.care}
                  onChange={(e) => setForm({ ...form, care: e.target.value })}
                  placeholder="e.g. School expenses, medical support"
                  className="w-full h-[42px] rounded-lg border border-border bg-card px-3 text-sm outline-none focus:border-primary"
                />
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setModalOpen(false)}
                className="text-sm font-medium text-muted px-4 h-[42px] rounded-lg border border-border"
              >
                Cancel
              </button>
              <Button onClick={handleSave}>
                {editingId ? "Save changes" : "Add dependent"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </DashboardShell>
  );
}