import React from "react";
import {
  CssLogo,
  CypressLogo,
  DocusaurusLogo,
  ESLintLogo,
  FramerMotionLogo,
  GitHubLogo,
  GitLogo,
  HtmlLogo,
  JavascriptLogo,
  MarkDownIcon,
  ReactLogo,
  ReactRouterLogo,
  ReduxLogo,
  SassLogo,
  StorybookLogo,
  TailwindLogo,
  TypescriptLogo,
} from "../../../../Assets/TechLogos";
import jotaiLogo from "../../../../Assets/TechLogos/jotai-mascot.png";
import Card from "../../../../Components/Card";

const KnownTech = () => {
  return (
    <div className="my-8">
      <h2 className="text-2xl p-8">Known Tech</h2>
      <Card className="[&>div]:grid [&>div]:grid-cols-4 [&>div]:gap-8 [&>div]:justify-items-center">
        <h3 className="text-xl">Frontend</h3>
        <div className="[&>svg]:w-16 mb-4">
          <HtmlLogo />
          <CssLogo />
          <JavascriptLogo />
          <SassLogo />
          <TailwindLogo />
          <FramerMotionLogo />
          <img src={jotaiLogo} className="w-8" />
          <ReactRouterLogo />
          <ReduxLogo />
          <GitLogo />
          <GitHubLogo />
          <CypressLogo />
          <StorybookLogo />
          <DocusaurusLogo />
          <MarkDownIcon />
          <ESLintLogo />
          <ReactLogo />
          <TypescriptLogo />
        </div>
        <h3>Backend</h3>
        <div></div>
        <h3>General Tech</h3>
      </Card>
    </div>
  );
};

export default KnownTech;
