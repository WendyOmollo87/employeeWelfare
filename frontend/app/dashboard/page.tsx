import DashboardShell from "@/components/layout/DashboardShell";
import Card from "@/components/ui/Card";
import {
  Sparkles,
  Users,
  CalendarHeart,
  HeartHandshake,
  UserCog,
  UserPlus,
  FileWarning,
  ListChecks,
} from "lucide-react";

const stats = [
  { label: "Matched programs", value: 6, sub: "Based on your profile", icon: Sparkles, tone: "text-accent" },
  { label: "Registered dependents", value: 2, sub: "Family & care", icon: Users, tone: "text-accent" },
  { label: "Reported life events", value: 1, sub: "Shared with HR", icon: CalendarHeart, tone: "text-warning" },
  { label: "Unread notifications", value: 2, sub: "Needs attention", icon: HeartHandshake, tone: "text-accent" },
];

const recommendations = [
  {
    category: "Financial Wellness",
    title: "Financial Assistance Program",
    description:
      "A structured support program offering short-term financial relief and budgeting support.",
  },
  {
    category: "Family Wellness",
    title: "Dependent Education Support",
    description:
      "Assistance towards tuition, learning materials and after-school care.",
  },
];

const quickActions = [
  { label: "Update profile", icon: UserCog },
  { label: "Add dependent", icon: UserPlus },
  { label: "Report life event", icon: FileWarning },
  { label: "View recommendations", icon: ListChecks },
];

const updates = [
  { title: "New recommendation generated", time: "2 days ago" },
  { title: "Life event submitted", time: "1 week ago" },
];

export default function DashboardPage() {
  return (
    <DashboardShell>
      <div className="bg-primary rounded-card px-8 py-6 flex items-center justify-between">
        <div>
          <p className="text-white/90 text-sm">Welcome back,</p>
          <h1 className="text-white text-2xl font-bold mt-1">David</h1>
          <p className="text-white/90 text-sm mt-2 max-w-md">
            You have 6 welfare programs matched to your profile. Review your
            personalized recommendations below.
          </p>
        </div>
        <button className="bg-background text-muted text-sm font-medium px-5 h-[45px] rounded-lg whitespace-nowrap">
          View recommendations →
        </button>
      </div>

      <div className="grid grid-cols-4 gap-4 mt-6">
        {stats.map(({ label, value, sub, icon: Icon, tone }) => (
          <Card key={label}>
            <Icon className={`${tone} mb-3`} size={20} />
            <p className="text-2xl font-bold text-heading">{value}</p>
            <p className="text-sm font-medium text-heading mt-1">{label}</p>
            <p className="text-xs text-muted mt-1">{sub}</p>
          </Card>
        ))}
      </div>

      <h2 className="text-lg font-semibold text-heading mt-8 mb-4">
        Top recommendations
      </h2>
      <div className="grid grid-cols-2 gap-4">
        {recommendations.map(({ category, title, description }) => (
          <Card key={title}>
            <span className="text-xs font-medium text-accent">{category}</span>
            <h3 className="text-heading font-semibold mt-2">{title}</h3>
            <p className="text-sm text-muted mt-2">{description}</p>
            <button className="text-primary text-sm font-medium mt-4">
              View details →
            </button>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-4 mt-8">
        <Card className="col-span-2">
          <h3 className="text-heading font-semibold mb-4">Quick actions</h3>
          <div className="grid grid-cols-2 gap-3">
            {quickActions.map(({ label, icon: Icon }) => (
              <button
                key={label}
                className="flex items-center gap-2 h-[45px] px-4 rounded-lg border border-border text-sm text-heading hover:bg-primary-light"
              >
                <Icon size={16} className="text-accent" />
                {label}
              </button>
            ))}
          </div>
        </Card>

        <Card>
          <h3 className="text-heading font-semibold mb-4">Wellbeing updates</h3>
          <div className="space-y-4">
            {updates.map(({ title, time }) => (
              <div key={title}>
                <p className="text-sm text-heading">{title}</p>
                <p className="text-xs text-muted mt-0.5">{time}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </DashboardShell>
  );
}