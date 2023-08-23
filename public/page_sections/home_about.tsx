
import git_hub_mark from "../../public/images/github-mark.svg";
import linkedin from "../../public/images/linkedin-svgrepo-com.svg";
import About from "../../public/components/about"

export default function AboutSection() {
  return (
    <About
      section_title="About Me"
      section_text="Hi there! I'm Hunter Weisner, an up-and-coming Developer that's passionate about building sustainable, accessible, and 
        readable software."
      first_icon={git_hub_mark}
      first_url="https://github.com/HunterWeisner" 
      first_alt="Github Mark Icon"
      second_icon={linkedin}
      second_url="https://www.linkedin.com/in/hunter-weisner-2060271a0/"
      second_alt="Linkedin Icon"
    />
  )
}
