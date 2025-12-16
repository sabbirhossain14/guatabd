import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, 
  Facebook, 
  Instagram, 
  Camera, 
  Users, 
  Home,
  ChevronDown,
  Menu,
  X,
  Download,
  Share2,
  Edit,
  School,
  Calendar,
  BookOpen,
  Heart,
  Star,
  Award,
  GraduationCap,
  Building,
  Library,
  Activity,
  Coffee,
  Plus,
  User,
  Vote,
  Users as PeopleIcon,
  Landmark,
  Users as NeighborhoodIcon
} from 'lucide-react';

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isEditing, setIsEditing] = useState(false);
  const [activeSceneryCategory, setActiveSceneryCategory] = useState('all');

  // Guata গ্রামের সম্পূর্ণ এডিটেবল ডেটা
  const [guataData, setGuataData] = useState({
    basicInfo: {
      village: "Guata",
      postCode: "6596",
      union: "Ekdala-07",
      policeStation: "Raninagar",
      district: "Naogaon",
      division: "Rajshahi",
      country: "Bangladesh"
    },
    
    // জনসংখ্যা ও ভোটার তথ্য
    populationInfo: {
      totalPopulation: "২,৫০০",
      malePopulation: "১,৩০০",
      femalePopulation: "১,২০০",
      totalVoters: "১,৮০০",
      maleVoters: "৯৫০",
      femaleVoters: "৮৫০",
      households: "৫০০",
      averageFamilySize: "৫"
    },
    
    images: {
      profilePic: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      coverPhoto: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    
    // গ্রামের স্কুল গুলো - সম্পূর্ণ এডিটেবল
    schools: [
      {
        id: 1,
        name: "গুয়াতা প্রাথমিক বিদ্যালয়",
        type: "primary",
        established: "১৯৮০",
        students: "২৫০",
        facebookLink: "https://facebook.com/guataprimaryschool",
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        description: "গ্রামের প্রধান প্রাথমিক বিদ্যালয়",
        address: "গুয়াতা গ্রাম, রাণীনগর"
      },
      {
        id: 2,
        name: "গুয়াতা উচ্চ বিদ্যালয়",
        type: "high",
        established: "১৯৯৫",
        students: "৫০০",
        facebookLink: "https://facebook.com/guatahighschool",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        description: "গ্রামের একমাত্র উচ্চ বিদ্যালয়",
        address: "গুয়াতা গ্রাম, রাণীনগর"
      }
    ],
    
    // মসজিদের তালিকা - সম্পূর্ণ এডিটেবল
    mosques: [
      {
        id: 1,
        name: "গুয়াতা কেন্দ্রীয় জামে মসজিদ",
        area: "মধ্য গুয়াতা",
        capacity: "৩০০",
        established: "১৯৭৫",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        description: "গ্রামের প্রধান ও বৃহত্তম মসজিদ",
        imam: "মাওলানা আব্দুল করিম"
      },
      {
        id: 2,
        name: "পূর্ব গুয়াতা জামে মসজিদ",
        area: "পূর্ব গুয়াতা",
        capacity: "১৫০",
        established: "১৯৮৫",
        image: "https://images.unsplash.com/photo-1630476387427-45fec42bd6bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        description: "পূর্ব পাড়ার প্রধান মসজিদ",
        imam: "মাওলানা রফিকুল ইসলাম"
      },
      {
        id: 3,
        name: "পশ্চিম গুয়াতা মসজিদ",
        area: "পশ্চিম গুয়াতা",
        capacity: "২০০",
        established: "১৯৯০",
        image: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        description: "পশ্চিম পাড়ার কেন্দ্রীয় মসজিদ",
        imam: "মাওলানা মোহাম্মদ আলী"
      }
    ],

    // মোহল্লার তালিকা - ৬টি মোহল্লা
    neighborhoods: [
      {
        id: 1,
        name: "মধ্য গুয়াতা",
        households: "১২০",
        population: "৬০০",
        chairman: "মোঃ আব্দুল করিম",
        contact: "০১৭১২-৩৪৫৬৭৮",
        description: "গ্রামের কেন্দ্রস্থল, সবচেয়ে পুরনো ও প্রধান মোহল্লা"
      },
      {
        id: 2,
        name: "পূর্ব গুয়াতা",
        households: "৯০",
        population: "৪৫০",
        chairman: "মোঃ রফিকুল ইসলাম",
        contact: "০১৯১২-৯৮৭৬৫৪",
        description: "কৃষিজমি ও পুকুরের জন্য পরিচিত, সবুজ পরিবেশ"
      },
      {
        id: 3,
        name: "পশ্চিম গুয়াতা",
        households: "১০০",
        population: "৫০০",
        chairman: "মোঃ আলমগীর হোসেন",
        contact: "০১৮৭৬-৫৪৩২১০",
        description: "আধুনিক ঘরবাড়ি ও ব্যবসা প্রতিষ্ঠানের জন্য বিখ্যাত"
      },
      {
        id: 4,
        name: "উত্তর গুয়াতা",
        households: "৮৫",
        population: "৪২৫",
        chairman: "মোঃ শফিকুল ইসলাম",
        contact: "০১৭৩৪-৫৬৭৮৯০",
        description: "হাইস্কুল সংলগ্ন এলাকা, শিক্ষিত পরিবারের বসবাস"
      },
      {
        id: 5,
        name: "দক্ষিণ গুয়াতা",
        households: "৭৫",
        population: "৩৭৫",
        chairman: "মোঃ জাহাঙ্গীর আলম",
        contact: "০১৯৮৭-৬৫৪৩২১",
        description: "নদীর পাড়ে অবস্থিত, মাছ ধরা ও নৌকা চলাচল"
      },
      {
        id: 6,
        name: "নতুন গুয়াতা",
        households: "৩০",
        population: "১৫০",
        chairman: "মোঃ সোহেল রানা",
        contact: "০১৭৯৮-৭৬৫৪৩২",
        description: "সাম্প্রতিক সময়ে গড়ে উঠা নতুন আবাসিক এলাকা"
      }
    ],
    
    // কৃতি সন্তানদের তালিকা - সম্পূর্ণ এডিটেবল
    notablePersons: [
      {
        id: 1,
        name: "ড. মোহাম্মদ আলী",
        designation: "প্রফেসর, রাজশাহী বিশ্ববিদ্যালয়",
        achievement: "পিএইচডি (পদার্থবিজ্ঞান), জাপান",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        description: "গ্রামের প্রথম পিএইচডি ডিগ্রিধারী",
        facebookLink: "https://facebook.com/mohammad.ali"
      },
      {
        id: 2,
        name: "শামীমা আক্তার",
        designation: "মেডিকেল অফিসার",
        achievement: "এমবিবিএস, ঢাকা মেডিকেল কলেজ",
        image: "https://images.unsplash.com/photo-1594824434340-7e7dfc37cabb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        description: "গ্রামের প্রথম মহিলা ডাক্তার",
        facebookLink: "https://facebook.com/shamima.akter"
      },
      {
        id: 3,
        name: "রফিকুল ইসলাম",
        designation: "প্রধান শিক্ষক",
        achievement: "এমএড (বাংলা), বি.এড",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        description: "৩০ বছর শিক্ষকতা করেছেন",
        facebookLink: "https://facebook.com/rafiqul.islam"
      },
      {
        id: 4,
        name: "নূরজাহান বেগম",
        designation: "সামাজিক কর্মী",
        achievement: "জাতীয় পুরস্কার প্রাপ্ত",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        description: "মহিলা উন্নয়নে বিশেষ অবদান",
        facebookLink: "https://facebook.com/nurjahan.begum"
      }
    ],
    
    // গ্রামের বিভিন্ন প্রোগ্রাম ও কার্যক্রম - সম্পূর্ণ এডিটেবল
    programs: [
      {
        id: 1,
        title: "বার্ষিক ক্রীড়া প্রতিযোগিতা",
        type: "sports",
        month: "জানুয়ারি",
        description: "গ্রামের যুবকদের জন্য বার্ষিক ফুটবল ও ক্রিকেট প্রতিযোগিতা",
        image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
      },
      {
        id: 2,
        title: "স্বাধীনতা দিবস উদযাপন",
        type: "cultural",
        month: "মার্চ",
        description: "২৬শে মার্চ গ্রাম্য পর্যায়ে স্বাধীনতা দিবস পালন",
        image: "https://images.unsplash.com/photo-1618517351616-38fb9c5210c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
      },
      {
        id: 3,
        title: "কৃষি মেলা",
        type: "agriculture",
        month: "নভেম্বর",
        description: "স্থানীয় কৃষকদের উৎপাদিত পণ্যের প্রদর্শনী ও মেলা",
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
      },
      {
        id: 4,
        title: "ঈদুল ফিতর সমাবেশ",
        type: "religious",
        month: "এপ্রিল/মে",
        description: "গ্রামের সব মসজিদে যৌথ ঈদের নামাজ ও সমাবেশ",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
      }
    ],
    
    // সুন্দর গ্রাম্য দৃশ্য - সম্পূর্ণ এডিটেবল
    scenery: [
      {
        id: 1,
        url: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        title: "গ্রামের প্রধান সড়ক",
        category: "infrastructure",
        description: "সকাল বেলার গ্রামের প্রধান সড়কের দৃশ্য"
      },
      {
        id: 2,
        url: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        title: "কৃষি জমি",
        category: "agriculture",
        description: "বিস্তীর্ণ ধান ক্ষেতের সবুজ আচ্ছাদন"
      },
      {
        id: 3,
        url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        title: "প্রাকৃতিক দৃশ্য",
        category: "nature",
        description: "গ্রামের প্রাকৃতিক সৌন্দর্য"
      },
      {
        id: 4,
        url: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        title: "গ্রামীণ জীবন",
        category: "lifestyle",
        description: "স্থানীয় বাসিন্দাদের দৈনন্দিন জীবন"
      },
      {
        id: 5,
        url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        title: "মাঠের দৃশ্য",
        category: "nature",
        description: "বিস্তীর্ণ মাঠের সবুজ আচ্ছাদন"
      }
    ],
    
    facebookPage: "https://www.facebook.com/guatabd"
  });

  // এডিটিং ফাংশনালিটি
  const handleEditField = (section, id, field, value) => {
    setGuataData(prev => {
      if (section === 'schools') {
        return {
          ...prev,
          schools: prev.schools.map(school => 
            school.id === id ? { ...school, [field]: value } : school
          )
        };
      } else if (section === 'mosques') {
        return {
          ...prev,
          mosques: prev.mosques.map(mosque => 
            mosque.id === id ? { ...mosque, [field]: value } : mosque
          )
        };
      } else if (section === 'neighborhoods') {
        return {
          ...prev,
          neighborhoods: prev.neighborhoods.map(neighborhood => 
            neighborhood.id === id ? { ...neighborhood, [field]: value } : neighborhood
          )
        };
      } else if (section === 'programs') {
        return {
          ...prev,
          programs: prev.programs.map(program => 
            program.id === id ? { ...program, [field]: value } : program
          )
        };
      } else if (section === 'scenery') {
        return {
          ...prev,
          scenery: prev.scenery.map(item => 
            item.id === id ? { ...item, [field]: value } : item
          )
        };
      } else if (section === 'notablePersons') {
        return {
          ...prev,
          notablePersons: prev.notablePersons.map(person => 
            person.id === id ? { ...person, [field]: value } : person
          )
        };
      } else if (section === 'populationInfo') {
        return {
          ...prev,
          populationInfo: {
            ...prev.populationInfo,
            [field]: value
          }
        };
      }
      return prev;
    });
  };

  const addNewItem = (section) => {
    const newId = Date.now();
    
    if (section === 'notablePersons') {
      const newPerson = {
        id: newId,
        name: "নতুন কৃতি সন্তান",
        designation: "পেশা",
        achievement: "অর্জন",
        image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        description: "বর্ণনা যোগ করুন",
        facebookLink: ""
      };
      setGuataData(prev => ({
        ...prev,
        notablePersons: [...prev.notablePersons, newPerson]
      }));
    } else if (section === 'schools') {
      const newItem = {
        id: newId,
        name: "নতুন স্কুল",
        type: "primary",
        established: "২০২৪",
        students: "১০০",
        facebookLink: "",
        image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        description: "বর্ণনা যোগ করুন",
        address: "ঠিকানা যোগ করুন"
      };
      setGuataData(prev => ({
        ...prev,
        schools: [...prev.schools, newItem]
      }));
    } else if (section === 'mosques') {
      const newItem = {
        id: newId,
        name: "নতুন মসজিদ",
        area: "নতুন এলাকা",
        capacity: "১০০",
        established: "২০২৪",
        imam: "ইমামের নাম",
        image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        description: "বর্ণনা যোগ করুন"
      };
      setGuataData(prev => ({
        ...prev,
        mosques: [...prev.mosques, newItem]
      }));
    } else if (section === 'neighborhoods') {
      const newItem = {
        id: newId,
        name: "নতুন মোহল্লা",
        households: "৫০",
        population: "২৫০",
        chairman: "চেয়ারম্যানের নাম",
        contact: "০১৭১২-৩৪৫৬৭৮",
        description: "বর্ণনা যোগ করুন"
      };
      setGuataData(prev => ({
        ...prev,
        neighborhoods: [...prev.neighborhoods, newItem]
      }));
    } else if (section === 'programs') {
      const newItem = {
        id: newId,
        type: "cultural",
        month: "জানুয়ারি",
        title: "নতুন প্রোগ্রাম",
        image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        description: "বর্ণনা যোগ করুন"
      };
      setGuataData(prev => ({
        ...prev,
        programs: [...prev.programs, newItem]
      }));
    } else if (section === 'scenery') {
      const newItem = {
        id: newId,
        category: "nature",
        title: "নতুন দৃশ্য",
        url: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        description: "বর্ণনা যোগ করুন"
      };
      setGuataData(prev => ({
        ...prev,
        scenery: [...prev.scenery, newItem]
      }));
    }
  };

  const removeItem = (section, id) => {
    if (window.confirm("আপনি কি এই আইটেমটি মুছতে চান?")) {
      setGuataData(prev => ({
        ...prev,
        [section]: prev[section].filter(item => item.id !== id)
      }));
    }
  };

  // অন্যান্য ফাংশন
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  // Filtered scenery based on category
  const filteredScenery = activeSceneryCategory === 'all' 
    ? guataData.scenery 
    : guataData.scenery.filter(item => item.category === activeSceneryCategory);

  // Navbar Component
  const Navbar = () => (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => scrollToSection('home')}
            style={{ cursor: 'pointer' }}
          >
            <img 
              src={guataData.images.profilePic} 
              alt="Guata Logo"
              className="w-10 h-10 rounded-full border-2 border-green-500"
            />
            <div>
              <h1 className="text-xl font-bold text-gray-800">গুয়াতা গ্রাম</h1>
              <p className="text-xs text-gray-600">নওগাঁ, রাজশাহী</p>
            </div>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {['home', 'population', 'neighborhoods', 'notable-persons', 'scenery', 'programs', 'schools', 'mosques', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`font-medium transition-all duration-300 ${
                  activeSection === item 
                    ? 'text-green-600 border-b-2 border-green-600' 
                    : 'text-gray-600 hover:text-green-500'
                }`}
                style={{ cursor: 'pointer' }}
              >
                {item === 'home' && 'হোম'}
                {item === 'population' && 'জনসংখ্যা'}
                {item === 'neighborhoods' && 'মোহল্লা'}
                {item === 'notable-persons' && 'কৃতি সন্তান'}
                {item === 'scenery' && 'সুন্দর দৃশ্য'}
                {item === 'programs' && 'প্রোগ্রাম'}
                {item === 'schools' && 'স্কুল'}
                {item === 'mosques' && 'মসজিদ'}
                {item === 'contact' && 'যোগাযোগ'}
              </button>
            ))}
            <button
              onClick={() => setIsEditing(!isEditing)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                isEditing ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
              }`}
              style={{ cursor: 'pointer' }}
            >
              <Edit size={18} />
              {isEditing ? 'এডিটিং মোড' : 'এডিট করুন'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{ cursor: 'pointer' }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 space-y-3"
            >
              {['home', 'population', 'neighborhoods', 'notable-persons', 'scenery', 'programs', 'schools', 'mosques', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left p-2 rounded-lg hover:bg-green-50 transition-colors"
                  style={{ cursor: 'pointer' }}
                >
                  {item === 'home' && 'হোম'}
                  {item === 'population' && 'জনসংখ্যা'}
                  {item === 'neighborhoods' && 'মোহল্লা'}
                  {item === 'notable-persons' && 'কৃতি সন্তান'}
                  {item === 'scenery' && 'সুন্দর দৃশ্য'}
                  {item === 'programs' && 'প্রোগ্রাম'}
                  {item === 'schools' && 'স্কুল'}
                  {item === 'mosques' && 'মসজিদ'}
                  {item === 'contact' && 'যোগাযোগ'}
                </button>
              ))}
              <button
                onClick={() => setIsEditing(!isEditing)}
                className={`flex items-center gap-2 w-full p-2 rounded-lg ${
                  isEditing ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                }`}
                style={{ cursor: 'pointer' }}
              >
                <Edit size={18} />
                {isEditing ? 'এডিটিং মোড' : 'এডিট করুন'}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );

  // Hero Section
  const HeroSection = () => (
    <section id="home" className="pt-20">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[70vh] md:h-[80vh] overflow-hidden"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${guataData.images.coverPhoto})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
          <motion.h1 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 text-center"
          >
            গুয়াতা গ্রাম
          </motion.h1>
          
          <motion.p 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl lg:text-2xl mb-8 text-center"
          >
            নওগাঁ জেলা, রাজশাহী বিভাগ
          </motion.p>
          
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row flex-wrap justify-center gap-4"
          >
            <button 
              onClick={() => scrollToSection('population')}
              className="px-6 py-3 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition-colors shadow-lg w-full sm:w-auto"
              style={{ cursor: 'pointer' }}
            >
              জনসংখ্যা দেখুন
            </button>
            <button 
              onClick={() => scrollToSection('notable-persons')}
              className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-lg w-full sm:w-auto"
              style={{ cursor: 'pointer' }}
            >
              কৃতি সন্তান
            </button>
            <a 
              href={guataData.facebookPage}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition-colors shadow-lg flex items-center justify-center gap-2 w-full sm:w-auto"
              style={{ cursor: 'pointer' }}
            >
              <Facebook size={20} />
              Facebook পেজ
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-8"
          >
            <ChevronDown className="w-8 h-8 animate-bounce" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );

  // Population Section
  const PopulationSection = () => (
    <section id="population" className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">জনসংখ্যা ও ভোটার তথ্য</h2>
          <p className="text-gray-600">গুয়াতা গ্রামের সাম্প্রতিক জনসংখ্যা পরিসংখ্যান</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
          {/* Total Population */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg border border-green-100"
          >
            <div className="flex items-center mb-4">
              <div className="p-3 bg-green-100 rounded-xl mr-4">
                <PeopleIcon className="w-6 h-6 md:w-8 md:h-8 text-green-600" />
              </div>
              <div>
                <h3 className="text-base md:text-lg font-bold text-gray-800">মোট জনসংখ্যা</h3>
                {isEditing ? (
                  <input
                    type="text"
                    value={guataData.populationInfo.totalPopulation}
                    onChange={(e) => handleEditField('populationInfo', null, 'totalPopulation', e.target.value)}
                    className="text-2xl md:text-3xl font-bold text-green-600 bg-gray-50 p-2 rounded w-full mt-2"
                  />
                ) : (
                  <p className="text-2xl md:text-3xl font-bold text-green-600">{guataData.populationInfo.totalPopulation} জন</p>
                )}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="text-center">
                <p className="text-gray-600 text-sm">পুরুষ</p>
                {isEditing ? (
                  <input
                    type="text"
                    value={guataData.populationInfo.malePopulation}
                    onChange={(e) => handleEditField('populationInfo', null, 'malePopulation', e.target.value)}
                    className="font-bold bg-gray-50 p-1 rounded w-full text-center"
                  />
                ) : (
                  <p className="font-bold">{guataData.populationInfo.malePopulation} জন</p>
                )}
              </div>
              <div className="text-center">
                <p className="text-gray-600 text-sm">মহিলা</p>
                {isEditing ? (
                  <input
                    type="text"
                    value={guataData.populationInfo.femalePopulation}
                    onChange={(e) => handleEditField('populationInfo', null, 'femalePopulation', e.target.value)}
                    className="font-bold bg-gray-50 p-1 rounded w-full text-center"
                  />
                ) : (
                  <p className="font-bold">{guataData.populationInfo.femalePopulation} জন</p>
                )}
              </div>
            </div>
          </motion.div>

          {/* Total Voters */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg border border-blue-100"
          >
            <div className="flex items-center mb-4">
              <div className="p-3 bg-blue-100 rounded-xl mr-4">
                <Vote className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-base md:text-lg font-bold text-gray-800">মোট ভোটার</h3>
                {isEditing ? (
                  <input
                    type="text"
                    value={guataData.populationInfo.totalVoters}
                    onChange={(e) => handleEditField('populationInfo', null, 'totalVoters', e.target.value)}
                    className="text-2xl md:text-3xl font-bold text-blue-600 bg-gray-50 p-2 rounded w-full mt-2"
                  />
                ) : (
                  <p className="text-2xl md:text-3xl font-bold text-blue-600">{guataData.populationInfo.totalVoters} জন</p>
                )}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="text-center">
                <p className="text-gray-600 text-sm">পুরুষ ভোটার</p>
                {isEditing ? (
                  <input
                    type="text"
                    value={guataData.populationInfo.maleVoters}
                    onChange={(e) => handleEditField('populationInfo', null, 'maleVoters', e.target.value)}
                    className="font-bold bg-gray-50 p-1 rounded w-full text-center"
                  />
                ) : (
                  <p className="font-bold">{guataData.populationInfo.maleVoters} জন</p>
                )}
              </div>
              <div className="text-center">
                <p className="text-gray-600 text-sm">মহিলা ভোটার</p>
                {isEditing ? (
                  <input
                    type="text"
                    value={guataData.populationInfo.femaleVoters}
                    onChange={(e) => handleEditField('populationInfo', null, 'femaleVoters', e.target.value)}
                    className="font-bold bg-gray-50 p-1 rounded w-full text-center"
                  />
                ) : (
                  <p className="font-bold">{guataData.populationInfo.femaleVoters} জন</p>
                )}
              </div>
            </div>
          </motion.div>

          {/* Households */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg border border-purple-100"
          >
            <div className="flex items-center mb-4">
              <div className="p-3 bg-purple-100 rounded-xl mr-4">
                <Home className="w-6 h-6 md:w-8 md:h-8 text-purple-600" />
              </div>
              <div>
                <h3 className="text-base md:text-lg font-bold text-gray-800">মোট পরিবার</h3>
                {isEditing ? (
                  <input
                    type="text"
                    value={guataData.populationInfo.households}
                    onChange={(e) => handleEditField('populationInfo', null, 'households', e.target.value)}
                    className="text-2xl md:text-3xl font-bold text-purple-600 bg-gray-50 p-2 rounded w-full mt-2"
                  />
                ) : (
                  <p className="text-2xl md:text-3xl font-bold text-purple-600">{guataData.populationInfo.households} টি</p>
                )}
              </div>
            </div>
            <div className="mt-4">
              <p className="text-gray-600 text-sm">গড় পরিবার সদস্য</p>
              {isEditing ? (
                <input
                  type="text"
                  value={guataData.populationInfo.averageFamilySize}
                  onChange={(e) => handleEditField('populationInfo', null, 'averageFamilySize', e.target.value)}
                  className="font-bold text-lg md:text-xl bg-gray-50 p-2 rounded w-full mt-2"
                />
              ) : (
                <p className="font-bold text-lg md:text-xl">{guataData.populationInfo.averageFamilySize} জন</p>
              )}
            </div>
          </motion.div>

          {/* Statistics Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-r from-green-500 to-blue-500 rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg"
          >
            <div className="text-white">
              <h3 className="text-base md:text-lg font-bold mb-4">পরিসংখ্যান</h3>
              <div className="space-y-2 md:space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm md:text-base">ভোটার শতাংশ</span>
                  <span className="font-bold">
                    {Math.round((parseInt(guataData.populationInfo.totalVoters) / parseInt(guataData.populationInfo.totalPopulation)) * 100)}%
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm md:text-base">লিঙ্গ অনুপাত</span>
                  <span className="font-bold">
                    {Math.round((parseInt(guataData.populationInfo.malePopulation) / parseInt(guataData.populationInfo.femalePopulation)) * 100) / 100} : ১
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm md:text-base">জনসংখ্যা ঘনত্ব</span>
                  <span className="font-bold">প্রতি বর্গকিমি ৮০০</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">জনসংখ্যা বিশ্লেষণ</h3>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div>
              <h4 className="text-lg font-bold mb-4 text-gray-700">জনসংখ্যা কাঠামো</h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex justify-between">
                  <span>মোট জনসংখ্যা</span>
                  <span className="font-bold">{guataData.populationInfo.totalPopulation} জন</span>
                </li>
                <li className="flex justify-between">
                  <span>পুরুষ</span>
                  <span className="font-bold">{guataData.populationInfo.malePopulation} জন</span>
                </li>
                <li className="flex justify-between">
                  <span>মহিলা</span>
                  <span className="font-bold">{guataData.populationInfo.femalePopulation} জন</span>
                </li>
                <li className="flex justify-between">
                  <span>মোট পরিবার</span>
                  <span className="font-bold">{guataData.populationInfo.households} টি</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4 text-gray-700">ভোটার তথ্য</h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex justify-between">
                  <span>মোট ভোটার</span>
                  <span className="font-bold">{guataData.populationInfo.totalVoters} জন</span>
                </li>
                <li className="flex justify-between">
                  <span>পুরুষ ভোটার</span>
                  <span className="font-bold">{guataData.populationInfo.maleVoters} জন</span>
                </li>
                <li className="flex justify-between">
                  <span>মহিলা ভোটার</span>
                  <span className="font-bold">{guataData.populationInfo.femaleVoters} জন</span>
                </li>
                <li className="flex justify-between">
                  <span>ভোটার শতাংশ</span>
                  <span className="font-bold">
                    {Math.round((parseInt(guataData.populationInfo.totalVoters) / parseInt(guataData.populationInfo.totalPopulation)) * 100)}%
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // Neighborhoods Section
  const NeighborhoodsSection = () => (
    <section id="neighborhoods" className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">গুয়াতা গ্রামের মোহল্লাসমূহ</h2>
          <p className="text-gray-600">গ্রামের ৬টি মোহল্লার বিস্তারিত তথ্য</p>
        </motion.div>

        {/* Add New Neighborhood Button (Edit Mode) */}
        {isEditing && (
          <div className="text-center mb-8">
            <button
              onClick={() => addNewItem('neighborhoods')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors"
              style={{ cursor: 'pointer' }}
            >
              <Plus size={20} />
              নতুন মোহল্লা যোগ করুন
            </button>
          </div>
        )}

        {/* Neighborhoods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guataData.neighborhoods.map((neighborhood, index) => (
            <motion.div
              key={neighborhood.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center">
                    <div className="p-3 bg-purple-100 rounded-xl mr-4">
                      <NeighborhoodIcon className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{neighborhood.name}</h3>
                      <span className="text-sm text-gray-500">মোহল্লা</span>
                    </div>
                  </div>
                  {isEditing && (
                    <button
                      onClick={() => removeItem('neighborhoods', neighborhood.id)}
                      className="p-2 text-red-500 hover:text-red-600"
                      style={{ cursor: 'pointer' }}
                    >
                      <X size={20} />
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-gray-600 text-sm">পরিবার</p>
                    <p className="font-bold text-lg">{neighborhood.households} টি</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-gray-600 text-sm">জনসংখ্যা</p>
                    <p className="font-bold text-lg">{neighborhood.population} জন</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-gray-600 text-sm mb-1">চেয়ারম্যান</p>
                    <p className="font-medium text-gray-800">{neighborhood.chairman}</p>
                  </div>
                  
                  <div>
                    <p className="text-gray-600 text-sm mb-1">যোগাযোগ</p>
                    <p className="font-medium text-gray-800">{neighborhood.contact}</p>
                  </div>

                  <div>
                    <p className="text-gray-600 text-sm mb-1">বর্ণনা</p>
                    <p className="text-gray-700">{neighborhood.description}</p>
                  </div>
                </div>

                {/* Editable Fields in Edit Mode */}
                {isEditing && (
                  <div className="mt-6 space-y-3 p-4 bg-gray-50 rounded-lg">
                    <input
                      type="text"
                      value={neighborhood.name}
                      onChange={(e) => handleEditField('neighborhoods', neighborhood.id, 'name', e.target.value)}
                      className="w-full p-2 border rounded"
                      placeholder="মোহল্লার নাম"
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        value={neighborhood.households}
                        onChange={(e) => handleEditField('neighborhoods', neighborhood.id, 'households', e.target.value)}
                        className="p-2 border rounded"
                        placeholder="পরিবার সংখ্যা"
                      />
                      <input
                        type="text"
                        value={neighborhood.population}
                        onChange={(e) => handleEditField('neighborhoods', neighborhood.id, 'population', e.target.value)}
                        className="p-2 border rounded"
                        placeholder="জনসংখ্যা"
                      />
                    </div>
                    <input
                      type="text"
                      value={neighborhood.chairman}
                      onChange={(e) => handleEditField('neighborhoods', neighborhood.id, 'chairman', e.target.value)}
                      className="w-full p-2 border rounded"
                      placeholder="চেয়ারম্যানের নাম"
                    />
                    <input
                      type="text"
                      value={neighborhood.contact}
                      onChange={(e) => handleEditField('neighborhoods', neighborhood.id, 'contact', e.target.value)}
                      className="w-full p-2 border rounded"
                      placeholder="যোগাযোগ নম্বর"
                    />
                    <textarea
                      value={neighborhood.description}
                      onChange={(e) => handleEditField('neighborhoods', neighborhood.id, 'description', e.target.value)}
                      className="w-full p-2 border rounded"
                      placeholder="বর্ণনা"
                      rows="3"
                    />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-6 md:p-8 text-white"
        >
          <h3 className="text-2xl font-bold mb-6">মোহল্লা সমন্বিত পরিসংখ্যান</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-3xl font-bold">{guataData.neighborhoods.length} টি</p>
              <p className="text-sm opacity-90">মোট মোহল্লা</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">
                {guataData.neighborhoods.reduce((total, n) => total + parseInt(n.households), 0)} টি
              </p>
              <p className="text-sm opacity-90">মোট পরিবার</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">
                {guataData.neighborhoods.reduce((total, n) => total + parseInt(n.population), 0)} জন
              </p>
              <p className="text-sm opacity-90">মোট জনসংখ্যা</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">৬ জন</p>
              <p className="text-sm opacity-90">মোট চেয়ারম্যান</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );

  // Notable Persons Section
  const NotablePersonsSection = () => (
    <section id="notable-persons" className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">গুয়াতা গ্রামের কৃতি সন্তান</h2>
          <p className="text-gray-600">যারা গ্রামের নাম উজ্জ্বল করেছেন তাদের পরিচিতি</p>
        </motion.div>

        {/* Add New Person Button (Edit Mode) */}
        {isEditing && (
          <div className="text-center mb-8">
            <button
              onClick={() => addNewItem('notablePersons')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors"
              style={{ cursor: 'pointer' }}
            >
              <Plus size={20} />
              নতুন কৃতি সন্তান যোগ করুন
            </button>
          </div>
        )}

        {/* Notable Persons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {guataData.notablePersons.map((person, index) => (
            <motion.div
              key={person.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-xl border border-gray-100"
            >
              <div className="relative h-56 md:h-64">
                <img 
                  src={person.image} 
                  alt={person.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                {isEditing && (
                  <button
                    onClick={() => removeItem('notablePersons', person.id)}
                    className="absolute top-4 right-4 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 z-10"
                    style={{ cursor: 'pointer' }}
                  >
                    <X size={16} />
                  </button>
                )}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-lg md:text-xl font-bold">{person.name}</h3>
                  <p className="text-sm opacity-90">{person.designation}</p>
                </div>
              </div>
              
              <div className="p-4 md:p-6">
                <div className="mb-4">
                  <div className="flex items-center text-gray-600 mb-2">
                    <Award className="w-4 h-4 mr-2" />
                    <span className="font-medium">অর্জন</span>
                  </div>
                  <p className="text-gray-800">{person.achievement}</p>
                </div>

                <p className="text-gray-600 mb-6 text-sm md:text-base">{person.description}</p>

                {person.facebookLink && (
                  <a 
                    href={person.facebookLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
                  >
                    <Facebook size={18} />
                    Facebook প্রোফাইল
                  </a>
                )}

                {/* Editable Fields in Edit Mode */}
                {isEditing && (
                  <div className="mt-6 space-y-3 p-4 bg-gray-50 rounded-lg">
                    <input
                      type="text"
                      value={person.name}
                      onChange={(e) => handleEditField('notablePersons', person.id, 'name', e.target.value)}
                      className="w-full p-2 border rounded"
                      placeholder="নাম"
                    />
                    <input
                      type="text"
                      value={person.designation}
                      onChange={(e) => handleEditField('notablePersons', person.id, 'designation', e.target.value)}
                      className="w-full p-2 border rounded"
                      placeholder="পেশা/পদবী"
                    />
                    <input
                      type="text"
                      value={person.achievement}
                      onChange={(e) => handleEditField('notablePersons', person.id, 'achievement', e.target.value)}
                      className="w-full p-2 border rounded"
                      placeholder="অর্জন"
                    />
                    <textarea
                      value={person.description}
                      onChange={(e) => handleEditField('notablePersons', person.id, 'description', e.target.value)}
                      className="w-full p-2 border rounded"
                      placeholder="বর্ণনা"
                      rows="2"
                    />
                    <input
                      type="text"
                      value={person.image}
                      onChange={(e) => handleEditField('notablePersons', person.id, 'image', e.target.value)}
                      className="w-full p-2 border rounded"
                      placeholder="ছবির URL"
                    />
                    <input
                      type="text"
                      value={person.facebookLink}
                      onChange={(e) => handleEditField('notablePersons', person.id, 'facebookLink', e.target.value)}
                      className="w-full p-2 border rounded"
                      placeholder="Facebook লিংক"
                    />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

  // Scenery Section with Categories
  const ScenerySection = () => (
    <section id="scenery" className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">সুন্দর গ্রাম্য দৃশ্য</h2>
          <p className="text-gray-600">গুয়াতা গ্রামের অপরূপ প্রাকৃতিক ও মনোরম দৃশ্যাবলী</p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {['all', 'nature', 'agriculture', 'infrastructure', 'lifestyle'].map((category) => (
            <button
              key={category}
              onClick={() => setActiveSceneryCategory(category)}
              className={`px-4 py-2 rounded-full font-medium transition-all text-sm md:text-base ${
                activeSceneryCategory === category
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-green-50'
              }`}
              style={{ cursor: 'pointer' }}
            >
              {category === 'all' && 'সব'}
              {category === 'nature' && 'প্রকৃতি'}
              {category === 'agriculture' && 'কৃষি'}
              {category === 'infrastructure' && 'অবকাঠামো'}
              {category === 'lifestyle' && 'জীবনযাপন'}
            </button>
          ))}
        </div>

        {/* Add New Photo Button (Edit Mode) */}
        {isEditing && (
          <div className="text-center mb-8">
            <button
              onClick={() => addNewItem('scenery')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors"
              style={{ cursor: 'pointer' }}
            >
              <Plus size={20} />
              নতুন ছবি যোগ করুন
            </button>
          </div>
        )}

        {/* Scenery Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filteredScenery.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group bg-white rounded-xl overflow-hidden shadow-lg"
            >
              <div className="relative h-56 md:h-64 overflow-hidden">
                <img 
                  src={item.url} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-lg md:text-xl font-bold mb-1">{item.title}</h3>
                  <p className="text-sm opacity-90">{item.description}</p>
                </div>
              </div>

              {/* Edit Mode Controls */}
              {isEditing && (
                <div className="absolute top-4 right-4 flex gap-2">
                  <button
                    onClick={() => removeItem('scenery', item.id)}
                    className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600"
                    style={{ cursor: 'pointer' }}
                  >
                    <X size={16} />
                  </button>
                </div>
              )}

              {/* Editable Fields in Edit Mode */}
              {isEditing && (
                <div className="p-4 space-y-3">
                  <input
                    type="text"
                    value={item.title}
                    onChange={(e) => handleEditField('scenery', item.id, 'title', e.target.value)}
                    className="w-full p-2 border rounded"
                    placeholder="ছবির শিরোনাম"
                  />
                  <textarea
                    value={item.description}
                    onChange={(e) => handleEditField('scenery', item.id, 'description', e.target.value)}
                    className="w-full p-2 border rounded"
                    placeholder="বর্ণনা"
                    rows="2"
                  />
                  <input
                    type="text"
                    value={item.url}
                    onChange={(e) => handleEditField('scenery', item.id, 'url', e.target.value)}
                    className="w-full p-2 border rounded"
                    placeholder="ছবির URL"
                  />
                  <select
                    value={item.category}
                    onChange={(e) => handleEditField('scenery', item.id, 'category', e.target.value)}
                    className="w-full p-2 border rounded"
                  >
                    <option value="nature">প্রকৃতি</option>
                    <option value="agriculture">কৃষি</option>
                    <option value="infrastructure">অবকাঠামো</option>
                    <option value="lifestyle">জীবনযাপন</option>
                  </select>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

  // Programs Section
  const ProgramsSection = () => (
    <section id="programs" className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">গ্রামের বিভিন্ন প্রোগ্রাম</h2>
          <p className="text-gray-600">বছরজুড়ে আয়োজিত বিভিন্ন সামাজিক, সাংস্কৃতিক ও ধর্মীয় কার্যক্রম</p>
        </motion.div>

        {/* Add New Program Button (Edit Mode) */}
        {isEditing && (
          <div className="text-center mb-8">
            <button
              onClick={() => addNewItem('programs')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
              style={{ cursor: 'pointer' }}
            >
              <Plus size={20} />
              নতুন প্রোগ্রাম যোগ করুন
            </button>
          </div>
        )}

        {/* Programs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {guataData.programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-xl"
            >
              <div className="md:flex">
                <div className="md:w-2/5">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-3/5 p-4 md:p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-2">
                        {program.type === 'sports' && 'ক্রীড়া'}
                        {program.type === 'cultural' && 'সাংস্কৃতিক'}
                        {program.type === 'agriculture' && 'কৃষি'}
                        {program.type === 'religious' && 'ধর্মীয়'}
                      </span>
                      <h3 className="text-lg md:text-xl font-bold text-gray-800">{program.title}</h3>
                    </div>
                    {isEditing && (
                      <button
                        onClick={() => removeItem('programs', program.id)}
                        className="p-2 text-red-500 hover:text-red-600"
                        style={{ cursor: 'pointer' }}
                      >
                        <X size={20} />
                      </button>
                    )}
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm md:text-base">{program.description}</p>
                  
                  <div className="flex items-center text-gray-500">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="font-medium">{program.month}</span>
                  </div>

                  {/* Editable Fields in Edit Mode */}
                  {isEditing && (
                    <div className="mt-4 space-y-3 p-4 bg-gray-50 rounded-lg">
                      <input
                        type="text"
                        value={program.title}
                        onChange={(e) => handleEditField('programs', program.id, 'title', e.target.value)}
                        className="w-full p-2 border rounded"
                        placeholder="প্রোগ্রামের নাম"
                      />
                      <textarea
                        value={program.description}
                        onChange={(e) => handleEditField('programs', program.id, 'description', e.target.value)}
                        className="w-full p-2 border rounded"
                        placeholder="বর্ণনা"
                        rows="2"
                      />
                      <input
                        type="text"
                        value={program.image}
                        onChange={(e) => handleEditField('programs', program.id, 'image', e.target.value)}
                        className="w-full p-2 border rounded"
                        placeholder="ছবির URL"
                      />
                      <select
                        value={program.type}
                        onChange={(e) => handleEditField('programs', program.id, 'type', e.target.value)}
                        className="w-full p-2 border rounded"
                      >
                        <option value="sports">ক্রীড়া</option>
                        <option value="cultural">সাংস্কৃতিক</option>
                        <option value="agriculture">কৃষি</option>
                        <option value="religious">ধর্মীয়</option>
                      </select>
                      <input
                        type="text"
                        value={program.month}
                        onChange={(e) => handleEditField('programs', program.id, 'month', e.target.value)}
                        className="w-full p-2 border rounded"
                        placeholder="মাস"
                      />
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

  // Schools Section
  const SchoolsSection = () => (
    <section id="schools" className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">গুয়াতা গ্রামের শিক্ষা প্রতিষ্ঠান</h2>
          <p className="text-gray-600">গ্রামের প্রাথমিক ও মাধ্যমিক স্তরের শিক্ষা প্রতিষ্ঠানসমূহ</p>
        </motion.div>

        {/* Add New School Button (Edit Mode) */}
        {isEditing && (
          <div className="text-center mb-8">
            <button
              onClick={() => addNewItem('schools')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors"
              style={{ cursor: 'pointer' }}
            >
              <Plus size={20} />
              নতুন স্কুল যোগ করুন
            </button>
          </div>
        )}

        {/* Schools Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {guataData.schools.map((school, index) => (
            <motion.div
              key={school.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-xl"
            >
              <div className="p-4 md:p-6">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center">
                    <div className="p-3 bg-blue-100 rounded-xl mr-4">
                      <School className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
                    </div>
                    <div>
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-2">
                        {school.type === 'primary' ? 'প্রাথমিক বিদ্যালয়' : 'উচ্চ বিদ্যালয়'}
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-800">{school.name}</h3>
                    </div>
                  </div>
                  {isEditing && (
                    <button
                      onClick={() => removeItem('schools', school.id)}
                      className="p-2 text-red-500 hover:text-red-600"
                      style={{ cursor: 'pointer' }}
                    >
                      <X size={20} />
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-gray-600 text-sm">প্রতিষ্ঠাকাল</p>
                    <p className="font-bold text-lg">{school.established}</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-gray-600 text-sm">মোট শিক্ষার্থী</p>
                    <p className="font-bold text-lg">{school.students} জন</p>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 text-sm md:text-base">{school.description}</p>
                <p className="text-gray-700 mb-2 flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  {school.address}
                </p>

                {/* Facebook Link */}
                {school.facebookLink && (
                  <a 
                    href={school.facebookLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors mt-4"
                  >
                    <Facebook size={20} />
                    Facebook পেজ দেখুন
                  </a>
                )}

                {/* Editable Fields in Edit Mode */}
                {isEditing && (
                  <div className="mt-6 space-y-3 p-4 bg-gray-50 rounded-lg">
                    <input
                      type="text"
                      value={school.name}
                      onChange={(e) => handleEditField('schools', school.id, 'name', e.target.value)}
                      className="w-full p-2 border rounded"
                      placeholder="স্কুলের নাম"
                    />
                    <textarea
                      value={school.description}
                      onChange={(e) => handleEditField('schools', school.id, 'description', e.target.value)}
                      className="w-full p-2 border rounded"
                      placeholder="বর্ণনা"
                      rows="2"
                    />
                    <input
                      type="text"
                      value={school.facebookLink}
                      onChange={(e) => handleEditField('schools', school.id, 'facebookLink', e.target.value)}
                      className="w-full p-2 border rounded"
                      placeholder="Facebook লিংক"
                    />
                    <input
                      type="text"
                      value={school.image}
                      onChange={(e) => handleEditField('schools', school.id, 'image', e.target.value)}
                      className="w-full p-2 border rounded"
                      placeholder="ছবির URL"
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        value={school.established}
                        onChange={(e) => handleEditField('schools', school.id, 'established', e.target.value)}
                        className="p-2 border rounded"
                        placeholder="প্রতিষ্ঠাকাল"
                      />
                      <input
                        type="text"
                        value={school.students}
                        onChange={(e) => handleEditField('schools', school.id, 'students', e.target.value)}
                        className="p-2 border rounded"
                        placeholder="শিক্ষার্থী সংখ্যা"
                      />
                    </div>
                    <select
                      value={school.type}
                      onChange={(e) => handleEditField('schools', school.id, 'type', e.target.value)}
                      className="w-full p-2 border rounded"
                    >
                      <option value="primary">প্রাথমিক বিদ্যালয়</option>
                      <option value="high">উচ্চ বিদ্যালয়</option>
                    </select>
                    <input
                      type="text"
                      value={school.address}
                      onChange={(e) => handleEditField('schools', school.id, 'address', e.target.value)}
                      className="w-full p-2 border rounded"
                      placeholder="ঠিকানা"
                    />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

  // Mosques Section
  const MosquesSection = () => (
    <section id="mosques" className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">গুয়াতা গ্রামের মসজিদসমূহ</h2>
          <p className="text-gray-600">গ্রামের বিভিন্ন এলাকায় অবস্থিত মসজিদের তালিকা</p>
        </motion.div>

        {/* Add New Mosque Button (Edit Mode) */}
        {isEditing && (
          <div className="text-center mb-8">
            <button
              onClick={() => addNewItem('mosques')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors"
              style={{ cursor: 'pointer' }}
            >
              <Plus size={20} />
              নতুন মসজিদ যোগ করুন
            </button>
          </div>
        )}

        {/* Mosques Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {guataData.mosques.map((mosque, index) => (
            <motion.div
              key={mosque.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-xl"
            >
              <div className="relative h-48">
                <img 
                  src={mosque.image} 
                  alt={mosque.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                {isEditing && (
                  <button
                    onClick={() => removeItem('mosques', mosque.id)}
                    className="absolute top-4 right-4 p-2 bg-red-500 text-white rounded-full hover:bg-red-600"
                    style={{ cursor: 'pointer' }}
                  >
                    <X size={16} />
                  </button>
                )}
              </div>
              
              <div className="p-4 md:p-6">
                <div className="flex items-center mb-4">
                  <Building className="w-6 h-6 text-green-600 mr-3" />
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-800">{mosque.name}</h3>
                    <p className="text-gray-600 text-sm">{mosque.area}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-gray-600 text-sm">ধারণক্ষমতা</p>
                    <p className="font-bold">{mosque.capacity} জন</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-gray-600 text-sm">প্রতিষ্ঠাকাল</p>
                    <p className="font-bold">{mosque.established}</p>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 text-sm md:text-base">{mosque.description}</p>
                
                <div className="flex items-center text-gray-700">
                  <Users className="w-4 h-4 mr-2" />
                  <span>ইমাম: {mosque.imam}</span>
                </div>

                {/* Editable Fields in Edit Mode */}
                {isEditing && (
                  <div className="mt-6 space-y-3 p-4 bg-gray-50 rounded-lg">
                    <input
                      type="text"
                      value={mosque.name}
                      onChange={(e) => handleEditField('mosques', mosque.id, 'name', e.target.value)}
                      className="w-full p-2 border rounded"
                      placeholder="মসজিদের নাম"
                    />
                    <input
                      type="text"
                      value={mosque.area}
                      onChange={(e) => handleEditField('mosques', mosque.id, 'area', e.target.value)}
                      className="w-full p-2 border rounded"
                      placeholder="এলাকা/পাড়া"
                    />
                    <textarea
                      value={mosque.description}
                      onChange={(e) => handleEditField('mosques', mosque.id, 'description', e.target.value)}
                      className="w-full p-2 border rounded"
                      placeholder="বর্ণনা"
                      rows="2"
                    />
                    <input
                      type="text"
                      value={mosque.image}
                      onChange={(e) => handleEditField('mosques', mosque.id, 'image', e.target.value)}
                      className="w-full p-2 border rounded"
                      placeholder="ছবির URL"
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        value={mosque.capacity}
                        onChange={(e) => handleEditField('mosques', mosque.id, 'capacity', e.target.value)}
                        className="p-2 border rounded"
                        placeholder="ধারণক্ষমতা"
                      />
                      <input
                        type="text"
                        value={mosque.established}
                        onChange={(e) => handleEditField('mosques', mosque.id, 'established', e.target.value)}
                        className="p-2 border rounded"
                        placeholder="প্রতিষ্ঠাকাল"
                      />
                    </div>
                    <input
                      type="text"
                      value={mosque.imam}
                      onChange={(e) => handleEditField('mosques', mosque.id, 'imam', e.target.value)}
                      className="w-full p-2 border rounded"
                      placeholder="ইমামের নাম"
                    />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

  // Contact Section with Google Map
  const ContactSection = () => (
    <section id="contact" className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">যোগাযোগ ও অবস্থান</h2>
          <p className="text-gray-600">গুয়াতা গ্রামের অবস্থান ও যোগাযোগের তথ্য</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white p-6 md:p-8 rounded-xl md:rounded-2xl shadow-lg">
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-gray-800">গ্রামের তথ্য</h3>
              
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <MapPin className="w-6 h-6 text-green-600 mr-4" />
                  <div>
                    <p className="font-medium text-gray-600">গ্রামের নাম</p>
                    <p className="text-lg font-bold">{guataData.basicInfo.village}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-gray-600 text-sm">ইউনিয়ন</p>
                    <p className="font-bold">{guataData.basicInfo.union}</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-gray-600 text-sm">থানা</p>
                    <p className="font-bold">{guataData.basicInfo.policeStation}</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-gray-600 text-sm">জেলা</p>
                    <p className="font-bold">{guataData.basicInfo.district}</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-gray-600 text-sm">বিভাগ</p>
                    <p className="font-bold">{guataData.basicInfo.division}</p>
                  </div>
                </div>
              </div>

              {/* Facebook Link */}
              <div className="mt-8">
                <a 
                  href={guataData.facebookPage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors w-full justify-center"
                >
                  <Facebook size={24} />
                  <span className="font-bold">Facebook পেজ দেখুন</span>
                </a>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-r from-green-500 to-blue-500 p-6 rounded-2xl text-white">
              <h4 className="text-xl font-bold mb-4">গ্রামের সংক্ষিপ্ত তথ্য</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm opacity-90">জনসংখ্যা</p>
                  <p className="text-2xl font-bold">{guataData.populationInfo.totalPopulation} জন</p>
                </div>
                <div>
                  <p className="text-sm opacity-90">ভোটার</p>
                  <p className="text-2xl font-bold">{guataData.populationInfo.totalVoters} জন</p>
                </div>
                <div>
                  <p className="text-sm opacity-90">স্কুল</p>
                  <p className="text-2xl font-bold">{guataData.schools.length} টি</p>
                </div>
                <div>
                  <p className="text-sm opacity-90">মসজিদ</p>
                  <p className="text-2xl font-bold">{guataData.mosques.length} টি</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Google Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white p-1 rounded-xl md:rounded-2xl shadow-2xl">
              <div className="h-[300px] md:h-[400px] rounded-xl overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14501.570613069915!2d89.07321386451719!3d24.679025446620155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fc683b1fa30b3b%3A0x5142b7119ae06b05!2sGuata!5e0!3m2!1sen!2sbd!4v1765913544070!5m2!1sen!2sbd"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Guata Village Location"
                  className="rounded-xl"
                ></iframe>
              </div>
              
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 md:px-6 md:py-3 rounded-full shadow-lg">
                <p className="font-semibold text-gray-800 flex items-center gap-2 text-sm md:text-base">
                  <MapPin className="w-4 h-4 md:w-5 md:h-5 text-red-600" />
                  গুয়াতা, নওগাঁ
                </p>
              </div>
            </div>

            {/* Map Instructions */}
            <div className="mt-6 bg-white p-4 md:p-6 rounded-xl shadow">
              <h4 className="text-lg font-bold mb-4 text-gray-800">মানচিত্র নির্দেশনা</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <MapPin className="w-4 h-4 text-green-600 mr-2" />
                  Google Maps-এ গুয়াতা গ্রামের অবস্থান
                </li>
                <li className="flex items-center">
                  <MapPin className="w-4 h-4 text-blue-600 mr-2" />
                  স্কুল ও মসজিদের অবস্থান দেখতে জুম করুন
                </li>
                <li className="flex items-center">
                  <MapPin className="w-4 h-4 text-red-600 mr-2" />
                  দিকনির্দেশনা পেতে মানচিত্রে ক্লিক করুন
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );

  // Footer
  const Footer = () => (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={guataData.images.profilePic} 
                alt="Guata"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="text-xl font-bold">গুয়াতা গ্রাম</h3>
                <p className="text-gray-400">নওগাঁ, বাংলাদেশ</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              রাজশাহী বিভাগের নওগাঁ জেলার রাণীনগর থানায় অবস্থিত একটি সুন্দর গ্রাম। 
              প্রাকৃতিক সৌন্দর্য, সমৃদ্ধ সংস্কৃতি ও আতিথেয়তার জন্য পরিচিত।
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">দ্রুত লিংক</h4>
            <div className="space-y-3">
              {['home', 'population', 'neighborhoods', 'notable-persons', 'scenery', 'schools', 'mosques', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block text-gray-400 hover:text-white transition-colors text-left"
                  style={{ cursor: 'pointer' }}
                >
                  {item === 'home' && 'হোম'}
                  {item === 'population' && 'জনসংখ্যা'}
                  {item === 'neighborhoods' && 'মোহল্লা'}
                  {item === 'notable-persons' && 'কৃতি সন্তান'}
                  {item === 'scenery' && 'সুন্দর দৃশ্য'}
                  {item === 'schools' && 'স্কুল'}
                  {item === 'mosques' && 'মসজিদ'}
                  {item === 'contact' && 'যোগাযোগ'}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">কৃতি সন্তান</h4>
            <div className="space-y-3">
              {guataData.notablePersons.slice(0, 3).map((person) => (
                <div key={person.id} className="text-gray-400 hover:text-white transition-colors">
                  <p className="font-medium">{person.name}</p>
                  <p className="text-sm">{person.designation}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">সামাজিক যোগাযোগ</h4>
            <div className="flex space-x-4 mb-6">
              <a 
                href={guataData.facebookPage}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors"
              >
                <Facebook size={24} />
              </a>
              <button className="p-3 bg-gray-800 rounded-lg hover:bg-pink-600 transition-colors"
                style={{ cursor: 'pointer' }}
              >
                <Instagram size={24} />
              </button>
            </div>
            
            <div className="p-4 bg-gray-800 rounded-lg">
              <p className="text-sm text-gray-400">
                © {new Date().getFullYear()} গুয়াতা গ্রাম। সর্বস্বত্ব সংরক্ষিত।
              </p>
              <p className="text-xs text-gray-500 mt-2">
                তথ্য সংগ্রহ: Facebook পেজ ও স্থানীয় সূত্র
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <PopulationSection />
      <NeighborhoodsSection />
      <NotablePersonsSection />
      <ScenerySection />
      <ProgramsSection />
      <SchoolsSection />
      <MosquesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;