/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-props-no-spreading */
import {
  List,
  Datagrid,
  ReferenceField,
  ReferenceInput,
  SelectInput,
  NumberInput,
  Show,
  SimpleShowLayout,
  DateTimeInput,
  Edit,
  Create,
  SimpleForm,
  DateField,
  TextField,
  EditButton,
  NumberField,
  useRecordContext,
} from 'react-admin';
import BookIcon from '@mui/icons-material/Book';

export const MatchIcon = BookIcon;

const MatchTitle = () => {
  const record = useRecordContext();
  return (
    <span> Match {record ? `"${record.id}"` : ''}</span>
  );
};

export const MatchList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <ReferenceField label="Home" source="home_team" reference="team">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField label="Away" source="away_team" reference="team">
        <TextField source="name" />
      </ReferenceField>
      <NumberField label="Home score" source="homeGoals" />
      <NumberField label="Away score" source="awayGoals" />
      <DateField label="Date" source="datetime" />
      <TextField label="Stage" source="stage" />
      <TextField label="Group" source="group" />
      <TextField label="Status" source="status" />
      <ReferenceField label="Tournament" source="tournament_id" reference="tournaments">
        <TextField source="name" />
      </ReferenceField>
      <EditButton />
    </Datagrid>
  </List>
);

export const MatchShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <NumberField source="id" />
      <ReferenceField label="Home" source="home_team" reference="team">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField label="Away" source="away_team" reference="team">
        <TextField source="name" />
      </ReferenceField>
      <NumberField label="Home score" source="homeGoals" />
      <NumberField label="Away score" source="awayGoals" />
      <DateField label="Date" source="datetime" />
      <TextField label="Stage" source="stage" />
      <TextField label="Group" source="group" />
      <TextField label="Status" source="status" />
      <ReferenceField label="Tournament" source="tournament_id" reference="tournaments">
        <TextField source="name" />
      </ReferenceField>
    </SimpleShowLayout>
  </Show>
);

export const MatchEdit = (props) => (
  <Edit {...props} title={<MatchTitle />}>
    <SimpleForm>
      <TextField disabled source="id" />
      <ReferenceInput perPage={1000} sort={{field: 'name', order: 'ASC'}} label="Home Team" source="home_team" reference="team">
        <SelectInput source="name" />
      </ReferenceInput>
      <ReferenceInput perPage={1000} sort={{field: 'name', order: 'ASC'}} label="Away Team" source="away_team" reference="team">
        <SelectInput source="name" />
      </ReferenceInput>
      <NumberInput source="homeGoals" />
      <NumberInput source="awayGoals" />
      <DateTimeInput source="datetime" />
      <SelectInput source="stage" choices={[
        { id: '1 тур', name: '1 тур' },
        { id: '2 тур', name: '2 тур' },
        { id: '3 тур', name: '3 тур' },
        { id: '4 тур', name: '4 тур' },
        { id: '5 тур', name: '5 тур' },
        { id: '6 тур', name: '6 тур' },
        { id: '1/8 фіналу', name: '1/8 фіналу' },
        { id: '1/4 фіналу', name: '1/4 фіналу' },
        { id: '1/2 фіналу', name: '1/2 фіналу' },
        { id: 'Матч за 3-тє місце', name: 'Матч за 3-тє місце' },
        { id: 'Фінал', name: 'Фінал' },
      ]} />
      <SelectInput source="group" choices={[
        { id: 'A', name: 'A' },
        { id: 'B', name: 'B' },
        { id: 'C', name: 'C' },
        { id: 'D', name: 'D' },
        { id: 'E', name: 'E' },
        { id: 'F', name: 'F' },
        { id: 'H', name: 'H' },
        { id: 'G', name: 'G' },
      ]} />
      <SelectInput source="status" choices={[
        { id: 'Заплановано', name: 'Заплановано' },
        { id: 'Live', name: 'Live' },
        { id: 'Завершено', name: 'Завершено' },
        { id: 'Скасовано', name: 'Скасовано' },
        { id: 'Перенесено', name: 'Перенесено' },
      ]} />
      <ReferenceInput label="Tournament" source="tournament_id" reference="tournaments">
        <SelectInput source="name" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);

export const MatchCreate = (props) => (
  <Create {...props} title="Create a Matchs">
    <SimpleForm>
      <ReferenceInput perPage={1000} sort={{field: 'name', order: 'ASC'}} label="Home Team" source="home_team" reference="team">
        <SelectInput source="name" />
      </ReferenceInput>
      <ReferenceInput perPage={1000} sort={{field: 'name', order: 'ASC'}} label="Away Team" source="away_team" reference="team">
        <SelectInput source="name" />
      </ReferenceInput>
      <DateTimeInput source="datetime" />
      <SelectInput source="stage" choices={[
        { id: '1 тур', name: '1 тур' },
        { id: '2 тур', name: '2 тур' },
        { id: '3 тур', name: '3 тур' },
        { id: '4 тур', name: '4 тур' },
        { id: '5 тур', name: '5 тур' },
        { id: '6 тур', name: '6 тур' },
        { id: '1/8 фіналу', name: '1/8 фіналу' },
        { id: '1/4 фіналу', name: '1/4 фіналу' },
        { id: '1/2 фіналу', name: '1/2 фіналу' },
        { id: 'Матч за 3-тє місце', name: 'Матч за 3-тє місце' },
        { id: 'Фінал', name: 'Фінал' },
      ]} />
      <SelectInput source="group" choices={[
        { id: 'A', name: 'A' },
        { id: 'B', name: 'B' },
        { id: 'C', name: 'C' },
        { id: 'D', name: 'D' },
        { id: 'E', name: 'E' },
        { id: 'F', name: 'F' },
        { id: 'H', name: 'H' },
        { id: 'G', name: 'G' },
      ]} />
      <ReferenceInput label="Tournament" source="tournament_id" filter={{ archive: false }} reference="tournaments">
        <SelectInput source="name" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);
