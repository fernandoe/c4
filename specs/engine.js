describe("#run", function() {
  it("returns the greatest value", function() {
    expect(engine.run(10, 4)).toBe(10);
  });
  it("returns the value if they are equal", function() {
    expect(engine.run(4, 4)).toBe(4);
  });
});

