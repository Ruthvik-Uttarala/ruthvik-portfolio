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
    <ArcadeIntro />
    <ChapterNav items={chapters} />
    <main>
      <section className="cover" id="top">
        <div className="cover-copy">
          <p className="pixel-label hero-reveal">PLAYER 01 · RUTHVIK UTTARALA</p>
          <h1 className="hero-reveal delay-one">Ruthvik Uttarala</h1>
          <p className="role hero-reveal delay-two">Software Engineer</p>
          <p className="lede hero-reveal delay-two">I build dependable backend systems, full-stack products, cloud infrastructure, and applied AI workflows.</p>
          <p className="stack-line hero-reveal delay-three">Python · TypeScript · React · Next.js · Flask · FastAPI · AWS · PostgreSQL · Kafka</p>
          <nav className="cover-links hero-reveal delay-three" aria-label="Primary links"><a href="#builds">Projects</a><a href="#production">Experience</a><a href="/resume.pdf">Résumé</a><a href="#contact">Contact</a></nav>
        </div>
        <figure className="portrait hero-reveal delay-two"><Image src="/ruthvik-headshot.jpg" alt="Portrait of Ruthvik Uttarala" fill priority sizes="(max-width: 760px) 88vw, 38vw" /><figcaption>Software engineer · Penn State computer science</figcaption></figure>
      </section>

      <nav className="toc" aria-label="Book contents"><p className="pixel-label">TABLE OF CONTENTS</p>{chapters.map((item, index) => <a href={`#${item.id}`} key={item.id}><span>{String(index + 1).padStart(2,"0")}</span>{item.label.replace(/LEVEL \d+ · /,"")}<i/></a>)}</nav>

      <Chapter number="01" eyebrow="Origin story" title="It started with a robot." id="origin">
        <div className="story-vignette"><div className="prose"><p className="dropcap">I was born in Visakhapatnam, India, and my family moved to Hyderabad when I was one.</p><p>I was seven when I watched the Telugu version of <em>Robo</em> with my brother. He was terrified. I remember him crying when the robot started turning against the people around it.</p><p>I couldn’t stop watching.</p><p>What fascinated me wasn’t the destruction. It was the idea that someone could build something like that. I had no idea what the path into technology would look like. I just knew I wanted to understand it.</p></div><RobotSprite /></div>
        <Reflection label="REFLECTION · CURIOSITY">A movie made me want to build things. The curiosity stayed long after the credits.</Reflection>
        <MovieCounter />
      </Chapter>

      <Chapter number="02" eyebrow="Penn State" title="The mindset that stayed." id="penn-state">
        <div className="essay-grid"><div className="prose"><p>Penn State shaped me far beyond academics. The friendships and connections mattered, but so did a realization that changed how I see progress: consistent work can dramatically accelerate how quickly I improve.</p><p>I completed my B.S. in Computer Science in December 2025, earned the President Walker Award, AWS certifications in machine learning and AI, and a Product Innovation Entrepreneurship Certificate. PlantVillage introduced me to applied AI research; Happy Valley LaunchBox taught me to test ideas against reality.</p></div><aside className="margin-note">Consistency changed how I think about progress.</aside></div>
        <figure className="throne-spread"><div><Image src="/media/personal/lion-shrine-riding.jpg" alt="Ruthvik sitting on the Nittany Lion Shrine" fill sizes="(max-width:800px) 94vw, 62vw"/></div><figcaption><p className="pixel-label">MY THRONE</p><strong>To everyone else, it’s the Nittany Lion Shrine. To me, it’s a throne.</strong><span>When I sit there, I feel like I’m sitting on top of the world. It holds confidence, community, ambition, and the mindset Penn State gave me.</span></figcaption><InkDoodle kind="lion"/></figure>
        <section className="venture-section"><header><p className="pixel-label">THREE EXPERIMENTS</p><h3>Entrepreneurship as a way of learning.</h3></header><div>{ventures.map(venture => <article key={venture.name}><h4>{venture.name}</h4><p>{venture.text}</p></article>)}</div><IdeaCycle /></section>
        <Reflection label="REFLECTION · CONSISTENCY">Big leaps are usually a collection of small days taken seriously.</Reflection>
      </Chapter>

      <Chapter number="03" eyebrow="Selected builds" title="Four systems, four kinds of trust." id="builds">
        <p className="chapter-intro">No invented screenshots—just verified architecture, engineering decisions, and source.</p>
        <div className="project-list">{projects.map((project, index) => <ProjectStory key={project.slug} project={project} reverse={index % 2 === 1} />)}</div>
      </Chapter>

      <Chapter number="04" eyebrow="Production" title="The real world leaves useful marks." id="production">
        <div className="field-notes">{fieldNotes.map(note => <article key={note.title}><p className="pixel-label">FIELD NOTE</p><h3>{note.title}</h3><p>{note.text}</p><ul>{note.evidence.map(line => <li key={line}>{line}</li>)}</ul></article>)}</div>
        <div className="skills"><p className="pixel-label">WORKING TOOLKIT</p>{skills.map(group => <p key={group.name}><strong>{group.name}</strong> · {group.items.join(" · ")}</p>)}</div>
        <div className="flow-row"><FlowSprite/><blockquote>“The work gets interesting when the happy path ends.”</blockquote></div>
        <Reflection label="REFLECTION · RELIABILITY">A system earns trust when retries, failures, and strange states are treated as part of the design.</Reflection>
      </Chapter>

      <Chapter number="05" eyebrow="Life outside the terminal" title="Side quests keep the story human." id="life">
        <PhotoEssay />
        <SideQuests />
        <aside className="sports-note"><InkDoodle kind="basketball"/><p>The Knicks’ 2026 NBA Finals comeback against the Spurs rekindled my excitement about basketball. I didn’t attend the Finals and I’m not claiming expertise; it simply reminded me that I want the sport back in my life.</p><a href="https://pr.nba.com/2026-nba-finals-game-notes/">NBA Finals game notes ↗</a></aside>
      </Chapter>

      <Chapter number="06" eyebrow="The long game" title="Enormous ambition. One honest step at a time." id="long-game">
        <div className="long-game"><InkDoodle kind="circuit"/><div className="prose"><p>I think on a pretty long timeline.</p><p>Eventually, I want to build a company in quantum machine learning. My ambitions are huge. I’ve even said I want to become a trillionaire.</p><p>But one thing I’ve learned is that having an enormous goal doesn’t mean skipping the steps.</p><p>Right now, I want to work alongside engineers who’ve built serious things—in big tech or high-agency engineering companies. I want to learn from them, challenge myself, get things wrong, and get better.</p><p><strong>The work comes first.</strong></p></div><aside className="margin-note">Ambition names the horizon. Consistency covers the distance.</aside></div>
        <Reflection label="CONTINUE? · YES">The future is not a shortcut. It is the next thoughtful piece of work.</Reflection>
      </Chapter>
    </main>
    <footer id="contact"><p className="pixel-label">BACK COVER · SAY HELLO</p><h2>Let’s build something thoughtful.</h2><a className="email" href={profile.email}>uttaralaruthvik@gmail.com</a><div><a href={profile.github}>GitHub</a><a href={profile.linkedin}>LinkedIn</a><a href={profile.instagram}>Instagram</a><a href="/resume.pdf">Résumé</a></div><small>Designed and built by Ruthvik Uttarala · © 2026</small></footer>
  </>;
}
