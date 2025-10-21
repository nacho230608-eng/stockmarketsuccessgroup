import React, { useState } from "react";

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const nav = [
    { id: "about", label: "About" },
    { id: "activities", label: "Activities" },
    { id: "contests", label: "Contests" },
    { id: "networking", label: "Networking" },
    { id: "team", label: "Meet the Team" },
    { id: "join", label: "Join" },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <Header nav={nav} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <main>
        <Hero />
        <About />
        <Activities />
        <Contests />
        <Networking />
        <Team />
        <Join />
      </main>
      <Footer />
    </div>
  );
}

function Header({ nav, mobileOpen, setMobileOpen }) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/90 border-b border-neutral-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-black text-white grid place-items-center font-bold">SM</div>
            <span className="font-semibold tracking-tight">Stock Market Success Group</span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {nav.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="text-sm font-medium text-neutral-700 hover:text-black">
                {item.label}
              </a>
            ))}
            <a href="#join" className="ml-2 inline-flex items-center rounded-2xl px-4 py-2 text-sm font-semibold bg-black text-white hover:bg-neutral-800">
              Join
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-xl p-2 hover:bg-neutral-100"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
              <path d="M3.75 6.75h16.5v1.5H3.75v-1.5zM3.75 11.25h16.5v1.5H3.75v-1.5zM3.75 15.75h16.5v1.5H3.75v-1.5z" />
            </svg>
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2 border-t border-neutral-200 pt-4">
              {nav.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="rounded-xl px-3 py-2 text-sm font-medium hover:bg-neutral-100"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#join"
                className="rounded-xl px-3 py-2 text-sm font-semibold text-white bg-black hover:bg-neutral-800"
                onClick={() => setMobileOpen(false)}
              >
                Join
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-gradient-to-b from-neutral-900 to-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs tracking-wide">
            High School Chapter • Grades 11–12
          </p>
          <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Learn. Compete. Network.
          </h1>
          <p className="mt-4 text-lg text-neutral-200">
            The Stock Market Success Group empowers students in grades 11–12 to decode market trends, practice investing strategies, and build real-world finance skills together.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#join" className="inline-flex items-center rounded-2xl px-5 py-3 text-sm font-semibold bg-white text-black hover:bg-neutral-100">Join the Group</a>
            <a href="#about" className="inline-flex items-center rounded-2xl px-5 py-3 text-sm font-semibold bg-white/10 ring-1 ring-inset ring-white/20 hover:bg-white/15">How it works</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionShell({ id, eyebrow, title, intro, children }) {
  return (
    <section id={id} className="scroll-mt-20 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-widest text-neutral-500 uppercase">{eyebrow}</p>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight">{title}</h2>
          {intro && <p className="mt-3 text-neutral-700">{intro}</p>}
        </div>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}

function About() {
  return (
    <SectionShell
      id="about"
      eyebrow="About"
      title="What is the Stock Market Success Group?"
      intro="A student-led club for grades 11–12 where members learn, practice, and collaborate on personal finance and investing."
    >
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            h: "Exclusive discussions",
            p: "Engage with ~15 peers in moderated talks about market trends, earnings, and macro news.",
          },
          {
            h: "Strategy building",
            p: "Explore value, growth, and index strategies. Practice with paper trading before risking real money.",
          },
          {
            h: "Career skills",
            p: "Present research, explain theses, and learn to read charts, filings, and fundamentals.",
          },
        ].map((card, i) => (
          <li key={i} className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
            <h3 className="font-semibold">{card.h}</h3>
            <p className="mt-2 text-sm text-neutral-700">{card.p}</p>
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}

function Activities() {
  return (
    <SectionShell
      id="activities"
      eyebrow="Program"
      title="Hands-on learning, every week"
      intro="Meetings combine quick lessons, student presentations, and open discussion."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
          <div className="text-sm font-semibold">Market Discussions</div>
          <p className="mt-2 text-sm text-neutral-700">
            Explore market trends and investing strategies with 15 motivated peers. Rotate roles: presenter, skeptic, and note-taker.
          </p>
        </div>
        <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
          <div className="text-sm font-semibold">Skill Boosters</div>
          <p className="mt-2 text-sm text-neutral-700">
            Mini-workshops on earnings calls, ETFs, diversification, risk management, and journaling your trades.
          </p>
        </div>
        <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
          <div className="text-sm font-semibold">Guest Speakers</div>
          <p className="mt-2 text-sm text-neutral-700">
            Occasional Q&A with alumni and professionals about internships, majors, and careers in finance.
          </p>
        </div>
      </div>
    </SectionShell>
  );
}

function Contests() {
  return (
    <SectionShell
      id="contests"
      eyebrow="Contests"
      title="Friendly competitions that reinforce learning"
      intro="Members compete using paper-trading or sandbox portfolios. Prizes are for learning and participation."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {[
          {
            h: "Monthly Profit Leaderboard",
            p: "Apply concepts and aim for the highest risk-adjusted return over four weeks. Share lessons learned at the end.",
          },
          {
            h: "Thesis Showdown",
            p: "Two teams pitch opposing views on the same stock. Judges score clarity, evidence, and risk analysis.",
          },
          {
            h: "ETF Draft",
            p: "Draft a 5-ETF portfolio to match a goal (growth, income, defensive). Track performance and rebalance once.",
          },
        ].map((c, i) => (
          <div key={i} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <div className="font-semibold">{c.h}</div>
            <p className="mt-2 text-sm text-neutral-700">{c.p}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

function Networking() {
  return (
    <SectionShell
      id="networking"
      eyebrow="Community"
      title="Build a network that lasts"
      intro="We create connections through mentorship, alumni chats, and cross-school meetups."
    >
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          "Peer mentorship and study groups",
          "Visits to finance clubs at nearby schools",
          "Alumni LinkedIn circle and resume reviews",
          "Invite-only Discord for resources and Q&A",
          "Field trips to local finance events when available",
          "Annual ‘Markets & Pizza’ social night",
        ].map((item, i) => (
          <li key={i} className="rounded-2xl border border-neutral-200 bg-white p-5 text-sm text-neutral-700 shadow-sm">{item}</li>
        ))}
      </ul>
    </SectionShell>
  );
}

function Team() {
  return (
    <SectionShell
      id="team"
      eyebrow="Leaders"
      title="Meet the Team"
      intro="Our officers guide weekly sessions, organize contests, and support member success."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <ProfileCard
          name="Arian Gomeshi"
          role="Co-Founder & President"
          headshotLetters="AG"
          bio="Oversees club strategy, leads meetings, and represents the group at networking events."
        />
        <ProfileCard
          name="Luis Marcano"
          role="Co-Founder & Vice President"
          headshotLetters="LM"
          bio="Helps design competitions and runs weekly discussion prompts on market news and strategy."
        />
        <ProfileCard
          name="Chariff Elcharuaffa"
          role="Secretary of Operations"
          headshotLetters="CE"
          bio="Manages communication, attendance, and ensures smooth coordination of club logistics."
        />
      </div>
    </SectionShell>
  );
}

function ProfileCard({ name, role, headshotLetters, bio }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className="flex items-start gap-4">
        <div className="size-14 shrink-0 rounded-2xl bg-neutral-900 text-white grid place-items-center text-sm font-bold">
          {headshotLetters}
        </div>
        <div>
          <div className="text-base font-semibold leading-tight">{name}</div>
          <div className="text-sm text-neutral-600">{role}</div>
        </div>
      </div>
      <p className="mt-4 text-sm text-neutral-700">{bio}</p>
    </div>
  );
}

function Join() {
  return (
    <SectionShell
      id="join"
      eyebrow="Join"
      title="Ready to get started?"
      intro="Meetings are weekly after school. Fill out the interest form and we’ll follow up with details."
    >
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
          <form onSubmit={(e) => e.preventDefault()} className="grid gap-4">
            <div>
              <label className="block text-sm font-medium">Full name</label>
              <input className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2 outline-none focus:ring-2 focus:ring-black" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input type="email" className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2 outline-none focus:ring-2 focus:ring-black" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium">Grade</label>
              <select className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2 outline-none focus:ring-2 focus:ring-black">
                <option>11</option>
                <option>12</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium">What are you hoping to learn?</label>
              <textarea rows={4} className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2 outline-none focus:ring-2 focus:ring-black" placeholder="Tell us your goals (e.g., dividends, options basics, ETFs)…" />
            </div>
            <button className="inline-flex items-center justify-center rounded-2xl bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-800">
              Submit Interest
            </button>
            <p className="text-xs text-neutral-500">This demo form doesn’t send data in preview mode. Connect it to your Google Form or email later.</p>
          </form>
        </div>
        <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h3 className="font-semibold">Club quick facts</h3>
          <ul className="mt-3 space-y-2 text-sm text-neutral-700">
            <li>• Audience: Grades 11–12</li>
            <li>• Size: ~15 active members</li>
            <li>• Focus: market trends, investing strategies, and finance careers</li>
            <li>• Contests: monthly profit leaderboard, thesis showdown, ETF draft</li>
            <li>• Networking: alumni chats, cross-school meetups, Discord</li>
          </ul>
          <a href="#about" className="mt-4 inline-flex rounded-2xl bg-neutral-100 px-4 py-2 text-sm font-semibold hover:bg-neutral-200">Learn more</a>
        </div>
      </div>
    </SectionShell>
  );
}

function Footer() {
  return (
    <footer className="mt-16 border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid gap-6 md:grid-cols-3 items-start">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-black text-white grid place-items-center font-bold">SM</div>
          <div>
            <div className="font-semibold">Stock Market Success Group</div>
            <div className="text-xs text-neutral-600">High School Chapter (11–12)</div>
          </div>
        </div>
        <div>
          <div className="text-sm font-semibold">Contact</div>
          <p className="mt-2 text-sm text-neutral-700">Email: info@stockmarketsuccess.club (placeholder)</p>
          <p className="text-sm text-neutral-700">Discord: invite-only (members)</p>
        </div>
        <div>
          <div className="text-sm font-semibold">Links</div>
          <ul className="mt-2 text-sm text-neutral-700">
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#team" className="hover:underline">Meet the Team</a></li>
            <li><a href="#join" className="hover:underline">Join</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-neutral-200 py-6 text-center text-xs text-neutral-500">
        © {new Date().getFullYear()} Stock Market Success Group. All rights reserved.
      </div>
    </footer>
  );
}
