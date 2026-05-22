const books = require('../router/booksdb.js');

describe("Book Review Backend Application Database", function() {
    it("should correctly load database mock entries", function() {
        expect(Object.keys(books).length).toBeGreaterThan(0);
    });

    it("should possess a valid author entry for ISBN 1", function() {
        expect(books[1].author).toBeDefined();
    });
});