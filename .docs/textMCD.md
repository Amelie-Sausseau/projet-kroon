PUBLISH, 0N USERS, 11 POSTS
USERS: id, role, name, slug, email, password, bio, avatar, isActive
POST, ON USERS, 11 COMMENTS

POSTS: id, tag_id, user_id, title, sound, body, isClosed, isSolved, isReported, isActive
CONCERN, 11 COMMENTS, 0N POSTS
COMMENTS: id, user_id, post_id, body, likes, isReported, isActive

HAS, 11 POSTS, 0N TAGS
TAGS: id, name
: