# Ecommerce-BackEnd
Module 13 | Object-Relational Mapping (ORM) Challenge: E-commerce Back End

1. [Description](#description)
2. [User Story](#user-story)
3. [Acceptance criteria](#acceptance-criteria)
4. [Github Repository](#github-repository)
5. [Getting Started](#getting-started)
6. [Contact me](#contact-me)

## Description

Internet retail, also known as **e-commerce**, is the largest sector of the electronics industry, generating an estimated $29 trillion in 2019. E-commerce platforms like Shopify and WooCommerce provide a suite of services to businesses of all sizes. Due to their prevalence, understanding the fundamental architecture of these platforms will benefit you as a full-stack web developer.

The task is to build the back end for an e-commerce site by modifying starter code. You’ll configure a working Express.js API to use Sequelize to interact with a MySQL database. Because this application won’t be deployed, provide a link to a walkthrough video that demonstrates its functionality and all of the acceptance criteria being met. Submit a link to the video and add it to the readme of your project.

## User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria

```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
THEN I am able to successfully create, update, and delete data in my database
```
## Github Repository
[Demo Video](https://drive.google.com/file/d/1bbyhpic-vKc-DuTVATqRzjomCxgnomcd/view?usp=sharing) </br>
[GitHub Repo](https://github.com/mluron-ArxFjs/Ecommerce-BackEnd)

## Getting Started

You’ll need to use the [MySQL2](https://www.npmjs.com/package/mysql2) and [Sequelize](https://www.npmjs.com/package/sequelize) packages to connect your Express.js API to a MySQL database and the [dotenv](https://www.npmjs.com/package/dotenv) package to use environment variables to store sensitive data.

Use the `schema.sql` file in the `db` folder to create your database with MySQL shell commands. Use environment variables to store sensitive data like your MySQL username, password, and database name. Your database should contain the following four models, including the requirements listed for each model:

- `Category`

  - `id`

    - Integer.

  - `category_name`

    - String.

- `Product`

  - `id`

    - Integer.

  - `product_name`

    - String.

  - `price`

    - Decimal.

  - `stock`

    - Integer.

  - `category_id`

    - Integer.

    - References the `Category` model's `id`.

- `Tag`

  - `id`

    - Integer.

  - `tag_name`

    - String.

- `ProductTag`

  - `id`

    - Integer.

  - `product_id`

    - Integer.

    - References the `Product` model's `id`.

  - `tag_id`

    - Integer.

    - References the `Tag` model's `id`.

### Associations

You'll need to execute association methods on your Sequelize models to create the following relationships between them:

- `Product` belongs to `Category`, and `Category` has many `Product` models, as a category can have multiple products but a product can only belong to one category.

- `Product` belongs to many `Tag` models, and `Tag` belongs to many `Product` models. Allow products to have multiple tags and tags to have many products by using the `ProductTag` through model.

### Fill Out the API Routes to Perform RESTful CRUD Operations

Fill out the unfinished routes in `product-routes.js`, `tag-routes.js`, and `category-routes.js` to perform create, read, update, and delete operations using your Sequelize models.

### Seed the Database

After creating the models and routes, run `npm run seed` to seed data to your database so that you can test your routes.

### Sync Sequelize to the Database on Server Start

Create the code needed in `server.js` to sync the Sequelize models to the MySQL database on server start.

## Contact me

- [GitHub](https://github.com/mluron-ArxFjs)

- ![](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)mluron2@gmail.com
