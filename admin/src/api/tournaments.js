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
  BooleanInput,
  NumberInput,
} from 'react-admin';
import BookIcon from '@mui/icons-material/Book';

export const TournamentIcon = BookIcon;

const TournamentTitle = () => {
  const record = useRecordContext();
  return (
    <span> Tournament {record ? `"${record.name}"` : ''}</span>
  );
};

export const TournamentList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="slug" />
      <TextField source="groupTours" />
      <TextField source="playoffTours" />
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
      <EditButton />
    </Datagrid>
  </List>
);

export const TournamentShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <TextInput source="slug" />
      <TextInput source="playoffTours" />
      <TextInput source="logo" />
      <TextInput source="archive" />
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
    </SimpleShowLayout>
  </Show>
);

export const TournamentEdit = (props) => (
  <Edit {...props} title={<TournamentTitle />}>
    <SimpleForm>
      <NumberInput disabled source="id" />
      <TextInput source="name" />
      <TextInput source="slug" />
      <NumberInput source="groupTours" />
      <NumberInput source="playoffTours" />
      <TextInput source="logo" />
      <BooleanInput source="archive" />
    </SimpleForm>
  </Edit>
);

export const TournamentCreate = (props) => (
  <Create {...props} title="Create a Tournament">
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="slug" />
      <NumberInput source="groupTours" />
      <NumberInput source="playoffTours" />
      <TextInput source="logo" />
      <BooleanInput source="archive" />
    </SimpleForm>
  </Create>
);
