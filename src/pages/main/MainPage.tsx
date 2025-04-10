import Navbar from "@/comp/mainpage/Navbar"
import Hero from "@/comp/mainpage/Hero"
import Footer from "@/comp/mainpage/Footer"
import Fnq from "@/comp/mainpage/Fnq"
import About from "@/comp/mainpage/About"

const MainPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About/>
      <Fnq/>
      <Footer/>
    </div>
  )
}

export default MainPage
