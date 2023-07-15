# Book-Catalog

## Live URL:

### Frontend Github Repository Link: https://github.com/Rasel5267/Book-Catalog

### Backend Github Repository Link: https://github.com/Rasel5267/Book-Catalog-Server

## Application Routes

### Auth (User)

- Route: https://cow-hut-admin-with-auth-assignment.vercel.app/api/v1/auth/login (POST)
- Route: https://cow-hut-admin-with-auth-assignment.vercel.app/api/v1/auth/signup (POST)
- Route: https://cow-hut-admin-with-auth-assignment.vercel.app/api/v1/auth/refresh-token (POST)

### User

- Route: https://cow-hut-admin-with-auth-assignment.vercel.app/api/v1/users (GET)
- Route: https://cow-hut-admin-with-auth-assignment.vercel.app/api/v1/users/64b06bc80bb4a2b0d73a8485 (Single GET)
- Route: https://cow-hut-admin-with-auth-assignment.vercel.app/api/v1/users/my-profile (GET)
- Route: https://cow-hut-admin-with-auth-assignment.vercel.app/api/v1/users/64b06bc80bb4a2b0d73a8485 (PATCH)
- Route: https://cow-hut-admin-with-auth-assignment.vercel.app/api/v1/users/64b06bc80bb4a2b0d73a8485 (DELETE)

### Filtering Routes of Books

- Route: https://cow-hut-admin-with-auth-assignment.vercel.app/api/v1/books?genre=sci (This value is also case insensitive.)
- Route: https://cow-hut-admin-with-auth-assignment.vercel.app/api/v1/books?publicationDate=1990
- Route: https://cow-hut-admin-with-auth-assignment.vercel.app/api/v1/books?searchTerm=lee (You can search by title, author, description, genre)

### Books

- Route: https://cow-hut-admin-with-auth-assignment.vercel.app/api/v1/books (GET)
- Route: https://cow-hut-admin-with-auth-assignment.vercel.app/api/v1/books/64b1634fba9a206197aebf92 (Single GET)
- Route: https://cow-hut-admin-with-auth-assignment.vercel.app/api/v1/books/64b1634fba9a206197aebf92 (PATCH)
- Route: https://cow-hut-admin-with-auth-assignment.vercel.app/api/v1/books/64b1634fba9a206197aebf92 (DELETE)

## Bonus

#### Wishlist

- Route: https://cow-hut-admin-with-auth-assignment.vercel.app/api/v1/books/addToWishlist/:64b1634fba9a206197aebf92(POST)
- Route: https://cow-hut-admin-with-auth-assignment.vercel.app/api/v1/books/wishlist (GET)
- Route: https://cow-hut-admin-with-auth-assignment.vercel.app/api/v1/users/removeFromWishlist/64b1634fba9a206197aebf92 (POST)

#### Reading List

- Route: https://cow-hut-admin-with-auth-assignment.vercel.app/api/v1/books/addToReadingList/:64b1634fba9a206197aebf92(POST)
- Route: https://cow-hut-admin-with-auth-assignment.vercel.app/api/v1/books/readingList (GET)
- Route: https://cow-hut-admin-with-auth-assignment.vercel.app/api/v1/users/removeFromReadingList/64b1634fba9a206197aebf92 (POST)

#### Finished Book List

- Route: https://cow-hut-admin-with-auth-assignment.vercel.app/api/v1/books/addToFinishedBook/:64b1634fba9a206197aebf92(POST)
- Route: https://cow-hut-admin-with-auth-assignment.vercel.app/api/v1/books/finishedBooks (GET)
- Route: https://cow-hut-admin-with-auth-assignment.vercel.app/api/v1/users/removeFromFinishedBooks/64b1634fba9a206197aebf92 (POST)
