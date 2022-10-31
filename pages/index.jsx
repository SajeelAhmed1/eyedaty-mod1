// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
// import Navbar from './sections/navbar'
// import TopNavbar from '../components/topnavbar'
import HeroPage from '../components/landingpage/hero'
import SearchForm from '../components/searchform'
import AboutUs from '../components/landingpage/aboutus'
import Categories from '../components/landingpage/categories'
import DownloadApp from '../components/landingpage/downloadapp'
import ClinicsSection from '../components/landingpage/clinicssection'
import LabSection from '../components/landingpage/labsection'
import DocBanner from '../components/landingpage/docbanner'
import BlogSection from '../components/landingpage/blogsection'
import NletterSection from '../components/landingpage/nlettersection'
import Link from 'next/link';
// import Footer from './sections/footer'





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

