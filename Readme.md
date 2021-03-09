# Savy code challenge

Display list of dog images.
Expected time spent on the exercise: ~4 hours.
Please share the result on github.
If you have ANY questions, contact Laurent asap even on weekends. (laurent.bouis@sibly.com)

Goal:
Build a screen with autocomplete capability: as a user types some dog breed name, show him the list of suggested breed names as he starts typing each letter, and show the list of dog images associated with the suggested breeds.

a) layout:
You decide how it looks like, you can go simple or complex with animations, etc... But we’ll evaluate the exercise a lot more on the business logic than on the UI beauty (bonus points if it looks great though).

b) functionality

- Use the dog CEO API described at https://dog.ceo/dog-api/
  Autocomplete feature:
  as the user types a breed name in a ‘search’ textbox, show the suggestions for breed names as a list (autocomplete feature). Also as he types letters, we immediately show images for all the matching/suggested breeds. (see below). If the user typed nothing (empty string), do not display any images, but the suggested list should contain all breeds.  
  Display results features:
  As the user types letter and sees a list of suggested breeds:
  show the images for those breeds immediately (for example in a list below the ‘search’ text box). You can decide on the layout.
  So for example:
  If the user starts typing “a”, we should display
  “affenpinscher"
  "african"
  "airedale”
  "Akita"
  And display all the images for those 4 breeds.
  If the user then types “f” (so the string is now “af”), display:
  “affenpinscher"
  "African"
  And all images for those 2 breeds.

For the purpose of this exercise, please assume that the images can be updated frequently and breeds do change sometimes but infrequently.
Also you can ignore sub-breeds for the purpose of this exercise.

IMPORTANT NOTES:
Focus first on logic to make it functional, not the UI beauty (but if you want to impress us with your UI skills, it’s always appreciated).
It doesn’t have to be perfect given the suggested time spent on it. Please leave some //TODO notes/comments in your code to indicate things you think you should do but don’t have time to code (e.g. cover some edge cases, or improvements in the logic, performance optimizations).
If showing image for all the breeds in the suggested list is too time consuming, then just display the images for one breed (pick the breed at the top of the list) but explain what the logic would be to show all images.
Think about performance and scalability on the server side but don’t go too far in performance optimization implementation (not asking you to spend many many hours on optimizing performance).
We want you to show us your best work, code you’d be proud of. But we do not expect/want you to spend 3 days on this!

Not allowed to use:
Widgets for autocomplete

You are allowed to use your preferred libraries otherwise.
