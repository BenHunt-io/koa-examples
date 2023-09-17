# App

Problem: Most social media consumption today is unhealthy. People cannot control the amount they consume and they hold too much weight to what happens on the platform versus putting more weight to the events that occur in real life. The majority of the apps consumed are engineered to be addicting, engineered to maximize engagement.

Guiding Principles
- People should not habitually and addictively use the application. They should not use the application as an escape. They should use the application with intent.
- It should not feel like a battleground/competition
- It should not be about clout, so no influencers or a chance to get famous.


MVP:
- Allow a user to be created
- Allow users to make posts. No emojis, no likes/dislikes.
- Allow users to make comments.
- Posts are batched to users on a configurable cadence. daily, weekly, bi-weekly
- Be able to see a feed of all your friends posts
- Be able to see all of your posts


Potential Functionality:
- Allow a user to be created
- Allow users to make posts. No emojis, no likes/dislikes.
- Allow users to make comments.
- Posts are batched to users on a configurable cadence. daily, weekly, bi-weekly
- Allow users to archive comments with a limit, (ex: limit of 5/week)
- Posts delete for the viewing user an hour after viewing 
- User Posts never delete for the writing user
- Be able to see a feed of all your friends posts
- Limit the number of friends that you can have


Data access:
- users will want to see all their posts associated with them
- users will want to see the unviewed chronological posts associated from all their friends
  - thus users will need to be able to query for all their friends
    - in sql, you could use a join table. Given a userId, you could query for all their friends.
    - in nosql, I can store the user's friends with the user and use that to query the posts made by friends in accordance with the post schedule.

NoSQL Model:
- User: The users of the social media application.
  - userId
  - firstName
  - lastName
  - email
  - password
  - friends
  - postSchedule: Stores information that allows users to see batched posts on a cadence
    - dayCadence: 5 // every 5 days
    - lastViewedTime
- Post: A post by a user
  - userId
  - creationTime
  - postTextContent
- Comment: A comment on a post by a user
  - commentTextContent
  


# Technology

