Category.all.destroy_all
Subcategory.all.destroy_all
Answer.all.destroy_all
Quiz.all.destroy_all
Question.all.destroy_all

# categories
Category.create(name: "sports")
Category.create(name: "movies")
Category.create(name: "video games")

    # sport subcategories
    Subcategory.create(name: "football", category_id: 1)
    Subcategory.create(name: "basketball", category_id: 1)
    Subcategory.create(name: "soccer", category_id: 1)

    # movie subcategories
    Subcategory.create(name: "action", category_id: 2)
    Subcategory.create(name: "fantasy", category_id: 2)
    Subcategory.create(name: "horror", category_id: 2)

    # video game subcategories
    Subcategory.create(name: "fps", category_id: 3)
    Subcategory.create(name: "rpg", category_id: 3)
    Subcategory.create(name: "fighter", category_id: 3)

# football quiz
Quiz.create(
    name: "Football Quiz!",
    category_id: 1,
    subcategory_id: 1
)

    # questions
    Question.create(
        name: "How many players are on a roster?",
        category_id: 1,
        subcategory_id: 1,
        quiz_id: 1,
        answer_id: 1
    )
        Answer.create(description: "54", question_id: 1)

    Question.create(
        name: "What NFL team has the loudest fanbase?",
        category_id: 1,
        subcategory_id: 1,
        quiz_id: 1,
        answer_id: 2
    )
        Answer.create(description: "Seattle Seahawks", question_id: 2)
    
    Question.create(
        name: "How long is a football field?",
        category_id: 1,
        subcategory_id: 1,
        quiz_id: 1,
        answer_id: 3
    )
        Answer.create(description: "100 Yards", question_id: 3)
    
    Question.create(
        name: "How many minutes are in a football game?",
        category_id: 1,
        subcategory_id: 1,
        quiz_id: 1,
        answer_id: 4
    )
        Answer.create(description: "120 Minutes", question_id: 4)
    
    Question.create(
        name: "What is the penalty for unnecessary roughness?",
        category_id: 1,
        subcategory_id: 1,
        quiz_id: 1,
        answer_id: 5
    )
        Answer.create(description: "15 Yards", question_id: 5)

# basketball quiz
Quiz.create(
    name: "Basketball Quiz!",
    category_id: 1,
    subcategory_id: 2
)

    # questions
    Question.create(
        name: "What is the name of the goal you toss a basketball into?",
        category_id: 1,
        subcategory_id: 2,
        quiz_id: 2,
        answer_id: 6
    )
        Answer.create(description: "Basketball Hoop", question_id: 6)

    Question.create(
        name: "What is the name of a subgame that involves spelling out the name of an animal to lose?",
        category_id: 1,
        subcategory_id: 2,
        quiz_id: 2,
        answer_id: 7
    )
        Answer.create(description: "HORSE", question_id: 7)
    
    Question.create(
        name: "What color is a basketball?",
        category_id: 1,
        subcategory_id: 2,
        quiz_id: 2,
        answer_id: 8
    )
        Answer.create(description: "Orange", question_id: 8)
    
    Question.create(
        name: "What color are the strips on a basketball?",
        category_id: 1,
        subcategory_id: 2,
        quiz_id: 2,
        answer_id: 9
    )
        Answer.create(description: "Black", question_id: 9)
    
    Question.create(
        name: "How many points do you get for shooting from the middle of a court?",
        category_id: 1,
        subcategory_id: 2,
        quiz_id: 2,
        answer_id: 10
    )
        Answer.create(description: "15 Yards", question_id: 10)

# soccer quiz 
Quiz.create(
    name: "Soccer Quiz!",
    category_id: 1,
    subcategory_id: 3
)

    # questions
    Question.create(
        name: "What color is a soccer ball?",
        category_id: 1,
        subcategory_id: 3,
        quiz_id: 3,
        answer_id: 11
    )
        Answer.create(description: "White", question_id: 11)

    Question.create(
        name: "What color are the octagons on a soccerball?",
        category_id: 1,
        subcategory_id: 3,
        quiz_id: 3,
        answer_id: 12
    )
        Answer.create(description: "Black", question_id: 12)
    
    Question.create(
        name: "Is soccer played with your hands or feet?",
        category_id: 1,
        subcategory_id: 3,
        quiz_id: 3,
        answer_id: 13
    )
        Answer.create(description: "Feet", question_id: 13)
    
    Question.create(
        name: "What player can be found at the goal?",
        category_id: 1,
        subcategory_id: 3,
        quiz_id: 3,
        answer_id: 14
    )
        Answer.create(description: "Goalee", question_id: 14)
    
    Question.create(
        name: "How far back in years do the earliest games of soccer take place in history?",
        category_id: 1,
        subcategory_id: 3,
        quiz_id: 3,
        answer_id: 15
    )
        Answer.create(description: "3,000 Years", question_id: 15)

# action movies quiz
Quiz.create(
    name: "Action Movies Quiz!",
    category_id: 2,
    subcategory_id: 4
)

    # questions
    Question.create(
        name: "What movie starred a professional killer who went on a spree over the murder of his dog?",
        category_id: 2,
        subcategory_id: 4,
        quiz_id: 4,
        answer_id: 16
    )
        Answer.create(description: "John Wick", question_id: 16)

    Question.create(
        name: "What is the title of someone who fills in for dangerous scenes?",
        category_id: 2,
        subcategory_id: 4,
        quiz_id: 4,
        answer_id: 17
    )
        Answer.create(description: "Stunt Double", question_id: 17)
    
    Question.create(
        name: "What movie series depicts the story of Bruce Lee's martial arts trainer?",
        category_id: 2,
        subcategory_id: 4,
        quiz_id: 4,
        answer_id: 18
    )
        Answer.create(description: "Ip Man", question_id: 18)
    
    Question.create(
        name: "Which character from the Fast & Furious really died in a car accident?",
        category_id: 1,
        subcategory_id: 4,
        quiz_id: 4,
        answer_id: 19
    )
        Answer.create(description: "Paul Walker", question_id: 19)
    
    Question.create(
        name: "How many Underworld movies are there?",
        category_id: 1,
        subcategory_id: 4,
        quiz_id: 4,
        answer_id: 20
    )
        Answer.create(description: "6", question_id: 20)


# fantasy movies quiz
Quiz.create(
    name: "Fantasy Movies Quiz!",
    category_id: 2,
    subcategory_id: 5
)

    # questions
    Question.create(
        name: "What movie series featured a young wizard with a lightning scar?",
        category_id: 2,
        subcategory_id: 5,
        quiz_id: 5,
        answer_id: 21
    )
        Answer.create(description: "Harry Potter", question_id: 21)

    Question.create(
        name: "What old movie featured a troll with a green thumb?",
        category_id: 2,
        subcategory_id: 5,
        quiz_id: 5,
        answer_id: 22
    )
        Answer.create(description: "Troll in Central Park", question_id: 22)
    
    Question.create(
        name: "What movie series features young hobbits traveling to destroy a ring?",
        category_id: 2,
        subcategory_id: 5,
        quiz_id: 5,
        answer_id: 23
    )
        Answer.create(description: "Lord of the Rings", question_id: 23)
    
    Question.create(
        name: "What movie includes a long, giant white dragon?",
        category_id: 2,
        subcategory_id: 5,
        quiz_id: 5,
        answer_id: 24
    )
        Answer.create(description: "The Never Ending Story", question_id: 24)
    
    Question.create(
        name: "What movie features an ogre and donkey as an adventuring duo?",
        category_id: 2,
        subcategory_id: 5,
        quiz_id: 5,
        answer_id: 25
    )
        Answer.create(description: "Shrek", question_id: 25)

# horror movies quiz
Quiz.create(
    name: "Horror Movies Quiz!",
    category_id: 2,
    subcategory_id: 6
)

    # questions
    Question.create(
        name: "What movie series depicts a supernatural psychotic child murderer who can kill you in your dreams?",
        category_id: 2,
        subcategory_id: 6,
        quiz_id: 6,
        answer_id: 26
    )
        Answer.create(description: "Freddy Kruger", question_id: 26)

    Question.create(
        name: "What movie is based on a sadistic killer murders in the australian desert?",
        category_id: 2,
        subcategory_id: 6,
        quiz_id: 6,
        answer_id: 27
    )
        Answer.create(description: "Wolf Creek", question_id: 27)
    
    Question.create(
        name: "What movie series contains a supernatural murderer who originally died by drowning?",
        category_id: 2,
        subcategory_id: 6,
        quiz_id: 6,
        answer_id: 28
    )
        Answer.create(description: "Jason", question_id: 28)
    
    Question.create(
        name: "What movie contains a supernatural clown murderer who feeds on your fears?",
        category_id: 2,
        subcategory_id: 6,
        quiz_id: 6,
        answer_id: 29
    )
        Answer.create(description: "IT", question_id: 29)
    
    Question.create(
        name: "What movie series involves astral projecting in order to get into 'The Further'?",
        category_id: 2,
        subcategory_id: 6,
        quiz_id: 6,
        answer_id: 30
    )
        Answer.create(description: "Insidious", question_id: 30) 

# fps games quiz
Quiz.create(
    name: "FPS Quiz!",
    category_id: 3,
    subcategory_id: 7
)

    # questions
    Question.create(
        name: "What FPS game series depicts a main AI sidekick named Cortana?",
        category_id: 3,
        subcategory_id: 7,
        quiz_id: 7,
        answer_id: 31
    )
        Answer.create(description: "Halo", question_id: 31)

    Question.create(
        name: "What FPS game series has an abbreviation that spells out a type of aquatic lifeform?",
        category_id: 3,
        subcategory_id: 7,
        quiz_id: 7,
        answer_id: 32
    )
        Answer.create(description: "Call of Duty", question_id: 32)
    
    Question.create(
        name: "What kind of kill requires first turning around in a circle without zooming down the sights?",
        category_id: 3,
        subcategory_id: 7,
        quiz_id: 7,
        answer_id: 33
    )
        Answer.create(description: "360 No-Scope", question_id: 33)
    
    Question.create(
        name: "What kind of player stays in one place hiding & waiting for an enemy?",
        category_id: 3,
        subcategory_id: 7,
        quiz_id: 7,
        answer_id: 34
    )
        Answer.create(description: "Camper", question_id: 34)
    
    Question.create(
        name: "What gamemmode in Call of Duty allows for defending against the undead?",
        category_id: 3,
        subcategory_id: 7,
        quiz_id: 7,
        answer_id: 35
    )
        Answer.create(description: "CoD: Zombies", question_id: 35) 

# rpg games quiz
Quiz.create(
    name: "RPG Quiz!",
    category_id: 3,
    subcategory_id: 8
)

    # questions
    Question.create(
        name: "What game from the PS1 era needed 4 discs & had Dragons and Dragoons?",
        category_id: 3,
        subcategory_id: 8,
        quiz_id: 8,
        answer_id: 36
    )
        Answer.create(description: "The Legend of Dragoon", question_id: 36)

    Question.create(
        name: "What popular rpg series has over 15 installments?",
        category_id: 3,
        subcategory_id: 8,
        quiz_id: 8,
        answer_id: 37
    )
        Answer.create(description: "Final Fantasy", question_id: 37)
    
    Question.create(
        name: "What japanese game offered a playable character who could transform into any monster he killed?",
        category_id: 3,
        subcategory_id: 8,
        quiz_id: 8,
        answer_id: 38
    )
        Answer.create(description: "Threads of Fate", question_id: 38)
    
    Question.create(
        name: "What game series started off with a mute character who learns to talk after being tortured with dark eco?",
        category_id: 3,
        subcategory_id: 8,
        quiz_id: 8,
        answer_id: 39
    )
        Answer.create(description: "Jak and Daxter", question_id: 39)
    
    Question.create(
        name: "What RPG series involved a thieving racoon?",
        category_id: 3,
        subcategory_id: 8,
        quiz_id: 8,
        answer_id: 40
    )
        Answer.create(description: "Sly Cooper", question_id: 40) 

# fighter games quiz
Quiz.create(
    name: "Fighter Games Quiz!",
    category_id: 3,
    subcategory_id: 9
)

    # questions
    Question.create(
        name: "What fighter game series revolves around Z-Fighters?",
        category_id: 3,
        subcategory_id: 9,
        quiz_id: 9,
        answer_id: 41
    )
        Answer.create(description: "Dragon Ball Z", question_id: 41)

    Question.create(
        name: "What fighter game series has a character with a giant eyeball on their sword?",
        category_id: 3,
        subcategory_id: 9,
        quiz_id: 9,
        answer_id: 42
    )
        Answer.create(description: "Soul Caliber", question_id: 42)
    
    Question.create(
        name: "What fighter game series has a character nutorious for the phrase 'Ha-Do-Ken!'? ",
        category_id: 3,
        subcategory_id: 9,
        quiz_id: 9,
        answer_id: 43
    )
        Answer.create(description: "Street Fighter", question_id: 43)
    
    Question.create(
        name: "What fighting game lets you play your main character as a God?",
        category_id: 3,
        subcategory_id: 9,
        quiz_id: 9,
        answer_id: 44
    )
        Answer.create(description: "God of War", question_id: 44)
    
    Question.create(
        name: "What old fighting game starred as Dracula's Son as the main protagonist?",
        category_id: 3,
        subcategory_id: 9,
        quiz_id: 9,
        answer_id: 45
    )
        Answer.create(description: "Castlevania", question_id: 45) 
