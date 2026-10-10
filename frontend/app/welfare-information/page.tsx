"use client";

import { useState } from "react";
import DashboardShell from "@/components/layout/DashboardShell";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { ShieldCheck, HeartHandshake, Wallet, CalendarHeart } from "lucide-react";

type Toggle = {
  key: string;
  label: string;
  description: string;
};

const caregivingToggles: Toggle[] = [
  {
    key: "caregiving_responsibility",
    label: "Caregiving responsibilities",
    description: "I provide regular care for a family member.",
  },
  {
    key: "elderly_care_need",
    label: "Elderly care support",
    description: "I am supporting elderly dependents.",
  },
  {
    key: "education_support_need",
    label: "Education expenses",
    description: "I am responsible for school fees or learning costs.",
  },
];

const financialToggles: Toggle[] = [
  {
    key: "financial_difficulty",
    label: "Financial difficulty",
    description: "I am currently experiencing financial strain.",
  },
  {
    key: "mental_wellbeing_concern",
    label: "Mental wellbeing concern",
    description: "I would like support with stress or emotional wellbeing.",
  },
  {
    key: "health_concern",
    label: "Health concern",
    description: "I have an ongoing health issue affecting my work.",
  },
];

const lifeEventToggles: Toggle[] = [
  {
    key: "bereavement_recent",
    label: "Recent bereavement",
    description: "I have lost a family member in the last few months.",
  },
  {
    key: "divorce_recent",
    label: "Recent divorce or separation",
    description: "My marital situation has changed recently.",
  },
  {
    key: "marriage_recent",
    label: "Recent marriage",
    description: "I got married in the last year.",
  },
  {
    key: "birth_recent",
    label: "Recent birth or adoption",
    description: "A new child has joined my household.",
  },
];

export default function WelfareInformationPage() {
  const [values, setValues] = useState<Record<string, boolean>>({
    caregiving_responsibility: true,
    elderly_care_need: false,
    education_support_need: true,
    financial_difficulty: true,
    mental_wellbeing_concern: false,
    health_concern: false,
    bereavement_recent: false,
    divorce_recent: false,
    marriage_recent: false,
    birth_recent: false,
  });

  const [saved, setSaved] = useState(false);

  const toggle = (key: string) => {
    setValues((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const renderToggle = ({ key, label, description }: Toggle) => {
    const active = values[key];
    return (
      <div
        key={key}
        className="flex items-start justify-between gap-4 py-3 border-b border-border last:border-0"
      >
        <div>
          <p className="text-sm font-medium text-heading">{label}</p>
          <p className="text-xs text-muted mt-0.5">{description}</p>
        </div>
        <button
          type="button"
          onClick={() => toggle(key)}
          className={`relative w-11 h-6 rounded-full shrink-0 transition-colors ${
            active ? "bg-accent" : "bg-beige"
          }`}
          aria-pressed={active}
        >
          <span
            className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
              active ? "translate-x-5" : "translate-x-0"
            }`}
          />
        </button>
      </div>
    );
  };

  return (
    <DashboardShell>
      <h1 className="text-2xl font-semibold text-heading">Welfare Information</h1>
      <p className="text-muted text-sm mt-1 max-w-2xl">
        This information powers your personalized welfare recommendations.
        Update it whenever your circumstances change.
      </p>

      <div className="bg-primary-light border border-accent/30 rounded-lg p-4 mt-6 flex items-start gap-3">
        <ShieldCheck className="text-accent mt-0.5" size={18} />
        <p className="text-sm text-muted">
          Keeping this information up to date helps us match you with the
          right support.
        </p>
      </div>

      {/* -------------------------------------------------- */}
      {/* 1. Life events — most impactful, placed first */}
      {/* -------------------------------------------------- */}
      <Card className="mt-6">
        <div className="flex items-center gap-2 mb-4">
          <CalendarHeart className="text-warning" size={20} />
          <h2 className="text-heading font-semibold">Life events</h2>
        </div>
        <p className="text-sm text-muted mb-2">
          If something significant has happened recently, tell us so we can
          update your support programs.
        </p>
        {lifeEventToggles.map(renderToggle)}
      </Card>

      {/* -------------------------------------------------- */}
      {/* 2. Caregiving & dependents */}
      {/* -------------------------------------------------- */}
      <Card className="mt-6">
        <div className="flex items-center gap-2 mb-4">
          <HeartHandshake className="text-accent" size={20} />
          <h2 className="text-heading font-semibold">Caregiving & dependents</h2>
        </div>
        {caregivingToggles.map(renderToggle)}
      </Card>

      {/* -------------------------------------------------- */}
      {/* 3. Financial & wellbeing */}
      {/* -------------------------------------------------- */}
      <Card className="mt-6">
        <div className="flex items-center gap-2 mb-4">
          <Wallet className="text-accent" size={20} />
          <h2 className="text-heading font-semibold">Financial & wellbeing</h2>
        </div>
        {financialToggles.map(renderToggle)}
      </Card>

      {/* -------------------------------------------------- */}
      {/* Save */}
      {/* -------------------------------------------------- */}
      <div className="mt-6 flex items-center gap-4">
        <Button onClick={handleSave}>Save welfare information</Button>
        {saved && (
          <span className="text-sm text-accent font-medium">
            Saved.
          </span>
        )}
      </div>
    </DashboardShell>
  );
}