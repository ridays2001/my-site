# Route Map

This file contains the list of all routes planned for the site.

## Client

| Path                | Page                                      |
| ------------------- | ----------------------------------------- |
| `/`                 | Home Page                                 |
| `/new-testimonial`  | New Testimonial                           |
| `/contact`          | Contact Me                                |
| `/about`            | About Me                                  |
| `/projects`         | Portfolio (List of all notable projects). |
| `/blog`             | Blog Home Page                            |
| `/blog/posts/:id`   | Blog Post                                 |
| `/blog/subscribe`   | Subscribe to the blog's mailing list.     |
| `/blog/unsubscribe` | Unsubscribe from the blog's mailing list. |
| `/blog/new`         | Write a new post (Protected route).       |

<br>

## Server

-   Hello World
    -   `GET /`
    -   _Ratelimit:_ 100 requests / 10 mins.
-   Submit Contact Forms
    -   `POST /contact`
    -   _Body:_
        ```json
        {
        	"name": "string, with length > 2",
        	"email": "string, a@b.c",
        	"message": "string, with length > 10"
        }
        ```
    -   _Ratelimit:_ 3 requests / 15 mins.
-   List All Testimonials
    -   `GET /testimonials`
    -   _Response:_
        ```json
        [
        	{
        		"name": "string",
        		"rating": 0,
        		"message": "string"
        	}
        ]
        ```
    -   _Ratelimit:_ 100 requests / 10 mins.
-   Submit A Testimonial
    -   `POST /testimonials`
    -   **Authorization Header Required.**
    -   _Body:_
        ```json
        {
        	"name": "string, with length > 2",
        	"rating": 0,
        	"message": "string, with length > 25"
        }
        ```
    -   _Ratelimit:_ 1 request / 24 hours.
-   Login To The Site
    -   `GET /login/:secret`
    -   _Parameter:_ `secret` is your secret key, literally.
    -   _Ratelimit:_ 100 requests / 10 mins.
-   Parse Markdown to HTML
    -   `POST /parse`
    -   _Body:_
        ```json
        {
        	"md": "markdown content here"
        }
        ```
    -   _Response:_
        ```json
        {
        	"parsed": "parsed html here"
        }
        ```
    -   _Ratelimit:_ 100 requests / 10 mins.
-   Get 5 Recent Blog Posts
    -   `GET /blog`
    -   _Response:_
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
    -   _Ratelimit:_ 100 requests / 10 mins.
-   Get All Blog Posts
    -   `GET /blog/posts`
    -   _Response:_
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
    -   _Ratelimit:_ 100 requests / 10 mins.
-   Make A New Blog Post
    -   `POST /blog/posts`
    -   **Authorization header required.**
    -   **SECRET cookie required.**
    -   _Body:_
        ```json
        {
        	"id": "string",
        	"title": "string",
        	"post": "string"
        }
        ```
    -   _Ratelimit:_ 1 request / 24 hours.
-   Get A Blog Post
    -   `GET /blog/posts/:id`
    -   _Parameter:_ `id` is the unique id of the post.
    -   _Response:_
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
    -   _Ratelimit:_ 100 requests / 10 mins.
-   Post A Comment
    -   `POST /blog/comments/:post`
    -   **Authorization Header Required.**
    -   _Body:_
        ```json
        {
        	"name": "string, with length > 2",
        	"email": "string, a@b.c",
        	"comment": "string"
        }
        ```
    -   _Ratelimit:_ 100 requests / 10 mins.
-   Like A Post
    -   `POST /blog/like/:post`
    -   _Parameter:_ `post` is the id of the post.
    -   **Authorization Header Required.**
    -   _Ratelimit:_ 100 requests / 10 mins.
-   Unlike A Post
    -   `POST /blog/unlike/:post`
    -   _Parameter:_ `post` is the id of the post.
    -   **Authorization Header Required.**
    -   _Ratelimit:_ 100 requests / 10 mins.
-   Subscribe To The Mailing List
    -   `GET /blog/subscribe/:name/:email`
    -   _Parameters:_ `name` and `email` of the user.
    -   _Ratelimit:_ 5 requests / 24 hours.
-   Unsubscribe From The Mailing List
    -   `GET /blog/unsubscribe/:email`
    -   _Parameter:_ `email` of the user.
    -   _Ratelimit:_ 5 requests / 24 hours.
