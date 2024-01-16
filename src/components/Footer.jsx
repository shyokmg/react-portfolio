import { SiGithub } from "react-icons/si";
import { GrLinkedin } from "react-icons/gr";
import { ImStackoverflow } from "react-icons/im";

export default function Footer() {
// Links to the icons on the footer
  const githubLink = "https://github.com/shyokmg";
  const linkedInLink = "https://www.linkedin.com/in/shoyo-kumagai-855020123/";
  const stackOverFlowLink = "https://stackoverflow.com/"
  return (
    <div className="d-flex justify-content-center gap-3 p-3" >
      <h1>
        <a className="footer-link" href={githubLink} target="_blank" rel="noopener noreferrer">
          <SiGithub />
        </a>
      </h1>
      <h1>
        <a className="footer-link" href={linkedInLink} target="_blank" rel="noopener noreferrer">
          <GrLinkedin />
        </a>
      </h1>
      <h1>
        <a className="footer-link" href={stackOverFlowLink} target="_blank" rel="noopener noreferrer">
        <ImStackoverflow />
        </a>
      </h1>
    </div>
  );
}
