const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
});

test("deterministicPartitionKey String", () => {
    const crypto = require("crypto");
    const event = {
        partitionKey : "coderbyte"
    }
    let res = "coderbyte";
    expect(deterministicPartitionKey(event)).toBe(res);
})

test("deterministicPartitionKey json ", () => {
    const crypto = require("crypto");
    const event = {
        fname : "Hemant",
        lname : "kumar"
    }
    const data = JSON.stringify(event);
    candidate = crypto.createHash("sha3-512").update(data).digest("hex");
    expect(deterministicPartitionKey(event)).toBe(candidate);
})

test("deterministicPartitionKey number ", () => {
    const crypto = require("crypto");
    const event = {
        partitionKey : "23333"
    }
    let res = "23333";
    expect(deterministicPartitionKey(event)).toBe(res);
})
