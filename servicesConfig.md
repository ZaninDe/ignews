# Services

## Stripe

After creating your account, crete a product "subscription" with at least name and value.

---

## FaunaDB

After creating the DataBase, it will be necessary to create the Collections e Indexes

### **Collections**

```js
  {
    name: "subscriptions",
    history_days: 30,
    ttl_days: null
  }
  {
    name: "users",
    history_days: 30,
    ttl_days: null
  }
```

### **Indexes**

```js
  {
    name: "subscription_by_id",
    unique: false,
    serialized: true,
    source: "subscriptions",
    terms: [
      {
        field: ["data", "id"]
      }
    ]
  }
  {
    name: "subscription_by_status",
    unique: false,
    serialized: true,
    source: "subscriptions",
    terms: [
      {
        field: ["data", "status"]
      }
    ]
  }
  {
    name: "subscription_by_user_ref",
    unique: false,
    serialized: true,
    source: "subscriptions",
    terms: [
      {
        field: ["data", "userId"]
      }
    ]
  }
  {
    name: "user_by_email",
    unique: true,
    serialized: true,
    source: "users",
    terms: [
      {
        field: ["data", "email"]
      }
    ]
  }
  {
    name: "user_by_stripe_customer_id",
    unique: false,
    serialized: true,
    source: "users",
    terms: [
      {
        field: ["data", "stripe_customer_id"]
      }
    ]
  }
```

---

## Prismic CMS

After creating your repository, go to "Custom Types" page, aadd a new one with the following settings:

Type: Repeatable Type

Name: publication

Fields:

 - UID
 - Title as H1
 - RichText allowing multiple paragraphs and blank for links

On the tab "Documents" it will be able to add the posts.