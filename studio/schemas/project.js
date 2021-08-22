export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
    },
    {
      name: "projectType",
      title: "Project type",
      type: "string",
      options: {
        list: [
          { value: "private", title: "Private" },
          { value: "public", title: "Public" },
          { value: "access", title: "Access only" },
        ],
      },
    },
    {
      name: "description",
      type: "text",
    },
    {
      name: "link",
      type: "url",
    },
    {
      name: "date",
      type: "datetime",
    }
  ],
};
