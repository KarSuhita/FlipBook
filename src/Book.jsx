import React, { useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import './Book.css';

function Book() {
  const bookRef = useRef();

  const videoIds = [
    '-F3hK28Ho7w', 'SMCD8Wj4FQY', 'FJYIXbZ1xPY', 'UJQUPCLmktQ', 'OZa7wuItVzU', '2req7hUl7R4',
    'LYTAT8jYSic', 'CDKO2kTR7jo', 'UpKlTyu656Y', 'llVmONYEOaw', 'TX0EXLa_JUA', 'ipIyr1UtDFc',
    'mcLbC_0b1Cg', 'LUSH8jvxQJc', '5xIIUGd0j9I', 'SSICnL4riIw', '4JMlDyeGX4g', 'v9bvR7g0wr8',
    'kZia5NsJ0wI', 'Uyqsnhy-2H4', 'RogvmqYs0JU', '9fnWQ-_8lRY', 'kZ2aTVWAsbI', 'agTZ0pSrk3Q',
    '4oUJBwK8x7s', 'pEAPb6MArT4', 'E3kOtrgQMY4', 'm0U1vNhrXBc', '72ccj93yp78', 'QFL5AqN3p5A',
    '4q-06vbWNWE','twpATXZfuDs','32eXJ6FtcFc','_X-nLX1Pdck','og3fKOaBl6A','5EcwNKePrsU','xBGNYn9lf_w',
    'sk-QMZrHHM4','A1bJJw-nuc0','IOWE28s2P4U','OEfe0g1xaqI','0JKHzrqaJnw'

  ];

  const reelTitles = [
    "Intro to Your AI Journey!",
    "What Is AI?",
    "AI Examples You Use Daily",
    "AI vs. Human Brains ",
    "AI's Humble Beginnings ",
    "AI Goes Through \"Winters\" & Booms",
    "The Holy Grail: Artificial General Intelligence (AGI)",
    "AI in Big Business ",
    "What's Hard About AI? ",
    "More AI Hurdles ",
    "AI Isn't Just One Thing ",
    "The Big 3 AI Areas",
    "AI That Sees! ",
    "Computer Vision Examples",
    "AI That Understands You! ",
    "NLP Examples All Around You",
    "The Core of Modern AI: Machine Learning ",
    "Learning with a Teacher ",
    "Supervised Learning Examples",
    "Finding Patterns Alone",
    "Unsupervised Learning Examples",
    "Learning by Doing ",
    "Reinforcement Learning Examples",
    "Inspired by Brains: Neural Networks ",
    "Why 'Deep' Learning? ",
    "Where Deep Learning Excels",
    "AI with a Physical Body: Robotics Intro",
    "AI Robots in Action",
    "AI Based on Rules ",
    "Where Rule-Based AI is Still Used ",
    "AI Saving Lives ",
    "AI Improving Treatment",
    "AI Protecting Your Money",
    "AI in Investing & Loans ",
    "AI Making You Buy More?",
    "AI Running the Store",
    "AI Helping Farmers ",
    "AI Automating Agriculture ",
    "AI in the Classroom ",
    "AI Assisting Educators ",
    "AI Guiding Your Commute ",
    "The Future of Getting Around"
  ];

  const tocPagesCount = 5;
  const videoStartPageIndex = 7;

  function goToVideoPage(reelIndex) {
    if (bookRef.current) {
      bookRef.current.pageFlip().flip(videoStartPageIndex + reelIndex);
    }
  }

  const tocPages = [
    <div key="toc1" className="page tocPage">
      <h2>Table of Contents</h2>
      <ol className="tocList">
        <li>
          <b>Introduction to Artificial Intelligence</b>
          <ul>
            {[
              "Intro to Your AI Journey!",
              "What Is AI?",
              "AI Examples You Use Daily",
              "AI vs. Human Brains ",
              "AI's Humble Beginnings ",
              "AI Goes Through \"Winters\" & Booms",
              "The Holy Grail: Artificial General Intelligence (AGI)",
              "AI in Big Business ",
              "What's Hard About AI? ",
              "More AI Hurdles "
            ].map(topic => {
              const reelIdx = reelTitles.findIndex(t => t.trim() === topic.trim());
              return (
                <li key={topic.trim()}>
                  {reelIdx !== -1 ? (
                    <a
                      href="#"
                      style={{ color: "#014a99", textDecoration: "underline", cursor: "pointer" }}
                      onClick={e => { e.preventDefault(); goToVideoPage(reelIdx); }}
                    >
                      {topic}
                    </a>
                  ) : topic}
                </li>
              );
            })}
          </ul>
        </li>
      </ol>
    </div>,

    <div key="toc2" className="page tocPage">
      <h2>Table of Contents</h2>
      <ol className="tocList" start={2}>
        <li>
          <b>AI Subfields and Technologies</b>
          <ul>
            {[
              "AI Isn't Just One Thing ",
              "The Big 3 AI Areas",
              "AI That Sees! ",
              "Computer Vision Examples",
              "AI That Understands You! ",
              "NLP Examples All Around You",
              "The Core of Modern AI: Machine Learning ",
              "Learning with a Teacher ",
              "Supervised Learning Examples",
              "Finding Patterns Alone",
              "Unsupervised Learning Examples",
              "Learning by Doing ",
              "Reinforcement Learning Examples",
              "Inspired by Brains: Neural Networks ",
              "Why 'Deep' Learning? ",
              "Where Deep Learning Excels",
              "AI with a Physical Body: Robotics Intro",
              "AI Robots in Action",
              "AI Based on Rules ",
              "Where Rule-Based AI is Still Used "
            ].map(topic => {
              const reelIdx = reelTitles.findIndex(t => t.trim() === topic.trim());
              return (
                <li key={topic.trim()}>
                  {reelIdx !== -1 ? (
                    <a
                      href="#"
                      style={{ color: "#014a99", textDecoration: "underline", cursor: "pointer" }}
                      onClick={e => { e.preventDefault(); goToVideoPage(reelIdx); }}
                    >
                      {topic}
                    </a>
                  ) : topic}
                </li>
              );
            })}
          </ul>
        </li>
      </ol>
    </div>,

    <div key="toc3" className="page tocPage">
      <h2>Table of Contents</h2>
      <ol className="tocList" start={3}>
        <li>
          <b>Applications of AI</b>
          <ul>
            {[
              "AI Saving Lives ",
              "AI Improving Treatment ",
              "AI Protecting Your Money ",
              "AI in Investing & Loans ",
              "AI Making You Buy More? ",
              "AI Running the Store ",
              "AI Helping Farmers ",
              "AI Automating Agriculture ",
              "AI in the Classroom ",
              "AI Assisting Educators ",
              "AI Guiding Your Commute ",
              "The Future of Getting Around "
            ].map(topic => {
              const reelIdx = reelTitles.findIndex(t => t.trim() === topic.trim());
              return (
                <li key={topic.trim()}>
                  {reelIdx !== -1 ? (
                    <a
                      href="#"
                      style={{ color: "#014a99", textDecoration: "underline", cursor: "pointer" }}
                      onClick={e => { e.preventDefault(); goToVideoPage(reelIdx); }}
                    >
                      {topic}
                    </a>
                  ) : topic}
                </li>
              );
            })}
          </ul>
        </li>
      </ol>
    </div>,

    <div key="toc4" className="page tocPage">
      <h2>Table of Contents</h2>
      <ol className="tocList" start={4}>
        <li>
          <b>Bias and Fairness in AI Systems</b>
          <ul>
            {[
              "Why AI Needs Rules ",
              "The Challenge of AI Bias ",
              "Real-World Examples of AI Bias ",
              "The \"Black Box\" Problem ",
              "Who's Responsible When AI Fails? ",
              "AI and Your Personal Data ",
              "Can AI Systems Be Hacked? ",
              "Building AI That Works for Everyone ",
              "The Environmental Cost of AI ",
              "Making AI Dependable "
            ].map(topic => (
              <li key={topic.trim()}>{topic}</li> 
            ))}
          </ul>
        </li>
      </ol>
    </div>,

    <div key="toc5" className="page tocPage">
      <h2>Table of Contents</h2>
      <ol className="tocList" start={5}>
        <li>
          <b>AI in Research, Generative AI & Other Issues</b>
          <ul>
            {[
              "AI as a Scientific Partner",
              "AI That Creates! ",
              "Seeing is Believing: GenAI Examples",
              "Behind the Magic: How GenAI Works ",
              "Talking to AI ",
              "Asking AI the Right Way ",
              "What's Around the Corner? Exciting AI Trends ",
              "Shaping the Future of AI ",
              "AI and Your Job: Friend or Foe? ",
              "AI and Society: Ensuring Fairness "
            ].map(topic => (
              <li key={topic.trim()}>{topic}</li> 
            ))}
          </ul>
        </li>
      </ol>
    </div>
  ];

  const controlVideo = (index, action) => {
    const iframe = document.getElementById(`video-${index}`);
    if (iframe && iframe.contentWindow) {
      if (action === 'play') {
        iframe.contentWindow.postMessage(
          JSON.stringify({ event: 'command', func: 'seekTo', args: [0, true] }), '*'
        );
        iframe.contentWindow.postMessage(
          JSON.stringify({ event: 'command', func: 'playVideo', args: [] }), '*'
        );
      } else {
        iframe.contentWindow.postMessage(
          JSON.stringify({ event: 'command', func: 'pauseVideo', args: [] }), '*'
        );
      }
    }
  };

  const handlePageFlip = (e) => {
    const newPageIndex = e.data;
    if (
      newPageIndex >= videoStartPageIndex &&
      newPageIndex < videoStartPageIndex + videoIds.length
    ) {
      const videoIndex = newPageIndex - videoStartPageIndex;
      videoIds.forEach((_, i) => {
        if (i === videoIndex) controlVideo(i, 'play');
        else controlVideo(i, 'pause');
      });
    } else {
      videoIds.forEach((_, i) => controlVideo(i, 'pause'));
    }
  };

  return (
    <div className="book-container" style={{ position: 'relative' }}>
      <HTMLFlipBook
        ref={bookRef}
        width={410}
        height={655}
        showCover={true}
        onFlip={handlePageFlip}
      >
        {/* 0. Cover Page */}
        <div className="coverPage page">
          <img className="coverWallpaper" src="/wallpaper.jpg" alt="Background wallpaper" />
          <div className="coverOverlay">
            <img className="genAiLogo" src="/logo1.png" alt="Gen AI College Logo" />
            <h1 className="coverHeading">Fundamentals of AI</h1>
            <div className="coverSubtitle">Not a realbook, it's a reelbook</div>
          </div>
          <div className="coverSupportBottomLeft">
            Supported by <img className="pearsonInlineLogo" src="/pearson.jpeg" alt="Pearson Logo" />
          </div>
        </div>

        <div className="page acknowledgementPage">
          <h2>TEAM BEHIND THE BOOK</h2>
          <ol className="teamList">
            {[
              'Prof. Dr. Amit Kumar Das',
              'Archita Dasgupta',
              'Chandrashekhar Lall Chaudhury',
              'Kinshuk Ganguly',
              'Rajashik Datta',
              'Sagnik Rahman',
              'Sanjan Baitalik',
              'Sanket Ghosh',
              'Suhita Kar',
              'Sujaan Bhattacharyya',
              'Syed Sayan'
            ].map((name, idx) => (
              <li key={`member-${idx}`}>{name}</li>
            ))}
          </ol>
        </div>

        {tocPages}

        {videoIds.map((id, i) => (
          <div className="page videoPage" key={i}>
            <div className="topBar">
              <h3>{reelTitles[i]}</h3>
            </div>
            <div className="videoClickArea">
              <iframe
                className="reelVideo"
                id={`video-${i}`}
                src={`https://www.youtube.com/embed/${id}?enablejsapi=1&rel=0&modestbranding=1&controls=1`}
                title={reelTitles[i]}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                frameBorder="0"
              ></iframe>
            </div>
          </div>
        ))}

        <div className="page thankYouPage">
          <h2>Thank You</h2>
        </div>
      </HTMLFlipBook>

      <button
        className="floatingHomeBtn"
        onClick={() => bookRef.current && bookRef.current.pageFlip().flip(0)}
        title="Return to Cover"
      >
        🏠
      </button>
    </div>
  );
}

export default Book;
