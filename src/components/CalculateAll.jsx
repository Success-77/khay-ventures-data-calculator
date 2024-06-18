import React, { useMemo } from "react";
import AllCalculator from "./AllCalculator";

const CalculateAll = () => {
  const mtnPrices = useMemo(
    () => ({
      1: 4.7,
      2: 9.4,
      3: 14.1,
      4: 18.5,
      5: 22.7,
      6: 27,
      7: 31,
      8: 35.5,
      9: 40,
      10: 44,
      15: 64,
      20: 85,
      25: 105,
      30: 126,
      40: 169,
      50: 210,
      100: 390,
    }),
    []
  );

  const atPrices = useMemo(
    () => ({
      1: 3.5,
      2: 7,
      3: 10,
      4: 13,
      5: 16,
      6: 19,
      7: 22,
      8: 25,
      10: 30,
      15: 47,
      20: 61,
      25: 81,
      30: 90,
      40: 110,
      50: 134,
      100: 240,
    }),
    []
  );

  const vodaPrices = useMemo(
    () => ({
      5: 22,
      10: 42,
      15: 62,
      20: 82,
      25: 102,
      30: 122,
      40: 160,
      50: 220,
      190: 380,
    }),
    []
  );

  return (
    <div>
      <AllCalculator
        mtnPrices={mtnPrices}
        atPrices={atPrices}
        vodaPrices={vodaPrices}
      />
    </div>
  );
};

export default CalculateAll;
