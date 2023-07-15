# Book-Catalog

## Live URL: https://book-catalog-phi.vercel.app/

### Frontend Github Repository Link: https://github.com/Rasel5267/Book-Catalog

### Backend Github Repository Link: https://github.com/Rasel5267/Book-Catalog-Server

## Application Routes

### Auth (User)

- Route: https://book-catalog-phi.vercel.app/api/v1/auth/login (POST)
- Route: https://book-catalog-phi.vercel.app/api/v1/auth/signup (POST)
- Route: https://book-catalog-phi.vercel.app/api/v1/auth/refresh-token (POST)

### User

- Route: https://book-catalog-phi.vercel.app/api/v1/users (GET)
- Route: https://book-catalog-phi.vercel.app/api/v1/users/64b06bc80bb4a2b0d73a8485 (Single GET)
- Route: https://book-catalog-phi.vercel.app/api/v1/users/my-profile (GET)
- Route: https://book-catalog-phi.vercel.app/api/v1/users/64b06bc80bb4a2b0d73a8485 (PATCH)
- Route: https://book-catalog-phi.vercel.app/api/v1/users/64b06bc80bb4a2b0d73a8485 (DELETE)

### Filtering Routes of Books

- Route: https://book-catalog-phi.vercel.app/api/v1/books?genre=sci (This value is also case insensitive.)
- Route: https://book-catalog-phi.vercel.app/api/v1/books?publicationDate=1990
- Route: https://book-catalog-phi.vercel.app/api/v1/books?searchTerm=lee (You can search by title, author, description, genre)

### Books

- Route: https://book-catalog-phi.vercel.app/api/v1/books/create (POST)
- Route: https://book-catalog-phi.vercel.app/api/v1/books (GET)
- Route: https://book-catalog-phi.vercel.app/api/v1/books/64b2db5de6b56f6058c55d4d (Single GET)
- Route: https://book-catalog-phi.vercel.app/api/v1/books/64b2db5de6b56f6058c55d4d (PATCH)
- Route: https://book-catalog-phi.vercel.app/api/v1/books/64b2db5de6b56f6058c55d4d (DELETE)
- Route: https://book-catalog-phi.vercel.app/api/v1/books/review/64b2db5de6b56f6058c55d4d (POST)

## Bonus

#### Wishlist

- Route: https://book-catalog-phi.vercel.app/api/v1/books/addToWishlist/:64b2db5de6b56f6058c55d4d(POST)
- Route: https://book-catalog-phi.vercel.app/api/v1/books/wishlist (GET)
- Route: https://book-catalog-phi.vercel.app/api/v1/users/removeFromWishlist/64b2db5de6b56f6058c55d4d (POST)

#### Reading List

- Route: https://book-catalog-phi.vercel.app/api/v1/books/addToReadingList/:64b2db5de6b56f6058c55d4d(POST)
- Route: https://book-catalog-phi.vercel.app/api/v1/books/readingList (GET)
- Route: https://book-catalog-phi.vercel.app/api/v1/users/removeFromReadingList/64b2db5de6b56f6058c55d4d (POST)

#### Finished Book List

- Route: https://book-catalog-phi.vercel.app/api/v1/books/addToFinishedBook/:64b2db5de6b56f6058c55d4d(POST)
- Route: https://book-catalog-phi.vercel.app/api/v1/books/finishedBooks (GET)
- Route: https://book-catalog-phi.vercel.app/api/v1/users/removeFromFinishedBooks/64b2db5de6b56f6058c55d4d (POST)
