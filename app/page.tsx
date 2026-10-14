import Image from "next/image";
import { ChapterNav } from "@/components/chapter-nav";
import { ProjectStory } from "@/components/project-story";
import { PhotoEssay } from "@/components/photo-essay";
import { chapters, milestones, fieldNotes, profile, skills } from "@/data/story";
import { projects } from "@/data/projects";

function Chapter({ number, eyebrow, title, children, id }: { number: string; eyebrow: string; title: string; children: React.ReactNode; id: string }) {
  return <section className="chapter" id={id}><header className="chapter-heading"><span>{number}</span><div><p>{eyebrow}</p><h2>{title}</h2></div></header>{children}</section>;
}

export default function Home() {
  return <>
    <ChapterNav items={chapters} />
    <main>
      <section className="cover" id="top">
        <div className="cover-copy">
          <p className="pixel-label hero-reveal">PLAYER 01 · RUTHVIK UTTARALA</p>
          <h1 className="hero-reveal delay-one">Hi, I’m Ruthvik.</h1>
          <p className="lede hero-reveal delay-two">I’m a software engineer who likes figuring out how systems work, why they break, and how to make them more dependable.</p>
          <p className="hero-reveal delay-three">I build with Python, TypeScript, AWS, and applied AI. This little corner of the internet is the longer version: the projects, people, places, and debugging lessons that shaped the work.</p>
          <nav className="cover-links hero-reveal delay-three" aria-label="Cover links"><a href="#story">Read my story</a><a href="#work">See the work</a><a href="/resume.pdf">Résumé</a><a href="#contact">Say hello</a></nav>
        </div>
        <figure className="portrait hero-reveal delay-two"><Image src="/ruthvik-headshot.jpg" alt="Ruthvik Uttarala" fill priority sizes="(max-width: 760px) 88vw, 38vw" /><figcaption>State College, Pennsylvania · 2025</figcaption></figure>
      </section>

      <Chapter number="01" eyebrow="The person behind the code" title="A curious mind, in progress." id="story">
        <div className="essay-grid"><div className="prose"><p className="dropcap">I grew up in India and studied computer science at Penn State. Along the way I found myself moving between startup ideas, agricultural AI research, and production software. The work changed; the habit didn’t: get close to the problem, make the state visible, and keep testing assumptions.</p><p>Most of my favorite engineering moments aren’t dramatic launches. They’re the point when a retry finally behaves, a duplicate event stops appearing, or an opaque AI response becomes something a system can validate.</p></div><aside className="margin-note">I care about systems that remain understandable after the demo ends.</aside></div>
        <figure className="wide-photo"><Image src="/media/personal/lion-shrine-riding.jpg" alt="Ruthvik beside the Nittany Lion Shrine at Penn State" fill sizes="(max-width: 900px) 92vw, 900px" /><figcaption>At the Lion Shrine — one of those Penn State photographs that becomes a family artifact.</figcaption></figure>
      </Chapter>

      <Chapter number="02" eyebrow="Penn State to production" title="Learning by making things real." id="journey">
        <div className="milestones">{milestones.map((item) => <article key={item.year}><p className="pixel-label">{item.year}</p><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
        <div className="duo-photos"><figure><Image src="/media/personal/president-walker-award.jpg" alt="Ruthvik receiving the President Walker Award" fill sizes="(max-width: 760px) 90vw, 42vw" /><figcaption>President Walker Award, Penn State.</figcaption></figure><figure><Image src="/media/penn-state/westgate-building.jpg" alt="Westgate Building at Penn State" fill sizes="(max-width: 760px) 90vw, 42vw" /><figcaption>Westgate — classrooms, late labs, and a lot of becoming.</figcaption></figure></div>
      </Chapter>

      <Chapter number="03" eyebrow="Selected work" title="Four systems, four different kinds of trust." id="work">
        <div className="project-list">{projects.map((project, index) => <ProjectStory key={project.slug} project={project} reverse={index % 2 === 1} />)}</div>
      </Chapter>

      <Chapter number="04" eyebrow="Lessons from production" title="The real world leaves useful marks." id="lessons">
        <div className="field-notes">{fieldNotes.map((note) => <article key={note.title}><p className="pixel-label">FIELD NOTE</p><h3>{note.title}</h3><p>{note.text}</p><ul>{note.evidence.map((line) => <li key={line}>{line}</li>)}</ul></article>)}</div>
        <div className="skills"><p className="pixel-label">WORKING TOOLKIT</p>{skills.map(group => <p key={group.name}><strong>{group.name}</strong> · {group.items.join(" · ")}</p>)}</div>
      </Chapter>

      <Chapter number="05" eyebrow="Outside the terminal" title="Places and people keep the work in proportion." id="life"><PhotoEssay /></Chapter>
      <Chapter number="06" eyebrow="What comes next" title="Keep building. Keep paying attention." id="next"><div className="prose closing"><p>I want to keep working on software where reliability matters and the problem is worth understanding deeply — backend systems, cloud infrastructure, thoughtful AI products, and the connective tissue between them.</p><p>I’m still early in the story. That feels less like a disclaimer and more like an invitation: there is plenty left to learn, and plenty worth making carefully.</p></div></Chapter>
    </main>
    <footer id="contact"><p className="pixel-label">BACK COVER · SAY HELLO</p><h2>Let’s build something thoughtful.</h2><a className="email" href={profile.email}>uttaralaruthvik@gmail.com</a><div><a href={profile.github}>GitHub</a><a href={profile.linkedin}>LinkedIn</a><a href={profile.instagram}>Instagram</a><a href="/resume.pdf">Résumé</a></div><small>Designed and built by Ruthvik Uttarala · © 2026</small></footer>
  </>;
}
