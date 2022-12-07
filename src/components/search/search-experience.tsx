import * as React from "react";
import {
  provideHeadless,
  SearchHeadlessProvider,
  SandboxEndpoints,
} from "@yext/search-headless-react";

const searcher = provideHeadless({
  apiKey: "YOUR_API_KEY",
  experienceKey: "YOUR_EXPERIENCE_KEY",
  locale: "en",
  // verticalKey: "locations",
  endpoints: SandboxEndpoints,
});

interface SearchExperienceProps {
  children: React.ReactNode;
  verticalKey?: string;
}

const SearchExperience = ({ children }: SearchExperienceProps) => {
  return (
    <SearchHeadlessProvider searcher={searcher}>
      <StateManager>{children}</StateManager>
    </SearchHeadlessProvider>
  );
};

const StateManager = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default SearchExperience;
