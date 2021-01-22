# Route Map
This file contains the list of all routes planned for the site.

## Client
| Path                  | Page                                         |
------------------------|----------------------------------------------|
| `/`                   | Home Page                                    |
| `/contact`            | Contact Me                                   |
| `/about`              | About Me                                     |
| `/projects`           | Portfolio (List of all notable projects).    |
| `/blog`               | Blog Home Page                               |
| `/blog/posts/:id`     | Blog Post                                    |
| `/blog/subscribe`     | Subscribe to the blog's mailing list.        |
| `/blog/unsubscribe`   | Unsubscribe from the blog's mailing list.    |
| `/blog/new`           | Write a new post (Protected route).          |

<br>

## Server
- Hello World
    + `GET /`
    + *Ratelimit:* 100 requests / 10 mins.
- Submit Contact Forms
    + `POST /contact`
    + *Body:*
        ```json
        {
            "name": "string, with length > 2",
            "email": "string, a@b.c",
            "message": "string, with length > 10"
        }
        ```
    + *Ratelimit:* 3 requests / 15 mins.
- List All Testimonials
    + `GET /testimonials`
    + *Response:*
        ```json
        [
            {
                "name": "string",
                "rating": 0,
                "message": "string"
            }
        ]
        ```
    + *Ratelimit:* 100 requests / 10 mins.
- Submit A Testimonial
    + `POST /testimonials`
    + **Authorization Header Required.**
    + *Body:*
        ```json
        {
            "name": "string, with length > 2",
            "rating": 0,
            "message": "string, with length > 25"
        }
        ```
    + *Ratelimit:* 1 request / 24 hours.
- Login To The Site
    + `GET /login/:secret`
    + *Parameter:* `secret` is your secret key, literally.
    + *Ratelimit:* 100 requests / 10 mins.
- Parse Markdown to HTML
    + `POST /parse`
    + *Body:*
        ```json
        {
            "md": "markdown content here"
        }
        ```
    + *Response:*
        ```json
        {
            "parsed": "parsed html here"
        }
        ```
    + *Ratelimit:* 100 requests / 10 mins.
- Get 5 Recent Blog Posts
    + `GET /blog/`
    + *Response:*
        ```json
        [
            {
                "id": "string",
	            "title": "string",
	            "post": "string",
	            "likes": 0,
	            "timestamp": 0,
	            "comments": [
                    {
                        "name": "string",
	                    "comment": "string",
	                    "timestamp": 0
                    }
                ]
            }
        ]
        ```
    + *Ratelimit:* 100 requests / 10 mins.
- Make A New Blog Post
    + `POST /blog/posts`
    + **Authorization header required.**
    + **SECRET cookie required.**
    + *Body:*
        ```json
        {
            "id": "string",
            "title": "string",
            "post": "string"
        }
        ```
    + *Ratelimit:* 1 request / 24 hours.
- Get A Blog Post
    + `GET /blog/posts/:id`
    + *Parameter:* `id` is the unique id of the post.
    + *Response:*
        ```json
        {
                "id": "string",
	            "title": "string",
	            "post": "string",
	            "likes": 0,
	            "timestamp": 0,
	            "comments": [
                    {
                        "name": "string",
	                    "comment": "string",
	                    "timestamp": 0
                    }
                ]
            }
        ```
    + *Ratelimit:* 100 requests / 10 mins.
- Post A Comment
    + `POST /blog/comments/:post`
    + *Body:*
        ```json
        {
            "name": "string, with length > 2",
            "email": "string, a@b.c",
            "comment": "string"
        }
        ```
    + *Ratelimit:* 100 requests / 10 mins.
- Like A Post
    + `POST /blog/like/:post`
    + *Parameter:* `post` is the id of the post.
    + *Ratelimit:* 100 requests / 10 mins.
- Unlike A Post
    + `POST /blog/unlike/:post`
    + *Parameter:* `post` is the id of the post.
    + *Ratelimit:* 100 requests / 10 mins.
- Subscribe To The Mailing List
    + `GET /blog/subscribe/:name/:email`
    + *Parameters:* `name` and `email` of the user.
    + *Ratelimit:* 5 requests / 24 hours.
- Unsubscribe From The Mailing List
    + `GET /blog/unsubscribe/:email`
    + *Parameter:* `email` of the user.
    + *Ratelimit:* 5 requests / 24 hours.
    