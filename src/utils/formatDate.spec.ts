import { formatDate } from "./formatDate";

describe("{formatDate}", () => {
  describe("when locale in en-US", () => {
    it("formats the date to english", () => {
      const mockDate = new Date("2022-07-31T01:33:29.567Z");
      const result = formatDate(mockDate, "en-US");

      expect(result).toBe("Jul 30, 2022");
    });
  });

  describe("when locale in pt-BR", () => {
    it("formats the date to portuguese", () => {
      const mockDate = new Date("2022-07-31T01:33:29.567Z");
      const result = formatDate(mockDate, "pt-BR");

      expect(result).toBe("30 de jul. de 2022");
    });
  });
});
