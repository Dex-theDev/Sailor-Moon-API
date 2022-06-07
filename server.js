const express = require('express')
const app = express()
const PORT = 3001
const cors = require('cors')

app.use(cors())



const scouts = {
    'sailor moon': {
        'name': 'usagi tsukino',
        'planet': 'moon',
        'element': 'moon',
        'description': 'Usagi is a careless fourteen-year-old girl with an enormous capacity for love, compassion, and understanding. Usagi transforms into the heroine called Sailor Moon, the Guardian of Love and Justice. At the beginning of the series, she is a self-described immature crybaby who resents fighting evil and wants nothing more than to be a normal girl. As the story progresses, however, she embraces the chance to use her power to protect those she cares about.'
    },
    'sailor mercury': {
        'name': 'ami mizuno',
        'planet': 'mercury',
        'element': 'water',
        'description': 'Ami Mizuno is a quiet but intelligent fourteen-year-old bookworm in Usagi\'s class with a rumored IQ of 300.She can transform into Sailor Mercury, the Guardian of Water and Wisdom. Ami\'s shy exterior masks a passion for learning and taking care of the people around her. She hopes to eventually become a doctor like her mother, and tends to be the practical one in the group.'
    },
    'sailor mars': {
        'name': 'rei hino',
        'planet': 'mars',
        'element': 'fire',
        'description': 'Rei Hino is an elegant fourteen-year-old miko (English: shrine maiden). Because of her work as a Shinto priestess, Rei has limited precognition and can dispel or nullify evil using special ofuda scrolls, even in her civilian form. She transforms into Sailor Mars, the Guardian of Fire and Passion. She is very serious and focused, and easily becomes annoyed by Usagi\'s laziness, although she cares about her very much.'
    },
    'sailor jupiter': {
        'name': 'makoto kino',
        'planet': 'jupiter',
        'element': 'electricity',
        'description': 'Makoto Kino is a fourteen-year-old girl who is a student in Usagi Tsukino\'s class and was rumoured to have been expelled from her previous school for fighting. Unusually tall and strong for a Japanese schoolgirl, she transforms into Sailor Jupiter, the Guardian of Thunder and Courage. Both of Makoto\'s parents died in a plane crash years ago, so she lives alone and takes care of herself.'
    },
    'sailor venus': {
        'name': 'minako aino',
        'planet': 'venus',
        'element': 'love/metal',
        'description': 'Minako Aino is a fourteen-year-old perky dreamer. Minako first appears as the main protagonist of Codename: Sailor V. She has a companion cat called Artemis who works alongside Luna in guiding the Sailor Guardians. Minako transforms into Sailor Venus, the Guardian of Love and Beauty, and leads Sailor Moon\'s four inner Guardians, while acting as Sailor Moon\'s bodyguard and decoy because of their near-identical looks.'
    },
    'unknown': {
        'name': 'unknown',
        'planet': 'unknown',
        'element': 'unknown',
        'description': 'unknown'
    }
}
app.get('/', (request,response)=> {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api', (request,response) => {
    response.send('<h1>Sailor Moon API</h1>')
})
app.get('/api/scouts', (request,response) => {
    response.json(scouts)
})
app.get('/api/:name', (request,response) => {
    const scoutName = request.params.name.toLowerCase()
    //console.log(scoutsName)
    if(scouts[scoutName]){
        response.json(scouts[scoutName])
    } else {
        response.json(scouts['unknown'])
    }

})


app.listen(process.env.PORT || PORT, () => console.log(`Listening on port ${PORT}`))