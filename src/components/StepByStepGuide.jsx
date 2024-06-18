// src/components/StepByStepGuide.jsx

import React from "react";
import images from "../utils/importAllImages";

const ImageGuide = ({ imageHeader, src, caption }) => (
  <div className="image-guide">
    <h3>{imageHeader}</h3>
    <figure>
      <img src={src} alt="Guide Screenshot" />
      <figcaption>{caption}</figcaption>
    </figure>
  </div>
);

const captions = [
  "Click on the hamburger button at the extreme top right to drop the main navigation menu.",
  "Select from the main menu the alternative you want to use.",
  "Let us have a tour on the separate page. There are three networks to choose from.",
  "You can now select the Network you want to calculate for.",
  "Enter the packages without adding the GB and separate them with the plus sign +.",
  "Notice the calculation is generated automatically as the packages are entered.",
  "After typing out the packages you want to calculate for, use the copy button to copy to clipboard.",
  "The last aspect shown above is the payment details of the server who owes the calculator, use the button to copy the momo number.",
  "Let us now have a look at the combine mode and how it also functions. It is similar to the separate mode. But functions differently.",
  "This mode has three different inputs. The first one is for MTN, the second for AirtelTigo and the last for Vodafone.",
  "The calculation format also have equal number of default lines as shown above and each represent the inputs respectively.",
  "MTN packages entered will always appear before the AirtelTigo and Vodafone packages followed by AT and then Voda respectively.",
];
const StepByStepGuide = () => {
  // Sort the image keys
  const sortedImageKeys = Object.keys(images).sort((a, b) => {
    // Extract the numerical part of the image names and compare them
    const aNum = parseInt(a.match(/\d+/)[0], 10);
    const bNum = parseInt(b.match(/\d+/)[0], 10);
    return aNum - bNum;
  });

  return (
    <div className="step-by-step-guide">
      <h1 className="guide-header">Step by step guide</h1>
      <div className="image-guides">
        {sortedImageKeys.map((key, index) => (
          <div className="single-image-guide">
            <ImageGuide
              key={index}
              imageHeader={`Step ${index + 1}`}
              src={images[key]}
              caption={`${captions[index]}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepByStepGuide;
