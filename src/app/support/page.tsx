'use client';

import Link from 'next/link';
import {
  MessageCircle,
  HelpCircle,
  Mail,
  FlaskConical,
  ArrowRight
} from 'lucide-react';

import { SpotlightText } from '@/components/spotlight-text';

const supportCategories = [
  {
    icon: <HelpCircle className="h-6 w-6" />,
    title: 'Our projects',
    description: 'Learn about AirCalibre projects, including GoodOne.',
    href: '#faqs',
  },
  {
    icon: <MessageCircle className="h-6 w-6" />,
    title: 'Share feedback',
    description: 'Tell us which environments and questions matter most to you.',
    href: '#contact',
  },
  {
    icon: <FlaskConical className="h-6 w-6" />,
    title: 'Measurement',
    description: 'Learn about the design, validation work, and known limitations.',
    href: '/mitigate',
  },
  {
    icon: <MessageCircle className="h-6 w-6" />,
    title: 'Community',
    description: 'Share ideas and explore ways to contribute to open environmental tools.',
    href: '/solve',
  },
];

const faqItems = [
  {
    question: 'WHAT IS AIRCALIBRE?',
    answer: 'AirCalibre is an open-source initiative bringing together practical tools, shared knowledge, and community collaboration for environmental understanding.',
  },
  {
    question: 'WHAT IS GOODONE?',
    answer: 'GoodOne is one AirCalibre project: a portable personal air-quality monitor exploring how to understand the air in everyday environments.',
  },
  {
    question: 'WHAT IS IT DESIGNED TO MEASURE?',
    answer: 'The current design includes PM2.5, PM10, CO2, VOC, temperature, and humidity. Final sensor integration and performance still need validation.',
  },
  {
    question: 'IS GOODONE A REFERENCE-GRADE OR MEDICAL DEVICE?',
    answer: 'No. GoodOne is an environmental monitoring project, not a medical device or a substitute for regulatory monitoring. Sensor performance is still being benchmarked, so no reference-grade accuracy claim is being made.',
  },
  {
    question: 'HOW IS IT DIFFERENT FROM A CITY AQI APP?',
    answer: 'A city AQI is useful for broad regional context. GoodOne is designed to measure local conditions around you, such as in a room, vehicle, or commute, and build a more personal exposure history.',
  },
  {
    question: 'HOW CAN I GET INVOLVED?',
    answer: 'We welcome feedback, questions, research ideas, and contributions from people interested in open-source environmental tools. Reach out to start a conversation.',
  },
];

export default function SupportPage() {
  return (
    <div className="flex flex-col bg-background text-foreground selection:bg-foreground selection:text-background min-h-screen">

      {/* HEADER SECTION */}
      <section className="premium-surface relative w-full flex flex-col justify-end overflow-hidden border-b border-white/10 pb-12 pt-32 px-4 md:px-6">
        <div className="container mx-auto max-w-7xl">
          <SpotlightText spotlightSize={350} className="w-full">
            <h1 className="w-full text-[clamp(2.75rem,6vw,5.5rem)] font-headline font-normal tracking-tighter uppercase leading-[0.9] text-foreground mb-12 text-balance break-words">
              AirCalibre <span className="text-muted-foreground italic font-serif lowercase tracking-normal">and</span> community.
            </h1>
          </SpotlightText>
          <div className="max-w-2xl border-l-4 border-foreground pl-6">
            <p className="text-xl md:text-2xl font-light text-muted-foreground leading-relaxed">
              Explore our open-source projects, ask a question, or share what you would like to see the community build.
            </p>
          </div>
        </div>
      </section>

      {/* CATEGORIES MATRIX */}
      <section id="categories" className="py-24 border-y border-border">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {supportCategories.map((category) => (
              <Link href={category.href} key={category.title} className="group relative bg-background p-8 md:p-12 hover:-translate-y-1 hover:bg-zinc-100 hover:shadow-[0_18px_45px_rgba(0,0,0,0.2)] dark:hover:bg-zinc-900 transition-all duration-500 flex flex-col justify-between min-h-[300px]">
                <div className="text-muted-foreground group-hover:text-foreground transition-colors">
                  {category.icon}
                </div>
                <div className="mt-auto">
                  <h3 className="font-headline text-2xl uppercase tracking-tighter mb-4">{category.title}</h3>
                  <p className="font-light text-muted-foreground leading-relaxed">{category.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="py-24 md:py-40 bg-foreground text-background">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-8 items-start">
            <div className="lg:col-span-5 sticky top-32">
              <h2 className="font-headline text-4xl sm:text-6xl md:text-7xl tracking-tighter uppercase leading-none mb-8">
                Project <br /> <span className="text-zinc-500">Questions.</span>
              </h2>
            </div>
            <div className="lg:col-span-7 border-t border-zinc-800">
              {faqItems.map((item, index) => (
                <div key={index} className="group border-b border-zinc-800 py-8 transition-colors duration-300 hover:bg-white/[0.025] lg:py-12">
                  <div className="flex gap-6 items-start">
                    <div className="font-code text-xs text-zinc-500 mt-2">
                      {(index + 1).toString().padStart(2, '0')}
                    </div>
                    <div>
                      <h3 className="font-headline text-2xl md:text-3xl uppercase tracking-tighter mb-6">{item.question}</h3>
                      <p className="font-light text-zinc-400 text-lg md:text-xl leading-relaxed max-w-2xl">{item.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT DIRECT */}
      <section id="contact" className="py-24 md:py-40 bg-background border-t border-border">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-start">

            <div className="space-y-16">
              <div>
                <h2 className="font-headline text-4xl sm:text-5xl md:text-7xl tracking-tighter uppercase leading-none mb-6">
                  Join the <br /> <span className="text-muted-foreground">conversation.</span>
                </h2>
                <p className="text-xl font-light text-muted-foreground max-w-md">
                  We welcome questions, ideas, and feedback from people interested in open-source tools and community-led environmental understanding.
                </p>
              </div>

              <div className="space-y-8 font-code uppercase tracking-widest text-sm border-t border-border pt-8">
                <div className="flex gap-4 items-center">
                  <Mail className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <span className="block text-muted-foreground text-xs mb-1">Product questions and feedback</span>
                    <a href="mailto:support@aircal.com" className="hover:text-muted-foreground transition-colors">support@aircal.com</a>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <FlaskConical className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <span className="block text-muted-foreground text-xs mb-1">Research and collaboration</span>
                    <a href="mailto:research@aircal.com" className="hover:text-muted-foreground transition-colors">research@aircal.com</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-border p-8 md:p-12 bg-zinc-50 dark:bg-zinc-950 flex flex-col justify-between min-h-72">
              <div>
                <p className="font-code text-xs font-bold tracking-widest text-muted-foreground mb-6 uppercase">
                  Open-source projects
                </p>
                <h3 className="font-headline text-3xl md:text-4xl uppercase tracking-tighter mb-6">
                  Help shape what comes next.
                </h3>
                <p className="font-light text-muted-foreground mb-10 max-w-xl">
                  GoodOne is one project in a wider effort. Get in touch to share your interests, questions, or ideas for AirCalibre and its community.
                </p>
              </div>
              <Link
                href="mailto:support@aircal.com"
                className="group inline-flex items-center gap-3 font-code text-sm uppercase tracking-widest font-bold"
              >
                Email AirCalibre <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
