test("Workflow Output Snapshot", () => {

  const output = {
    workflow: "Order Workflow",
    status: "SUCCESS"
  };

  expect(output).toMatchSnapshot();

});