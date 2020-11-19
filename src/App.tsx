import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { getEpisodes, getSingleEpisode, Episode } from './api';

import EpisodeItem from './Episode';

const App: React.FC = () => {
  const [episodes, setEpisodes] = useState<Episode[]>();

  useEffect(() => {
    getEpisodes().then((response) => {
      console.log(response);
      setEpisodes(response);
    });
  }, []);

  return (
    <StyledContainer>
      <StyledHeader>
        <StyledTitle>ReactChat</StyledTitle>
      </StyledHeader>
      <StyledBody>
        {episodes?.map((episode: Episode) => (
          <EpisodeItem episode={episode} />
        ))}
      </StyledBody>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  font-family: Roboto, sans-serif;
`;

const StyledHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 50px;
  padding-top: 25px;
  padding-bottom: 25px;
  background-color: red;
`;

const StyledTitle = styled.div`
  font-weight: bold;
  font-size: 20px;
`;

const StyledBody = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  margin-left: 8px;
`;

export default App;
