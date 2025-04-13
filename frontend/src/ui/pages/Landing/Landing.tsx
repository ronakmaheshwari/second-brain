import { Brain, Search, FileText, Link2, Tag, Calendar, CheckCircle2, Menu, Github, TwitterIcon, Mail } from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-5">
          <div className="flex items-center gap-2">
            <Brain className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">SecondBrain</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6">
            <a href="#features" className="text-sm font-medium transition-colors hover:text-primary">
              Features
            </a>
            <a href="#how-it-works" className="text-sm font-medium transition-colors hover:text-primary">
              How It Works
            </a>
            <a href="#pricing" className="text-sm font-medium transition-colors hover:text-primary">
              Pricing
            </a>
            <a href="#faq" className="text-sm font-medium transition-colors hover:text-primary">
              FAQ
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button className="flex items-center justify-center rounded-md p-2 text-foreground md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </button>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm font-medium transition-colors hover:text-zinc-100 hover:bg-black px-3 py-1 rounded" onClick={()=>{navigate("/signin")}}>
              Log in
            </button>
            <button
              onClick={()=>{navigate("/signup")}}
              className="inline-flex h-9 items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-zinc-50 inset-shadow-sm inset-shadow-indigo-500/50 transition-colors hover:text-zinc-300 hover:bg-indigo-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Get Started
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Your Second Brain for Better Thinking
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl text-neutral-500">
                    Capture, organize, and connect your ideas. Never lose a thought again with our powerful knowledge
                    management system.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <button
                    onClick={()=>{navigate("/signup")}}
                    className="inline-flex h-9 items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-zinc-50 inset-shadow-sm inset-shadow-indigo-500/50 transition-colors hover:text-zinc-300 hover:bg-indigo-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    Get Started Free
                  </button>
                  <a
                    href="#how-it-works"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring hover:bg-black hover:text-zinc-50"
                  >
                    Learn More
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center h-[400px]">
                <div className="relative overflow-hidden rounded-xl border bg-white p-2 shadow-xl w-[900px] h-[500px]">
                  <img
                    src="https://xntcmbrnuyvzjeupfbyt.supabase.co/storage/v1/object/public/uploads//oc-on-the-laptop.jpg"
                    alt="SecondBrain dashboard preview"
                    className="h-full w-full object-cover rounded-md bg-white"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40 ">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Everything You Need to Organize Your Thoughts
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl text-neutral-500">
                  SecondBrain combines the best note-taking, knowledge management, and productivity tools in one
                  seamless experience.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm inset-shadow-sm bg-indigo-600 text-zinc-50">
                <div className="rounded-full bg-primary/10 p-3 shadow-xl bg-zinc-50 text-black">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Rich Text Notes</h3>
                <p className="text-center text-muted-foreground">
                  Create beautiful notes with our powerful rich text editor. Support for markdown, code blocks, and
                  more.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm inset-shadow-sm bg-indigo-600 text-zinc-50">
                <div className="rounded-full bg-primary/10 p-3 shadow-xl bg-zinc-50 text-black">
                  <Link2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Bidirectional Links</h3>
                <p className="text-center text-muted-foreground">
                  Connect your ideas with powerful bidirectional links. See connections you never knew existed.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm inset-shadow-sm bg-indigo-600 text-zinc-50">
                <div className="rounded-full bg-primary/10 p-3 shadow-xl bg-zinc-50 text-black">
                  <Tag className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Smart Tags</h3>
                <p className="text-center text-muted-foreground">
                  Organize your notes with tags and nested tags. Find what you need when you need it.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm inset-shadow-sm bg-indigo-600 text-zinc-50">
                <div className="rounded-full bg-primary/10 p-3 shadow-xl bg-zinc-50 text-black">
                  <Search className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Powerful Search</h3>
                <p className="text-center text-muted-foreground">
                  Find anything in seconds with our lightning-fast search. Full-text search across all your notes.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm  inset-shadow-sm bg-indigo-600 text-zinc-50">
                <div className="rounded-full bg-primary/10 p-3 shadow-xl bg-zinc-50 text-black">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Daily Notes</h3>
                <p className="text-center text-muted-foreground">
                  Capture your daily thoughts with automatic daily notes. Build a journal of your thinking.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm inset-shadow-sm bg-indigo-600 text-zinc-50">
                <div className="rounded-full bg-primary/10 p-3 shadow-xl bg-zinc-50 text-black">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">AI Assistance</h3>
                <p className="text-center text-muted-foreground">
                  Get smart suggestions and insights with our AI assistant. Let your second brain do the thinking.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center ">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  How It Works
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Build Your Knowledge Base in Three Simple Steps
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl text-neutral-500">
                  SecondBrain makes it easy to capture, organize, and connect your ideas.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3 ">
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground bg-black text-zinc-50">
                  1
                </div>
                <h3 className="text-xl font-bold">Capture</h3>
                <p className="text-center text-muted-foreground">
                  Quickly capture your thoughts, ideas, and inspirations. Use our web clipper to save content from
                  anywhere.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground bg-black text-zinc-50">
                  2
                </div>
                <h3 className="text-xl font-bold">Organize</h3>
                <p className="text-center text-muted-foreground">
                  Structure your knowledge with tags, folders, and links. Create a system that works for your brain.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground bg-black text-zinc-50">
                  3
                </div>
                <h3 className="text-xl font-bold">Connect</h3>
                <p className="text-center text-muted-foreground">
                  Discover connections between your ideas. Let your second brain help you think better and create more.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Loved by Thinkers and Creators
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl text-neutral-500">
                  See what our users are saying about how SecondBrain has transformed their thinking.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3 ">
              <div className="flex flex-col justify-between space-y-4 rounded-lg border p-6 shadow-sm  inset-shadow-sm bg-indigo-600 text-zinc-50">
                <div className="space-y-2">
                  <p className="text-muted-foreground">
                    "SecondBrain has completely transformed how I organize my research. I can finally see connections
                    between ideas that I never would have noticed before."
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="rounded-full bg-muted h-10 w-10"></div>
                  <div>
                    <p className="text-sm font-medium">Sarah Johnson</p>
                    <p className="text-xs text-muted-foreground">PhD Researcher</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between space-y-4 rounded-lg border p-6 shadow-sm  inset-shadow-sm bg-indigo-600 text-zinc-50">
                <div className="space-y-2">
                  <p className="text-muted-foreground">
                    "As a writer, I need to keep track of countless ideas and references. SecondBrain makes this
                    effortless and actually helps me generate new ideas."
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="rounded-full bg-muted h-10 w-10"></div>
                  <div>
                    <p className="text-sm font-medium">Michael Chen</p>
                    <p className="text-xs text-muted-foreground">Author & Journalist</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between space-y-4 rounded-lg border p-6 shadow-sm  inset-shadow-sm bg-indigo-600 text-zinc-50">
                <div className="space-y-2">
                  <p className="text-muted-foreground">
                    "I've tried every note-taking app out there, and SecondBrain is by far the most intuitive and
                    powerful. It's become an essential part of my daily workflow."
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="rounded-full bg-muted h-10 w-10"></div>
                  <div>
                    <p className="text-sm font-medium">Alex Rivera</p>
                    <p className="text-xs text-muted-foreground">Product Designer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Pricing
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Simple, Transparent Pricing</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl text-neutral-500">
                  Choose the plan that's right for you. All plans include a 14-day free trial.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
              {/* Free Plan */}
              <div className="flex flex-col rounded-lg border p-6 shadow-lg">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Free</h3>
                  <p className="text-muted-foreground">Perfect for getting started</p>
                </div>
                <div className="mt-4 flex items-baseline text-3xl font-bold">
                  $0
                  <span className="ml-1 text-sm font-normal text-muted-foreground">/month</span>
                </div>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    <span>Up to 100 notes</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    <span>Basic text formatting</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    <span>Mobile app access</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <a
                    href="/signup"
                    className="inline-flex h-10 w-full items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-indigo-600 text-white"
                  >
                    Get Started
                  </a>
                </div>
              </div>

              {/* Pro Plan */}
              <div className="flex flex-col rounded-lg border border-primary p-6 shadow-lg">
                <div className="space-y-2">
                  <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                    Most Popular
                  </div>
                  <h3 className="text-2xl font-bold">Pro</h3>
                  <p className="text-muted-foreground">For serious note-takers</p>
                </div>
                <div className="mt-4 flex items-baseline text-3xl font-bold">
                  $9.99
                  <span className="ml-1 text-sm font-normal text-muted-foreground">/month</span>
                </div>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    <span>Unlimited notes</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    <span>Advanced formatting</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    <span>Bidirectional links</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    <span>Full-text search</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    <span>All platforms</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <a
                    href="/signup"
                    className="inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-indigo-600 text-white"
                  >
                    Start Free Trial
                  </a>
                </div>
              </div>

              {/* Team Plan */}
              <div className="flex flex-col rounded-lg border p-6 shadow-lg">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Team</h3>
                  <p className="text-muted-foreground">For teams and organizations</p>
                </div>
                <div className="mt-4 flex items-baseline text-3xl font-bold">
                  $19.99
                  <span className="ml-1 text-sm font-normal text-muted-foreground">/user/month</span>
                </div>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    <span>Everything in Pro</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    <span>Team workspaces</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    <span>Collaborative editing</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    <span>Advanced permissions</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    <span>Admin controls</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <a
                    href="/contact"
                    className="inline-flex h-10 w-full items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-indigo-600 text-white"
                  >
                    Contact Sales
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">FAQ</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Frequently Asked Questions</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-lg text-neutral-500">
                  Everything you need to know about SecondBrain.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-3xl grid-cols-1 gap-6 py-12">
              <div className="rounded-lg border p-6 shadow-sm">
                <h3 className="text-lg font-bold">What is a "second brain"?</h3>
                <p className="mt-2 text-muted-foreground">
                  A second brain is a digital system that helps you capture, organize, and retrieve your ideas,
                  knowledge, and insights. It's like an extension of your mind that helps you think better and remember
                  more.
                </p>
              </div>
              <div className="rounded-lg border p-6 shadow-sm">
                <h3 className="text-lg font-bold">How is SecondBrain different from other note-taking apps?</h3>
                <p className="mt-2 text-muted-foreground">
                  Unlike traditional note-taking apps, SecondBrain focuses on connections between ideas. Our
                  bidirectional linking and knowledge graph help you see relationships between your notes that you might
                  otherwise miss.
                </p>
              </div>
              <div className="rounded-lg border p-6 shadow-sm">
                <h3 className="text-lg font-bold">Can I import my notes from other apps?</h3>
                <p className="mt-2 text-muted-foreground">
                  Yes! SecondBrain supports importing from Evernote, Notion, Roam Research, and plain markdown files.
                  Our import tool preserves your formatting and helps you set up links between your existing notes.
                </p>
              </div>
              <div className="rounded-lg border p-6 shadow-sm">
                <h3 className="text-lg font-bold">Is my data secure?</h3>
                <p className="mt-2 text-muted-foreground">
                  Absolutely. We use end-to-end encryption to protect your notes. Your data is stored securely in the
                  cloud and is never shared with third parties. You can also export your data at any time.
                </p>
              </div>
              <div className="rounded-lg border p-6 shadow-sm">
                <h3 className="text-lg font-bold">Can I use SecondBrain offline?</h3>
                <p className="mt-2 text-muted-foreground">
                  Yes, our desktop and mobile apps support offline mode. Your changes will sync automatically when
                  you're back online.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Ready to Build Your Second Brain?
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Join thousands of thinkers, creators, and knowledge workers who are transforming how they capture and
                  connect ideas.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <a
                  href="/signup"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-indigo-800 text-zinc-50"
                >
                  Start Your Free Trial
                </a>
                <a
                  href="/demo"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  Schedule a Demo
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
  

    <footer className="w-full border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 px-10 md:h-24 md:flex-row">
        <div className="flex items-center gap-2">
          <Brain className="h-5 w-5 text-primary" />
          <p className="text-sm font-medium">© {new Date().getFullYear()} SecondBrain. All rights reserved.</p>
        </div>
        <nav className="flex gap-4 sm:gap-6">
          <a href="#" className="text-xs hover:underline underline-offset-4">Terms</a>
          <a href="#" className="text-xs hover:underline underline-offset-4">Privacy</a>
          <a href="#" className="text-xs hover:underline underline-offset-4">Cookies</a>
          
          {/* Adding Social Media Icons */}
          <a href="https://github.com/ronakmaheshwari" target="_blank" className="text-xs hover:underline underline-offset-4">
            <Github className="h-5 w-5 text-primary" />
          </a>
          <a href="https://x.com/0xronak077" target="_blank" className="text-xs hover:underline underline-offset-4">
            <TwitterIcon className="h-5 w-5 text-primary" />
          </a>
          <a href="mailto:ronakmaheshwari@gmail.com" target="_blank" className="text-xs hover:underline underline-offset-4">
            <Mail className="h-5 w-5 text-primary" />
          </a>
        </nav>
      </div>
    </footer>

    </div>
  )
}
