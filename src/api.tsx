const baseUrl = 'https://react-challenge-api.herokuapp.com/first-challenge';

export interface Episode {
  id: number;
  date: string;
  shortDescription: string;
  fullDescriptionHtml: string;
  recordedVideoUrl: string;
}

export const getEpisodes = async (): Promise<Episode[]> => {
  const response = await fetch(`${baseUrl}/episodes`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  });

  const data: Episode[] = await response.json();

  const promises = data.map((ep) => getSingleEpisode(ep.id));

  return Promise.all(promises);
};

export const getSingleEpisode = async (id: number): Promise<Episode> => {
  const response = await fetch(`${baseUrl}/episodes/${id}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  });

  const data: Episode = await response.json();

  return data;
};
