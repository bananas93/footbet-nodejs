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
  ReferenceField,
  SelectInput,
} from 'react-admin';
import BookIcon from '@mui/icons-material/Book';

export const UsersIcon = BookIcon;

const UsersTitle = () => {
  const record = useRecordContext();
  return (
    <span> Users {record ? `"${record.name}"` : ''}</span>
  );
};

export const UsersList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <ReferenceField label="Match" source="matchId" reference="match">
        <ReferenceField label="Home" source="home_team" reference="team">
          <TextField source="name" />
        </ReferenceField>
      </ReferenceField>
      <ReferenceField label="Match" source="matchId" reference="match">
        <ReferenceField label="Away" source="away_team" reference="team">
          <TextField source="name" />
        </ReferenceField>
      </ReferenceField>
      <ReferenceField label="Tournament" source="tournamentId" reference="tournaments">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="homeBet" />
      <TextField source="awayBet" />
      <ReferenceField label="User" source="userId" reference="users">
        <TextField source="name" />
      </ReferenceField>
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
      <EditButton/>
    </Datagrid>
  </List>
);

export const UsersShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <ReferenceField label="Match" source="matchId" reference="match">
        <ReferenceField label="Home" source="home_team" reference="team">
          <TextField source="name" />
        </ReferenceField>
      </ReferenceField>
      <ReferenceField label="Match" source="matchId" reference="match">
        <ReferenceField label="Away" source="away_team" reference="team">
          <TextField source="name" />
        </ReferenceField>
      </ReferenceField>
      <ReferenceField label="Tournament" source="tournamentId" reference="tournaments">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="homeBet" />
      <TextField source="awayBet" />
      <ReferenceField label="User" source="userId" reference="users">
        <TextField source="name" />
      </ReferenceField>
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
    </SimpleShowLayout>
  </Show>
);

export const UsersEdit = (props) => (
  <Edit {...props} title={<UsersTitle />}>
    <SimpleForm>
      <NumberInput disabled source="id" />
      <ReferenceField label="Match" source="matchId" reference="match">
        <ReferenceField label="Home" source="home_team" reference="team">
          <SelectInput source="name" />
        </ReferenceField>
      </ReferenceField>
      <ReferenceField label="Match" source="matchId" reference="match">
        <ReferenceField label="Away" source="away_team" reference="team">
          <SelectInput source="name" />
        </ReferenceField>
      </ReferenceField>
      <ReferenceField label="Tournament" source="tournamentId" reference="tournaments">
        <SelectInput source="name" />
      </ReferenceField>
      <NumberInput source="homeBet" />
      <NumberInput source="awayBet" />
    </SimpleForm>
  </Edit>
);

export const UsersCreate = (props) => (
  <Create {...props} title="Create a Users">
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
