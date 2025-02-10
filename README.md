<div align='center'>
  <h1 style="color: #ff5757;">DUKA BORA</h1>
  <p>Duka Bora is a modern e-commerce platform built with ReactJS, TailwindCSS, and Clerk authentication. It offers features like product browsing, cart management, admin dashboard, and personalized user experiences.</>
  <img src="https://github.com/Iganza-roy/DukaBora/blob/main/src/assets/cover_image.png"style="border-radius: 10px; box-shadow: 0 5px 20px rgba(43, 0, 56, 0.559);"/>
</div>

<a id="readme-top"></a>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#project-overview">Project Overview</a></li>
    <li><a href="#setup">Setup Instructions</a></li>
    <li><a href="#dependancies">Dependancy Installation</a></li>
    <li><a href="#running-the-project">Running the Project</a></li>
    <li><a href="#project-structure">Project Structure</a></li>
    <li><a href="#admin-details">Admin Account Details</a></li>
    <li><a href="#contributing">Contrubuting</a></li>
    <li><a href="#liscence">Liscence</a></li>
    <li><a href="#contact">Contact</a></li>

  </ol>
</details>

<!--PROJECT OVERVIEW-->

## Project Overview

Duka Bora is designed to provide seamless online shopping with features like:

- **Public Access**: Home, Products, Product Details, About, and Support pages.
- **Authenticated User Features**: Cart, Wishlist, and Profile management.
- **Admin Features**: Admin Dashboard for monitoring platform activities.

The admin section is protected with role-based authentication using Clerk.

<!--SETUP-->

## Setup Instructions

To set up the project locally, follow these steps:

#### 1. Clone the repository

```bash
git clone <https://github.com/Iganza-roy/DukaBora>
cd duka-bora
```

#### 2.Set Up Environment Variables:

```plaintext
REACT_APP_BASE_URL=https://fakestoreapi.com/products
REACT_APP_PEXELS_API_KEY=MT6U56AKkZg0NEAZYXckXFxpeizoZ63x3JCTJLfS8HUFFnCBGqmPJiew
REACT_APP_PEXELS_API_URL=https://api.pexels.com/v1/search
```

#### 3.Restart the development server

After creating the .env file, restart your server to apply the changes.

<!--DEPENDANCIES-->

## Dependency Installation

#### 1.Install Node.js:

Ensure Node.js is installed on your machine. You can download it [here](https://nodejs.org/)

#### 2.Install Dependencies:

Run the following command to install all required dependencies:

```bash
npm install
```

<!--RUNNING THE PROJECT-->

## Running the project

To run the project locally, use:

```bash
npm start
```

This will start the development server, and you can access the project at `http://localhost:3000`.

<!--PROJECT STRUCTURE-->

## Project Structure

Below is the structure of the project:

```graphql
src
├── components            # Reusable React components
├── pages                 # All page components (e.g., Home, Products, etc.)
├── context               # Context API files for managing global state
├── utils                 # Utility files (e.g., API calls)
├── assets                # Images and static assets
├── App.jsx               # Main application entry
├── index.js              # Renders React app to the DOM
└── styles                # TailwindCSS configuration and custom styles
```

[![React][React.js]][React-url]

- **Frontend:** Built with React, using Vite as the bundler.

<!--ADMIN DETAILS-->

## Admin Account Details

#### Accessing the Admin Dashboard

The admin dashboard is accessible via the `/admin/dashboard` route. This route is protected and requires admin credentials to access.

### Admin Login Credentials

Use the following credentials to log in as an admin:

- **Email**: mccoy6247@gmail.com
- **Password**: admin@duka

Once logged in, you'll be redirected to the admin dashboard, where you can monitor and manage platform activities.

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Top contributors:

<img src='https://avatars.githubusercontent.com/u/132392673?v=4' style='width: 40px; border-radius: 100%; '/>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<!-- CONTACT -->

## Contact

- Roy Kibata - [@Iganzaroy](https://twitter.com/IganzaRoy) - iganzaroy55@gmail.com

Project Link: [https://github.com/Iganza-roy/DukaBora](https://github.com/Iganza-roy/DukaBora)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
