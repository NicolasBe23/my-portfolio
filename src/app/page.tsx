import Description from "./description/page";
import Experience from "./experience/page";
import Projects from "./projects/page";
import Message from "./message/page";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 px-10">
      <Description />
      <Experience />
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Message />
      </div>
    </div>
  );
}
