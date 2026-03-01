import { SpotlightText } from '@/components/spotlight-text';

export default function PrivacyPolicyPage() {
  const lastUpdatedDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

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

        {/* Hero Section */}
        <div className="max-w-4xl mb-24">
          <div className="font-code text-xs font-bold tracking-widest text-muted-foreground mb-8 uppercase">
                // Legal / Privacy Policy
          </div>
          <SpotlightText spotlightSize={350}>
            <h1 className="font-headline text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7rem] 2xl:text-[9rem] font-normal tracking-tighter uppercase leading-[0.85] text-foreground mb-8 xl:whitespace-nowrap">
              DATA <span className="text-zinc-500">POLICY.</span>
            </h1>
          </SpotlightText>
          <p className="max-w-3xl text-xl md:text-3xl font-light text-muted-foreground leading-relaxed pt-8 border-t border-border">
            Absolute transparency. Here originates the protocol regarding personal identifiability and open atmospheric data flow.
          </p>
          <div className="font-code text-sm uppercase tracking-widest bg-foreground text-background px-4 py-2 inline-block mt-8">
            Rev. {lastUpdatedDate}
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl grid gap-12">
          <Section title="01. Initialization">
            <p>
              This document dictates the operational handling of data ("we,"
              "us," or "our") when subjects utilize our web applications,
              hardware sensing modules ("Sensors"), and other digital systems
              (collectively, the "Services"). By interfacing with our systems,
              you conform to the data ingestion protocols detailed herein.
            </p>
          </Section>

          <Section title="02. Open Architecture">
            <p>
              AirCal operates a radially transparent public data lattice. By configuring
              a Sensor, you authorize the telemetry of environmental data to the public record.
            </p>
            <p>
              Telemetry Payload entails:
            </p>
            <ul className="list-inside list-disc space-y-2 text-foreground font-code text-sm uppercase tracking-widest bg-zinc-100 dark:bg-zinc-900 p-6 border border-border">
              <li>
                <strong>Atmos:</strong> PM1.0, PM2.5, PM10, Temp, Humidity.
              </li>
              <li>
                <strong>Geo:</strong> Lat/Lng coordinates (obfuscated).
              </li>
            </ul>
            <p>
              <strong>Privacy Protocol:</strong> Absolute node locations are obfuscated via radial fuzzing. Pinpoint residential locations are never exposed to the public API endpoint, maintaining scientific validity while protecting the perimeter.
            </p>
          </Section>

          <Section title="03. Collection Vectors">
            <h3 className="font-headline text-2xl uppercase tracking-tighter text-foreground mt-8">
              A. Subject Input
            </h3>
            <p>
              <strong>Account Auth:</strong> Alias, email vector, and cryptographically hashed keys. Restricted to system ops.
            </p>
            <h3 className="font-headline text-2xl uppercase tracking-tighter text-foreground mt-8">
              B. Hardware Telemetry
            </h3>
            <ul className="list-inside list-disc space-y-2 text-foreground font-code text-sm uppercase tracking-widest bg-zinc-100 dark:bg-zinc-900 p-6 border border-border">
              <li>
                <strong>Sensors:</strong> High-frequency PM, temp, and humidity polling.
              </li>
              <li>
                <strong>Network:</strong> SSID strings, dynamic IPs, machine ID, calibration errors.
              </li>
            </ul>
            <h3 className="font-headline text-2xl uppercase tracking-tighter text-foreground mt-8">
              C. Passive Monitoring
            </h3>
            <p>
              <strong>Session Data:</strong> Cookie strings, access logs, UI interaction paths.
            </p>
          </Section>

          <Section title="04. Utilization">
            <p>Data payload is utilized strictly for system functions:</p>
            <ul className="list-inside list-decimal space-y-2">
              <li>To construct the global verification map.</li>
              <li>To train onboard algorithmic compensation networks.</li>
              <li>To transmit mission-critical diagnostic alerts.</li>
            </ul>
          </Section>

          <Section title="05. Data Persistence">
            <p>
              Identity data persists during active account status. Upon termination, identity vectors are wiped. However, historical atmospheric telemetry, scrubbed of origin markers, is permanently integrated into the global dataset.
            </p>
          </Section>

          <Section title="06. Transmission Desk">
            <p>
              For legal and privacy inquiries, route communications to:
              <a
                href="mailto:privacy@aircal.com"
                className="block mt-4 font-code text-sm bg-foreground text-background uppercase tracking-widest font-bold px-6 py-4 w-fit hover:opacity-80 transition-opacity"
              >
                privacy@aircal.com
              </a>
            </p>
          </Section>
        </div>
      </div>
    </div>
  );
}
