class AppContainer {
    categories = [];
    categoryClickControl = 0;
    subCategoryClickControl = 0;


    // Answers
    answers = [];
    fakeAnswers = {
        football:
            {
                Q1: ["51", "67", "83"],
                Q2: ["Miami Dolphins", "Kansas City Chiefs", "San Diego Chargers"],
                Q3: ["200 Yards", "300 Yards", "400 Yards"],
                Q4: ["140 Minutes", "160 Minutes", "180 Minutes"],
                Q5: ["30 Yards", "45 Yards", "60 Yards"]
            },
        basketball:
            {
                Q1: ["Ball Hole", "Orange Rim", "Cheeto Ring"],
                Q2: ["FROG", "ALPACA", "TIGER"],
                Q3: ["Red", "Blue", "Pink"],
                Q4: ["Yellow", "Green", "Violet"],
                Q5: ["1", "50", "2"]
            },
        soccer: 
            {
                Q1: ["Magenta", "Sky Blue", "Grey"],
                Q2: ["Pink", "Silver", "Jet Black"],
                Q3: ["Hands", "Elbows", "Knees"],
                Q4: ["Quarterback", "Dodger", "Blocker"],
                Q5: ["Like Tree Fiddy", "5 Years", "50 Years"]
            },
        action:
            {
                Q1: ["Mr. Angry", "Steve Erwin", "Cookie Monster"],
                Q2: ["Dare Devil", "Adrenaline Junkie", "Masochist"],
                Q3: ["Batman", "Blood & Bone", "DBZ"],
                Q4: ["The Rock", "The Stunt Guy", "Steve-O"],
                Q5: ["3", "10", "5"]
            },
        fantasy:   
            {
                Q1: ["LOTR", "Star Wars", "Star Trek"],
                Q2: ["Harry Potter", "The Goonies", "Labyrynth"],
                Q3: ["Space Jam", "Shrek", "The Lost"],
                Q4: ["King Arthur", "Lion King", "Camelot"],
                Q5: ["Pulp Fiction", "Avengers", "Black Panther"]
            },
        horror:
            {
                Q1: ["Jason", "Halloween", "Scream"],
                Q2: ["The Green Fields", "The Secret", "Horror Hill"],
                Q3: ["Keith the Killer", "Perpetual", "Scythe Dream"],
                Q4: ["Dr. Rockso", "Bubbles", "Squeeker"],
                Q5: ["Fly Far", "The Under", "From Below"]
            },
        fps:
            {
                Q1: ["COD", "Battlefield", "Crash Bandicoot"],
                Q2: ["Tony Hawk", "San Andreas", "Infamous"],
                Q3: ["Circle Shot", "Round Shot", "180 Quick Scope"],
                Q4: ["Hider", "Ninjas", "Hide'N'Seek Champ"],
                Q5: ["Unliving", "Dead Zone", "Death Valley"]
            },
        rpg:
            {
                Q1: ["Flaming Dragons", "The Winged Kings", "Breath of Life"],
                Q2: ["Castlevania", "Rachet & Clank", "Jak & Daxter"],
                Q3: ["Bravo", "Gecko", "The Light Bringer"],
                Q4: ["Yu-Gi-Oh", "Darkness Rises", "Faded Light"],
                Q5: ["Racoonus", "Rodent Rivals", "Whisker Willie"]
            },
        fighter:
            {
                Q1: ["Z Warriors", "The Z Effect", "Z-Fighters"],
                Q2: ["Sight Slayers", "Eye of the Tiger", "From Sea to See"],
                Q3: ["Bleach", "Slayer", "RuneScape"],
                Q4: ["The Gods", "Deity Danger", "Omnipotent Onion"],
                Q5: ["Vampire Diary", "Blood Suckers", "Elder Ones"]
            }

    };
}