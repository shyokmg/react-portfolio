import { SiGithub } from "react-icons/si";
import { AiOutlineLinkedin } from "react-icons/ai";

export default function Footer() {
  const githubLink = "https://github.com/shyokmg";
  const linkedInLink = "https://www.linkedin.com/in/shoyo-kumagai-855020123/";
  return (
    <div>
      <h1>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <SiGithub />
        </a>
        <a href={linkedInLink} target="_blank" rel="noopener noreferrer">
          <AiOutlineLinkedin />
        </a>
      </h1>
    </div>
  );
}
