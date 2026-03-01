'use client';

import { useState, useEffect } from 'react';
import { SpotlightText } from '@/components/spotlight-text';

export default function TermsAndConditionsPage() {
  const [lastUpdatedDate, setLastUpdatedDate] = useState('');

  useEffect(() => {
    setLastUpdatedDate(new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }));
  }, []);

  const Section = ({
    title,
    children,
  }: {
    title: string;
    children: React.ReactNode;
  }) => (
    <section className="space-y-6 pt-12 border-t border-border">
      <h2 className="font-headline text-3xl md:text-5xl uppercase tracking-tighter">
        {title}
      </h2>
      <div className="space-y-6 text-xl font-light text-muted-foreground leading-relaxed">
        {children}
      </div>
    </section>
  );

  return (
    <div className="bg-background text-foreground py-24 md:py-40 selection:bg-foreground selection:text-background min-h-screen">
      <div className="container mx-auto px-4 md:px-6">

        <div className="max-w-4xl mb-24">
          <div className="font-code text-xs font-bold tracking-widest text-muted-foreground mb-8 uppercase">
                // Legal / General Terms
          </div>
          <SpotlightText spotlightSize={350}>
            <h1 className="font-headline text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7rem] 2xl:text-[9rem] font-normal tracking-tighter uppercase leading-[0.85] text-foreground mb-8 xl:whitespace-nowrap">
              TERMS <span className="text-zinc-500">OF OPS.</span>
            </h1>
          </SpotlightText>
          <p className="max-w-3xl text-xl md:text-3xl font-light text-muted-foreground leading-relaxed pt-8 border-t border-border">
            The operational framework governing your interaction with the AirCal sensor grid and public data feeds.
          </p>
          <div className="font-code text-sm uppercase tracking-widest bg-foreground text-background px-4 py-2 inline-block mt-8">
            Rev. {lastUpdatedDate}
          </div>
        </div>

        <div className="max-w-4xl grid gap-12">
          <Section title="01. Binding Matrix">
            <p>
              By accessing the node framework, authorizing a hardware sensor, or interacting with the data stream, you accept the systemic parameters defined here. Access is revoked if terms are rejected.
            </p>
          </Section>

          <Section title="02. Core Licensing">
            <h3 className="font-headline text-xl uppercase tracking-widest text-foreground mt-8">
              Hardware
            </h3>
            <p>
              Sensing components are distributed under CERN-OHL. AirCal assumes zero liability for custom modifications or unauthorized assembly variants.
            </p>
            <h3 className="font-headline text-xl uppercase tracking-widest text-foreground mt-8">
              Software & Data
            </h3>
            <p>
              The aggregate public stream is provided via CC BY 4.0. You are permitted to integrate this data commercially, provided attribution is structurally visible.
            </p>
          </Section>

          <Section title="03. Acceptable Telemetry">
            <p>
              Malicious injection into the AirCal grid is heavily restricted. Submissions must be raw, unmanipulated laser-scattering outputs originating from verified node identities.
            </p>
            <ul className="list-inside list-disc space-y-2 text-foreground font-code text-sm tracking-widest bg-zinc-100 dark:bg-zinc-900 p-6 border border-border">
              <li>NO API SCRAPING BEYOND RATE LIMITS.</li>
              <li>NO DATA SPOOFING OR PAYLOAD ALTERATION.</li>
              <li>NO REVERSE ENGINEERING OF ALGORITHMIC COMPENSATION ARTIFACTS.</li>
            </ul>
          </Section>

          <Section title="04. Disclaimers">
            <p className="font-code uppercase font-bold text-xs tracking-widest text-foreground bg-zinc-200 dark:bg-zinc-800 p-4">
              Data is statistical. Sensor drift occurs. The network is not a substitute for critical health or government emergency warning systems. Liability for exposure decisions rests entirely on the subject.
            </p>
          </Section>

          <Section title="05. Transmission Desk">
            <p>
              For legal inquiries:
              <a
                href="mailto:legal@aircal.com"
                className="block mt-4 font-code text-sm bg-foreground text-background uppercase tracking-widest font-bold px-6 py-4 w-fit hover:opacity-80 transition-opacity"
              >
                legal@aircal.com
              </a>
            </p>
          </Section>
        </div>
      </div>
    </div>
  );
}
