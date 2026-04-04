'use client';

import { useMemo, useState } from 'react';

export default function JungbloomSite() {
  const frictionTypes = useMemo(
    () => [
      {
        key: 'attention',
        title: 'attention friction',
        description:
          'the student moves too fast, misses key details, or loses stability on longer tasks.',
        signals: ['fast wrong answers', 'high error rate', 'performance drop on longer tasks'],
        intervention: 'shorter questions, slow mode, and first-step checks.',
      },
      {
        key: 'knowledge',
        title: 'knowledge friction',
        description:
          'the issue is not attention but missing knowledge or weak foundations.',
        signals: ['slow and wrong answers', 'errors on basic questions', 'repeated conceptual failure'],
        intervention: 'mini explanation, worked example, and targeted repetition.',
      },
      {
        key: 'strategy',
        title: 'strategy friction',
        description:
          'the student does not know how to begin, even if the knowledge may exist.',
        signals: ['long start delay', 'progress only after hints', 'weak first-step choices'],
        intervention: 'first-step guidance and solution skeletons.',
      },
      {
        key: 'language',
        title: 'question-language friction',
        description:
          'the student misunderstands what the question is asking.',
        signals: ['wrong task type', 'instruction confusion', 'command interpretation errors'],
        intervention: 'question intent breakdown and command analysis.',
      },
    ],
    []
  );

  const layers = [
    {
      title: 'behavior tracking',
      body: 'correctness, response time, start delay, skip behavior, abandonment, retries, and answer patterns are captured as observable learning behavior.',
    },
    {
      title: 'signal extraction',
      body: 'raw actions are converted into interpretable signals such as impulsive answering, hesitation, repeated misconception, and weak question interpretation.',
    },
    {
      title: 'friction diagnosis',
      body: 'the system scores likely friction across attention, knowledge, strategy, and question-language dimensions.',
    },
    {
      title: 'decision engine',
      body: 'the dominant friction is identified and matched with the most useful next intervention.',
    },
    {
      title: 'adaptive question engine',
      body: 'the next ai-generated question changes in support level, structure, difficulty, or explanation depth based on the diagnosed friction.',
    },
    {
      title: 'explanation layer',
      body: 'the student sees what was noticed, why the system thinks it happened, and why the next question changed.',
    },
  ];

  const faqs = [
    {
      q: 'is this just another ai tutor?',
      a: 'no. jungbloom is not just answering questions. it diagnoses where learning breaks down and adjusts the next question accordingly.',
    },
    {
      q: 'why ai-based questions?',
      a: 'because static content does not adapt fast enough. ai-generated questions let the system target the exact friction the student is showing.',
    },
    {
      q: 'how does this reduce teacher workload?',
      a: 'teachers do not need to manually prepare every variation of practice. the system generates, adapts, and explains the next task automatically.',
    },
    {
      q: 'what happens with uploaded pdfs later?',
      a: 'in later versions, uploaded pdf questions can be used as structured learning material so the system learns better question patterns and produces stronger question generation.',
    },
  ];

  const [selectedFriction, setSelectedFriction] = useState(frictionTypes[2]);
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <div className="sticky top-0 z-50 border-b border-neutral-900/80 bg-neutral-950/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10 lg:px-12">
          <div>
            <p className="text-xl font-semibold tracking-tight">jungbloom</p>
            <p className="text-xs text-neutral-500">adaptive learning diagnosis and ai question generation</p>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-neutral-300 md:flex">
            <a href="#problem" className="hover:text-white">problem</a>
            <a href="#ai-questions" className="hover:text-white">ai questions</a>
            <a href="#architecture" className="hover:text-white">architecture</a>
            <a href="#frictions" className="hover:text-white">frictions</a>
            <a href="#faq" className="hover:text-white">faq</a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="rounded-2xl border border-neutral-800 px-4 py-2 text-sm text-neutral-200 transition hover:border-neutral-600">
              request demo
            </button>
            <button className="rounded-2xl bg-white px-4 py-2 text-sm font-medium text-black transition hover:opacity-90">
              contact
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-8 md:px-10 lg:px-12">
        <section className="grid gap-8 pb-10 pt-10 lg:grid-cols-[1.12fr_0.88fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-neutral-800 px-3 py-1 text-xs uppercase tracking-[0.22em] text-neutral-400">
              adaptive diagnosis + ai-based question generation
            </p>

            <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl md:leading-[1.02]">
              jungbloom helps students move forward with the right next question
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-300 md:text-lg">
              jungbloom identifies why a student is getting stuck, then generates the next question
              accordingly. the goal is not just practice. the goal is better practice with less teacher workload.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#ai-questions"
                className="rounded-2xl bg-white px-5 py-3 font-medium text-black transition hover:opacity-90"
              >
                see ai question flow
              </a>
              <a
                href="#architecture"
                className="rounded-2xl border border-neutral-800 px-5 py-3 text-neutral-200 transition hover:border-neutral-600"
              >
                read system logic
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-neutral-800 bg-neutral-900 p-5">
                <p className="text-sm text-neutral-400">core idea</p>
                <p className="mt-2 text-lg font-semibold">failure has different causes</p>
              </div>
              <div className="rounded-3xl border border-neutral-800 bg-neutral-900 p-5">
                <p className="text-sm text-neutral-400">product logic</p>
                <p className="mt-2 text-lg font-semibold">diagnose first, generate next</p>
              </div>
              <div className="rounded-3xl border border-neutral-800 bg-neutral-900 p-5">
                <p className="text-sm text-neutral-400">teacher value</p>
                <p className="mt-2 text-lg font-semibold">less manual prep, more targeted practice</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-neutral-800 bg-gradient-to-br from-neutral-900 to-neutral-950 p-6 shadow-2xl shadow-black/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-400">live concept preview</p>
                <p className="mt-1 text-xl font-semibold">ai-based question adaptation</p>
              </div>
              <div className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">
                teacher workload reduction
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-5">
                <p className="text-sm text-neutral-400">student state detected</p>
                <p className="mt-2 text-2xl font-semibold">strategy friction</p>
                <p className="mt-3 leading-7 text-neutral-300">
                  the student is not fully blocked by knowledge. the real issue is how to start.
                </p>
              </div>

              <div className="rounded-3xl border border-neutral-800 bg-neutral-900 p-5">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm text-neutral-400">previous question</p>
                  <span className="rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-xs text-red-300">
                    struggled
                  </span>
                </div>
                <p className="mt-3 text-lg leading-8 text-neutral-100">
                  solve: 2x² - 7x + 3 = 0 and explain your method
                </p>
              </div>

              <div className="flex justify-center">
                <div className="rounded-full border border-neutral-800 bg-neutral-900 px-4 py-2 text-sm text-neutral-300">
                  next question generated by jungbloom
                </div>
              </div>

              <div className="rounded-3xl border border-white bg-white p-5 text-black">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm text-neutral-500">adapted ai question</p>
                  <span className="rounded-full bg-black px-3 py-1 text-xs text-white">
                    first-step scaffold
                  </span>
                </div>
                <p className="mt-3 text-lg leading-8">
                  before solving the full equation, choose the best first method:
                  factoring, completing the square, or quadratic formula. then write only the first step.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-4">
                  <p className="text-sm text-neutral-400">what we noticed</p>
                  <p className="mt-2 text-base font-medium">
                    long hesitation and failed first approach
                  </p>
                </div>
                <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-4">
                  <p className="text-sm text-neutral-400">why it matters</p>
                  <p className="mt-2 text-base font-medium">
                    the issue is start structure, not full concept absence
                  </p>
                </div>
                <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-4">
                  <p className="text-sm text-neutral-400">what changed</p>
                  <p className="mt-2 text-base font-medium">
                    the next task narrows method choice and reduces load
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="problem" className="mt-24 grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-neutral-800 bg-neutral-900 p-8">
            <p className="text-sm uppercase tracking-[0.18em] text-neutral-400">problem</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              schools and teachers do not have time to personalize practice at scale
            </h2>
            <ul className="mt-6 space-y-4 text-base leading-8 text-neutral-300">
              <li>most systems only show correct versus incorrect.</li>
              <li>teachers cannot prepare custom follow-up questions for every student.</li>
              <li>students repeat mistakes without understanding the real cause.</li>
              <li>the same wrong answer can come from different types of friction.</li>
              <li>static worksheets do not adapt in real time.</li>
            </ul>
          </div>

          <div className="rounded-[2rem] border border-neutral-800 bg-neutral-900 p-8">
            <p className="text-sm uppercase tracking-[0.18em] text-neutral-400">solution</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              diagnose the friction and generate the right next question automatically
            </h2>
            <p className="mt-6 text-base leading-8 text-neutral-300">
              jungbloom analyzes how the student interacts with questions, detects the most likely learning friction,
              and creates the next ai-based question accordingly. this reduces manual assignment design while improving relevance.
            </p>
            <div className="mt-8 rounded-3xl border border-neutral-800 bg-neutral-950 p-5">
              <p className="text-sm text-neutral-400">critical insight</p>
              <p className="mt-2 text-xl font-semibold">
                better learning does not start with more content. it starts with better next steps.
              </p>
            </div>
          </div>
        </section>

        <section id="ai-questions" className="mt-24">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-neutral-400">ai-based questions</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              assignments that adapt instead of repeating the same structure
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <div className="rounded-[2rem] border border-neutral-800 bg-neutral-900 p-7">
              <p className="text-sm text-neutral-400">for students</p>
              <h3 className="mt-3 text-2xl font-semibold">more relevant practice</h3>
              <p className="mt-4 leading-8 text-neutral-300">
                instead of getting another random question, the student gets a question shaped around the exact place they are breaking down.
              </p>
            </div>

            <div className="rounded-[2rem] border border-neutral-800 bg-neutral-900 p-7">
              <p className="text-sm text-neutral-400">for teachers</p>
              <h3 className="mt-3 text-2xl font-semibold">less manual workload</h3>
              <p className="mt-4 leading-8 text-neutral-300">
                teachers do not need to prepare endless differentiated homework sets. the system generates the next layer of practice automatically.
              </p>
            </div>

            <div className="rounded-[2rem] border border-neutral-800 bg-neutral-900 p-7">
              <p className="text-sm text-neutral-400">for the model</p>
              <h3 className="mt-3 text-2xl font-semibold">better future generation</h3>
              <p className="mt-4 leading-8 text-neutral-300">
                over time, structured question sources such as uploaded pdfs can improve the model’s understanding of question patterns and quality.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-neutral-800 bg-neutral-900 p-8">
              <p className="text-sm uppercase tracking-[0.16em] text-neutral-400">current phase</p>
              <h3 className="mt-3 text-3xl font-semibold">ai-generated assignments</h3>
              <ul className="mt-6 space-y-4 text-base leading-8 text-neutral-300">
                <li>the system creates targeted follow-up questions.</li>
                <li>question style changes based on detected friction.</li>
                <li>difficulty and structure can adapt in real time.</li>
                <li>the output is not only a question but a reason for why that question was chosen.</li>
              </ul>
            </div>

            <div className="rounded-[2rem] border border-neutral-800 bg-neutral-900 p-8">
              <p className="text-sm uppercase tracking-[0.16em] text-neutral-400">future phase</p>
              <h3 className="mt-3 text-3xl font-semibold">pdf-informed learning loop</h3>
              <ul className="mt-6 space-y-4 text-base leading-8 text-neutral-300">
                <li>teachers can upload question documents and worksheets.</li>
                <li>the system can learn from real curriculum-aligned question structures.</li>
                <li>this improves how future questions are generated.</li>
                <li>the product becomes stronger as its structured learning material grows.</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="architecture" className="mt-24">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-neutral-400">system architecture</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              from behavior signal to generated next question
            </h2>
          </div>

          <div className="mt-10 space-y-4">
            {layers.map((layer, index) => (
              <div
                key={layer.title}
                className="grid gap-4 rounded-[2rem] border border-neutral-800 bg-neutral-900 p-6 md:grid-cols-[110px_1fr]"
              >
                <div className="flex items-start">
                  <div className="rounded-2xl border border-neutral-700 bg-neutral-950 px-4 py-3 text-sm text-neutral-300">
                    layer {index + 1}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">{layer.title}</h3>
                  <p className="mt-3 max-w-4xl leading-8 text-neutral-300">{layer.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="frictions" className="mt-24">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-neutral-400">friction types</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              not every failure should trigger the same next question
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="space-y-4">
              {frictionTypes.map((item) => {
                const isActive = selectedFriction.key === item.key;

                return (
                  <button
                    key={item.key}
                    onClick={() => setSelectedFriction(item)}
                    className={`w-full rounded-[2rem] border p-6 text-left transition ${
                      isActive
                        ? 'border-white bg-white text-black'
                        : 'border-neutral-800 bg-neutral-900 text-white hover:border-neutral-600'
                    }`}
                  >
                    <p className={`text-sm ${isActive ? 'text-neutral-600' : 'text-neutral-400'}`}>
                      friction category
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold">{item.title}</h3>
                    <p className={`mt-3 leading-7 ${isActive ? 'text-neutral-700' : 'text-neutral-300'}`}>
                      {item.description}
                    </p>
                  </button>
                );
              })}
            </div>

            <div className="rounded-[2rem] border border-neutral-800 bg-neutral-900 p-7">
              <p className="text-sm uppercase tracking-[0.16em] text-neutral-400">selected friction</p>
              <h3 className="mt-3 text-3xl font-semibold">{selectedFriction.title}</h3>
              <p className="mt-4 leading-8 text-neutral-300">{selectedFriction.description}</p>

              <div className="mt-8">
                <p className="text-sm font-medium text-neutral-400">signals</p>
                <ul className="mt-3 space-y-3 text-neutral-200">
                  {selectedFriction.signals.map((signal) => (
                    <li key={signal} className="rounded-2xl border border-neutral-800 bg-neutral-950 px-4 py-3">
                      {signal}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 rounded-2xl border border-neutral-800 bg-neutral-950 p-5">
                <p className="text-sm font-medium text-neutral-400">intervention logic</p>
                <p className="mt-2 text-lg text-neutral-100">{selectedFriction.intervention}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-24 grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-neutral-800 bg-neutral-900 p-8">
            <p className="text-sm uppercase tracking-[0.18em] text-neutral-400">mvp flow</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              simple enough to test, strong enough to matter
            </h2>
            <ol className="mt-6 space-y-4 text-base leading-8 text-neutral-300">
              <li>1. the student starts a task session.</li>
              <li>2. the system observes timing, errors, retries, and interaction patterns.</li>
              <li>3. jungbloom diagnoses the most likely friction.</li>
              <li>4. the next ai-based question is generated accordingly.</li>
              <li>5. the student gets a reasoned next step instead of generic repetition.</li>
            </ol>
          </div>

          <div className="rounded-[2rem] border border-neutral-800 bg-neutral-900 p-8">
            <p className="text-sm uppercase tracking-[0.18em] text-neutral-400">success metrics</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              what success should look like
            </h2>
            <ul className="mt-6 space-y-4 text-base leading-8 text-neutral-300">
              <li>same-error repeat rate goes down.</li>
              <li>task completion goes up.</li>
              <li>student hesitation before first step goes down.</li>
              <li>teachers spend less time preparing differentiated practice.</li>
              <li>students return because the generated questions feel more useful.</li>
            </ul>
          </div>
        </section>

        <section className="mt-24 grid gap-8 lg:grid-cols-3">
          <div className="rounded-[2rem] border border-neutral-800 bg-neutral-900 p-8 lg:col-span-2">
            <p className="text-sm uppercase tracking-[0.18em] text-neutral-400">data and explainability</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              minimal input, clearer output
            </h2>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div>
                <p className="text-base font-medium text-white">used now</p>
                <ul className="mt-3 space-y-2 text-neutral-300">
                  <li>• answer behavior</li>
                  <li>• time-based signals</li>
                  <li>• retry and abandonment patterns</li>
                  <li>• task interaction data</li>
                </ul>
              </div>

              <div>
                <p className="text-base font-medium text-white">not required</p>
                <ul className="mt-3 space-y-2 text-neutral-300">
                  <li>• camera</li>
                  <li>• microphone</li>
                  <li>• location</li>
                  <li>• personal messages</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 rounded-3xl border border-neutral-800 bg-neutral-950 p-5">
              <p className="text-lg font-semibold">
                jungbloom should not be a black box that spits out random tasks. it should show why the next question changed.
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-neutral-800 bg-neutral-900 p-8">
            <p className="text-sm uppercase tracking-[0.18em] text-neutral-400">business</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">
              scalable from day one
            </h2>
            <ul className="mt-6 space-y-4 text-neutral-300">
              <li>school licensing</li>
              <li>teacher tools</li>
              <li>subscription model</li>
              <li>ai assignment generation for classrooms and exam-prep learners</li>
            </ul>
          </div>
        </section>

        <section id="faq" className="mt-24">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-neutral-400">faq</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              the questions people will ask immediately
            </h2>
          </div>

          <div className="mt-10 space-y-4">
            {faqs.map((item, index) => {
              const open = openFaq === index;

              return (
                <div
                  key={item.q}
                  className="rounded-[2rem] border border-neutral-800 bg-neutral-900 p-6"
                >
                  <button
                    onClick={() => setOpenFaq(open ? -1 : index)}
                    className="flex w-full items-center justify-between gap-4 text-left"
                  >
                    <h3 className="text-xl font-semibold">{item.q}</h3>
                    <span className="text-2xl text-neutral-400">{open ? '−' : '+'}</span>
                  </button>

                  {open && (
                    <p className="mt-4 max-w-4xl leading-8 text-neutral-300">
                      {item.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        <section className="mt-24 rounded-[2rem] border border-neutral-800 bg-white px-8 py-10 text-black">
          <p className="text-sm uppercase tracking-[0.18em] text-neutral-600">final statement</p>
          <h2 className="mt-4 max-w-4xl text-3xl font-semibold tracking-tight md:text-5xl md:leading-[1.1]">
            jungbloom is not just generating more homework. it is generating the right next question for the right reason.
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            <button className="rounded-2xl bg-black px-5 py-3 font-medium text-white transition hover:opacity-90">
              request pilot access
            </button>
            <button className="rounded-2xl border border-neutral-300 px-5 py-3 text-black transition hover:bg-neutral-100">
              get in touch
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}