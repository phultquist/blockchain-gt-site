/*
Welcome to the schema! The schema is the heart of Keystone.

Here we define our 'lists', which will then be used both for the GraphQL
API definition, our database tables, and our Admin UI layout.

Some quick definitions to help out:
A list: A definition of a collection of fields with a name. For the starter
  we have `User`, `Post`, and `Tag` lists.
A field: The individual bits of data on your list, each with its own type.
  you can see some of the lists in what we use below.

*/

// Like the `config` function we use in keystone.ts, we use functions
// for putting in our config so we get useful errors. With typescript,
// we get these even before code runs.
import { list } from '@keystone-6/core';

// We're using some common fields in the starter. Check out https://keystonejs.com/docs/apis/fields#fields-api
// for the full list of fields.
import {
  text,
  relationship,
  password,
  timestamp,
  select,
  checkbox
} from '@keystone-6/core/fields';
// The document field is a more complicated field, so it's in its own package
// Keystone aims to have all the base field types, but you can make your own
// custom ones.
import { document } from '@keystone-6/fields-document';

// We have a users list, a blogs list, and tags for blog posts, so they can be filtered.
// Each property on the exported object will become the name of a list (a.k.a. the `listKey`),
// with the value being the definition of the list, including the fields.
export const lists = {
  // Here we define the user list.
  User: list({
    // Here are the fields that `User` will have. We want an email and password so they can log in
    // a name so we can refer to them, and a way to connect users to posts.
    fields: {
      name: text({ validation: { isRequired: true } }),
      email: text({
        validation: { isRequired: true },
        isIndexed: 'unique',
        isFilterable: true,
      }),
      // The password field takes care of hiding details and hashing values
      password: password({ validation: { isRequired: true } }),
    },
    // Here we can configure the Admin UI. We want to show a user's name and posts in the Admin UI
    ui: {
      listView: {
        initialColumns: ['name'],
      },
    },
  }),
  // Our second list is the Posts list. We've got a few more fields here
  // so we have all the info we need for displaying posts.
  Event: list({
    fields: {
      title: text({
        defaultValue: 'New Event',
        validation: {
          isRequired: true,
          length: { min: 3, max: 64 },          
        }
      }),
      description: text({
        defaultValue: 'Lorem ipsum dolor',
        validation: {
          isRequired: true,
        }
      }),
      date: timestamp({
        defaultValue: {kind: 'now'},
        validation: {
          isRequired: true,
        }
      }),
      content: document({
        formatting: true,
        layouts: [
          [1, 1],
          [1, 1, 1],
          [2, 1],
          [1, 2],
          [1, 2, 1],
        ],
        links: true,
        dividers: true,
      }),
      tags: relationship({
        ref: 'Tag.events',
        ui: {
          displayMode: 'cards',
          cardFields: ['name'],
          inlineEdit: { fields: ['name'] },
          linkToItem: true,
          inlineConnect: true,
          inlineCreate: { fields: ['name'] },
        },
        many: true,
      }),
      state: select({
        options: [
          { label: 'Published', value: 'active' },
          { label: 'Private', value: 'inactive' },
        ],
        defaultValue: 'inactive',
        ui: {
          displayMode: 'segmented-control',
        }
      }),
    }
  }),
  // Our final list is the tag list. This field is just a name and a relationship to posts
  Tag: list({
    ui: {
      isHidden: true,
    },
    fields: {
      name: text(),
      events: relationship({ ref: 'Event.tags', many: true }),
    },
  }),
};
