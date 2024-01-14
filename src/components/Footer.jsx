import { SiGithub } from "react-icons/si";

export default function Footer() {
    const githubLink = 'https://github.com/shyokmg'
    return (
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <SiGithub />
          </a>
    );
}