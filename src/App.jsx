import React, { useState } from 'react';
import './App.css';

// Asset Imports
import bookBg from './assets/images/book-cover.jpg';
import turtleNationLogo from './assets/images/turtle-nation-logo.png';
import turtleNationMusicPhoto2 from './assets/images/turtle-nation-music-photo-2.jpg';
import turtleNationMusicPhoto6 from './assets/images/turtle-nation-music-photo-6.jpg';
import dennisPortrait1 from './assets/images/dennis-portrait1.jpg';
import dennisPortrait2 from './assets/images/dennis-portrait2.jpg';
import faithBg from './assets/images/faith-album.jpg';
import ipressBg from './assets/images/ipress-album.jpg';
import whyWeSingBg from './assets/images/why-we-sing-album.jpg';
import aFamilyAffairBg from './assets/images/a-family-affair-album.jpg';

// Icon Imports
import { SiSpotify, SiApplemusic, SiTidal } from 'react-icons/si';
import { FaAmazon } from 'react-icons/fa6';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="app-container">
      {/* Dynamic Structural Navigation Header */}
      <nav className="nav-bar">
        <div className="logo-brand" onClick={() => setActiveTab('home')}>
          TURTLE NATION
        </div>
        <div className="nav-links">
          {['home', 'about', 'publishing', 'music', 'media', 'contact'].map((tab) => (
            <button 
              key={tab}
              className={activeTab === tab ? 'active' : ''} 
              onClick={() => setActiveTab(tab)}
            >
              {tab === 'media' ? 'Articles & Media' : tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </nav>

      {/* Main View Switchboard Matrix */}
      <main className="main-content-view">
        {activeTab === 'home' && <HomeView onNavigate={setActiveTab} />}
        {activeTab === 'about' && <AboutView />}
        {activeTab === 'publishing' && <PublishingView />}
        {activeTab === 'music' && <MusicView />}
        {activeTab === 'media' && <MediaView />}
        {activeTab === 'contact' && <ContactView />}
      </main>

      <footer className="app-footer">
        <p className="footer-quote">
          "It is not about the speed but the mentality. And that mentality is Never Give Up."
        </p>
      </footer>
    </div>
  );
}

// ==========================================
// HOME VIEW
// ==========================================
const HomeView = () => (
  <div className="view-container text-layout-max">
    <header className="home-hero-intro">
      <h1 className="logo-brand-display">Welcome to Turtle Nation Ministries</h1>
      <p className="hero-tagline">
        Where we believe it is not about the speed but the mentality. 
        And that mentality is <strong>Never Give Up</strong>. Remember the rabbit…
      </p>
    </header>

    <section className="home-description-card">
      <p>
        Turtle Nation is a ministry with a multi-facet approach to ministering to people. 
        We have <strong>Turtle Nation Publishing</strong>, a ministry through publications with a book 
        about our very own Dennis Turner’s life story entitled: <em>The Boy from the Ditch</em>. 
        Then, there is <strong>Turtle Nation Production</strong>, where we have produced a live stage play 
        based on the story of Dennis Turner also entitled: <em>The Boy from the Ditch</em>.
      </p>
      <p>
        And last but certainly not least is <strong>Turtle Nation Music</strong>, which is the rock of 
        Turtle Nation Ministries. Our music ministry has ministered to thousands all over the United States. 
        This is just the beginning to Turtle Nation Ministries. 
      </p>
      <p className="vision-highlight">
        Turtle Nation Ministries will soon begin to offer scholarships to worthy students and develop 
        a food ministry to minister to the needy.
      </p>
    </section>

    <section className="video-section-wrapper">
      <div className="video-embed-container">
        <iframe 
          src="https://www.youtube.com/embed/QLQMhYIhmG8" 
          title="Where Did I Begin" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
        />
      </div>
    </section>
  </div>
);

// ==========================================
// ABOUT VIEW
// ==========================================
const AboutView = () => (
  <div className="view-container text-layout-max">
    <h1 className="view-titlecenter">Meet Dennis Turner Sr.</h1>
    
    <div className="about-profile-container">
      <div className="about-photo-wrapper">
        <div 
          className="about-portrait-image"
          style={{ backgroundImage: dennisPortrait2 ? `url(${dennisPortrait2})` : 'none' }}
        />
      </div>

      <div className="about-details-box">
        <p>
          Dennis F. Turner was born in Tunica, MS and lived on Sugar Ditch. After living in Tunica for 
          most of his childhood Dennis’s family moved to Memphis, TN in the late 80’s. It was there where 
          Dennis graduated from Craigmont High School and went off to college in Alabama. Oakwood University 
          (then Oakwood College) was Dennis’ home for 5 years. He graduated from Oakwood with a 
          Bachelor’s in 1997.
        </p>
        <p>
          After finishing Oakwood University Dennis went on to pursue his Master’s from Alabama A&M University 
          in Huntsville, AL and graduated in 2001. After working as a teacher for a while, Dennis decided to 
          pursue his Ed.S. and Ed.D. in Educational Leadership and Administration, but stopped to write his story 
          in a tell all book entitled: <em>The Boy from the Ditch</em>.
        </p>
        <p>
          This pursuit also sparks the vision in Dennis to begin his purpose of inspirational speaking, writing 
          and producing his own music and play. Dennis is a very dynamic and animated speaker. He has the 
          ability to captivate and engage a wide range audience. His testimony is one of perseverance and 
          inspiration.
        </p>
        <p className="profile-footer-highlight">
          Dennis, his wife Tene`, and their three children Dennis II, Dylan, and London live happily in Greensboro, NC.
        </p>
      </div>
    </div>
  </div>
);

// ==========================================
// MUSIC VIEW
// ==========================================
const MusicView = () => {
  const albums = [
    {
      title: "Faith (2017)",
      desc: "The acclaimed debut studio project establishing the Turtle Nation sound.",
      bgImage: faithBg,
      bgPosition: "center center",
      streamingLinks: [
        { name: "Spotify", url: "https://open.spotify.com/album/0yyy4Hbnz09cjRSd0ng6JK?si=ujxkejQUR-2hOmdRphGJDw", icon: <SiSpotify />, class: "spot" },
        { name: "Apple Music", url: "https://music.apple.com/us/album/faith/1209512246", icon: <SiApplemusic />, class: "a-mus" },
        { name: "Amazon Music", url: "https://amazon.com/music/player/albums/B06X9WFFP2?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_9kV1SRN2LMagX0j9EZPgCfY9d", icon: <FaAmazon/>, class: "amz" },
        { name: "Tidal", url: "https://tidal.com/album/70825310", icon: <SiTidal />, class: "tide" }
      ]
    },
    {
      title: "I Press Philippians 3:14 (2020)",
      desc: "Award-winning sophomore release emphasizing resilience.",
      bgImage: ipressBg,
      bgPosition: "center top",
      streamingLinks: [
        { name: "Spotify", url: "https://open.spotify.com/album/6D7nfDkgNJKzgjQbpN0ZB1?si=YmgssLKHQImEIaw2cTmopA", icon: <SiSpotify />, class: "spot" },
        { name: "Apple Music", url: "https://music.apple.com/us/album/i-press-philippians-3-14/1500862298", icon: <SiApplemusic />, class: "a-mus" },
        { name: "Amazon Music", url: "https://amazon.com/music/player/albums/B0859P9RFV?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_aoVS80iA2hRUNap1yqqMULDPd", icon: <FaAmazon/>, class: "amz" },
        { name: "Tidal", url: "https://tidal.com/album/132857713", icon: <SiTidal />, class: "tide" }
      ]
    },
    {
      title: "Why We Sing (2022)",
      desc: "Third album with an infectious 'Country Soul' sound.",
      bgImage: whyWeSingBg,
      bgPosition: "center top",
      streamingLinks: [
        { name: "Spotify", icon: <SiSpotify />, class: "spot" },
        { name: "Apple Music", url: "https://music.apple.com/us/album/why-we-sing/1642887745", icon: <SiApplemusic />, class: "a-mus" },
        { name: "Amazon Music", url: "https://amazon.com/music/player/albums/B0BCPV7C1D?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_USq0xqI8L62Xfmh2zIrn1makG", icon: <FaAmazon/>, class: "amz" },
        { name: "Tidal", url: "https://tidal.com/album/246776267", icon: <SiTidal />, class: "tide" }
      ]
    },
    {
      title: "A Family Affair (2024)",
      desc: "The heartfelt family collection documenting deep harmonies and structural performance legacy.",
      bgImage: aFamilyAffairBg,
      bgPosition: "center top",
      streamingLinks: [
        { name: "Spotify", url: "https://open.spotify.com/album/15U02B3vQhZwacjU1I2EEH?si=8rE3c2IdRwWRqi-kWk7hkw", icon: <SiSpotify />, class: "spot" },
        { name: "Apple Music", url: "https://music.apple.com/us/album/a-family-affair/1782890333", icon: <SiApplemusic />, class: "a-mus" },
        { name: "Amazon Music", url: "https://amazon.com/music/player/albums/B0DPGB127B?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_1jHFWihxiimOg7sfrwzniWdDp", icon: <FaAmazon/>, class: "amz" },
        { name: "Tidal", url: "https://tidal.com/album/403139370", icon: <SiTidal />, class: "tide" }
      ]
    }
  ];

  return (
    <div className="view-container text-layout-max">
      <h1 className="view-titlecenter">Discography</h1>
      <p className="view-subtitlecenter">Dennis Turner & The Turtle Nation Family dynamic gospel projects.</p>
      
      <div className="media-grid-system">
        {albums.map((album, idx) => (
          <div key={idx} className="modular-content-card media-stacked-layout">
            <div className="album-art-wrapper">
              <div
                className="music-art-tile-static"
                style={{ 
                  backgroundImage: album.bgImage ? `url(${album.bgImage})` : 'none',
                  backgroundPosition: album.bgPosition
                }}
              />
            </div>
            
            <div className="album-mini-links mid-links-bar detached-bar">
              {album.streamingLinks.map((link, linkIdx) => {
                if (!link.url) return null;
                return (
                  <a 
                    key={linkIdx}
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`mini-icon-btn ${link.class}`} 
                    title={`Stream on ${link.name}`}
                  >
                    {link.icon}
                  </a>
                );
              })}
            </div>

            <div className="music-details detached-details">
              <h3>{album.title}</h3>
              <p>{album.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <hr className="dark-divider" />

      <section className="editorial-text-section">
        <h2>About Turtle Nation Music</h2>
        <div className="editorial-rich-typography">
          <p>
            Dennis Turner and The Turtle Nation Family was founded in 2015 by Dennis Turner. 
            Dennis and his wife Tene` have built a small but productive music ministry from scratch, 
            assembling a powerful team of singers representing Memphis, TN, Mississippi, and now North Carolina.
          </p>
          <p>
            With deep faith and incredible dedication, the ministry has made massive strides. 
            Turtle Nation Music is a dream company born entirely from Dennis Turner's vision. 
            Expanding beyond music production, Turtle Nation Productions has also produced a powerful stage play 
            entitled <em>The Boy from the Ditch</em>, which adapts the story of Dennis Turner’s premier book of the same title.
          </p>
          <p>
            Spreading their message nationwide, Dennis Turner and The Turtle Nation Family have performed 
            across the country, from New York City and Memphis, TN, to Huntsville, Alabama, Miami, FL, and North Carolina. 
            They have been privileged to share the stage with acclaimed national recording artists including 
            Travis Greene, Hezekiah Walker, Mike Brown & Focus, and Benita Jones.
          </p>
          <p>
            Their celebrated studio timeline includes their groundbreaking debut album, <em>Faith</em>, released on April 8, 2017. 
            This was followed by two moving singles: "Children of God" (July 15, 2018) and "Father’s House" (November 16, 2018). 
            On March 28, 2020, they dropped their highly anticipated sophomore album, <em>I Press...</em>
          </p>
          <p>
            Today, Dennis Turner and The Turtle Nation Family are celebrated as two-time Rhythm of Gospel Music Award winners—taking 
            home honors for <em>Contemporary Group/Ensemble of the Year</em> and <em>Best Performance by a Group/Duo of the Year</em> in 2020. 
            While Dennis was born in Tunica, Mississippi, he and The Turtle Nation Family are now proud to call Greensboro, NC home.
          </p>
        </div>
      </section>
    </div>
  );
};

// ==========================================
// PUBLISHING VIEW
// ==========================================
const PublishingView = () => {
  const reviews = [
    {
      text: "It is an honor to endorse this book. I remember saying to the author, 'If you work and study hard, you will achieve your goal.' Now, look at what he has accomplished with so many obstacles in his path. May God continue to enrich his life as he soars to new heights! And, he is still a dominant threat in the 'paint.'",
      author: "Professor Howard Shaw, Ph.D.",
      affiliation: "Oakwood University"
    },
    {
      text: "The Boy from the Ditch provides indisputable evidence that origins don’t determine destiny, and that challenges can either be used as excuses to quit or as stepping stones to greater achievement. This graphic autobiography of a successful man with an indomitable spirit and intestinal fortitude is a must read for the aspiring who are determined to make it!",
      author: "Dr. James Doggette, Ph.D.",
      affiliation: "Senior Pastor of Patmos Chapel in Orlando, FL"
    }
  ];

  return (
    <div className="view-container text-layout-max">
      <h1 className="view-titlecenter">Turtle Nation Publishing</h1>
      <p className="view-subtitlecenter">Transforming trials into triumphant literature.</p>
      
      <div className="media-grid-system space-below-large">
        {/* Module A: The Book */}
        <div className="modular-content-card media-stacked-layout">
          <div className="album-art-wrapper book-cover-wrapper">
            <div
              className="music-art-tile-static"
              style={{ backgroundImage: bookBg ? `url(${bookBg})` : 'none' }}
            />
          </div>
          
          <div className="album-mini-links mid-links-bar detached-bar publishing-bar">
            <button className="action-btn wide-action-btn" onClick={() => window.open('https://amazon.com', '_blank')}>
              Order on Amazon
            </button>
          </div>

          <div className="music-details detached-details">
            <h3 className="publishing-accent-title">The Book: "The Boy from the Ditch"</h3>
            <p>
              A gripping autobiography outlining Dennis Turner's journey out of absolute poverty into higher education and global ministry. A testament to using obstacles as stepping stones.
            </p>
          </div>
        </div>

        {/* Module B: The Stage Play */}
        <div className="modular-content-card media-stacked-layout">
          <div className="video-embed-container grid-video-box">
            <iframe 
              src="https://www.youtube.com/embed/-97d6AlO7K8" 
              title="The Boy from the Ditch Stage Play Trailer 1" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
            />
          </div>

          <div className="album-mini-links mid-links-bar detached-bar publishing-bar empty-bar">
            <span className="bar-label-text">OFFICIAL TRAILER</span>
          </div>

          <div className="music-details detached-details">
            <h3 className="publishing-accent-title">The Stage Play Production</h3>
            <p>
              Written and directed by Dennis Turner, this graphic theatrical adaptation brings the book to life on stage, having toured packed houses at Oakwood University and the Kroc Center in Memphis.
            </p>
          </div>
        </div>
      </div>

      <hr className="dark-divider" />

      {/* Featured Media Spotlight Container */}
      <section className="space-below-large">
        <h2 className="section-block-title">Featured Media Spotlight</h2>
        <div className="video-embed-container space-below-small">
          <iframe 
            src="https://www.youtube.com/embed/vEQOqiQuTYs" 
            title="From Sugar Ditch to educational success" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
          />
        </div>
        
        <div className="video-context-box">
          <p>
            In 1985, Rev. Jesse Jackson, on CBS 60 Minutes, brought national 
            attention to a county in Mississippi, known as “Sugar Ditch”. The 
            documentary exposed that Tunica’s “Sugar Ditch” was the poorest county 
            in the United States, calling it “America’s Ethiopia”. This stage play 
            portrays the compelling and riveting story of one boy’s journey from the 
            low and dirty ditches of Mississippi, to becoming the successful and 
            educated man he is today.
          </p>
        </div>
      </section>

      <hr className="dark-divider" />

      {/* Testimonials / Editorial Reviews Section */}
      <section className="endorsements-section">
        <h2 className="section-block-title text-center">Editorial Endorsements</h2>
        <div className="reviews-layout-stack">
          {reviews.map((review, i) => (
            <div key={i} className="review-quote-card">
              <span className="quote-mark">“</span>
              <p className="quote-text">{review.text}</p>
              <div className="quote-attribution">
                <span className="reviewer-name">{review.author}</span>
                <span className="reviewer-title">{review.affiliation}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

// ==========================================
// MEDIA VIEW
// ==========================================
const MediaView = () => (
  <div className="view-container text-layout-max">
    <h1 className="view-titlecenter">Articles & Media Appearances</h1>
    <p className="view-subtitlecenter">
      Discover national press features, deep-dive media spotlights, and exclusive interviews covering the story, music, and widespread impact of Dennis Turner and Turtle Nation Ministries.
    </p>
    
    <div className="media-grid-system space-below-large">
      {/* Item 1: Sheen Magazine */}
      <a href="https://sheenmagazine.com/gospels-favorite-family-dennis-turner-tnf-talks-new-album-country-soul-and-having-a-sound-all-their-own/" 
         target="_blank" 
         rel="noopener noreferrer" 
         className="appearance-interactive-card source-sheen">
        <div className="card-accent-strip"></div>
        <div className="appearance-card-content">
          <span className="source-tag">Sheen Magazine</span>
          <h3>Gospel’s Favorite Family: Dennis Turner & TNF</h3>
          <p>An intimate feature exploring Turtle Nation's distinct "Country Soul" gospel sound, their latest album rollout, and what it means to build a ministry with a style completely their own.</p>
          <span className="read-more-link">Read Article <span className="arrow">→</span></span>
        </div>
      </a>

      {/* Item 2: True Voice Podcast */}
      <a href="https://truevoice.com/episode/s01e02-the-boy-from-the-ditch-dennis-turner/" 
         target="_blank" 
         rel="noopener noreferrer" 
         className="appearance-interactive-card source-podcast">
        <div className="card-accent-strip"></div>
        <div className="appearance-card-content">
          <span className="source-tag">True Voice Podcast</span>
          <h3>Episode: The Boy from the Ditch</h3>
          <p>A powerful, deep-dive interview uncovering Dennis's early childhood roots in Sugar Ditch, Mississippi, beating incredible systemic odds, and his transition into a passionate educator and motivational singer.</p>
          <span className="read-more-link">Listen to Episode <span className="arrow">→</span></span>
        </div>
      </a>

      {/* Item 3: Black News Scoop - Book Release */}
      <a href="https://www.blacknewsscoop.com/2022/09/dont-miss-highly-anticipated-release.html" 
         target="_blank" 
         rel="noopener noreferrer" 
         className="appearance-interactive-card source-scoop">
        <div className="card-accent-strip"></div>
        <div className="appearance-card-content">
          <span className="source-tag">Black News Scoop</span>
          <h3>Don’t Miss This Highly Anticipated Release</h3>
          <p>A national press feature detailing the launch and background of Dennis Turner's acclaimed biological chronicle and live production blueprint, <em>The Boy from the Ditch</em>.</p>
          <span className="read-more-link">Read Press Release <span className="arrow">→</span></span>
        </div>
      </a>

      {/* Item 4: Black News Scoop - Rising Royal */}
      <a href="https://www.blacknewsscoop.com/2022/09/be-inspired-with-this-rising-royal.html" 
         target="_blank" 
         rel="noopener noreferrer" 
         className="appearance-interactive-card source-royal">
        <div className="card-accent-strip"></div>
        <div className="appearance-card-content">
          <span className="source-tag">Black News Scoop</span>
          <h3>Be Inspired with This Rising Royal</h3>
          <p>An inspirational spotlight piece capturing Dennis Turner’s artistic momentum and his expanding footprint across public speaking, gospel tracks, and stage ministries.</p>
          <span className="read-more-link">Read Feature <span className="arrow">→</span></span>
        </div>
      </a>
    </div>
  </div>
);

// ==========================================
// CONTACT VIEW
// ==========================================
const ContactView = () => {
  const socials = [
    {
      name: "Turtle Nation Ministries",
      type: "Community Hub",
      desc: "Our main community base for ministry updates, events, and family news.",
      url: "http://facebook.com/Turtlenationministries",
      className: "bento-hero",
      bgImage: turtleNationMusicPhoto2,
      bgSize: "contain",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
    },
    {
      name: "Dennis Turner",
      type: "LinkedIn",
      desc: "Professional timeline, speaking bookings, and career history.",
      url: "http://linkedin.com/in/dennis-turner-40a3392a",
      className: "bento-linkedin",
      bgImage: dennisPortrait1,
      bgPosition: "center top",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
    },
    {
      name: "Turtle Nation",
      type: "Instagram",
      desc: "Daily inspiration, photography, and short video reels.",
      url: "https://www.instagram.com/turtlenation32",
      className: "bento-instagram",
      bgImage: turtleNationLogo,
      bgSize: "contain",
      bgColor: "#fcba03",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
    },
    {
      name: "Dennis Turner & Turtle Nation Family",
      type: "Music Page",
      desc: "Concert streams, community threads, and live music performance threads.",
      url: "https://www.facebook.com/dennisturnerandtheturtlenationfamily",
      className: "bento-wide",
      bgImage: turtleNationMusicPhoto6,
      bgPosition: "center top",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
    },
    {
      name: "The Boy from the Ditch",
      type: "Book Page",
      desc: "Updates regarding literary events, book store locations, and tour schedules.",
      url: "https://www.facebook.com/TheBoyfromtheDitch",
      className: "bento-standard",
      bgImage: bookBg,
      bgPosition: "center top",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
    }
  ];

  return (
    <div className="view-container">
      <h1 className="view-titlecenter">Contact & Booking</h1>
      <p className="view-subtitlecenter">
        Available for musical performances, keynote speaking engagements, book signings, and theatrical bookings.
      </p>

      <div className="email-cta-card">
        <h3>Email Inquiries</h3>
        <p>Direct all booking requests and ministry inquiries via email:</p>
        <a href="mailto:coachd92@gmail.com" className="contact-email">
          coachd92@gmail.com
        </a>
      </div>

      <h2 className="section-block-title">Connect Online</h2>
      
      <div className="bento-grid">
        {socials.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`bento-card ${social.className}`}
            style={{
              backgroundImage: social.bgImage ? `url(${social.bgImage})` : 'none',
              backgroundSize: social.bgSize || 'cover',
              backgroundPosition: social.bgPosition || 'center center',
              backgroundColor: social.bgColor || 'var(--card-bg)',
            }}
          >
            <div className="bento-card-header">
              <span className="bento-icon">{social.icon}</span>
              <span className="bento-badge">{social.type}</span>
            </div>
            <div className="bento-card-body">
              <h3>{social.name}</h3>
              <p>{social.desc}</p>
            </div>
            <span className="bento-arrow">↗</span>
          </a>
        ))}
      </div>
    </div>
  );
};
