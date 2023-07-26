const Todo = {
  name: "todo",
  type: "document",
  title: "Todo",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "slug",
    },
    {
      title: "Status",
      name: "status",
      type: "string",
      options: {
        list: [
          { title: "Pending", value: "pending" },
          { title: "In Progress", value: "in-progress" },
          { title: "Done", value: "done" },
        ],
      },
    },
  ],
};

export default Todo;
