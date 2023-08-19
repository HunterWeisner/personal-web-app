import headShot from "public/images/hunter-weisner-headshot-cold.png"
import Header from "../components/header"
export default function Home_page_header() {
  return (
    <Header
      image={headShot}
      altText="picture of Hunter Weisner"
      topText="Hi I'm"
      centerText="Hunter Weisner"
      bottomText="A Web Developer"
    />
  )
}
