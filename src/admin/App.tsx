import * as React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { CommentList } from "./comment";
import { PostCreate, PostEdit, PostList } from "./post";

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="posts" list={PostList} create={PostCreate} edit={PostEdit} />
    <Resource name="comments" list={CommentList} />
  </Admin>
);

export default App;