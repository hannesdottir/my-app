import React from 'react';

interface FlagIconProps {
  countryCode: string;
}

function FlagIcon({ countryCode = "" }: FlagIconProps) {
    switch (countryCode) {
      case "en":
        return <img src="./images/english-flag.png" alt="English flag" className="w-4 h-4 mr-2 inline-block" />;
      case "sv":
        return <img src="./images/swedish-flag.png" alt="Swedish flag" className="w-4 h-4 mr-2 inline-block" />;
      case "is":
        return <img src="./images/icelandic-flag.png" alt="Icelandic flag" className="w-4 h-4 mr-2 inline-block" />;
      default:
        return null; // Or handle the default case as needed
    }
  }

export default FlagIcon;