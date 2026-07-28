import React, { useState, useEffect } from 'react';

const defaultPhrases = [
  'Scalable Infrastructure Solutions',
  'Custom Software Development',
  'Advanced Digital Strategies',
  'Cloud Migration & DevOps',
  'Intelligent Business Automation'
];

export default function Typewriter({
  phrases = defaultPhrases,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 2000
}) {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    let timer;

    if (!isDeleting && charIndex < currentPhrase.length) {
      timer = setTimeout(() => {
        setText(currentPhrase.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
    } else if (!isDeleting && charIndex === currentPhrase.length) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, pauseTime);
    } else if (isDeleting && charIndex > 0) {
      timer = setTimeout(() => {
        setText(currentPhrase.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, deletingSpeed);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, phraseIndex, phrases, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <h2 className="text-lg md:text-2xl text-gray-400 font-bold h-12 typewriter mb-10 max-w-[650px] mx-auto">
      {text}
    </h2>
  );
}
