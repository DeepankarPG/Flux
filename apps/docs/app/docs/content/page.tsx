import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Content guidelines",
  description: "Writing style, grammar, and voice guidelines for Flux UI and product copy.",
};

export default function ContentPage() {
  return (
    <article className="space-y-12 pb-16">
      <header className="space-y-3 border-b border-border pb-8">
        <p className="text-xs font-semibold uppercase tracking-wider text-primary">Foundations</p>
        <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Content guidelines</h1>
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
          Clear, consistent language builds trust. These guidelines apply to UI labels, error messages,
          empty states, buttons, and documentation across all Flux-powered products.
        </p>
      </header>

      {/* Voice and tone */}
      <section id="voice" className="scroll-mt-24 space-y-5">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">Voice and tone</h2>
        <p className="text-sm leading-relaxed text-muted-foreground max-w-2xl">
          Flux products speak with a consistent voice — the personality stays the same across contexts.
          Tone adapts based on the situation.
        </p>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { trait: "Clear", desc: "Use plain language. Avoid jargon. If a 12-year-old can't understand it, simplify." },
            { trait: "Concise", desc: "Cut filler words. Every word earns its place. Prefer one sentence over two." },
            { trait: "Helpful", desc: "Guide users to the next step. Don't just describe the problem — offer a path forward." },
          ].map((item) => (
            <div key={item.trait} className="rounded-xl border border-border bg-card p-5 shadow-sm">
              <p className="font-semibold text-foreground mb-1.5">{item.trait}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Grammar and style */}
      <section id="grammar" className="scroll-mt-24 space-y-5">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">Style and grammar</h2>
        <div className="overflow-hidden rounded-xl border border-border shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/40">
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground w-1/4">Rule</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">Do</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">Don&apos;t</th>
              </tr>
            </thead>
            <tbody>
              {[
                { rule: "Sentence case", do: "Save changes", dont: "Save Changes" },
                { rule: "Active voice", do: "Export the report", dont: "The report can be exported" },
                { rule: "Present tense", do: "Your file is ready", dont: "Your file will be ready" },
                { rule: "Second person", do: "You have 3 notifications", dont: "The user has 3 notifications" },
                { rule: "Contractions", do: "You don't have permission", dont: "You do not have permission" },
                { rule: "Oxford comma", do: "Red, blue, and green", dont: "Red, blue and green" },
                { rule: "Em dash", do: "Save — then continue", dont: "Save - then continue" },
                { rule: "Ellipsis", do: "Loading…", dont: "Loading..." },
              ].map((row) => (
                <tr key={row.rule} className="border-b border-border last:border-0 hover:bg-muted/20 transition-colors">
                  <td className="px-4 py-3 font-medium text-foreground">{row.rule}</td>
                  <td className="px-4 py-3">
                    <span className="inline-flex items-center gap-1.5 text-green-700 dark:text-green-400">
                      <svg className="size-3.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      {row.do}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="inline-flex items-center gap-1.5 text-red-600 dark:text-red-400">
                      <svg className="size-3.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                      {row.dont}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* UI patterns */}
      <section id="ui-patterns" className="scroll-mt-24 space-y-5">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">UI copy patterns</h2>

        <div className="space-y-4">
          {[
            {
              pattern: "Buttons and CTAs",
              rules: [
                { label: "Use verb + noun", good: "Download report", bad: "Download" },
                { label: "Be specific", good: "Create merchant", bad: "Create" },
                { label: "Match the action", good: "Delete account", bad: "OK" },
              ],
            },
            {
              pattern: "Error messages",
              rules: [
                { label: "Say what happened", good: "Payment failed — card declined by your bank.", bad: "An error occurred." },
                { label: "Say what to do", good: "Try a different card or contact your bank.", bad: "Please try again." },
                { label: "No blame", good: "We couldn't process this payment.", bad: "You entered invalid details." },
              ],
            },
            {
              pattern: "Empty states",
              rules: [
                { label: "Explain the context", good: "No transactions yet — they'll appear here once processed.", bad: "No data." },
                { label: "Offer a next step", good: "Create your first payment link to get started.", bad: "Nothing to show." },
              ],
            },
            {
              pattern: "Form labels",
              rules: [
                { label: "Noun phrases, not questions", good: "Business name", bad: "What is your business name?" },
                { label: "No redundant 'Enter'", good: "Email address", bad: "Enter your email address" },
                { label: "Mark required clearly", good: "Mobile number *", bad: "Mobile number (required)" },
              ],
            },
          ].map((section) => (
            <div key={section.pattern} className="rounded-xl border border-border bg-card shadow-sm overflow-hidden">
              <div className="border-b border-border bg-muted/40 px-5 py-3">
                <h3 className="text-sm font-semibold text-foreground">{section.pattern}</h3>
              </div>
              <div className="divide-y divide-border">
                {section.rules.map((rule) => (
                  <div key={rule.label} className="px-5 py-4 grid gap-3 sm:grid-cols-[1fr_1fr_1fr]">
                    <p className="text-xs font-medium text-muted-foreground self-center">{rule.label}</p>
                    <div className="flex items-start gap-1.5">
                      <svg className="mt-0.5 size-3.5 shrink-0 text-green-600" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      <p className="text-sm text-foreground">{rule.good}</p>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <svg className="mt-0.5 size-3.5 shrink-0 text-red-500" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                      <p className="text-sm text-muted-foreground line-through">{rule.bad}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Numbers and dates */}
      <section id="numbers" className="scroll-mt-24 space-y-4">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">Numbers, dates, and currency</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { title: "Dates", items: ["Use ISO-like: 12 Jun 2026", "Avoid ambiguous: 06/12/26", "Relative for recent: 2 hours ago, Yesterday", "Absolute for historical: 14 Mar 2025"] },
            { title: "Currency", items: ["Always include symbol: ₹1,24,320", "Use Indian numbering for INR: 1,24,320", "USD: $1,243.20 (comma thousands)", "Show currency code for multi-currency: USD 1,243.20"] },
            { title: "Numbers", items: ["Spell out below 10 in prose: three merchants", "Use numerals in UI: 3 results", "Tabular numbers for data: font-variant-numeric: tabular-nums", "Percentages: 87% (no space)"] },
            { title: "Time", items: ["12-hour with period: 2:30 PM", "24-hour for technical: 14:30", "Timezone always for scheduled events: 2:30 PM IST", "Durations: 3h 24m, not 3.4 hours"] },
          ].map((group) => (
            <div key={group.title} className="rounded-xl border border-border bg-card p-5 shadow-sm">
              <h3 className="font-semibold text-foreground mb-3">{group.title}</h3>
              <ul className="space-y-1.5">
                {group.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/40 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Inclusive language */}
      <section id="inclusive" className="scroll-mt-24 space-y-4">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">Inclusive language</h2>
        <p className="text-sm leading-relaxed text-muted-foreground max-w-2xl">Write for everyone. Avoid assumptions about gender, ability, or technical expertise.</p>
        <div className="overflow-hidden rounded-xl border border-border shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/40">
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">Avoid</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">Use instead</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["he / she", "they / the user"],
                ["blacklist / whitelist", "blocklist / allowlist"],
                ["master / slave", "primary / replica"],
                ["sanity check", "quick check / review"],
                ["dummy data", "sample data / placeholder"],
                ["simple / easy / just", "(omit — implies others are incapable)"],
              ].map(([avoid, use]) => (
                <tr key={avoid} className="border-b border-border last:border-0 hover:bg-muted/20 transition-colors">
                  <td className="px-4 py-3 text-muted-foreground line-through">{avoid}</td>
                  <td className="px-4 py-3 text-foreground font-medium">{use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </article>
  );
}
