# NoroffAssignment2_LostInTranslation

This was the second assignment in the frontend course in JavaScript. With this assignment the focus was to implement an application using React. A large part of the assigment centered on how to communiate with a API using React.

**The application is hosted at:** https://lost-in-translation-one.vercel.app/

## The application

With this application it is possible to translate words entered by the user into sign language. 

The user is first greeted with a login page where they must enter a username. The username must be 5 charaters or longer. When the user enters a new username, a new account is created and when a recognized username is entered the user is simply logged in to their profile.

When the user is logged in they are redirected to the translations page. On this page they are can write a sentence in the input box and then press the enter buttton, to translate the sentence into sign language. The sign language is displayed in a box below the box for entering text. The translator only takes in the letters a-z and ignores other foreign letters and special characters. If the user enters a space this also creates a space in the translation in order to seperate individual words. Every time the user has entered a valid sentence to be translated, this sentence is saved to an API.  

The player can navigate to the profile page, where they can view the user that they are currently logged in as. The user can also view their translation history, showing the ten latest translations. The user is given two possible actions at the profile page. Clearing the history and logging out of the application.

## My solution

With my solution I decided to go with my own design done in plain CSS. I used some of the resources given with the assignment(ie. the robot images and hand signs), but chose my own color palette and overall design of the application. For this assignment I was heavily inspired by the videos provided that showcased the implementation of a coffee orders app. These videos were used as a guide to implementing both the majority of thel login page and the profile page.

