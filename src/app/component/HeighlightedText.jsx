"use client"

const HeighlightedText = ({ text, highlight }) => {
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return (
        <span>
            {parts.map((part, index) =>
                part.toLowerCase() === highlight.toLowerCase() ? (
                <span key={index} style={{ backgroundColor: 'orange' }}>
                    {part}
                </span>
                ) : (
                <span key={index}>{part}</span>
                )
            )}
    </span>
    );
};

export default HeighlightedText;