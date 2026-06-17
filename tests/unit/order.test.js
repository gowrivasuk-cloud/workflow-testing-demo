function getOrderStatus(payment) {
  return payment ? "APPROVED" : "REJECTED";
}

test("Order approved", () => {
  expect(getOrderStatus(true)).toBe("REJECTED");
});