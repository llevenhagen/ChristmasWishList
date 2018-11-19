#Christmas Wish List

###Live link: https://obscure-eyrie-20259.herokuapp.com/

##About Christmas Wish List
Christmas Wish List is in affect a Christmas gift registry where you can add what you want and your friends and family can go in and check what they plan on buying you. This way, no one has trouble deciding what to buy you, and there are no repeat gifts.  

##Wireframes
![christmas-wireframe](https://user-images.githubusercontent.com/42528266/48742354-75d18800-ec13-11e8-9cac-74c5c1c5b98a.png)



##Technologies

- HTML
- CSS
- Javascript / React
- Ruby / Rails
- Photoshop


##Approach taken

###Background/Photoshop:

####Header/background Image
We decided we to wanted to include Christmas trees in our background and holly on our header. To achieve this we created a custom background using psd’s in Photoshop. When the holly was resized in photoshop the background would come up white instead of transparent and distorted. We realized we were saving it was a jpeg instead of a png, we also used a transform flip in css which solved the distortion issue.
Credit for images goes to https://pngtree.com/

###Main page / Present List:

####Flexbox
We used Flexbox on the main page to display the list of presents. We are both fairly practiced with this technique by now, so this did not present any issues.

###Present Form:

####Positioning
For the Present Form positioning, it naturally pops up at the bottom of the page and looked pretty terrible. To rectify this, we added a position of absolute and a margin top and left to position it correctly in the middle of the page.

####Bought Status
We wanted to make the 'bought status' into a checkbox that people could check after they choose to buy a gift for you. It took some research and effort but we got it working by adding a 'value' variable that determined whether the information was coming from a text input or a checkbox input and sent the appropriate value to the setState function.

###Toggling the Buttons
We had to work with the toggleState function quite a bit to get the proper buttons to appear in the proper views, but this was not too difficult. We used ternary statements in the Presents.js for buttons and the footer.

##Issues

###Bought Status Checkbox / Conditionals
In the Present Show Div, we wanted to show whether a present was bought or not by printing an appropriate string (ie: 'still available' vs 'this item has been purchased'), but as of Monday afternoon we are not able to figure it out.

###Computer issues
On day two of the project, Shanaun pulled changes from Github, and suddenly everything was broken. The code was 100% the same on both Laura and Shanaun's computers, but Shanaun's positioning was off, certain links were broken, and the database wouldn't show even though she was connected to it. We spoke with Jerrica, who advised that Shanaun delete her repo and reclone, and it worked for a little bit, but it broke as soon as she pulled again. The same thing happened with Heroku. We decided that until the project was due, Laura would do all the pushes to Github and Heroku, and we pair programmed.

###POST/PUT issues - magic
After day two, the 'POST' and 'PUT' routes were working in Postman, but not in the app. We intended on addressing this issue the next day, but when we woke up, everything was working. If you need any magic dust, let us know.

###Footer
Our footer wouldn't stick to the bottom when we had the 'Add Present' form open - it would show up halfway up the page. We tried to make a sticky footer, but while it stuck to the main pain, it didn't apply to the 'add present' form still. As a fix, we created a conditional for the footer where it only shows if the Present List is showing.


##Further Development
When we have more time, we would really like to add another model to this app that includes users. This way, we can create a one to many relationship in the postgresql database, and as a result each user would have their own Christmas list. Unfortunately with our time limits, there is only one Christmas wish list, and anyone could add, edit, or delete a gift, which is not ideal.
