# Foo rum

```
App.jsx
    Navigation
    -- Feed page
        -- Renders: Post, ChatInput component
    -- Account Page
        -- Renders: Account Component which handles signup/login

```
## Feed Page
to render feed, and create Post

 -- Components
 ChatInput - to create new posts
 Posts: an post item to render post


## Account Page
to show login/sign screen

-- Component
   Account - as we will use this same component to render on modal so making it a seperate component to use in modal as well as in page

## Utils
data.ts -- for dummy post data

## Context
to store login/sign up details, show login modal

## hooks
useWithAuth - it checks if user is logged in or not, if logged in it allows function to execute else shows login/signup modal
