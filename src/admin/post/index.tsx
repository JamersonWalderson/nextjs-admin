import { Create, Datagrid, Edit, List, ReferenceField, SimpleForm, TextField, TextInput } from 'react-admin';

export const PostList = () => (
    <List>
        <Datagrid rowClick="edit">
            <ReferenceField source="userId" reference="users" />
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="body" />
        </Datagrid>
    </List>
);

export const PostCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="id" disabled />
            <TextInput source="title" />
            <TextInput source="body" />
        </SimpleForm>
    </Create>
);

export const PostEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" disabled />
            <TextInput source="title" />
            <TextInput source="body" />
        </SimpleForm>
    </Edit>
);