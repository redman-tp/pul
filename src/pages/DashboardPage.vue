<template>
  <div class="q-pa-md sub">
    <div
      v-if="message"
      class="text-h5 q-pa-sm q-my-lg text-white text-center bg-green"
    >
      {{ message }} <q-btn to="login" class="no_acc">Login</q-btn>
    </div>

    <q-table
      title="Submissions"
      :rows="rows"
      :hide-header="mode === 'grid'"
      :columns="columns"
      row-key="id"
      :grid="mode == 'grid'"
      :filter="filter"
      :loading="loading"
      selection="multiple"
      v-model:selected="selected"
      v-model:pagination="pagination"
      @request="onRequest"
    >
      <template v-slot:top-right="props">
        <div class="entries">
          <div class="data row justify-between">
            <span>Total Entries:</span>
            <span class="text-weight-bold">{{ dataUsers.length }}</span>
          </div>

          <p class="hidden q-pa-md bg-black text-white">st: {{ getSt }}</p>
          <div class="data row justify-between">
            <span> Females:</span>
            <span class="text-weight-bold">{{ femaleStats }}</span>
          </div>
          <div class="data row justify-between">
            <span> Males:</span>
            <span class="text-weight-bold">{{ maleStats }}</span>
          </div>
          <div class="data row justify-between">
            <span>Others:</span>
            <span class="text-weight-bold">{{ others }}</span>
          </div>
        </div>
        <q-input
          outlined
          dense
          debounce="300"
          v-model="filter"
          placeholder="Search"
          class="q-ml-md"
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>

        <q-btn
          flat
          round
          dense
          :icon="props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'"
          @click="props.toggleFullscreen"
          v-if="mode === 'list'"
        >
          <q-tooltip :disable="$q.platform.is.mobile">
            {{ props.inFullscreen ? "Exit Fullscreen" : "Toggle Fullscreen" }}
          </q-tooltip>
        </q-btn>

        <q-btn
          flat
          round
          dense
          :icon="mode === 'grid' ? 'list' : 'grid_on'"
          @click="
            mode = mode === 'grid' ? 'list' : 'grid';
            separator = mode === 'grid' ? 'none' : 'horizontal';
          "
          v-if="!props.inFullscreen"
        >
          <q-tooltip :disable="$q.platform.is.mobile">{{
            mode === "grid" ? "List" : "Grid"
          }}</q-tooltip>
        </q-btn>

        <q-btn
          color="primary"
          icon-right="archive"
          label="Export to csv"
          no-caps
          padding="xs"
          v-if="rows.length"
          @click="exportTable"
        />
      </template>

      <template v-slot:body-cell-actions="props">
        <q-td :props="props">
          <div>
            <q-btn
              round
              dense
              color="negative"
              size="sm"
              icon="delete"
              @click="deleteUser(props.row.id)"
            >
              <q-tooltip>Delete {{ props.row.name }}</q-tooltip>
            </q-btn>
          </div>
        </q-td>
      </template>

      <template v-slot:pagination="scope">
        <!-- {{ scope }} -->
        <q-btn
          v-if="scope.pagesNumber > 2"
          icon="first_page"
          color="grey-8"
          round
          dense
          flat
          :disable="scope.isFirstPage"
          @click="scope.firstPage"
        />

        <q-btn
          icon="chevron_left"
          color="grey-8"
          round
          dense
          flat
          :disable="scope.isFirstPage"
          @click="scope.prevPage"
        />

        <q-btn
          icon="chevron_right"
          color="grey-8"
          round
          dense
          flat
          :disable="scope.isLastPage"
          @click="scope.nextPage"
        />

        <q-btn
          v-if="scope.pagesNumber > 2"
          icon="last_page"
          color="grey-8"
          round
          dense
          flat
          :disable="scope.isLastPage"
          @click="scope.lastPage"
        />
      </template>

      <template v-slot:no-data="{ icon, message, filter }">
        <div class="full-width row flex-center text-negative q-gutter-sm">
          <q-icon size="2em" name="sentiment_dissatisfied" />
          <span> Well this is sad... {{ message }} </span>
          <q-icon size="2em" :name="filter ? 'filter_b_and_w' : icon" />
        </div>
      </template>

      <template v-slot:bottom v-if="selected.length">
        <q-btn
          @click="deletemultiple"
          :loading="loaders.delete"
          color="negative"
          :label="`Delete Users`"
          padding="sm"
          class="q-mr-xs"
        />
      </template>
    </q-table>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { exportFile, useMeta } from "quasar";
const columns = [
  {
    name: "id",
    required: true,
    label: "ID",
    align: "left",
    field: "id",
    sortable: true,
  },
  {
    name: "email",
    required: true,
    label: "Email",
    align: "left",
    field: "email",
    sortable: true,
  },
  {
    name: "firstname",
    required: true,
    label: "Firstname",
    align: "left",
    field: "firstname",
    sortable: true,
  },
  {
    name: "lastname",
    required: true,
    label: "Lastname",
    align: "left",
    field: "lastname",
    sortable: true,
  },

  {
    name: "gender",
    required: true,
    label: "Gender",
    align: "left",
    field: "gender",
    sortable: true,
  },

  {
    name: "actions",
    required: true,
    label: "Actions",
    align: "left",
    field: (row) => row.id,
    sortable: false,
  },
];
function wrapCsvValue(val, formatFn) {
  let formatted = formatFn !== void 0 ? formatFn(val) : val;
  formatted =
    formatted === void 0 || formatted === null ? "" : String(formatted);
  formatted = formatted.split('"').join('""');
  return `"${formatted}"`;
}
export default {
  setup() {
    useMeta({
      title: "Upload Pages",
    });
  },
  data() {
    const pagination = ref({
      sortBy: "desc",
      descending: false,
      page: 1,
      rowsPerPage: 8,
    });
    return {
      columns,
      message: "",
      selected: [],
      dataUsers: [],
      category: null,
      categories: [],
      rows: [],
      errors: [],
      fruitbay: {},
      image: null,
      page: "",
      pageid: "",
      chapter_id: "",
      content_id: "",
      files: null,
      editstate: false,
      createstate: null,
      testMales: "",
      meta: "",
      pagination,
      filter: "",
      curl: "",
      separator: "",
      mode: "list",
      role: "fruitbay",
      maleStats: "",
      femaleStats: "",
      others: "",
      new_fruitbay: false,
      loading: false,
      create_fruitbay: false,
      loaders: {
        delete: false,
        category: false,
        deleteBtn: [],
        save: [],
      },
    };
  },

  computed: {
    pagesNumber() {
      return Math.ceil(this.rows.length / this.pagination.rowsPerPage);
    },
    getSt() {
      let male = [];
      let female = [];
      let others = [];

      this.dataUsers.map((item) => {
        let keys = Object.values(item);
        keys.find((ele) => {
          if (ele === "male") {
            male.push(ele);
          } else if (ele === "female") {
            female.push(ele);
          } else if (ele === "other") {
            others.push(ele);
          }
        });
        console.log(keys[4]);
        console.log(male.length);
        this.maleStats = male.length;
        this.femaleStats = female.length;
        this.others = others.length;
      });
    },
  },

  mounted() {
    this.onRequest({
      pagination: this.pagination,
      filter: undefined,
    });
  },

  methods: {
    reload() {
      location.reload();
    },
    onRequest(props) {
      this.loading = true;
      const url = `admin/form-data/all`;
      this.curl = url;
      this.$api
        .get(url)
        .then(({ data }) => {
          console.log(data.data);
          this.loading = false;
          this.rows = data.data;
          this.dataUsers = data.data;
        })
        .catch(({ response }) => {
          console.log(response);
          this.message = response.data.message;
          this.loading = false;
          this.rows = [];
        });
    },

    refreshPage() {
      if (this.curl !== "") {
        this.loading = true;
        this.$api
          .get(this.curl)
          .then(({ data }) => {
            this.loading = false;
            this.rows = data.data;
            console.log(data);
          })
          .catch(({ response }) => {
            console.log(response);
            this.message = response.data.message;
            this.loading = false;
            this.rows = [];
          });
      }
    },

    deleteUser(id) {
      this.$helper
        .notify(
          "Are you sure you want to delete this food(s)? This action may be irreversible!",
          "error",
          true,
          "Yes, Delete!"
        )
        .onOk(() => {
          this.$api
            .delete(`admin/users/${id}`)
            .then((response) => {
              console.log(response);

              this.refreshPage();
            })
            .catch((response) => {
              console.log(response);
            });
        });
    },
    deletemultiple(id) {
      const ids =
        (id && typeof id === "string") || typeof id === "number"
          ? [id]
          : this.selected.map((e) => e.id);
      console.log(ids);
      this.$helper
        .notify(
          "Are you sure you want to delete this food(s)? This action may be irreversible!",
          "error",
          true,
          "Yes, Delete!"
        )
        .onOk(() => {
          if (id) this.loaders.deleteBtn[id] = true;
          this.loaders.delete = true;
          this.$api
            .delete("admin/users", { params: { users: ids } })
            .then((response) => {
              console.log(response);
              this.loaders.delete = false;
              if (id) this.loaders.deleteBtn[id] = false;
              this.selected = [];

              this.refreshPage();
            })
            .catch((response) => {
              console.log(response);
              this.loaders.delete = false;
              if (id) this.loaders.deleteBtn[id] = false;
            });
        });
    },

    exportTable() {
      // naive encoding to csv format
      const content = [this.columns.map((col) => wrapCsvValue(col.label))]
        .concat(
          this.rows.map((row) =>
            this.columns
              .map((col) =>
                wrapCsvValue(
                  typeof col.field === "function"
                    ? col.field(row)
                    : row[col.field === void 0 ? col.name : col.field],
                  col.format
                )
              )
              .join(",")
          )
        )
        .join("\r\n");
      const status = exportFile("fruitbay-management.csv", content, "text/csv");
      if (status !== true) {
        this.$q.notify({
          message: "Browser denied file download...",
          color: "negative",
          icon: "warning",
        });
      }
    },
  },
};
</script>

<style scoped>
.error {
  color: red;
}

.entries {
  /* width: 60%; */
  margin: 0 auto;
  display: flex;
  gap: 1rem;
  /* grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); */
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.data {
  background: green;
  color: white;
  padding: 1rem;
  font-size: 1rem;
  margin: 1rem 0;
  text-align: center;
}

.sub {
  margin-top: 6rem;
}

@media (max-width: 1100px) {
  .data {
    padding: 1rem;
    font-size: 1rem;
    gap: 1rem;
  }
}
@media (max-width: 800px) {
  .data {
    font-size: 1.5rem;
    margin-top: 3rem;
  }
}
</style>
