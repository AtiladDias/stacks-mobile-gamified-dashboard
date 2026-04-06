"use client";

import React from "react";

export default function DashboardScreen() {
  // Mock data (vamos trocar por onchain depois)
  const level = 4;
  const xp = 1240;
  const nextLevelXp = 1500;
  const streak = 6;

  const progress = Math.min((xp / nextLevelXp) * 100, 100);

  return (
    <div className="flex flex-col gap-6 p-6">
      {/* Header */}
      <div className="flex flex-col items-center gap-2">
        <span className="text-xs uppercase tracking-wider text-neutral-400">
          Level {level}
        </span>

        <h1 className="text-2xl font-bold">
          Onchain Explorer
        </h1>

        <span className="text-sm text-neutral-500">
          {xp} / {nextLevelXp} XP
        </span>
      </div>

      {/* XP Progress Bar */}
      <div className="w-full bg-neutral-800 h-3 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4">
        <StatCard
          label="Weekly Streak"
          value={`${streak} 🔥`}
          sub="days active"
        />

        <StatCard
          label="Activity Score"
          value="78"
          sub="Gold tier"
        />

        <StatCard
          label="Transactions"
          value="142"
          sub="total"
        />

        <StatCard
          label="Protocols"
          value="12"
          sub="interacted"
        />
      </div>

      {/* Missions */}
      <div className="flex flex-col gap-3">
        <h2 className="text-sm font-semibold text-neutral-300">
          Daily Missions
        </h2>

        <MissionItem checked label="Make 1 transaction" reward="+20 XP" />
        <MissionItem checked={false} label="Interact with a protocol" reward="+40 XP" />
        <MissionItem checked={false} label="Maintain streak" reward="+10 XP" />
      </div>
    </div>
  );
}

/* ------------------ */
/* Helper Components */
/* ------------------ */

function StatCard({
  label,
  value,
  sub,
}: {
  label: string;
  value: string;
  sub: string;
}) {
  return (
    <div className="bg-neutral-900 rounded-xl p-4 flex flex-col gap-1">
      <span className="text-xs text-neutral-400">{label}</span>
      <span className="text-lg font-bold">{value}</span>
      <span className="text-xs text-neutral-500">{sub}</span>
    </div>
  );
}

function MissionItem({
  label,
  reward,
  checked,
}: {
  label: string;
  reward: string;
  checked: boolean;
}) {
  return (
    <div className="flex items-center justify-between bg-neutral-900 rounded-xl px-4 py-3">
      <div className="flex items-center gap-3">
        <span
          className={`w-5 h-5 rounded-full border flex items-center justify-center ${
            checked
              ? "bg-emerald-500 border-emerald-500"
              : "border-neutral-600"
          }`}
        >
          {checked && "✓"}
        </span>

        <span className="text-sm">{label}</span>
      </div>

      <span className="text-xs text-neutral-400">{reward}</span>
    </div>
  );
}
