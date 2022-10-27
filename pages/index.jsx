// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Navbar from './sections/navbar'
import TopNavbar from '../components/topnavbar'
import HeroPage from './sections/hero'
import SearchForm from '../components/searchform'
import AboutUs from './sections/aboutus'
import Categories from './sections/categories'
import DownloadApp from './sections/downloadapp'
import ClinicsSection from './sections/clinicssection'
import LabSection from './sections/labsection'
import DocBanner from './sections/docbanner'
import BlogSection from './sections/blogsection'
import NletterSection from './sections/nlettersection'
import Footer from './sections/footer'





export default function Home() {
  return (
    <div>
      {/* <TopNavbar/>
      <Navbar/> */}
      <HeroPage/>
      <SearchForm/>
      <AboutUs/>
      <Categories/>
      <DownloadApp/>
      <ClinicsSection/>
      <LabSection/>
      <DocBanner/>
      <BlogSection/>
      <NletterSection/>
      {/* <Footer/> */}

    </div>
  )
}

Home.getLayout = function PageLayout(page){
  return(
    <>
      <TopNavbar/>
      <Navbar/>
      {page}
      <Footer/>
    </>
  )
}