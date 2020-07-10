import faunadb from "faunadb";
export const q = faunadb.query;
export let client = new faunadb.Client({
  secret: process.env.VUE_APP_FAUNA_SECRET
});
