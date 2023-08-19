
import git_hub_mark from "../../public/images/github-mark.svg";
import linkedin from "../../public/images/linkedin-svgrepo-com.svg";
import About from "../../public/components/about"

export default function AboutSection() {
  return (
    <About
      section_title="About Me"
      section_text="Hi there! I'm Hunter Weisner, an up-and-coming Developer thats passionate about building sustainable, acessible, and 
        readable software. Recently my focus has been on web development, but other development and engineering oppertunities are always welcome. As a Developer
        my skills are focused around understanding effective project management and writting maintainable code which are both great tools to have in any project. "
      first_icon={git_hub_mark}
      first_url="https://github.com/HunterWeisner" 
      first_alt="Github Mark Icon"
      second_icon={linkedin}
      second_url="https://www.linkedin.com/in/hunter-weisner-2060271a0/"
      second_alt="Linkedin Icon"
    />
  )
}
