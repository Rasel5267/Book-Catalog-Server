# Book-Catalog

## Live URL:

## Frontend Github Repository Link: https://github.com/Rasel5267/Book-Catalog

## Backend Github Repository Link: https://github.com/Rasel5267/Book-Catalog-Server

## Application Routes:

### Auth (User)

- Route: https://cow-hut-admin-with-auth-assignment.vercel.app/api/v1/auth/login (POST)
- Route: https://cow-hut-admin-with-auth-assignment.vercel.app/api/v1/auth/signup (POST)
- Route: https://cow-hut-admin-with-auth-assignment.vercel.app/api/v1/auth/refresh-token (POST)

### User

- Route: https://cow-hut-admin-with-auth-assignment.vercel.app/api/v1/users (GET)
- Route: https://cow-hut-admin-with-auth-assignment.vercel.app/api/v1/users/64974500af15eb02bfe87e85 (Single GET)
- Route: https://cow-hut-admin-with-auth-assignment.vercel.app/api/v1/users/my-profile (GET)
- Route: https://cow-hut-admin-with-auth-assignment.vercel.app/api/v1/users/64974500af15eb02bfe87e85 (PATCH)
- Route: https://cow-hut-admin-with-auth-assignment.vercel.app/api/v1/users/64974500af15eb02bfe87e85 (DELETE)

### Pagination and Filtering Routes of Books

- Route: https://cow-hut-admin-with-auth-assignment.vercel.app/api/v1/books?page=1&limit=10
- Route: https://cow-hut-admin-with-auth-assignment.vercel.app/api/v1/books?sortBy=price&sortOrder=asc
- Route: https://cow-hut-admin-with-auth-assignment.vercel.app/api/v1/books?minPrice=20000&maxPrice=70000
- Route: https://cow-hut-admin-with-auth-assignment.vercel.app/api/v1/books?location=Dhaka (This value is also case insensitive. You can use dhaka to filter)
- Route: https://cow-hut-admin-with-auth-assignment.vercel.app/api/v1/books?searchTerm=dh
