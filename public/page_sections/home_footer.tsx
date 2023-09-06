import Contact_info from "../components/contact_info";

export default function Home_footer(){
    return(
        <div className="bg-teal-500 max-w-5xl bg-gradient-to-br from-teal-500 to-teal-300 rounded-lg mt-3 mb-3 pt-3 pb-3 text-center m-auto">
            <Contact_info
                email="mailto: hunterweisner@gmail.com"
                resume_url="../resources/Resume-08-25-23.pdf"
                phone="+1 (336) 521-1925"
                dark={true}
            />
        </div>
    )
}