import { getEpisodes, getSingleEpisode } from './api';

describe('testing getEpisodes', () => {
    it('should return an array of episodes', async () => {
        const response = await getEpisodes();
        expect(response.length).toBeGreaterThan(0);
    });
})

describe('testing getSingleEpisode', () => {
    it('should return a single episode', async () => {
        const response = await getSingleEpisode(2);
        expect(response.id).toEqual(2);
    })
})
