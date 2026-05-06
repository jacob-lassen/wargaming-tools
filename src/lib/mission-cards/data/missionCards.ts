import type { Mission } from '../types/mission.interface';

const missions: Mission[] = [
    {
        name: 'Critical personnel',
        text: 'Destroy one or more critical personnel.\nWhen this card is drawn each player must choose one friendly unit on the battlefield designated as critical personnel.',
        reward: '1VP'
    },
    {
        name: 'Mass casualties',
        text: 'Destroy two or more enemy units.',
        reward: '1VP'
    },
    {
        name: 'Seize control',
        text: 'Control 1 or more objective markers that were controlled by an opponent at the start of the round.',
        reward: '1VP'
    },
    {
        name: 'Hold the line',
        text: 'Have no enemy units within your deployment zone.',
        reward: '1VP'
    },
    {
        name: 'Domination',
        text: 'Control the most objective markers at the end of the round.',
        reward: '2VP'
    },
    {
        name: 'Play it safe',
        text: 'Do not lose any friendly units this round.',
        reward: '2VP'
    },
    {
        name: 'High value target',
        text: 'Destroy the most expensive enemy unit by points cost.\nIn case of a tie, any counts.',
        reward: '2VP'
    }, 
    {
        name: 'Seize consecutive',
        text: 'Control two objectives with consecutive number. \n1 & 6 are consecutive.',
        reward: '2VP'
    },
    {
        name: 'Steady progress',
        text: 'Control more objectives at the end of the round, than you did at the start of the round.',
        reward: '1VP'
    },
    {
        name: 'Calculated losses',
        text: 'Control less objectives at the end of the round, than you did at the start of the round.',
        reward: '2VP'
    },
    {
        name: 'Hold strong',
        text: 'Control the same objective marker at the start and end of the round.',
        reward: '1VP'
    },
];

export default missions;