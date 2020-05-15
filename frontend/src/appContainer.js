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
                Q1: [],
                Q2: [],
                Q3: [],
                Q4: [],
                Q5: []
            },
        fantasy:   
            {
                Q1: [],
                Q2: [],
                Q3: [],
                Q4: [],
                Q5: []
            },
        horror:
            {
                Q1: [],
                Q2: [],
                Q3: [],
                Q4: [],
                Q5: []
            },
        fps:
            {
                Q1: [],
                Q2: [],
                Q3: [],
                Q4: [],
                Q5: []
            },
        rpg:
            {
                Q1: [],
                Q2: [],
                Q3: [],
                Q4: [],
                Q5: []
            },
        fighter:
            {
                Q1: [],
                Q2: [],
                Q3: [],
                Q4: [],
                Q5: []
            }

    };
    url = "http://localhost:3000";
}