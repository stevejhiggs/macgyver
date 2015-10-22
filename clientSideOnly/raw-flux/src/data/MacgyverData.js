module.exports = {
    init: function () {
        localStorage.clear();
        localStorage.setItem('tools', JSON.stringify(
            [
                {
                    id: '0',
                    name: 'Paperclip',
                    image: 'paperclip.png',
                    description: 'easily get out of any situation that involves you being in handcuffs'
                },
                {
                    id: '1',
                    name: 'Pen Knife',
                    image: 'penknife.png',
                    description: 'destroy a whole army with this thing'
                },
                {
                    id: '2',
                    name: 'match',
                    image: 'match.png',
                    description: 'blow up an entire building with a single match'
                }
            ]
        ));

        localStorage.setItem('situations', JSON.stringify(
            [
                {
                    id: '0',
                    name: 'Hostage situation in handcuffs',
                    description: 'Macgyver is being held hostage. They have him in handcuffs. Theres only one tool for the job.',
                    toolAnswerId: '0'
                },
                {
                    id: '1',
                    name: 'Tied up with rope',
                    description: 'Unbelievable! Tied up again',
                    toolAnswerId: '1'
                },
                {
                    id: '2',
                    name: 'Army of bad guys approaching',
                    description: 'Macgyver is in a building with an army approaching. Maybe he could blow up the building?',
                    toolAnswerId: '2'
                }
            ]
        ));
    }
};
