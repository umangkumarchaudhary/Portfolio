import './App.css';
import { Link } from 'react-scroll';
import Header from './components/Header'
import HeroSection from './components/HeroSection';
import AboutMeSection from './components/AboutMeSection';
import SkillsSection from './components/SkillsSection';
import ProjectSection from './components/ProjectSection';
import CertificateSection from './components/CertificateSection';
import EducationSection from './components/EducationSection';

function App() {
  return (
    <div className="App">
      <Header/>
      <HeroSection/>
      <AboutMeSection/>
      <SkillsSection/>
      <Link to="projects" smooth duration={500} offset={-50}>
    </Link>
      <ProjectSection/>
      <CertificateSection/>
      <EducationSection/>
    </div>
  );
}

export default App;
