<template>
  <b-container>
    <div>
      <b-card-group deck class="mb-4 mt-5">
        <b-card
          title="Title"
          img-src="https://picsum.photos/300/300/?image=41"
          img-alt="Image"
          img-top
        >
          <b-card-text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </b-card-text>
          <b-row align-v="end">
            <b-col>
              <b-button href="#" variant="primary">Read More</b-button>
            </b-col>
          </b-row>
          <template #footer>
            <b-row>
              <b-col>
                <small class="text-muted">
                  <b-icon-person></b-icon-person> User
                </small>
              </b-col>
              <b-col>
                <small class="text-muted">
                  <b-icon-calendar-3></b-icon-calendar-3> Nov 13, 2022
                </small>
              </b-col>
            </b-row>
          </template>
        </b-card>

        <b-card
          title="Title"
          img-src="https://picsum.photos/300/300/?image=41"
          img-alt="Image"
          img-top
        >
          <b-card-text>
            This card has supporting text below as a natural lead-in to
            additional content.
          </b-card-text>
          <b-row align-v="end">
            <b-col>
              <b-button href="#" variant="primary">Read More</b-button>
            </b-col>
          </b-row>
          <template #footer>
            <b-row>
              <b-col>
                <small class="text-muted">
                  <b-icon-person></b-icon-person> User
                </small>
              </b-col>
              <b-col>
                <small class="text-muted">
                  <b-icon-calendar-3></b-icon-calendar-3> Nov 13, 2022
                </small>
              </b-col>
            </b-row>
          </template>
        </b-card>

        <b-card
          title="Title"
          img-src="https://picsum.photos/300/300/?image=41"
          img-alt="Image"
          img-top
        >
          <b-card-text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </b-card-text>
          <b-row align-v="end">
            <b-col>
              <b-button href="#" variant="primary">Read More</b-button>
            </b-col>
          </b-row>
          <template #footer>
            <b-row>
              <b-col>
                <small class="text-muted">
                  <b-icon-person></b-icon-person> User
                </small>
              </b-col>
              <b-col>
                <small class="text-muted">
                  <b-icon-calendar-3></b-icon-calendar-3> Nov 13, 2022
                </small>
              </b-col>
            </b-row>
          </template>
        </b-card>
      </b-card-group>
    </div>
  </b-container>
</template>

<script>
import { BIcon, BIconCalendar3, BIconPerson } from 'bootstrap-vue'

export default {
  components: {
    BIcon,
    BIconCalendar3,
    BIconPerson,
  },
}
</script>
