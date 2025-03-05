import React, { createContext, useContext, useState, useEffect } from "react";
import { LanguageContext } from "./LanguageContext";

const DirectionContext = createContext();

export const useDirection = () => {
  return useContext(DirectionContext);
};

export const DirectionProvider = ({ children }) => {
  const { language } = useContext(LanguageContext);
  const [direction, setDirection] = useState("ltr");

  useEffect(() => {
    // Set direction based on language
    const isRTL = language === "ar" || language === "he"; // Add other RTL languages as needed
    setDirection(isRTL ? "rtl" : "ltr");
  }, [language]);

  useEffect(() => {
    document.documentElement.setAttribute("dir", direction);
    updateBootstrapClasses(direction);
    injectDirectionStyles(direction);
    updateIconDirection(direction); // Update icon direction
  }, [direction]);

  const toggleDirection = () => {
    setDirection((prevDirection) => (prevDirection === "ltr" ? "rtl" : "ltr"));
  };

  return (
    <DirectionContext.Provider value={{ direction, toggleDirection }}>
      {children}
    </DirectionContext.Provider>
  );
};

// Utility function to update Bootstrap classes for start/end positions
export const updateBootstrapClasses = (dir) => {
  const elements = document.querySelectorAll(
    '[class*="me"], [class*="pe"], [class*="ms"], [class*="ps"], [class*="start-"], [class*="end-"], [class*="fadeInLeft"], [class*="fadeInRight"]'
  );

  elements.forEach((el) => {
    const newClasses = [];

    el.classList.forEach((cls) => {
      if (dir === "rtl") {
        // Change margin and padding classes for RTL
        if (cls.startsWith("ms-")) {
          newClasses.push(cls.replace("ms-", "me-")); // ms- to me-
        } else if (cls.startsWith("me-")) {
          newClasses.push(cls.replace("me-", "ms-")); // me- to ms-
        } else if (cls.startsWith("ps-")) {
          newClasses.push(cls.replace("ps-", "pe-")); // ps- to pe-
        } else if (cls.startsWith("pe-")) {
          newClasses.push(cls.replace("pe-", "ps-")); // pe- to ps-
        }

        // Change start/end classes
        else if (cls.startsWith("start-")) {
          newClasses.push(cls.replace("start-", "end-")); // start- to end-
        } else if (cls.startsWith("end-")) {
          newClasses.push(cls.replace("end-", "start-")); // end- to start-
        }
        
        // Change fade classes
        else if (cls === "fadeInRight") {
          newClasses.push("fadeInLeft"); // Change fadeInRight to fadeInLeft
        }else if (cls === "fadeInLeft"){
          newClasses.push("fadeInRight"); // Change fadeInLeft to fadeInRight
        }
         else {
          newClasses.push(cls); // Keep unchanged classes
        }
      } else {
        // For LTR, reverse the changes
        if (cls.startsWith("me-")) {
          newClasses.push(cls.replace("me-", "ms-")); // me- to ms-
        } else if (cls.startsWith("ms-")) {
          newClasses.push(cls.replace("ms-", "me-")); // ms- to me-
        } else if (cls.startsWith("pe-")) {
          newClasses.push(cls.replace("pe-", "ps-")); // pe- to ps-
        } else if (cls.startsWith("ps-")) {
          newClasses.push(cls.replace("ps-", "pe-")); // ps- to pe-
        }

        // Change start/end classes
        else if (cls.startsWith("end-")) {
          newClasses.push(cls.replace("end-", "start-")); // end- to start-
        } else if (cls.startsWith("start-")) {
          newClasses.push(cls.replace("start-", "end-")); // start- to end-
        } else if (cls === "fadeInLeft") {
          newClasses.push("fadeInRight"); // Change fadeInLeft to fadeInRight
        } else {
          newClasses.push(cls); // Keep unchanged classes
        }
      }
    });

    // Clear existing classes and add new ones
    el.className = newClasses.join(" ");
  });
};

// Function to update icon direction
const updateIconDirection = (dir) => {
  const icons = document.querySelectorAll(".fas"); // Select all <i> tags
  icons.forEach((icon) => {
    icon.style.transform = dir === "rtl" ? "scaleX(-1)" : "scaleX(1)"; // Apply transformation
  });
};

// Function to inject direction-specific styles
const injectDirectionStyles = (dir) => {
  const style =
    document.getElementById("direction-styles") ||
    document.createElement("style");
  style.id = "direction-styles";

  if (dir === "rtl") {
    style.innerHTML = `
            .sub-title::before {
                right: auto;
                left: 0;
                margin-right: auto;
                margin-left: -100px;
            }
            .sub-title::after {
                right: auto;
                left: 0;
                margin-right: auto;
                margin-left: -50px;
            }
            .sub-style::before {
                right: 0; /* Reset to original styles */
                left: auto; /* Reset to original styles */
                margin-right: -100px; /* Reset to original styles */
                margin-left: auto; /* Reset to original styles */
            }
            .sub-style::after {
                right: 0; /* Reset to original styles */
                left: auto; /* Reset to original styles */
                margin-right: -50px; /* Reset to original styles */
                margin-left: auto; /* Reset to original styles */
            }
        `;
  } else {
    style.innerHTML = `
            .sub-title::before {
                right: 0; /* Reset to original styles */
                left: auto; /* Reset to original styles */
                margin-right: -100px; /* Reset to original styles */
                margin-left: auto; /* Reset to original styles */
            }
            .sub-title::after {
                right: 0; /* Reset to original styles */
                left: auto; /* Reset to original styles */
                margin-right: -50px; /* Reset to original styles */
                margin-left: auto; /* Reset to original styles */
            }
            .sub-style::before {
                right: auto;
                left: 0;
                margin-right: auto;
                margin-left: -100px;
            }
            .sub-style::after {
                right: auto;
                left: 0;
                margin-right: auto;
                margin-left: -50px;
            }
        `;
  }

  document.head.appendChild(style);
};
