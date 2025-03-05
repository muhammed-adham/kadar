import React, { useState } from 'react';

const YouTubeVideo = ({videoID, isHovered}) => {
    const videoUrl = `https://www.youtube.com/embed/${videoID}?autoplay=1`;

    const handleClick = () => {
        window.open(`https://www.youtube.com/watch?v=${videoID}`, '_blank');
    };

    return (
        <div
            className="video-container"
            // onMouseEnter={handleMouseEnter}
            // onMouseLeave={handleMouseLeave}
            onClick={handleClick}
            style={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '0.5rem',
                height: '10.125rem',
                cursor: 'pointer'
            }}
        >
            <div
                className="thumbnail"
                style={{
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(https://img.youtube.com/vi/${videoID}/hqdefault.jpg)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            ></div>
            {/* {isHovered && (
                <iframe
                    src={videoUrl}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        border: 'none',
                        transition: 'opacity 0.3s',
                        opacity: 1
                    }}
                    allowFullScreen
                ></iframe>
            )} */}
        </div>
    );
};

export default YouTubeVideo;