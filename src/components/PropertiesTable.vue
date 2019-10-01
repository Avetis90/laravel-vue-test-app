<template>

  <div class="panel panel-bordered box">
    <div class="panel-body overflow-fix">

      <v-server-table ref="properties_table" url="/test" :columns="columns"
                      :options="options">
        <span slot="title" slot-scope="props">{{ props.row.title }}</span>
        <span slot="description" slot-scope="props">{{ props.row.description.substring(0,20)  }}</span>
        <span slot="bedroom" slot-scope="props">{{ props.row.bedroom  }}</span>
        <span slot="bathroom" slot-scope="props">{{ props.row.bathroom  }}</span>
        <span slot="type_id" slot-scope="props">{{ props.row.type.text  }}</span>
        <span slot="status_id" slot-scope="props">{{ props.row.status.text  }}</span>
        <span slot="for_sale"
              slot-scope="props">{{ booleanToString(props.row.for_sale)  }}</span>
        <span slot="for_rent"
              slot-scope="props">{{   booleanToString(props.row.for_rent)}}</span>
        <span slot="project_id"
              slot-scope="props">{{ props.row.project.name  }}</span>
        <span slot="region_id"
              slot-scope="props">{{ props.row.country.text+'/'+props.row.country.country.text }}</span>

      </v-server-table>

    </div>
  </div>
</template>

<style scoped>
  .VueTables__date-filter {
    border: 1px solid #ccc;
    padding: 6px;
    border-radius: 4px;
    cursor: pointer;
  }
</style>

<script>
  import Vue from 'vue'
  import {ServerTable, Event} from "vue-tables-2";


  Vue.use(ServerTable);

  export default {
    name: "PropertiesTable",

    props: {
      members: Array,
    },
    data() {
      let columns = ['title', 'description',
        'bedroom', 'bathroom', 'type_id',
        'status_id', 'for_sale', 'for_rent',
        'project_id', 'region_id'];

      return {
        columns: columns,
        options: {
          templates: {},
          params: {
            fields: columns,
          },
          filterByColumn: true,
          listColumns: {
            type_id: [],
            status_id: [],
            region_id: [],
            for_sale: [
              {
                id: 0,
                text: 'No'
              },
              {
                id: 1,
                text: 'Yes'
              }
            ],
            for_rent: [
              {
                id: 0,
                text: 'No'
              },
              {
                id: 1,
                text: 'Yes'
              }
            ],
          },
          perPage: 20,
          pagination: {chunk: 5, dropdown: false},
          filterable: columns,
          headings: {
            title: 'Title',
            description: 'Description',
            bedroom: 'Bedroom',
            bathroom: 'Bathroom',
            type_id: 'Property Type',
            status_id: 'Status',
            for_sale: 'For Sale',
            for_rent: 'For Rent',
            project_id: 'Project',
            region_id: 'Region/Country',
          },
        },
      }
    },
    methods: {
      booleanToString(value) {
        if (!parseInt(value)) {
          return 'No'
        } else {
          return 'Yes'
        }
      },
      getSelectableData() {
        let self = this;

        // getting data for list filters
        axios('/getSelectOptions')
          .then(function (response) {
            self.options.listColumns.type_id = response.data.types;
            self.options.listColumns.status_id = response.data.statuses;
            let countries = new Array();
            response.data.countries.map((item, idx) => {
              countries[idx] = {id: item.id, text: item.text + '/' + item.country.text}
            })
            self.options.listColumns.region_id = countries
          }).catch(function (error) {
          console.log(error)
        })
      }
    },

    template: {},
    mounted() {
      this.getSelectableData()
    }
  }

</script>


