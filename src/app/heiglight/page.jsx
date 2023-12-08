import React from 'react';
import HeighlightedText from '../component/HeighlightedText';

const page = () => {
    const mySentence = "The quick brown fox jumps over the lazy dog.";
    const highlightText = "quick brown fox jumps";
  
    return (
      <div>
        <p>
          <HeighlightedText text={mySentence} highlight={highlightText} />
        </p>
      </div>
    );
};

export default page;