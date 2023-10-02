/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-props-no-spreading */
import {
  List,
  Datagrid,
  Show,
  SimpleShowLayout,
  Edit,
  Create,
  SimpleForm,
  DateField,
  TextField,
  EditButton,
  TextInput,
  useRecordContext,
  FilterLiveSearch,
  SelectInput,
} from 'react-admin';
import BookIcon from '@mui/icons-material/Book';

export const TeamIcon = BookIcon;

const TeamTitle = () => {
  const record = useRecordContext();
  return (
    <span> Team {record ? `"${record.name}"` : ''}</span>
  );
};

export const TeamList = (props) => (
  <List {...props}>
    <FilterLiveSearch source="name" />
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="type" />
      <DateField source="createdAt" />
      <TextField source="updatedAt" />
      <EditButton />
    </Datagrid>
  </List>
);

export const TeamShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="type" />
    </SimpleShowLayout>
  </Show>
);

export const TeamEdit = (props) => (
  <Edit {...props} title={<TeamTitle />}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="name" />
      <TextInput source="type" />
    </SimpleForm>
  </Edit>
);

export const TeamCreate = (props) => (
  <Create {...props} title="Create a Team">
    <SimpleForm>
      <TextInput source="name" />
      <SelectInput source="type" choices={[
        { id: 'Клуб', name: 'Клуб' },
        { id: 'Збірна', name: 'Збірна' },
      ]} />
    </SimpleForm>
  </Create>
);
