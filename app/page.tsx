const scenes = [
  {
    title: "Desolate Morning",
    subtitle: "Torn clothes, empty stomach",
    description:
      "Outside the village tea stall, the puppy sat alone in tattered clothes. He watched villagers sip hot tea and nibble on biscuits, while his own stomach rumbled louder than the chatter around him.",
    quote:
      "“Please, just a bite?” he asked. The shopkeeper scolded and waved him away.",
    tone: "melancholy"
  },
  {
    title: "Dusty Tears",
    subtitle: "Hope fading on the roadside",
    description:
      "Rejected and weary, he settled on the dusty road. Tears carved little tracks down his muzzle as the crowd passed by, their footsteps lifting motes of dust that glimmered in the morning light.",
    quote:
      "The world felt wide and uncaring, until the rickshaw puller slowed his worn-out wheels.",
    tone: "somber"
  },
  {
    title: "An Offered Hand",
    subtitle: "A chance to earn with dignity",
    description:
      "The rickshaw puller knelt, eyes gentle. He offered work instead of pity: wash the rickshaw each dawn and earn a few rupees. Though weak, the puppy nodded. Work was a promise; perhaps also a path.",
    quote:
      "“Scrub with your heart, little one. Soon your belly will listen.”",
    tone: "hopeful"
  },
  {
    title: "First Earnings",
    subtitle: "Warm samosas, warmer gratitude",
    description:
      "Days of careful scrubbing turned into shining spokes and a proud smile. Coins jingled in his paw—his first savings. He hurried to the market, trading them for a packet of steaming samosas.",
    quote:
      "Under the banyan tree, every bite tasted like sunlight, crisp edges flaking into laughter.",
    tone: "joyous"
  },
  {
    title: "A Gift of Warmth",
    subtitle: "Blanket of kindness",
    description:
      "That evening, the rickshaw puller returned with a small woolen blanket, its fibers smelling faintly of cardamom and coal. The puppy wrapped himself tight, the night air suddenly gentle.",
    quote:
      "Gratitude hummed in his chest, a lullaby smoother than the breeze.",
    tone: "serene"
  }
];

const toneStyles: Record<
  (typeof scenes)[number]["tone"],
  { accent: string; bg: string }
> = {
  melancholy: {
    accent: "from-slate-900/80 via-slate-800/40 to-slate-950/90",
    bg: "bg-slate-900/50"
  },
  somber: {
    accent: "from-amber-900/70 via-stone-900/60 to-stone-950/90",
    bg: "bg-stone-900/40"
  },
  hopeful: {
    accent: "from-teal-800/70 via-emerald-700/60 to-teal-950/80",
    bg: "bg-teal-900/40"
  },
  joyous: {
    accent: "from-orange-600/70 via-amber-500/60 to-rose-600/80",
    bg: "bg-amber-700/40"
  },
  serene: {
    accent: "from-indigo-700/60 via-blue-800/60 to-indigo-950/90",
    bg: "bg-indigo-900/40"
  }
};

const SceneCard = ({
  scene,
  index
}: {
  scene: (typeof scenes)[number];
  index: number;
}) => {
  const { accent, bg } = toneStyles[scene.tone];

  return (
    <article className="relative rounded-3xl border border-white/10 overflow-hidden backdrop-blur-sm">
      <div
        className={`absolute inset-0 -z-10 bg-gradient-to-br ${accent} opacity-90`}
      />
      <div className="flex flex-col gap-6 p-8 md:p-12 text-white">
        <div className="flex items-center gap-3 text-sm uppercase tracking-[0.35em] text-white/70">
          <span className="h-[1px] w-12 bg-white/30" />
          Scene {index + 1}
        </div>
        <div className="space-y-3">
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
            {scene.title}
          </h2>
          <p className="text-lg md:text-xl text-white/80">{scene.subtitle}</p>
        </div>
        <p className="leading-relaxed text-base md:text-lg text-white/90">
          {scene.description}
        </p>
        <blockquote
          className={`relative isolate px-6 py-4 rounded-2xl border border-white/20 ${bg}`}
        >
          <div className="absolute -left-4 top-1/2 -translate-y-1/2 text-6xl text-white/30 font-serif">
            “
          </div>
          <p className="text-base md:text-lg italic text-white/90">
            {scene.quote}
          </p>
        </blockquote>
      </div>
    </article>
  );
};

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="fixed inset-0 -z-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#1f2937,_#0f172a_45%,_#020617_95%)]" />
        <div className="absolute inset-y-0 left-1/2 w-[80rem] -translate-x-1/2 bg-gradient-to-br from-amber-500/10 via-rose-600/5 to-indigo-700/10 blur-3xl" />
        <div className="absolute bottom-12 left-1/4 h-72 w-72 bg-teal-400/20 blur-[120px]" />
        <div className="absolute top-24 right-1/5 h-60 w-60 bg-rose-500/20 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-16 px-6 pb-24 pt-24 sm:px-10 md:px-16 lg:px-20">
        <header className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 backdrop-blur-lg">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            The Puppy, the Tea Stall, and a Blanket of Kindness
          </h1>
          <p className="mt-6 max-w-3xl text-lg md:text-xl text-white/80 leading-relaxed">
            Follow the journey of a poor, hungry puppy whose determination and
            the compassion of a rickshaw puller transform despair into
            gratitude. Every scene unfolds like a page in a picture book,
            bathed in the glow of hope.
          </p>
        </header>

        <section className="grid gap-10 md:grid-cols-2">
          {scenes.map((scene, index) => (
            <SceneCard key={scene.title} scene={scene} index={index} />
          ))}
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-10 backdrop-blur-lg text-white/90">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Where Remembrance Becomes Promise
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed">
            Wrapped in his new woolen blanket beneath the banyan tree, the puppy
            discovered more than warmth. He found belonging. He vowed to care
            for the rickshaw the way the rickshaw puller cared for him. In the
            hush of the village night, gratitude glowed brighter than the
            moonlight. Tomorrow would come, and with it, another chance to earn,
            to help, and to pass along the kindness he had received.
          </p>
        </section>
      </div>
    </main>
  );
}
