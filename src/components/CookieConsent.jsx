import React, { useState, useEffect } from 'react';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice about cookies
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
    // You can add additional logic here to enable analytics, tracking, etc.
    console.log('Cookies accepted');
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowBanner(false);
    // You can add logic here to disable non-essential cookies
    console.log('Cookies declined');
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-200 shadow-lg z-50 transition-all duration-300 ease-in-out">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              We use cookies to enhance your browsing experience, serve personalized content, 
              and analyze our traffic. By clicking "Accept", you consent to our use of cookies. 
              You can learn more in our{' '}
              <a 
                href="/cookie-policy" 
                className="text-[#F14F21] hover:text-[#0A3161] underline font-medium transition-colors"
              >
                Cookie Policy
              </a>
              {' '}and{' '}
              <a 
                href="/privacy-policy" 
                className="text-[#F14F21] hover:text-[#0A3161] underline font-medium transition-colors"
              >
                Privacy Policy
              </a>
              .
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 min-w-fit">
            <button
              onClick={handleDecline}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors duration-200 font-medium text-sm md:text-base"
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              className="px-6 py-2 bg-[#0A3161] text-white rounded-md hover:bg-[#F14F21] transition-colors duration-200 font-medium text-sm md:text-base"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;