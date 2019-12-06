describe("my first test", () => {
  let sut; // system under tests

  beforeEach(() => {
    sut = {};
  });

  it("should be true if true", () => {
    sut.a = false;

    sut.b = true;

    expect(sut.a).toBe(false);
  });
});
