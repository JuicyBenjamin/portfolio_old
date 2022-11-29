import React from "react";
import {
  BuilderLogo,
  ChakraUiLogo,
  NextJsLogo,
  PartyTownLogo,
  QwikLogo,
  RemixLogo,
  SolidJsLogo,
  ThreeJsLogo,
  VercelLogo,
} from "../../../../Assets/TechLogos";
import Card from "../../../../Components/Card";

const InterestedTech = () => {
  return (
    <div className="my-8">
      <h2 className="text-2xl p-8">Tech I'm interested in</h2>
      <Card className="[&>svg]:min-w-16 [&>svg]:h-16 grid grid-cols-3 justify-items-center gap-8">
        <BuilderLogo />
        <QwikLogo />
        <SolidJsLogo />
        <NextJsLogo />
        <PartyTownLogo />
        <RemixLogo />
        <ChakraUiLogo />
        <ThreeJsLogo />
        <VercelLogo />
      </Card>
    </div>
  );
};

export default InterestedTech;
