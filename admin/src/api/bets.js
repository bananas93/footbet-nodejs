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
  ReferenceInput,
} from 'react-admin';
import BookIcon from '@mui/icons-material/Book';

export const BetsIcon = BookIcon;

const BetsTitle = () => {
  const record = useRecordContext();
  return (
    <span> Bets {record ? `"${record.name}"` : ''}</span>
  );
};

export const BetsList = (props) => (
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

export const BetsShow = (props) => (
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

export const BetsEdit = (props) => (
  <Edit {...props} title={<BetsTitle />}>
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

export const BetsCreate = (props) => (
  <Create {...props} title="Create a Bets">
    <SimpleForm>
      <ReferenceInput label="Match" source="matchId" reference="match">
        <NumberInput source="matchId" />
      </ReferenceInput>
      <ReferenceInput label="Tournament" source="tournamentId" reference="tournaments">
        <SelectInput source="name" />
      </ReferenceInput>
      <ReferenceInput label="User" source="userId" reference="users">
        <SelectInput source="name" />
      </ReferenceInput>
      <NumberInput source="homeBet" />
      <NumberInput source="awayBet" />
    </SimpleForm>
  </Create>
);
