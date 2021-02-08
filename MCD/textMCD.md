ont, 11 USERS, 0N ROLES
USERS: ID, Nickname, mail, password, role_id, avatar, isActive, created_at, updated_at
postent, ON USERS, 11 POSTS, 11 COMMENTS
COMMENTS: ID, user_id, post_id, text, isValidated, likes, created_at

ROLES: ID,Name, role_string, created_at, updated_at
USERS_FAV, 1N POSTS, 0N USERS : user_id, post_id
POSTS: ID, title, category_id, user_id, sounds, description, isClosed, isBlocked, isActive ,created_at, updated_at
concerne, 11 COMMENTS, 0N POSTS

::
a, 11 POSTS, 0N CATEGORIES
CATEGORIES: ID, title, created_at, updated_at