import React from 'react';
import parse from 'html-react-parser';
import styled from 'styled-components';

import { Episode } from './api';

interface EpisodeProps {
  episode: Episode;
}

const EpisodeItem: React.FC<EpisodeProps> = ({ episode }) => {
  return (
    <StyledContainer>
      <StyledTitleContainer>
        <StyledTitle>{episode.shortDescription}</StyledTitle>
      </StyledTitleContainer>
      <StyledDateContainer>
        <StyledDate>{`Streamed in ${episode.date}`}</StyledDate>
        {episode.recordedVideoUrl && (
          <StyledLink href={episode.recordedVideoUrl} target="_blank">
            Watch!
          </StyledLink>
        )}
        <StyledDate>Learn More</StyledDate>
      </StyledDateContainer>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  flex: auto;
  height: 200px;
  min-width: 150px;
  margin: 0 8px 8px 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  margin-right: 15px;
`;

const StyledLink = styled.a`
  margin-top: 15px;
  margin-bottom: 15px;

  text-decoration: none;

  color: #000;

  &:hover {
    text-decoration: underline;
  }

  &:visited {
    color: #000;
  }
`;

const StyledDateContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid #ccc;
`;

const StyledTitleContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
  border: 2px solid red;
`;

const StyledTitle = styled.div`
  text-align: center;
`;

const StyledDate = styled.div``;

export default EpisodeItem;