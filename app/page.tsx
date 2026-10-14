import Image from "next/image";
import { ArcadeIntro } from "@/components/arcade-intro";
import { ChapterNav } from "@/components/chapter-nav";
import { IdeaCycle } from "@/components/idea-cycle";
import { MovieCounter } from "@/components/movie-counter";
import { PhotoEssay } from "@/components/photo-essay";
import { InkDoodle, FlowSprite, RobotSprite } from "@/components/pixel-sprites";
import { ProjectStory } from "@/components/project-story";
import { SideQuests } from "@/components/side-quests";
import { chapters, fieldNotes, profile, skills, ventures } from "@/data/story";
import { projects } from "@/data/projects";

function Chapter({ number, eyebrow, title, children, id }: { number: string; eyebrow: string; title: string; children: React.ReactNode; id: string }) {
  return <section className="chapter" id={id}><header className="chapter-heading"><span>{number}</span><div><p>{eyebrow}</p><h2>{title}</h2></div></header>{children}<p className="page-number">RU · {number} / 06</p></section>;
}
function Reflection({ label, children }: { label: string; children: React.ReactNode }) {
  return <aside className="reflection"><InkDoodle kind="book"/><p className="pixel-label">{label}</p><blockquote>{children}</blockquote></aside>;
}

export default function Home() {
  return <>
    <ChapterNav items={chapters} />
    <main>
      <section className="cover" id="top">
        <div className="cover-copy">
          <p className="pixel-label hero-reveal">HI, I'M RUTHVIK</p>
          <h1 className="hero-reveal delay-one">Ruthvik Uttarala</h1>
          <p className="role hero-reveal delay-two">Software Engineer</p>
          <p className="lede hero-reveal delay-two">I build dependable backend systems, full-stack products, cloud infrastructure, and applied AI workflows.</p>
          <p className="stack-line hero-reveal delay-three">Python · TypeScript · React · Next.js · Flask · FastAPI · AWS · PostgreSQL · Kafka</p>
          <nav className="cover-links hero-reveal delay-three" aria-label="Primary links"><a href="#builds">Projects</a><a href="#production">Experience</a><a href="/resume.pdf">Résumé</a><a href="#contact">Contact</a></nav>
          <ArcadeIntro />
        </div>
        <figure className="portrait hero-reveal delay-two"><Image src="/ruthvik-headshot.jpg" alt="Portrait of Ruthvik Uttarala" fill priority sizes="(max-width: 760px) 88vw, 38vw" /><figcaption>Software engineer · Penn State computer science</figcaption></figure>
      </section>

      <section className="work-preview" aria-labelledby="proof-title">
        <header><p className="pixel-label">A QUICK LOOK AT THE WORK</p><h2 id="proof-title">I like building systems that hold up when things get messy.</h2></header>
        <div>
          <article><span>01</span><h3>Reliable backend workflows</h3><p>At OptimalHub, I worked on asynchronous PDF processing and idempotent parking-event handling, including retries, deduplication, and transaction locks.</p></article>
          <article><span>02</span><h3>Cloud and event-driven systems</h3><p>I’ve built with AWS Lambda, S3, DynamoDB, Kafka, Firebase, and Firestore across production document and operations workflows.</p></article>
          <article><span>03</span><h3>Applied AI with guardrails</h3><p>My projects pair AI models with typed validation, grounded actions, traceability, fallbacks, and tests instead of treating model output as trusted data.</p></article>
        </div>
        <a href="#builds">See selected projects</a>
      </section>

      <nav className="toc" aria-label="Book contents"><p className="pixel-label">TABLE OF CONTENTS</p>{chapters.map((item, index) => <a href={`#${item.id}`} key={item.id}><span>{String(index + 1).padStart(2,"0")}</span>{item.label.replace(/LEVEL \d+ · /,"")}<i/></a>)}</nav>

      <Chapter number="01" eyebrow="Origin story" title="It started with a robot." id="origin">
        <div className="story-vignette"><div className="prose"><p className="dropcap">I was born in Vizag, India, and my family moved to Hyderabad when I was one.</p><p>I was seven when I watched the Telugu version of <em>Robo</em> with my brother. He was terrified. I remember him crying when the robot started turning against the people around it.</p><p>I couldn’t stop watching.</p><p>I wasn’t interested in the destruction. I was stuck on one thought: someone imagined an intelligent machine and then figured out how to bring it to life on screen. I didn’t know what a path into technology looked like yet. I just wanted to understand how things like that could be built.</p></div><RobotSprite /></div>
        <Reflection label="REFLECTION · CURIOSITY">A movie made me want to build things. The curiosity stayed long after the credits.</Reflection>
        <MovieCounter />
      </Chapter>

      <Chapter number="02" eyebrow="Penn State" title="The mindset that stayed." id="penn-state">
        <div className="essay-grid"><div className="prose"><p>Penn State shaped me far beyond academics. The friendships and connections mattered, but so did a realization that changed how I see progress: consistent work can dramatically accelerate how quickly I improve.</p><p>I completed my B.S. in Computer Science in December 2025, earned the President Walker Award, AWS certifications in machine learning and AI, and a Product Innovation Entrepreneurship Certificate. PlantVillage introduced me to applied AI research; Happy Valley LaunchBox taught me to test ideas against reality.</p></div><aside className="margin-note">Consistency changed how I think about progress.</aside></div>
        <figure className="throne-spread"><div><Image src="/media/personal/lion-shrine-riding.jpg" alt="Ruthvik sitting on the Nittany Lion Shrine" fill sizes="(max-width:800px) 94vw, 62vw"/></div><figcaption><p className="pixel-label">MY THRONE</p><strong>To everyone else, it’s the Nittany Lion Shrine. To me, it’s a throne.</strong><span>When I sit there, I feel like I’m sitting on top of the world. It holds confidence, community, ambition, and the mindset Penn State gave me.</span></figcaption><InkDoodle kind="lion"/></figure>
        <section className="venture-section"><header><p className="pixel-label">THREE EXPERIMENTS</p><h3>Entrepreneurship as a way of learning.</h3></header><div>{ventures.map(venture => <article key={venture.name}><h4>{venture.name}</h4><p>{venture.text}</p></article>)}</div><IdeaCycle /></section>
        <Reflection label="REFLECTION · CONSISTENCY">Big leaps are usually a collection of small days taken seriously.</Reflection>
      </Chapter>

      <Chapter number="03" eyebrow="Selected builds" title="A few things I’ve built." id="builds">
        <div className="project-list">{projects.map((project, index) => <ProjectStory key={project.slug} project={project} reverse={index % 2 === 1} />)}</div>
      </Chapter>

      <Chapter number="04" eyebrow="Production" title="What I’ve learned building real systems." id="production">
        <div className="field-notes">{fieldNotes.map(note => <article key={note.title}><p className="pixel-label">FIELD NOTE</p><h3>{note.title}</h3><p>{note.text}</p><ul>{note.evidence.map(line => <li key={line}>{line}</li>)}</ul></article>)}</div>
        <div className="skills"><p className="pixel-label">WORKING TOOLKIT</p>{skills.map(group => <p key={group.name}><strong>{group.name}</strong> · {group.items.join(" · ")}</p>)}</div>
        <div className="flow-row"><FlowSprite/><blockquote>“The work gets interesting when the happy path ends.”</blockquote></div>
        <Reflection label="REFLECTION · RELIABILITY">A system earns trust when retries, failures, and strange states are treated as part of the design.</Reflection>
      </Chapter>

      <Chapter number="05" eyebrow="Life outside the terminal" title="When I’m not writing code." id="life">
        <PhotoEssay />
        <SideQuests />
        <aside className="sports-note"><InkDoodle kind="basketball"/><p>I stopped playing basketball in seventh grade, but the Knicks’ 2026 Finals run against the Spurs pulled me back in. Watching that comeback made me want to get on a court again and relearn the game.</p><a href="https://pr.nba.com/2026-nba-finals-game-notes/">NBA Finals game notes ↗</a></aside>
      </Chapter>

      <Chapter number="06" eyebrow="The long game" title="I’m thinking long term." id="long-game">
        <div className="long-game"><InkDoodle kind="circuit"/><div className="prose"><p>I think on a pretty long timeline.</p><p>Eventually, I want to build a company in quantum machine learning. My ambitions are huge. I’ve even said I want to become a trillionaire.</p><p>I also know a goal that large doesn’t let me skip the experience required to do serious work.</p><p>Right now, I want to work alongside engineers who’ve built real systems, whether that’s in big tech or a high-agency engineering company. I want to learn from them, take on difficult problems, get things wrong, and improve.</p><p><strong>For now, the work comes first.</strong></p></div><aside className="margin-note">I’m ambitious, but I’m focused on becoming a much better engineer one project at a time.</aside></div>
        <Reflection label="WHAT’S NEXT">I’m looking for the kind of team where I can contribute now and keep getting better.</Reflection>
      </Chapter>
    </main>
    <footer id="contact"><p className="pixel-label">BACK COVER · SAY HELLO</p><h2>Have a role in mind? Let’s talk.</h2><p className="contact-copy">I’m interested in software engineering roles where I can contribute to real systems and learn from strong engineers.</p><a className="email" href={profile.email}>uttaralaruthvik@gmail.com</a><div><a href={profile.github}>GitHub</a><a href={profile.linkedin}>LinkedIn</a><a href={profile.instagram}>Instagram</a><a href="/resume.pdf">Résumé</a></div><small>Designed and built by Ruthvik Uttarala · © 2026</small></footer>
  </>;
}
