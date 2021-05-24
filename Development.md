# [Wes Bos] Advanced React and GraphQL [2021, ENG]

<br/>

## 01 - Introduction and Setup

<br/>

### 01 - Tooling and Starter Files Setup

<br/>

### 02 - The Tech Stack Explained

<br/>

## 02 - Learning Next.js

<br/>

### 03 - An intro to Next

    $ cd app/frontend
    $ yarn install
    $ yarn dev

http://localhost:7777/

<br/>

### 04 - Creating a Page Layout Component

<br/>

    $ yarn add -D babel-eslint

<br/>

### 05 - Creating our Header and Nav Components

<br/>

## 03 - CSS and Styled Components

<br/>

### 06 - An Intro to Styled Components and CSS

<br/>

### 07 - Global Styles, Typography and Layout Styles

<br/>

![Application](/img/pic-03-01.png?raw=true)

<br/>

## 04 - Server Side GraphQL Development

<br/>

### 10 - Setting up MongoDB

<br/>

### 11 - An Intro to GraphQL

<br/>

### 12 - Setting up Keystone and Typescript

<br/>

### 13 - Creating our first User data type

    $ cd backend
    $ docker-compose up
    $ yarn dev

http://localhost:3000/

<br/>

![Application](/img/pic-04-01.png?raw=true)

<br/>

### 14 - Adding Auth to our Application

<br/>

### 15 - Creating our Products Data Type

<br/>

### 16 - Uploading Product Images

cloudinary.com

<br/>

### 16 - Uploading Product Images

<br/>

### 17 - Creating two way data relationships in Keystone

<br/>

### 17 - Creating two way data relationships in Keystone

<br/>

### 18 - Inserting Seed Data

    $ cd backend
    $ yarn seed-data
    $ yarn dev

http://localhost:3000/

<br/>

![Application](/img/pic-04-02.png?raw=true)

<br/>

Need manually update images links.

<br/>

## 05 - Client Side React + GraphQL Development

<br/>

### 19 - Setting up Apollo Client

<br/>

### 20 - Fetching Data with hooks and Displaying it in our Front End

<br/>

![Application](/img/pic-05-01.png?raw=true)

<br/>

### 21 - Fixing and Styling the Nav

<br/>

### 22 - A real good lesson in React Forms and Custom Hooks

<br/>

![Application](/img/pic-05-02.png?raw=true)

<br/>

### 23 - Hooking up our File input and Form Styles

<br/>

![Application](/img/pic-05-03.png?raw=true)

<br/>

### 24 - Creating Products via our Mutations

<br/>

![Application](/img/pic-05-04.png?raw=true)

<br/>

### 25 - Refetching Queries after a Successful Mutation

<br/>

### 26 - Programmatically Changing the Page after product creation

<br/>

### 27 - Displaying Single Items, Routing and SEO

<br/>

![Application](/img/pic-05-05.png?raw=true)

<br/>

## 06 - Working with Mutations

<br/>

### 28 - Updating Items

<br/>

![Application](/img/pic-06-01.png?raw=true)

<br/>

### 29 - Using useEffect to deal with a tricking loading state issue

<br/>

### 30 - Deleting Products

<br/>

### 31 - Evicting Items from the Apollo Cache

<br/>

## 07 - Pagination

<br/>

### 32 - Pagination Links

<br/>

### 33 - Pagination Dynamic Routing

<br/>

### 34 - Adjusting our Query for Pagination Values

<br/>

### 35 - Custom Type Policies and Control over the Apollo Cache

<br/>

![Application](/img/pic-07-01.png?raw=true)

<br/>

## 08 - User Registration + Authentication

<br/>

### 36 - Querying The Current User

<br/>

### 37 - Creating a Sign In Component

<br/>

![Application](/img/pic-08-01.png?raw=true)

<br/>

### 38 - Creating a Sign Out Component

<br/>

### 39 - Creating our Sign Up Flow

<br/>

![Application](/img/pic-08-02.png?raw=true)

<br/>

### 40 - Password Reset - Requesting a Reset

<br/>

![Application](/img/pic-08-03.png?raw=true)

<br/>

### 41 - Password Reset - Setting a new Password

<br/>

### 42 - Password Reset - sending the email

Not Works for me for now! I do not know the reason.

<br/>

```
$ nslookup smtp.ethereal.email
Address: 13.49.22.0
```

Address endings on 0.

<br/>

```
$ telnet smtp.ethereal.email 25
Trying 13.49.22.0...
Connected to smtp.ethereal.email.
Escape character is '^]'.
220 mx.ethereal.email ESMTP Ethereal MX
```

Looks problem on my side.

<br/>

## 09 - Shopping Cart Development

<br/>

### 43 - Cart - Creating the Data Type and Two Way Relationships

Need to manually create some CartItems

<br/>

![Application](/img/pic-09-01.png?raw=true)

<br/>

### 44 - Cart - Displaying Items in a Custom Component

<br/>

![Application](/img/pic-09-02.png?raw=true)

<br/>

### 45 - Cart - Using Recat Context for our Cart State

<br/>

### 46 - Cart - Adding Items to Cart

<br/>

```
mutation{
  addToCart(productId: "60a6ca8acec64c7d493aadf5"){
    id
    quantity
  }
}
```

<br/>

### 47 - Cart - Adding Items To Cart in React

<br/>

### 48 - Cart - Animating the Cart Cart Value

<br/>

### 49 - Cart - Remove From Cart Button

<br/>

### 50 - Cart - Evicting Cart Items from the Cache

<br/>

## 10 - Search

<br/>

### 51 - Search

<br/>

![Application](/img/pic-10-01.png?raw=true)

<br/>

## 11 - Order Creation and Checkout

<br/>

### 52 - Setting Up our Stripe Checkout

stripe.com -> create a new account

<br/>

![Application](/img/pic-11-01.png?raw=true)

<br/>

### 53 - Writing our Client Side Checkout Handler Logic

```
Test Card:
4242 4242 4242 4242
02 22 222 22222
```

<br/>

### 54 - Creating our Order and OrderItem Data Types

<br/>

![Application](/img/pic-11-02.png?raw=true)

<br/>

### 55 - Custom Checkout Mutation with Stripe

<br/>

### 56 - Linking up our Frontend to the custom backend checkout mutation

<br/>

### 57 - Creating our Order and OrderItems in our Mutation

<br/>

### 58 - Finishing up the Checkout UI and Flow

<br/>

![Application](/img/pic-11-03.png?raw=true)

<br/>

## 12 - Frontend Order Displaying

<br/>

### 59 - Displaying a Single Order

<br/>

![Application](/img/pic-12-01.png?raw=true)

<br/><br/>

---

<br/>

**Marley**

Any questions in english: <a href="https://jsdev.org/chat/">Telegram Chat</a>  
Любые вопросы на русском: <a href="https://jsdev.ru/chat/">Телеграм чат</a>
