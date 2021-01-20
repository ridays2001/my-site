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
- ...*To be contd.*