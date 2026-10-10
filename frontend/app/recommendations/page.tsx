"use client";

import { useState } from "react";
import DashboardShell from "@/components/layout/DashboardShell";
import Card from "@/components/ui/Card";

const filters = ["All", "Financial", "Health", "Family", "Wellbeing"];

const programs = [
  {
    category: "Financial",
    title: "Financial Assistance Program",
    description:
      "A structured support program offering short-term financial relief and budgeting support.",
    reason: "Matched due to your financial responsibility rating.",
  },
  {
    category: "Family",
    title: "Dependent Education Support",
    description:
      "Assistance towards tuition, learning materials and after-school care.",
    reason: "Matched because you have a registered dependent in school.",
  },
  {
    category: "Family",
    title: "Elder Care Assistance",
    description:
      "Support for employees caring for elderly parents, including respite care resources.",
    reason: "Matched due to your significant caregiving responsibility.",
  },
  {
    category: "Wellbeing",
    title: "Mental Wellbeing & Counselling",
    description:
      "Confidential counselling sessions for stress, anxiety and personal challenges.",
    reason: "Matched based on reported work stress concerns.",
  },
  {
    category: "Health",
    title: "Preventive Health Screening",
    description:
      "Annual health screening covering routine checks and early detection tests.",
    reason: "Recommended for all employees annually.",
  },
  {
    category: "Financial",
    title: "Emergency Relief Fund",
    description:
      "One-time emergency financial support for unforeseen circumstances.",
    reason: "Available based on your financial responsibility profile.",
  },
];

export default function RecommendationsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const visiblePrograms =
    activeFilter === "All"
      ? programs
      : programs.filter((p) => p.category === activeFilter);

  return (
    <DashboardShell>
      <h1 className="text-2xl font-semibold text-heading">Recommendations</h1>
      <p className="text-muted text-sm mt-1 max-w-2xl">
        Welfare programs personalized to your profile, dependents and
        reported life events.
      </p>

      <div className="flex flex-wrap gap-2 mt-6">
        {filters.map((filter) => {
          const isActive = filter === activeFilter;
          return (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 h-9 rounded-full text-sm border transition-colors ${
                isActive
                  ? "bg-primary text-white border-primary"
                  : "bg-card text-muted border-border hover:border-primary"
              }`}
            >
              {filter}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {visiblePrograms.map(({ category, title, description, reason }) => (
          <Card key={title}>
            <span className="text-xs font-medium text-accent">{category}</span>
            <h3 className="text-heading font-semibold mt-3">{title}</h3>
            <p className="text-sm text-muted mt-2">{description}</p>
            <p className="text-xs text-muted mt-3 italic">{reason}</p>
            <button className="text-primary text-sm font-medium mt-4">
              View details →
            </button>
          </Card>
        ))}
      </div>
    </DashboardShell>
  );
}