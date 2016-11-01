/* Data for people */
var execs = [{
    name: 'Lauren Shum',
    title: 'President',
    picture: 'lauren.JPG'
}, {
    name: 'Harvey Shi',
    title: 'Vice-President',
    picture: 'harvey.JPG'
}, {
    name: 'Ani Jonnavithula',
    title: 'Treasurer',
    picture: 'ani.JPG'
}, {
    name: 'Emilia Chojkiewicz',
    title: 'House Manager',
    picture: 'emilia.JPG'
}, {
    name: 'Shomik Verma',
    title: 'Publicity Director',
    picture: 'shomik.JPG'
}];

var residents = [{
    name: 'Emilia Chojkiewicz',
    bio: '',
    picture: 'emilia.JPG'
}, {
    name: 'Shomik Verma',
    bio: '',
    picture: 'shomik.JPG'
}, {
    name: 'Tracy Lu',
    bio: '',
    picture: 'tracy.JPG'
}, {
    name: 'Derek Hill',
    bio: '',
    picture: 'derek.JPG'
}, {
    name: 'Solomon Nii Martey',
    bio: '',
    picture: 'solomon.JPG'
}, {
    name: 'Alex Bressler',
    bio: '',
    picture: 'alex.JPG'
}, {
    name: 'Sara Brown',
    bio: '',
    picture: 'sara.JPG'
}, {
    name: 'Carolyn Yao',
    bio: '',
    picture: 'carolyn.JPG'
}, {
    name: 'Eudora Miao',
    bio: '',
    picture: 'eudora.JPG'
}];


/* Data for features for layers house view */
// for locations, the first is dist. from left, the second is dist. from top
// the numbers given are proportional to the width of the image
var features = [[{
        name: 'Solar Water Heaters',
        description: 'An array of solar water heaters on the roof provide 100% of the hot water needs for the house.',
        location: [0.55, 0.3],
}, {
        name: 'Green Roof',
        description: 'Two green roof areas on the roof help to insulate the home and provide carbon sequestration.',
        location: [0.72, 0.45],
}, {
        name: 'Angled Design',
        description: 'The angled nature of the entire roof helps direct water and other preciptation into the rainwater collection system.',
        location: [0.45, 0.4],
}],
[{
        name: 'Atrium',
        description: 'The main atrium of the smart home allows for natural light to permeate through both levels of the home.',
        location: [0.55, 0.4],
}, {
        name: 'Solar Panels',
        description: 'Two banks of solar panels provide roughly 2kW of power for the house (~15% of total electric consumption).',
        location: [0.28, 0.45],
}, {
        name: 'Balcony',
        description: 'There are two spacious outdoor balconies on the second level of the house.',
        location: [0.55, 0.55],
}, {
        name: 'Residence Rooms',
        description: 'There are four residence rooms on the second level of the house, housing eight students. They are arranged in two-room suites.',
        location: [0.72, 0.52],
}],
[{
        name: 'Rainwater Collection Tanks',
        description: 'Two 1250 gallon rain water collection tanks flank the outside of the house. They are used for irrigation around the house and in the garden.',
        location: [0.73, 0.75],
}, {
        name: 'Media Room',
        description: 'The smart home media room is furnished with three wide-screen TVs and some of the most comfortable couches ever made.',
        location: [0.77, 0.5],
}, {
        name: 'Residence Room',
        description: 'There is one residence room on the first floor, which houses two students.',
        location: [0.35, 0.35],
}]];

/* Data for projects */

var projects = [{
    name: 'Electric Bike',
    lead: ['Harvey Shi'],
    picture: 'bikes.JPG',
    description: 'The electric bike project is aimed at building a reliable, long-lasting electric bike for daily use. The bike is currently complete and ready for use. There are just a few more tweaks to be made; however, an exciting next step would be integrating it with the solar panels in front of the home so that the bike runs on 100% solar energy.'
}, {
    name: 'Solar Benches',
    lead: ['Gerry Chen', 'Tracy Lu'],
    picture: 'benches.JPG',
    description: ''
}, {
    name: 'Smart Shelters',
    lead: ['Shomik Verma', 'Karyn Saunders'],
    picture: 'shelters.JPG',
    description: ''
}, {
    name: 'Thermoelectric Solar Cooker',
    lead: ['Derek Hill'],
    picture: 'cooker.JPG',
    description: ''
}, {
    name: 'LED Tube Lights',
    lead: ['Anuj Thakkar'],
    picture: 'led.JPG',
    description: 'Check out the <a target="_blank" href="/led-interface">Smart Home LED tube lights calculator</a>.'
}];
