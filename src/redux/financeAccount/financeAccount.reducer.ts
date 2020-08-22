interface FinanceAccountProps {
  data: {
    name: string;
    description: string;
    type: string;
    last_modified: string;
    created_at: string;
    deleted_at: string | null;
  }[];
}

const INIT_STATE: FinanceAccountProps = {
  data: [
    {
      name: "Sarapan Expense",
      description: "biaya buat sarapan",
      type: "expense",
      last_modified: "2020-05-20 07:00:05",
      created_at: "2020-05-20 06:50:05",
      deleted_at: null,
    },
    {
      name: "Sarapan Expense",
      description: "biaya buat sarapan",
      type: "expense",
      last_modified: "2020-05-20 07:00:05",
      created_at: "2020-05-20 06:50:05",
      deleted_at: null,
    },
  ],
};

const financeAccountReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default financeAccountReducer;
