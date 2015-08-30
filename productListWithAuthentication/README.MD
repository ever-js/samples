#### This is how you can test this

* ###### Create 2 collections in the mongo db.
> product_list
> > add below documents
> > ```json
> > {
> >    "product_name" : "books"
> > }
> > ```
> > ```json
> > {
> >    "product_name" : "toys"
> > }
> > ```
> tokens
> > add below documents
> > ```json
> > {
> >     "token" : "a94a8fe5ccb19ba61c4c0873d391e987982fbbd3"
> > }
> > ```

* ###### Update the Mongo Urls in following files
> ***configuration/global/***
> > * default.json
> > * production.json

* Make a **HTTP** request as follows.
```http
GET /get-product-list HTTP/1.1
Host: localhost:8312
Authorization: token a94a8fe5ccb19ba61c4c0873d391e987982fbbd3
Cache-Control: no-cache
```